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
        window.voiceflow.chat.load({
          verify: { projectID: "67f7790e95c558b7d60ae9c2" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        });
      };
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
  }, []);


  const influencers = [
    {
      name: 'Mehak Modi',
      role: 'Lifestyle, Fashion',
      followers: '2.5k',
      image: '/mehak.jpg',
      instagram: 'https://www.instagram.com/i_mehakmodi/?igsh=aHU4cXVoYmRzd2F1&utm_source=qr#'
    },
    {
      name: 'Abhishek Solanki',
      role: 'Lifestyle',
      followers: '2.7k',
      image: '/abhishek.jpg',
      instagram: 'https://www.instagram.com/abhishek.solankii?igsh=MWd2cWN3bWhlbnptMg=='
    },
    {
      name: 'Payal Solanki',
      role: 'Lifestyle',
      followers: '1.5k',
      image: '/payal.jpg',
      instagram: 'https://www.instagram.com/payal_solanki03_?igsh=MW4yNzlzM3Z3dGF1aA=='
    },
    {
      name: 'Saksham Batra',
      role: 'Fitness, Travel, Lifestyle',
      followers: '1k',
      image: '/saksham.jpg',
      instagram: 'https://www.instagram.com/saksham_batra?igsh=MXIxeTcxaXB4b2RxcQ=='
    },
    
     
     
  ];

  const brands = [
    { name: 'Nike', logo: '/zeber.png' },
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
        <p className="case-study-subtitle">
          How leading brands grew with influencer marketing
        </p>

        <div className="case-cards">

          {/* BoAt (Logo Right) */}
          <div className="case-row">
            <div className="case-text">
              <h3 className="case-card-title">BoAt: Turning Audio Into a Lifestyle Brand</h3>
              <p className="case-meta">📦 Category: Consumer Electronics | 🏁 Founded: 2016</p>
              <p><strong>Growth Strategy:</strong> Influencer & Pop Culture Marketing</p>
              <p>
                BoAt became a lifestyle icon through collaborations with creators across tech, fitness, and music. Backed by celebrity influencers like Kiara Advani and Hardik Pandya, the brand exploded in reach.
              </p>
              <ul className="case-results">
                <li>✅ India’s #1 audio brand by market share (2020)</li>
                <li>💰 Valuation crossed ₹2,200 crores ($270M+)</li>
                <li>📱 Viral reach via Reels, YouTube, and creator challenges</li>
              </ul>
            </div>
            <div className="case-logo">
              <img src="/boat.jpg" alt="BoAt Logo" />
            </div>
          </div>

          {/* Zomato (Logo Left) */}
          <div className="case-row reverse">
            <div className="case-logo">
              <img src="/Zomato.png" alt="Zomato Logo" />
            </div>
            <div className="case-text">
              <h3 className="case-card-title">Zomato: The Meme + Influencer Combo That Delivered</h3>
              <p className="case-meta">🍽️ Category: Food Tech | 🏁 Founded: 2008</p>
              <p><strong>Growth Strategy:</strong> Meme marketing + Influencer storytelling</p>
              <p>
                Zomato used humor and relatability to dominate social feeds. Collaborating with regional influencers and meme pages, they drove mass engagement and app installs.
              </p>
              <ul className="case-results">
                <li>📥 Millions of app downloads via influencer virality</li>
                <li>📈 IPO in 2021, ₹1 lakh crore+ valuation ($12B+)</li>
                <li>🔥 Dominant brand engagement on social platforms</li>
              </ul>
            </div>
          </div>

          {/* Urban Company (Logo Right) */}
          <div className="case-row">
            <div className="case-text">
              <h3 className="case-card-title">Urban Company: Trust Built Through Real-Time Influencer Demos</h3>
              <p className="case-meta">🏠 Category: Home Services | 🏁 Founded: 2014</p>
              <p><strong>Growth Strategy:</strong> Educational & demo-based influencer content</p>
              <p>
                Urban Company built trust by letting influencers showcase services like facials or appliance repairs through real-time content. A trust-first approach worked wonders.
              </p>
              <ul className="case-results">
                <li>🌍 Expanded to 50+ cities, incl. global markets</li>
                <li>🔁 High retention and trust through transparency</li>
                <li>📊 Influencer content boosted bookings for premium services</li>
              </ul>
            </div>
            <div className="case-logo">
              <img src="/uc.png" alt="Urban Company Logo" />
            </div>
          </div>

        </div>
      </section>

      <div className="separation"></div>

      {/* Influencers */}
      <section className="top-influencers">
        <h1>Top <span className="highlight">Influencers</span></h1>
        <div className="influencer-grid">
          {influencers.map((influencer, index) => (
            <div className="influencer-card" key={index}>
              <img src={influencer.image} alt={influencer.name} className="influencer-photo" />
              <h3>{influencer.name}</h3>
              <p>{influencer.role}</p>
              <p className="followers">{influencer.followers} followers</p>
              <a
                href={influencer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-link"
              >
                View on Instagram
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="our-work">
        <h1>
          Our <span className="highlight">Work</span>
        </h1>

        <div className="case-cards">
          {/* ZeberAI Case */}
          <div className="case-row">
            <div className="case-text">
              <div className="case-category">AI Model Launch Campaign</div>
              <h2 className="case-card-title">How ZeberAI Boosted Sales with Targeted Marketing</h2>
              <p>
                ZeberAI, a leading AI model selling company, partnered with us to launch a
                strategic influencer campaign targeting tech enthusiasts and enterprise clients.
                Through tailored content and collaborations, we amplified brand awareness and
                drove significant engagement across digital channels.
              </p>

              <ul className="case-results">
                <li>Generated 25K+ leads in the first week post-launch</li>
                <li>Increased website traffic by 60% within a month</li>
                <li>Enhanced brand visibility in key AI and tech communities</li>
              </ul>

              <a href="https://www.zeber.in" target="_blank" rel="noopener noreferrer" className="case-read-more">
                View Campaign →
              </a>
            </div>

            <div className="case-logo">
              <img src="/zeber.png" alt="ZeberAI Logo" />
            </div>
          </div>
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
