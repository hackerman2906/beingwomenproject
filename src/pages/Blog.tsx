import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Navratri Outfit Ideas for 2025",
      excerpt: "Discover the perfect blend of traditional and contemporary styles for this year's Navratri celebrations. From classic chaniya cholis to modern lehenga sets.",
      image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Navratri Special",
      link: "/shop/navratri"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Choosing Your Wedding Saree",
      excerpt: "Everything you need to know about selecting the perfect wedding saree, from fabrics and embellishments to regional styles and modern trends.",
      image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Wedding Collection",
      link: "/shop/wedding"
    },
    {
      id: 3,
      title: "Modern Ethnic Fusion: Styling Tips for Festive Wear",
      excerpt: "Learn how to style your traditional outfits with a contemporary twist. Perfect for festivals, celebrations, and special occasions.",
      image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Style Guide",
      link: "/shop/fusion"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Post */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${blogPosts[0].image})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="relative h-full flex items-end p-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mb-4">
              {blogPosts[0].category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              {blogPosts[0].title}
            </h1>
            <p className="text-white/80 mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-white/60 mb-6">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPosts[0].date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blogPosts[0].readTime}
              </span>
            </div>
            <Link
              to={blogPosts[0].link}
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Shop the Look
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-3">
              {post.category}
            </span>
            <h2 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </span>
              </div>
              <Link 
                to={post.link}
                className="text-primary hover:text-primary/80 flex items-center gap-1"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;