/*
  # Create products and related tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (integer, in paise)
      - `images` (text array)
      - `category` (text)
      - `fabric` (text)
      - `occasion` (text)
      - `sizes` (text array)
      - `colors` (text array)
      - `stock` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policies for public read access
    - Add policies for admin write access
*/

CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price integer NOT NULL,
  images text[] NOT NULL,
  category text NOT NULL,
  fabric text NOT NULL,
  occasion text NOT NULL,
  sizes text[] NOT NULL,
  colors text[] NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  USING (true);

-- Allow admin write access
CREATE POLICY "Products are editable by admins only"
  ON products
  FOR ALL
  USING (auth.role() = 'authenticated' AND auth.email() IN (SELECT email FROM auth.users WHERE email LIKE '%@beingwomen.com'))
  WITH CHECK (auth.role() = 'authenticated' AND auth.email() IN (SELECT email FROM auth.users WHERE email LIKE '%@beingwomen.com'));

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE
  ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();