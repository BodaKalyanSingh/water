import React from 'react';
import './About.css';

const values = [
  { icon: '🎯', title: 'Our Mission', desc: 'To make safe, clean drinking water accessible to every household and business through affordable technology and trusted service.' },
  { icon: '👁️', title: 'Our Vision', desc: 'A world where no one worries about water quality — powered by smart purification and reliable after-sales care.' },
  { icon: '🤝', title: 'Our Promise', desc: 'We back every purifier we sell with expert installation, genuine parts, and responsive service you can count on.' },
];

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', initials: 'RK', color: '#1565c0' },
  { name: 'Suresh Reddy', role: 'Head of Service', initials: 'SR', color: '#0b7a75' },
  { name: 'Priya Sharma', role: 'Sales Manager', initials: 'PS', color: '#7b1fa2' },
  { name: 'Anil Varma', role: 'Technical Lead', initials: 'AV', color: '#e65100' },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <p className="tag anim-fadeup">Our Story</p>
          <h1 className="page-hero__title anim-fadeup anim-delay-1">About Ashwini<br /><span>Water Solutions</span></h1>
          <p className="page-hero__sub anim-fadeup anim-delay-2">
            Over 15 years of bringing pure water to thousands of homes across the region.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <p className="tag">Who We Are</p>
            <h2 className="section-title">A Legacy of Trust &amp; Clean Water</h2>
            <div className="divider" />
            <p>Founded in 2012, Ashwini Water Solutions began with a simple belief — every family deserves access to pure, safe drinking water. What started as a small service operation in Hankmakonda has grown into one of the region's most trusted water purifier dealers and service providers.</p>
            <br />
            <p>We partner with the industry's top brands including Kent, Aquaguard, HUL Pureit, and Livpure — offering a curated selection of RO, UV, and UF purifiers suited to every budget and water condition.</p>
            <br />
            <p>Our team of certified technicians provides end-to-end support — from product selection and installation to annual maintenance contracts and genuine spares replacement.</p>
          </div>
          <div className="about-story__visual">
            <div className="about-card-big">
              <div className="about-card-icon">💧</div>
              <h3>15+ Years</h3>
              <p>of purifying water and building trust</p>
              <div className="about-card-row">
                <div><strong>10,000+</strong><span>Homes Served</span></div>
                <div><strong>20+</strong><span>Brands</span></div>
                <div><strong>98%</strong><span>Satisfaction</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <p className="tag">What Drives Us</p>
          <h2 className="section-title">Mission, Vision &amp; Promise</h2>
          <div className="divider" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <p className="tag">The People</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="divider" />
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: m.color }}>{m.initials}</div>
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
