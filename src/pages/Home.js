import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import './Home.css';

const features = [
  {
    icon: '🔧',
    title: 'Services',
    desc: 'Premium installation, maintenance and 24/7 support keeps your purifier running at its best.',
  },
  {
    icon: '🌊',
    title: 'Multi-Stage Filtration',
    desc: 'Advanced RO + UV + UF technology removes 99.9% of contaminants, bacteria, and viruses.',
  },
  {
    icon: '🔬',
    title: 'TDS Control',
    desc: 'Smart TDS controllers maintain essential minerals while purifying harmful dissolved solids.',
  },
  {
    icon: '⚡',
    title: 'Fast Purification',
    desc: 'High-efficiency membranes deliver purified water faster without compromising quality.',
  },
  {
    icon: '🛡️',
    title: 'AMC & Support',
    desc: 'Annual maintenance contracts and 24/7 service support to keep your purifier peak performing.',
  },
  {
    icon: '💰',
    title: 'Affordable Plans',
    desc: 'Flexible pricing and EMI options so clean water is accessible to every household.',
  },
  {
    icon: '🌱',
    title: 'Eco-Friendly',
    desc: 'Water-saving technology reduces wastage by up to 50% compared to conventional RO systems.',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '15+', label: 'Years Experience' },
  { value: '20+', label: 'Brands Offered' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__dots" />
        </div>
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="tag anim-fadeup">Premium Water Purification</p>
            <h1 className="hero__title anim-fadeup anim-delay-1">
              Pure Water.<br />
              <span>Pure Life.</span>
            </h1>
            <p className="hero__sub anim-fadeup anim-delay-2">
              Ashwini Water Solutions delivers industry-leading purifiers for homes and businesses — backed by expert installation and lifetime support.
            </p>
            <div className="hero__actions anim-fadeup anim-delay-3">
              <a href="https://wa.me/919876543210" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Get a Free Quote
              </a>
              <Link to="/brands" className="btn btn-outline">View Brands</Link>
            </div>
            <div className="hero__contact anim-fadeup anim-delay-4">
              <a href="tel:+919177576617">📞 +91 91775 76617</a>
              <a href="mailto:suman.guguloth06@gmail.com">✉️ suman.guguloth06@gmail.com</a>
              <span>📍 1-7-1792, Balasamudram Beside Kaloji Kalakshetram, Hanmakonda, Telangana – 506001</span>
            </div>
          </div>
          <div className="hero__visual anim-fadeup anim-delay-2">
            <Slideshow />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-strip">
        <div className="container stats-strip__inner">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section section--gray">
        <div className="container">
          <p className="tag">Why Choose Us</p>
          <h2 className="section-title">Built Around Clean Water</h2>
          <div className="divider" />
          <p className="section-sub">Everything we do is designed to ensure you get the safest, cleanest water — simply and affordably.</p>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready for Pure Water at Home?</h2>
            <p>Get a free consultation and quote from our water experts today.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
            <a href="tel:+919177576617" className="btn btn-outline-white">📞 Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
