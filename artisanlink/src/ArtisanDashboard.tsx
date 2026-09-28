import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  PlusCircle, 
  ShoppingCart, 
  LifeBuoy, 
  QrCode, 
  Map as MapIcon, 
  User, 
  Settings, 
  Bell, 
  Search,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Mic,
  Activity,
  Award
} from 'lucide-react';
import './ArtisanDashboard.css';

// MOCK DATA
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Handcrafted Clay Vase',
    category: 'Pottery',
    status: 'Available',
    price: '$45',
    location: 'Rajasthan, India',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Woven Bamboo Basket',
    category: 'Weaving',
    status: 'Low Stock',
    price: '$28',
    location: 'Woraiyur, Trichy',
    image: 'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?auto=format&fit=crop&w=400&q=80',
    verified: false
  }
];

const MARKET_MATCHES = [
  { id: 1, market: 'Srirangam Temple Fest', match: 94, demand: 'High demand for Clay Vases' },
  { id: 2, market: 'Cauvery Artisan Mela', match: 88, demand: 'Looking for Woven Baskets' }
];

const SOS_CATEGORIES = [
  'Finding Buyers', 'Transportation', 'Raw Materials', 'Product Photography', 'Digital Assistance', 'Workshop Issues'
];

const RECENT_ACTIVITY = [
  { id: 1, text: 'Customer viewed Handcrafted Clay Vase', time: '2 hours ago' },
  { id: 2, text: 'SOS Request (Transportation) Matched', time: '5 hours ago' },
  { id: 3, text: 'Product Woven Bamboo Basket added', time: '1 day ago' },
  { id: 4, text: 'Craft Passport updated', time: '2 days ago' },
];

