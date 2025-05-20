"use client"
import Link from "next/link";
import Sphere from "./components/Sphere/Sphere";
import './home.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    (function (d, t) {
      const v = d.createElement(t);
      const s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: "67f7790e95c558b7d60ae9c2" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
            voice: {
              url: "https://runtime-api.voiceflow.com",
            },
          });
        }
      };
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
  }, []);


  const influencers = [
    { name: 'Anshul Upmaniyu', role: 'Lifestyle Influencer', followers: '150k' },
    { name: 'Aarav Sharma', role: 'Lifestyle Influencer', followers: '150k' },
    { name: 'Priyanshi', role: 'Fitness Influencer', followers: '150k' },
  ];

  const brands = [
    { name: 'Nike', logo: '/google.png' },
    { name: 'Amazon', logo: '/facebook.png' },
    { name: 'Apple', logo: '/instagram.png' },
    { name: 'Spotify', logo: '/linkdin.png' },
    { name: 'Netflix', logo: '/youtube.png' },
  ];

  return (
    <main>
      <section className="hero-container">
        <div className="hero">
          <h1 className="hero-title">
            WELCOME TO <span className="highlight">COENCERS</span>
          </h1>
          <p className="hero-subtitle">
            An Emerging Agency revolutionizing deals between <br /> Brands and Influencers
          </p>
          <div className="hero-buttons">
            <Link href="https://forms.gle/y5HJCQk9LL7Q4C2s8"><button className="try-btn" >Try Now</button></Link>
            <Link href="/contact"><button className="contact-btn">Contact</button></Link>
          </div>
        </div>

        <div className="sphere-container">
          <Sphere />
        </div>
      </section>


      {/* Services Section */}
      <section className="additional">
        <div className="working">
          <h2>
            How Our <span className="highlight">Influencer Marketing</span> Company Helps Brands
          </h2>
          <p>
            Our experts collaborate with top influencers to craft engaging content that drives brand visibility and performance.
          </p>
        </div>

        <h3 className="offer-heading">Our Services</h3>

        <div className="offer-cards">
          {[
            {
              icon: "🤝",
              title: "Collaborations with Brands",
              description: "Partner with leading brands to increase visibility and build valuable relationships."
            },
            {
              icon: "📈",
              title: "Influencer Campaigns",
              description: "Strategic partnerships with top creators to promote your brand authentically."
            },
            {
              icon: "⚡",
              title: "Content Creation",
              description: "Creative, impactful content that resonates and drives engagement."
            },
            {
              icon: "👨",
              title: "Social Media Management",
              description: "Consistent voice and high engagement across all social channels."
            }
          ].map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3 className="title">{service.title}</h3>
              <p className="description">{service.description}</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <div className="separation"></div>

      {/* Case Studies */}
      <section className="case-study">
        <h2 className="case-study-title">
          Case <span className="highlight">Studies</span>
        </h2>
        <p className="case-study-subtitle">Real results from our clients' success stories</p>

        <div className="case-cards">
          {[
            {
              title: "Boosted Brand Visibility",
              description: "Increased social reach by 300% in 6 months through influencer marketing."
            },
            {
              title: "Audience Growth",
              description: "Helped a fashion brand grow from 10K to 100K Instagram followers."
            },
            {
              title: "Engagement Surge",
              description: "Boosted post engagement from 2% to 9% via optimized content strategy."
            }
          ].map((caseItem, index) => (
            <div className="case-card" key={index}>
              <h3 className="case-card-title">{caseItem.title}</h3>
              <p className="case-card-description">{caseItem.description}</p>
              <a href="#" className="case-learn-more">Read More</a>
            </div>
          ))}
        </div>
      </section>

      <div className="separation"></div>

      {/* Influencers */}
      <section className="top-influencers">
        <h1>Top <span className="highlight">Influencers</span></h1>
        <div className="influencer-grid">
          {influencers.map((influencer, index) => (
            <div className="influencer-card" key={index}>
              <h3>{influencer.name}</h3>
              <p>{influencer.role}</p>
              <p className="followers">{influencer.followers} followers</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Collaborations */}
      <section className="brands-collaboration">
        <h1>
          Brands <span className="highlight">Associated With Us</span>
        </h1>
        <div className="brands-logos">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ready-to-collaborate">
        <h2>Ready to Collaborate?</h2>
        <p>Join the fastest-growing influencer network today!</p>
        <Link href="/contact"><button>Get Started</button></Link>
      </section>
    </main>
  );
}
