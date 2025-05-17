import Link from "next/link";
import Sphere from "./components/Sphere/Sphere";
import './home.css'


export default function Home() {

  const influencers = [
    {
      name: 'Anshul Upmaniyu',
      role: 'Lifestyle Influencer',
      follwers: '150k',
    },
    {
      name: 'Aarav Sharma',
      role: 'Lifestyle Influencer',
      follwers: '150k',
    },
    {
      name: 'Priyanshi',
      role: 'Fitness',
      follwers: '150k',
    },
  ]

  const brands = [
  { name: 'Nike', logo: '/google.png' },
  { name: 'Amazon', logo: '/facebook.png' },
  { name: 'Apple', logo: '/instagram.png' },
  { name: 'Spotify', logo: '/linkdin.png' },
  { name: 'Netflix', logo: '/youtube.png' },
];
  return (
    <div>
      <section className="hero">
        <h1 className="hero-title">
          WELCOME TO <span className="highlight">COENCERS</span>
        </h1>
        <p className="hero-subtitle">
          An Emerging Agency to revolutionize the deals <br />
          between Brands and Companies
        </p>
        <div className="hero-buttons">
          <button className="try-btn">Try Now</button>
          <Link href="/contact"><button className="contact-btn">Contact</button></Link>
        </div>
      </section>

      <Sphere />
      <section className="additional">
        <div className="working">
          <h2>
            How Our <span className="highlight">Influencer Marketing</span> Company Helps Brands?
          </h2>
          <p>
            Our influencer marketing experts work with top social media influencers and content creators to produce unique, engaging content that drives high shareability and brand visibility. Choose our professional services to elevate your brand's presence.
          </p>
        </div>



        <h3 className="offer-heading">Our Services</h3>

        <div className="offer-cards">
          <div className="card">
            <div className="icon">🤝</div>
            <h3 className="title">Collaborations with Brands</h3>
            <p className="description">
              Partner with leading brands to increase visibility and build valuable relationships.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="card">
            <div className="icon">📈</div>
            <h3 className="title">Influencer Campaigns</h3>
            <p className="description">
              Strategic partnerships with top creators to promote your brand authentically and drive results.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>

          <div className="card">
            <div className="icon">⚡</div>
            <h3 className="title">Content Creation</h3>
            <p className="description">
              Cutting-edge creative content that resonates with your target audience and drives engagement.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="card">
            <div className="icon">👨</div>
            <h3 className="title">Social Media Management</h3>
            <p className="description">
              Full-service management of your social platforms to maintain consistent brand voice and engagement.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </section>

      <div className="separation"></div>

      <section className="case-study">
        <h2 className="case-study-title">
          Case <span className="highlight">Studies</span>
        </h2>
        <p className="case-study-subtitle">
          Real results from our clients' success stories.
        </p>

        <div className="case-cards">
          <div className="case-card">
            <h3 className="case-card-title">Boosted Brand Visibility</h3>
            <p className="case-card-description">
              Partnered with a startup to increase social reach by 300% in 6 months through influencer marketing.
            </p>
            <a href="#" className="case-learn-more">Read More</a>
          </div>

          <div className="case-card">
            <h3 className="case-card-title">Audience Growth</h3>
            <p className="case-card-description">
              Helped a fashion brand grow their Instagram followers from 10K to 100K organically.
            </p>
            <a href="#" className="case-learn-more">Read More</a>
          </div>

          <div className="case-card">
            <h3 className="case-card-title">Engagement Surge</h3>
            <p className="case-card-description">
              Improved average post engagement rate from 2% to 9% through optimized content strategy.
            </p>
            <a href="#" className="case-learn-more">Read More</a>
          </div>
        </div>
      </section>

      <div className="separation"></div>

      <section className="top-influencers">
        <h1>Top <span className="highlight">Influencers</span></h1>
        <div className="influencer-grid">
          {influencers.map((influencers, index) => (
            <div className="influencer-card" key={index}>
              <h3>{influencers.name}</h3>
              <p>{influencers.role}</p>
              <p className="followers">{influencers.follwers} followers</p>
            </div>
          ))}
        </div>
      </section>

      <section className="brands-collaboration">
        <h1>
          Brands <span className="highlight">Associated with us!!!</span>
        </h1>
        <div className="brands-logos">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="ready-to-collaborate">
      <h2>Ready to Collaborate?</h2>
      <p>Join the fastest-growing influencer network today!</p>
      <Link href="contact"><button>Get Started</button></Link>
    </section>

    </div>
  );
}