export default function ArtisanDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isAiListening, setIsAiListening] = useState(false);
  const [aiTranscript, setAiTranscript] = useState('');

  const handleNavClick = (tabName: string, id?: string) => {
    setActiveTab(tabName);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAiStudio = () => {
    setIsAiListening(true);
    setAiTranscript('Listening... (Tamil)');
    
    setTimeout(() => {
      setAiTranscript('Translating: "I want to add my new Indigo Block Print Scarf..."');
      
      setTimeout(() => {
        setIsAiListening(false);
        setAiTranscript('');
        handleAddProduct();
      }, 2000);
    }, 2000);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: 'Indigo Block Print Scarf',
      category: 'Textiles',
      status: 'Available',
      price: '$35',
      location: 'Gujarat, India',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80'
    };
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="artisan-dashboard-container">
      {/* SIDEBAR */}
      <aside className="artisan-sidebar">
        <div className="sidebar-brand">ARTISANLINK</div>
        
        <nav className="sidebar-nav">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => handleNavClick('Dashboard', 'dashboard-top')} />
          <NavItem icon={<Package size={20} />} label="My Products" active={activeTab === 'My Products'} onClick={() => handleNavClick('My Products', 'my-products')} />
          <NavItem icon={<PlusCircle size={20} />} label="Add Product" onClick={handleAddProduct} />
          <NavItem icon={<ShoppingCart size={20} />} label="Orders / Requests" active={activeTab === 'Orders / Requests'} onClick={() => handleNavClick('Orders / Requests', 'my-products')} />
          
          <div className="nav-divider"></div>
          
          <NavItem icon={<LifeBuoy size={20} />} label="Artisan SOS" active={activeTab === 'Artisan SOS'} onClick={() => handleNavClick('Artisan SOS', 'artisan-sos')} />
          <NavItem icon={<QrCode size={20} />} label="Craft Passport" active={activeTab === 'Craft Passport'} onClick={() => handleNavClick('Craft Passport', 'craft-passport')} />
          <NavItem icon={<MapIcon size={20} />} label="Map" active={activeTab === 'Map'} onClick={() => handleNavClick('Map', 'map-section')} />
          
          <div className="nav-divider"></div>
          
          <NavItem icon={<User size={20} />} label="Profile" active={activeTab === 'Profile'} onClick={() => handleNavClick('Profile', 'dashboard-top')} />
          <NavItem icon={<Settings size={20} />} label="Settings" active={activeTab === 'Settings'} onClick={() => handleNavClick('Settings', 'dashboard-top')} />
          <NavItem icon={<LogOut size={20} />} label="Logout" onClick={() => navigate('/')} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="artisan-main">
        {/* HEADER */}
        <header className="artisan-header">
          <div className="header-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search products, orders, or support..." />
          </div>
          
          <div className="header-actions">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="badge"></span>
            </button>
            <div className="profile-section">
              <div className="profile-info">
                <span className="welcome-text">Welcome back,</span>
                <span className="artisan-name">Kavya Sharma <Award size={14} className="verified-icon text-accent" /></span>
              </div>
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&w=100&q=80" alt="Artisan Profile" className="profile-avatar" />
            </div>
          </div>
        </header>

        {/* REGIONAL BANNER */}
        <div className="regional-banner">
          <span className="regional-title">📍 Trichy Craft Ecosystem • Cauvery Basin</span>
          <div className="regional-filters">
            <button className="filter-pill active">Srirangam</button>
            <button className="filter-pill">Woraiyur</button>
            <button className="filter-pill">Thillai Nagar</button>
            <button className="filter-pill">Tollgate</button>
          </div>
        </div>

        {/* DASHBOARD CONTENT */}
        <div className="dashboard-scrollable-content" id="dashboard-top">
          
          {/* STATS OVERVIEW */}
          <section className="stats-grid">
            <StatCard label="Total Products" value={products.length.toString()} icon={<Package className="text-accent" size={24} />} />
            <StatCard label="Available Products" value={products.filter(p => p.status === 'Available').length.toString()} icon={<CheckCircle2 className="text-green" size={24} />} />
            <StatCard label="Pending Requests" value="4" icon={<ShoppingCart className="text-accent" size={24} />} />
            <StatCard label="Active SOS Requests" value="1" icon={<AlertCircle className="text-orange" size={24} />} />
          </section>

          <div className="dashboard-main-grid">
            {/* LEFT COLUMN */}
            <div className="main-col">
              
              {/* MY PRODUCTS */}
              <section className="dashboard-section" id="my-products">
                <div className="section-header">
                  <h2 className="section-title">My Products</h2>
                  <div className="flex gap-2">
                    <button className="btn-ai" onClick={handleAiStudio}>
                      <Mic size={16} /> AI Studio (Speak to Add)
                    </button>
                    <button className="btn-secondary" onClick={handleAddProduct}>+ Add</button>
                  </div>
                </div>

                {isAiListening && (
                  <div className="ai-widget-active">
                    <div className="ai-waveform">
                      <Activity size={24} className="waveform-icon animate-pulse text-accent" />
                    </div>
                    <p className="ai-transcript">{aiTranscript}</p>
                  </div>
                )}
                
                <div className="products-list">
                  {products.map(product => (
                    <div key={product.id} className="product-card-horizontal">
                      <img src={product.image} alt={product.name} className="product-thumb" />
                      <div className="product-info">
                        <h3 className="product-name">
                          {product.name} 
                          {product.verified !== false && <span className="verified-pill">Verified</span>}
                        </h3>
                        <p className="product-meta">{product.category} • {product.location}</p>
                      </div>
                      <div className="product-status">
                        <span className={`status-badge ${product.status.toLowerCase().replace(' ', '-')}`}>{product.status}</span>
                      </div>
                      <div className="product-price">{product.price}</div>
                      <button className="btn-icon"><ChevronRight size={20} /></button>
                    </div>
                  ))}
                </div>
              </section>

              {/* ARTISAN SOS */}
              <section className="dashboard-section sos-section" id="artisan-sos">
                <div className="section-header">
                  <div>
                    <h2 className="section-title">Need Support? (Artisan SOS)</h2>
                    <p className="section-subtitle">Report a challenge and connect with the right support network.</p>
                  </div>
                  <button className="btn-primary">Create SOS Request</button>
                </div>

                <div className="sos-categories">
                  {SOS_CATEGORIES.map(cat => (
                    <span key={cat} className="sos-pill">{cat}</span>
                  ))}
                </div>

                <div className="active-sos">
                  <h4 className="active-sos-title">Active Request: Transportation Assistance</h4>
                  <div className="sos-timeline">
                    <div className="timeline-step completed">Reported</div>
                    <div className="timeline-step completed">Matched</div>
                    <div className="timeline-step active">Accepted</div>
                    <div className="timeline-step">Resolved</div>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="side-col">
              
              {/* MARKET MATCHER */}
              <section className="dashboard-section market-matcher">
                <div className="section-header">
                  <h2 className="section-title">Live Market Matcher</h2>
                  <span className="live-indicator">LIVE</span>
                </div>
                <div className="match-list">
                  {MARKET_MATCHES.map(match => (
                    <div key={match.id} className="match-card">
                      <div className="match-score">
                        <span className="score-value">{match.match}%</span>
                        <span className="score-label">Match</span>
                      </div>
                      <div className="match-details">
                        <h4>{match.market}</h4>
                        <p>{match.demand}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CRAFT PASSPORT */}
              <section className="dashboard-section passport-section" id="craft-passport">
                <h2 className="section-title">Craft Passport</h2>
                <div className="passport-card">
                  <div className="qr-placeholder">
                    <QrCode size={64} className="qr-icon" />
                  </div>
                  <div className="passport-details">
                    <h3>Kavya Sharma</h3>
                    <p className="tradition">Pottery & Ceramics</p>
                    <p className="traceability">12 Traceable Products</p>
                  </div>
                  <button className="btn-outline w-full">View Craft Passport</button>
                </div>
              </section>

              {/* MAP PREVIEW */}
              <section className="dashboard-section map-section" id="map-section">
                <h2 className="section-title">Craft Locations</h2>
                <div className="map-preview">
                  <div className="map-overlay">
                    <MapIcon size={32} className="map-icon-large" />
                    <button className="btn-secondary map-btn">Explore Map</button>
                  </div>
                </div>
              </section>

              {/* RECENT ACTIVITY */}
              <section className="dashboard-section activity-section">
                <h2 className="section-title">Recent Activity</h2>
                <div className="activity-list">
                  {RECENT_ACTIVITY.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-dot"></div>
                      <div className="activity-content">
                        <p className="activity-text">{activity.text}</p>
                        <span className="activity-time"><Clock size={12} /> {activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Subcomponents
function NavItem({ icon, label, active = false, onClick = () => {} }: any) {
  return (
    <button className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
    </button>
  );
}

function StatCard({ label, value, icon }: any) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        {icon}
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
