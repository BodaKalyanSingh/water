import React, { useState } from 'react';
import './Brands.css';

const brands = [
  {
    name: 'Kent RO',
    logo: '💧',
    color: '#0d47a1',
    bg: '#e3f2fd',
    tagline: 'Multiple Purification Technologies',
    categories: ['RO', 'UV', 'UF'],
    desc: 'India\'s #1 water purifier brand with patented Mineral RO technology that purifies water while retaining essential minerals.',
    features: ['Mineral RO Technology', 'Zero Water Wastage', 'Double Purification', 'Auto TDS Controller'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Aquaguard',
    logo: '🔵',
    color: '#006064',
    bg: '#e0f7fa',
    tagline: 'Science Behind Safe Water',
    categories: ['RO', 'UV'],
    desc: 'Eureka Forbes\' flagship brand pioneering water purification in India for over 40 years with cutting-edge technology.',
    features: ['Active Copper Technology', 'Biotron Technology', 'e-boiling+', 'Taste Adjuster'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Pureit',
    logo: '💦',
    color: '#1565c0',
    bg: '#e8f4fd',
    tagline: 'Surakshit Pani, Swasth Parivar',
    categories: ['RO', 'UV', 'Gravity'],
    desc: 'Hindustan Unilever\'s trusted purification system with advanced Composite Electric Protector for safe, pure water.',
    features: ['Advanced Alert System', 'Auto-shut Safety', 'Foam Guard', 'UV Backup'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Livpure',
    logo: '🌊',
    color: '#00796b',
    bg: '#e8f5e9',
    tagline: 'Purity. Performance. Peace of Mind.',
    categories: ['RO', 'UV'],
    desc: 'Smart water purifiers with advanced RO membrane technology and intelligent purification for modern households.',
    features: ['7-Stage Purification', 'Smart LED Alerts', 'High Recovery Rate', 'Quick Change Filters'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'A.O. Smith',
    logo: '⚡',
    color: '#bf360c',
    bg: '#fbe9e7',
    tagline: 'Water Technology That Works',
    categories: ['RO', 'UV'],
    desc: 'Premium American water technology brand known for high-efficiency filtration and sleek modern designs.',
    features: ['SCMT Technology', 'Side Stream RO', '8 Stage Purification', 'Smart Power Mode'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Blue Star',
    logo: '❄️',
    color: '#283593',
    bg: '#e8eaf6',
    tagline: 'Cool Water Technology',
    categories: ['RO', 'UV', 'UF'],
    desc: 'Renowned for cooling solutions, Blue Star brings the same reliability to water purification with advanced multi-stage systems.',
    features: ['Stainless Steel Tank', 'RO + UV + UF', 'Hot & Cold Option', 'Aqua Taste Booster'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Aqua Fresh',
    logo: '💧',
    color: '#0077b6',
    bg: '#e0f7fa',
    tagline: 'Freshness in Every Drop',
    categories: ['RO', 'UV'],
    desc: 'Affordable purification solutions designed for everyday use with reliable performance.',
    features: ['Compact Design', 'Energy Efficient', 'Easy Filter Change'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Aqua Pearl',
    logo: '🧼',
    color: '#006064',
    bg: '#e8f4fd',
    tagline: 'Pearl-Grade Purity',
    categories: ['RO', 'UF'],
    desc: 'Elegant purifiers offering premium looks and robust filtration for modern kitchens.',
    features: ['7-Stage Filtration', 'Digital Display', 'UV Sanitization'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Perosis',
    logo: '🔧',
    color: '#558b2f',
    bg: '#e8f5e9',
    tagline: 'Trusted Local Brand',
    categories: ['RO', 'UV'],
    desc: 'Reliable service-oriented purifiers popular in regional markets.',
    features: ['Easy Maintenance', 'Service Network', 'Affordable Parts'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Fin Pure',
    logo: '🐟',
    color: '#01579b',
    bg: '#e3f2fd',
    tagline: 'Finest Purity',
    categories: ['RO', 'UV'],
    desc: 'High-efficiency purifiers with a focus on sustainable water use.',
    features: ['Water Saver', 'Auto Flush', 'Smart Alerts'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Commercial Water Purifier',
    logo: '🏢',
    color: '#37474f',
    bg: '#eceff1',
    tagline: 'Built for Businesses',
    categories: ['RO'],
    desc: 'Heavy-duty systems designed for offices, restaurants, and institutions.',
    features: ['High Capacity', 'Stainless Steel Tank', 'Low Maintenance'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'RO Plants',
    logo: '🌱',
    color: '#2e7d32',
    bg: '#e8f5e9',
    tagline: 'Industrial Strength',
    categories: ['RO'],
    desc: 'Large-scale reverse osmosis plants for industrial and agricultural use.',
    features: ['Customizable Modules', 'Energy Efficient', 'Remote Monitoring'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
  {
    name: 'Kengen Water Purifier',
    logo: '💧',
    color: '#1a237e',
    bg: '#e8eaf6',
    tagline: 'Pure Water, Pure Life',
    categories: ['RO', 'UV'],
    desc: 'Kengen offers reliable purification systems with modern design and efficient filters.',
    features: ['Smart TDS Control', 'Auto Flush', 'LED Indicators'],
    priceRange: '₹8,000 – ₹1,00,000',
  },
];

export default function Brands() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'RO', 'UV', 'UF', 'Gravity'];

  const filtered = filter === 'All'
    ? brands
    : brands.filter(b => b.categories.includes(filter));

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <p className="tag anim-fadeup">Trusted Brands</p>
          <h1 className="page-hero__title anim-fadeup anim-delay-1">
            Brands We <span>Carry</span>
          </h1>
          <p className="page-hero__sub anim-fadeup anim-delay-2">
            We partner with India's most trusted water purifier brands — so you get the best technology at the right price.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="brands-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Brand Cards */}
          <div className="brands-grid">
            {filtered.map((brand, i) => (
              <div className="brand-card" key={brand.name} style={{ animationDelay: `${i * 0.09}s` }}>
                <div className="brand-card__header" style={{ background: brand.bg }}>
                  <span className="brand-logo" style={{ color: brand.color }}>{brand.logo}</span>
                  <div>
                    <h3 style={{ color: brand.color }}>{brand.name}</h3>
                    <p className="brand-tagline">{brand.tagline}</p>
                  </div>
                  <div className="brand-tags">
                    {brand.categories.map(c => (
                      <span className="brand-tag" key={c} style={{ background: brand.color }}>{c}</span>
                    ))}
                  </div>
                </div>

                <div className="brand-card__body">
                  <p className="brand-desc">{brand.desc}</p>

                  <ul className="brand-features">
                    {brand.features.map(f => (
                      <li key={f}><span className="feature-check">✓</span>{f}</li>
                    ))}
                  </ul>

                  <div className="brand-footer">
                    <div className="brand-price">
                      <span className="price-label">Price Range</span>
                      <strong>{brand.priceRange}</strong>
                    </div>
                    <a href="/contact" className="btn btn-outline" style={{ fontSize: '13px', padding: '9px 20px' }}>
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="brands-empty">
              <span>No brands found for this category.</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
