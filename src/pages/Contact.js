import React, { useState } from 'react';
import './Contact.css';

const initForm = {
  name: '', email: '', phone: '', service: '', message: '',
};

const services = [
  'New Purifier Purchase',
  'AMC (Annual Maintenance)',
  'Repair / Service',
  'Filter Replacement',
  'Product Enquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState(initForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
                              e.email   = 'Valid email is required';
    if (!form.phone.trim() || form.phone.length < 10)
                              e.phone   = 'Valid phone number required';
    if (!form.service)        e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network response not ok');
      setSubmitted(true);
      setForm(initForm);
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: 'Failed to send. Please try again later.' }));
    }
  };

  const contactInfo = [
    { icon: '📞', label: 'Phone', values: ['+91 91775 76617', '+91 91775 76617'] },
    { icon: '📧', label: 'Email', values: ['suman.guguloth06@gmail.com', 'suman.guguloth06@gmail.com'] },
    { icon: '📍', label: 'Address', values: ['1-7-1792, Balasamudram Beside Kaloji Kalakshetram', 'Hanmakonda, Telangana – 506001'] },
    { icon: '🕐', label: 'Working Hours', values: ['Mon – Sat: 9 AM – 10 PM', 'Sunday: 10 AM – 7 PM'] },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <p className="tag anim-fadeup">Reach Us</p>
          <h1 className="page-hero__title anim-fadeup anim-delay-1">
            Get In <span>Touch</span>
          </h1>
          <p className="page-hero__sub anim-fadeup anim-delay-2">
            Have questions? Need a quote? Our team is ready to help you find the right solution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* Contact Info */}
          <div className="contact-info">
            <p className="tag">Contact Details</p>
            <h2 className="section-title">Let's Talk</h2>
            <div className="divider" />
            <p className="section-sub">Reach out via phone, email, or walk into our showroom. We're here to help.</p>

            <div className="info-cards">
              {contactInfo.map((item, i) => (
                <div className="info-card" key={i}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <strong>{item.label}</strong>
                    {item.values.map((v, j) => <span key={j}>{v}</span>)}
                  </div>
                </div>
              ))}
            </div>

           
        </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="map-placeholder">
        <div className="map-overlay">
          <span>📍 Ashwini Water Solutions, Hyderabad</span>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </>
  );
}
