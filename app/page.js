import Link from "next/link";
import Sphere from "./components/Sphere/Sphere";
import './home.css'
import Image from "next/image";

export default function Home() {
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

        <h3 className="offer-heading">What We Offer?</h3>

        <div className="offer-cards">
          <div className="card">
            <Image src="/1223.png" fill alt="Collaborations" className="card-img" />
            <div className="card-text">Collaborations with Brands</div>
          </div>

          <div className="card">
            <Image src="/audience.png" fill alt="Audience Growth" className="card-img" />
            <div className="card-text">Grow Your Audience</div>
          </div>

          <div className="card">
            <Image src="/enange.jpeg" fill alt="Boost Engagement" className="card-img" />
            <div className="card-text">Boost Engagement</div>
          </div>
        </div>


      </section>
    </div>
  );
}
