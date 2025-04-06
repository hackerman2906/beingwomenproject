import React from 'react';
import { Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const SizeGuide = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl mb-4">Size Guide</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find your perfect fit with our comprehensive size guide. All measurements are in inches.
        </p>
      </div>

      {/* Size Charts */}
      <div className="space-y-12">
        {/* Lehengas & Chaniya Choli */}
        <section>
          <h2 className="font-display text-2xl mb-6 flex items-center">
            <Ruler className="h-6 w-6 mr-2 text-primary" />
            Lehengas & Chaniya Choli
          </h2>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2">Size</th>
                  <th className="text-left py-2">Bust</th>
                  <th className="text-left py-2">Waist</th>
                  <th className="text-left py-2">Hip</th>
                  <th className="text-left py-2">Length</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3">XS</td>
                  <td>32</td>
                  <td>26</td>
                  <td>35</td>
                  <td>38</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">S</td>
                  <td>34</td>
                  <td>28</td>
                  <td>37</td>
                  <td>39</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">M</td>
                  <td>36</td>
                  <td>30</td>
                  <td>39</td>
                  <td>40</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">L</td>
                  <td>38</td>
                  <td>32</td>
                  <td>41</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td className="py-3">XL</td>
                  <td>40</td>
                  <td>34</td>
                  <td>43</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Kurtis & Indo-Western */}
        <section>
          <h2 className="font-display text-2xl mb-6 flex items-center">
            <Ruler className="h-6 w-6 mr-2 text-primary" />
            Kurtis & Indo-Western
          </h2>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2">Size</th>
                  <th className="text-left py-2">Bust</th>
                  <th className="text-left py-2">Waist</th>
                  <th className="text-left py-2">Hip</th>
                  <th className="text-left py-2">Length</th>
                  <th className="text-left py-2">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3">XS</td>
                  <td>32</td>
                  <td>26</td>
                  <td>35</td>
                  <td>36</td>
                  <td>12</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">S</td>
                  <td>34</td>
                  <td>28</td>
                  <td>37</td>
                  <td>37</td>
                  <td>12</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">M</td>
                  <td>36</td>
                  <td>30</td>
                  <td>39</td>
                  <td>38</td>
                  <td>13</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3">L</td>
                  <td>38</td>
                  <td>32</td>
                  <td>41</td>
                  <td>39</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td className="py-3">XL</td>
                  <td>40</td>
                  <td>34</td>
                  <td>43</td>
                  <td>40</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Measure */}
        <section>
          <h2 className="font-display text-2xl mb-6">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Bust</h3>
              <p className="text-muted-foreground">
                Measure around the fullest part of your bust, keeping the measuring tape parallel to the ground.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Waist</h3>
              <p className="text-muted-foreground">
                Measure around your natural waistline, keeping the tape comfortably loose.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Hip</h3>
              <p className="text-muted-foreground">
                Measure around the fullest part of your hips, usually about 8 inches below your waist.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Length</h3>
              <p className="text-muted-foreground">
                Measure from your shoulder to where you want the garment to end.
              </p>
            </div>
          </div>
        </section>

        {/* Custom Sizing */}
        <div className="bg-primary/5 p-8 rounded-lg text-center">
          <h2 className="font-display text-2xl mb-4">Need Custom Sizing?</h2>
          <p className="text-muted-foreground mb-6">
            We offer custom sizing services to ensure your outfit fits perfectly. Contact our team for more information.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            Contact Us About Custom Sizing →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;