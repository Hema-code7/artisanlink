import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  Compass, 
  History, 
  Briefcase, 
  Map as MapIcon, 
  User, 
  Settings, 
  Bell, 
  Search,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  X,
  LogOut,
  Award
} from 'lucide-react';
import './StudentDashboard.css';

// MOCK DATA
const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Verify Product Details',
    description: 'Review product materials and dimensions against artisan submission.',
    target: 'Terracotta Lamp',
    location: 'West Bengal, India',
    status: 'Available',
    effort: '10 mins',
  },
  {
    id: 2,
    title: 'Review Craft Story',
    description: 'Verify cultural context and historical accuracy of the craft description.',
    target: 'Thanjavur Art Piece',
    location: 'Tamil Nadu, India',
    status: 'Available',
    effort: '15 mins',
  }
];

const CONTRIBUTIONS = [
  { id: 1, target: 'Terracotta Lamp — Product Details', status: 'Verified' },
  { id: 2, target: 'Bronze Craft — Location', status: 'Verified' },
  { id: 3, target: 'Palm Leaf Basket — Craft Category', status: 'Under Review' },
];

const CRAFTS = [
  {
    id: 1,
    name: 'Kanchipuram Silk',
    region: 'Tamil Nadu',
    description: 'Traditional woven silk sarees known for rich colors.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d615e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Thanjavur Art',
    region: 'Tamil Nadu',
    description: 'Classical South Indian painting style.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Terracotta',
    region: 'West Bengal',
    description: 'Fired clay sculptures and pottery.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80'
  }
];

const OPPORTUNITIES = [
  { id: 1, title: 'Craft Documentation', skill: 'Writing & Research', location: 'Remote' },
  { id: 2, title: 'Product Photography', skill: 'Photography', location: 'Jaipur, Rajasthan' },
  { id: 3, title: 'Digital Assistance', skill: 'Digital Literacy', location: 'Remote' }
];

