import React from 'react';
import './services.css'; // You can create this for scoped styling

const packages = [
  {
    tier: 'Starter Plan',
    price: '₹4,999',
    color: 'green',
    perfectFor: 'Food stalls, new cafes, or budget-conscious businesses',
    includes: [
      '1 Micro/Nano Influencer (2K–10K followers)',
      '1 Reel + 1 Story',
      'Focused on local audience',
      'Basic hashtag & location tagging',
      'Photo content reused for cafe’s page',
      'Basic campaign report (reach, views)',
    ],
    goal: 'Brand visibility + social proof',
  },
  {
    tier: 'Growth Plan',
    price: '₹8,999',
    color: 'blue',
    perfectFor: 'Mid-sized cafes or brands looking to boost footfall',
    includes: [
      '1 Reel + 2 Stories each',
      'Creative food & ambience shots',
      'Strategy planning session',
      'Optional: Giveaway or discount campaign',
      'Analytics report',
    ],
    goal: 'Engagement + customer walk-ins',
  },
  {
    tier: 'Premium Buzz Plan',
    price: '₹19,999',
    color: 'red',
    perfectFor: 'Cafes launching a new outlet/menu or hosting events',
    includes: [
      'Reels, Stories, Carousel Posts',
      'UGC creation for your Instagram',
      'Influencer-coordinated giveaway',
      'Story mentions for 3 days',
      'Custom campaign strategy',
      'Full performance report & feedback',
    ],
    goal: 'Maximum reach + brand building',
  },
];

const addons = [
  { item: '📸 Professional Photography Session', price: '₹1,999' },
  { item: '🎥 Reels Editing (Branded)', price: '₹999 per video' },
  { item: '🎁 Influencer Food Hamper Coordination', price: '₹500' },
  { item: '📝 Monthly Content Calendar', price: '₹2,499' },
];

const Services = () => {
  return (
    <section className="services-section">
      <h1 className="section-title">
        <span className="highlight">Services</span>
      </h1>

      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className={`package-card ${pkg.color}`} key={index}>
            <h2>{pkg.tier}</h2>
            <p className="price">{pkg.price}</p>
            <p className="perfect-for">Perfect for: {pkg.perfectFor}</p>
            <ul className="includes">
              {pkg.includes.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="goal">🎯 <strong>Goal:</strong> {pkg.goal}</p>
          </div>
        ))}
      </div>

      <div className="addons-section">
        <h2>Add-On Services</h2>
        <ul className="addons-list">
          {addons.map((add, idx) => (
            <li key={idx}>{add.item} – <strong>{add.price}</strong></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
