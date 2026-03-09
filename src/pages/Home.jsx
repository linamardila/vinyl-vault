import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      {/* grain filter svg */}
      <svg id="grain">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
        </filter>
      </svg>
      <Navbar />
      <div className="container">
        <section className="hero">
          <div className="text">
            <h1>Track your collection in style</h1>
            <p>A modern vault for the analog music obsessive. Add, rate and review your vinyl records.</p>
          </div>
          <div className="vinyl-container">
            <div className="vinyl-glow"></div>
            <div className="vinyl"></div>
          </div>
        </section>
        <section className="stats">
          <div>
            <h2>0</h2>
            <div>Your Collection</div>
          </div>
          <div>
            <h2>0</h2>
            <div>Genres</div>
          </div>
          <div>
            <h2>0</h2>
            <div>Artists</div>
          </div>
        </section>
        <section className="features">
          <div className="feature-card">
            <div className="feature-num">1</div>
            <div className="feature-line"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="var(--accent)" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="4" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <div className="feature-title">Manage Records</div>
            <div className="feature-desc">Add &amp; manage your vinyl records (artist, album, year, genre, cover art)</div>
          </div>
          <div className="feature-card">
            <div className="feature-num">2</div>
            <div className="feature-line"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2l3.09 9.26H28l-8 5.81 3.09 9.26L16 20.52l-7.18 5.81L12 16.07l-8-5.81h8.91z"
                stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <div className="feature-title">Rate & Review</div>
            <div className="feature-desc">Rate and review each record in your collection</div>
          </div>
          <div className="feature-card">
            <div className="feature-num">3</div>
            <div className="feature-line"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="8" stroke="var(--accent)" strokeWidth="1.5" />
              <path d="m21 21 5 5" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <div className="feature-title">Search & Filter</div>
            <div className="feature-desc">Filter and search by genre, artist, or decade</div>
          </div>
          <div className="feature-card">
            <div className="feature-num">4</div>
            <div className="feature-line"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="20" height="20" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <div className="feature-title">Track Status</div>
            <div className="feature-desc">Mark records as owned, wishlist, or loaned out</div>
          </div>
          <div className="feature-card">
            <div className="feature-num">5</div>
            <div className="feature-line"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="16" width="4" height="12" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="12" y="10" width="4" height="18" stroke="var(--accent)" strokeWidth="1.5" />
              <rect x="20" y="6" width="4" height="22" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <div className="feature-title">Stats Dashboard</div>
            <div className="feature-desc">Collection stats dashboard with charts</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;