const RECENT_ACTIVITY = [
  { id: 1, text: 'Verification completed for Blue Pottery', time: '2 hours ago' },
  { id: 2, text: 'New task assigned: Verify Artisan Details', time: '5 hours ago' },
  { id: 3, text: 'Craft documentation submitted', time: '1 day ago' },
  { id: 4, text: 'Opportunity joined: Product Photography', time: '2 days ago' },
];

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  const handleNavClick = (tabName: string, id?: string) => {
    setActiveTab(tabName);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleStartVerification = (task: any) => {
    setSelectedTask(task);
    setVerificationStatus('Pending');
  };

  const handleSubmitVerification = () => {
    setVerificationStatus('In Review');
    setTimeout(() => {
      setVerificationStatus('Verified');
      setTimeout(() => {
        // Update task status in list
        setTasks(tasks.map(t => t.id === selectedTask.id ? { ...t, status: 'Verified' } : t));
        setSelectedTask(null);
        setVerificationStatus(null);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="student-dashboard-container">
      {/* SIDEBAR */}
      <aside className="student-sidebar">
        <div className="sidebar-brand">ARTISANLINK</div>
        
        <nav className="sidebar-nav">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => handleNavClick('Dashboard', 'dashboard-top')} />
          <NavItem icon={<ClipboardCheck size={20} />} label="Verification Tasks" active={activeTab === 'Verification Tasks'} onClick={() => handleNavClick('Verification Tasks', 'verification-tasks')} />
          <NavItem icon={<Compass size={20} />} label="Explore Crafts" active={activeTab === 'Explore Crafts'} onClick={() => handleNavClick('Explore Crafts', 'explore-crafts')} />
          
          <div className="nav-divider"></div>
          
          <NavItem icon={<History size={20} />} label="My Contributions" active={activeTab === 'My Contributions'} onClick={() => handleNavClick('My Contributions', 'my-contributions')} />
          <NavItem icon={<Briefcase size={20} />} label="Opportunities" active={activeTab === 'Opportunities'} onClick={() => handleNavClick('Opportunities', 'opportunities')} />
          <NavItem icon={<MapIcon size={20} />} label="Map" active={activeTab === 'Map'} onClick={() => handleNavClick('Map', 'map-section')} />
          
          <div className="nav-divider"></div>
          
          <NavItem icon={<User size={20} />} label="Profile" active={activeTab === 'Profile'} onClick={() => handleNavClick('Profile', 'dashboard-top')} />
          <NavItem icon={<Settings size={20} />} label="Settings" active={activeTab === 'Settings'} onClick={() => handleNavClick('Settings', 'dashboard-top')} />
          <NavItem icon={<LogOut size={20} />} label="Logout" onClick={() => navigate('/')} />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="student-main">
        {/* HEADER */}
        <header className="student-header">
          <div className="header-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search tasks, crafts, or opportunities..." />
          </div>
          
          <div className="header-actions">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="badge"></span>
            </button>
            <div className="profile-section">
              <div className="profile-info">
                <span className="welcome-text">Good evening,</span>
                <span className="student-name">Rahul Verma <Award size={14} className="verified-icon text-accent" /></span>
              </div>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student Profile" className="profile-avatar" />
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
          
          {/* WELCOME / CONTRIBUTION AREA */}
          <section className="welcome-banner">
            <div className="banner-content">
              <h1>Help preserve and connect India's craft ecosystem.</h1>
              <p>Your contributions help make artisan and craft information more discoverable, trustworthy and accessible.</p>
              <button className="btn-primary banner-btn">View Verification Tasks</button>
            </div>
            <div className="banner-graphic">
              <ShieldCheck size={120} className="graphic-icon" />
            </div>
          </section>

          {/* IMPACT METRICS */}
          <section className="impact-grid">
            <StatCard label="Tasks Completed" value="24" />
            <StatCard label="Products Verified" value="18" />
            <StatCard label="Crafts Documented" value="3" />
            <StatCard label="Artisans Supported" value="12" />
          </section>

          <div className="dashboard-main-grid">
            {/* LEFT COLUMN */}
            <div className="main-col">
              
              {/* VERIFICATION TASKS */}
              <section className="dashboard-section" id="verification-tasks">
                <div className="section-header">
                  <h2 className="section-title">Verification Tasks</h2>
                  <button className="btn-secondary">View All</button>
                </div>
                
                <div className="tasks-list">
                  {tasks.map(task => (
                    <div key={task.id} className="task-card">
                      <div className="task-header">
                        <span className={`status-badge ${task.status.toLowerCase()}`}>{task.status}</span>
                        <span className="task-effort"><Clock size={14} /> {task.effort}</span>
                      </div>
                      <h3 className="task-title">{task.title}</h3>
                      <p className="task-desc">{task.description}</p>
                      <div className="task-meta">
                        <span className="target-craft">{task.target}</span> • <span>{task.location}</span>
                      </div>
                      <button 
                        className="btn-primary w-full mt-3"
                        onClick={() => handleStartVerification(task)}
                        disabled={task.status === 'Verified'}
                      >
                        {task.status === 'Verified' ? 'Verification Complete' : 'Start Verification'}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* EXPLORE CRAFTS */}
              <section className="dashboard-section" id="explore-crafts">
                <div className="section-header">
                  <h2 className="section-title">Explore Crafts</h2>
                  <button className="btn-icon"><ChevronRight size={20} /></button>
                </div>
                
                <div className="crafts-grid">
                  {CRAFTS.map(craft => (
                    <div key={craft.id} className="craft-card">
                      <img src={craft.image} alt={craft.name} className="craft-img" />
                      <div className="craft-info">
                        <h4>{craft.name}</h4>
                        <p className="craft-region">{craft.region}</p>
                        <p className="craft-desc">{craft.description}</p>
                        <button className="btn-outline w-full mt-2">Explore</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="side-col">
              
              {/* MY CONTRIBUTIONS */}
              <section className="dashboard-section contributions-section" id="my-contributions">
                <h2 className="section-title">My Contributions</h2>
                <p className="contributions-count">Total: 15 Contributions</p>
                <div className="contributions-list mt-3">
                  {CONTRIBUTIONS.map(contrib => (
                    <div key={contrib.id} className="contribution-item">
                      <div className="contrib-info">
                        <p className="contrib-target">{contrib.target}</p>
                        <span className={`status-text ${contrib.status.toLowerCase().replace(' ', '-')}`}>
                          Status: {contrib.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* OPPORTUNITIES */}
              <section className="dashboard-section opportunities-section" id="opportunities">
                <h2 className="section-title">Opportunities for You</h2>
                <div className="opportunities-list mt-3">
                  {OPPORTUNITIES.map(opp => (
                    <div key={opp.id} className="opp-card">
                      <div className="opp-icon"><Briefcase size={16} /></div>
                      <div className="opp-info">
                        <h4>{opp.title}</h4>
                        <p>{opp.skill} • {opp.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* MAP PREVIEW */}
              <section className="dashboard-section map-section" id="map-section">
                <h2 className="section-title">Explore Craft Locations</h2>
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

      {/* VERIFICATION WORKFLOW MODAL */}
      {selectedTask && (
        <div className="modal-overlay">
          <div className="verification-modal">
            <div className="modal-header">
              <h2>Verification Workflow</h2>
              <button className="close-btn" onClick={() => setSelectedTask(null)}><X size={24} /></button>
            </div>
            <div className="modal-content">
              <div className="verify-target-info">
                <h3>{selectedTask.title}</h3>
                <p>Target: <strong>{selectedTask.target}</strong> ({selectedTask.location})</p>
                <p className="mt-2 text-secondary">{selectedTask.description}</p>
              </div>
              
              <div className="verification-steps">
                <div className={`verify-step ${verificationStatus === 'Pending' || verificationStatus === 'In Review' || verificationStatus === 'Verified' ? 'active' : ''}`}>
                  <div className="step-icon">1</div>
                  <span>Review Submission</span>
                </div>
                <div className={`verify-step ${verificationStatus === 'In Review' || verificationStatus === 'Verified' ? 'active' : ''}`}>
                  <div className="step-icon">2</div>
                  <span>Cross-check Data</span>
                </div>
                <div className={`verify-step ${verificationStatus === 'Verified' ? 'active' : ''}`}>
                  <div className="step-icon"><CheckCircle2 size={16} /></div>
                  <span>Confirmed</span>
                </div>
              </div>
              
              <div className="verify-actions">
                {verificationStatus === 'Pending' && (
                  <>
                    <button className="btn-secondary" onClick={() => setSelectedTask(null)}>Cancel</button>
                    <button className="btn-primary" onClick={handleSubmitVerification}>Submit Verification</button>
                  </>
                )}
                {verificationStatus === 'In Review' && (
                  <div className="status-message loading">Processing verification...</div>
                )}
                {verificationStatus === 'Verified' && (
                  <div className="status-message success">Verification Successful!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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

function StatCard({ label, value }: any) {
  return (
    <div className="stat-card minimal">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
