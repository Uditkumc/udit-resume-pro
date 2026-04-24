import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const NAV_SECTIONS = [
  {
    title: 'Main',
    items: [
      { to: '/dashboard', icon: 'bi-grid-1x2-fill', label: 'Dashboard' },
      { to: '/builder', icon: 'bi-file-earmark-plus-fill', label: 'New Resume' },
      { to: '/templates', icon: 'bi-layout-text-window-reverse', label: 'Templates' },
    ]
  },
  {
    title: 'AI Tools',
    items: [
      { to: '/cover-letter', icon: 'bi-envelope-fill', label: 'Cover Letter' },
      { to: '/interview', icon: 'bi-patch-question-fill', label: 'Interview Prep' },
    ]
  },
  {
    title: 'Account',
    items: [
      { to: '/pricing', icon: 'bi-star-fill', label: 'Upgrade Pro' },
      { to: '/profile', icon: 'bi-person-fill', label: 'Profile' },
    ]
  }
]

export default function Sidebar() {
  const { user, logout, theme, toggleTheme } = useAuth()
  const navigate = useNavigate()
  const [devOpen, setDevOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="hamburger-btn"
      >
        <i className="bi bi-list" />
      </button>

      {/* Dark Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 9997 ,
          }}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="sidebar-close-btn"
        >✕</button>

        {/* Logo */}
        <div style={{ padding: '20px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 16px var(--accent-glow)' }}>
            <i className="bi bi-lightning-fill" style={{ color: '#fff', fontSize: 16 }} />
          </div>
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 17, letterSpacing: '-0.3px' }}>ResumeAI Pro</span>
          <span style={{ marginLeft: 'auto', background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20 }}>PRO</span>
        </div>

        {/* Nav Sections */}
        <nav style={{ flex: 1, padding: '10px 8px', overflowY: 'auto' }}>
          {NAV_SECTIONS.map(({ title, items }) => (
            <div key={title} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, padding: '6px 12px 4px', margin: 0 }}>{title}</p>
              {items.map(({ to, icon, label }) => (
                <NavLink key={to} to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                  <i className={`bi ${icon}`} style={{ fontSize: 15 }} />
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '10px 8px', borderTop: '1px solid var(--border)' }}>

          {/* Developer Button */}
          <button onClick={() => setDevOpen(true)} className="nav-item" style={{ marginBottom: 6 }}>
            <i className="bi bi-person-badge-fill" style={{ fontSize: 15 }} />
            Developer
          </button>

          {/* Developer Modal */}
          {devOpen && (
            <div onClick={() => setDevOpen(false)} style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              zIndex: 9999, background: 'rgba(0,0,0,0.75)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div onClick={e => e.stopPropagation()} style={{
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                border: '1px solid rgba(102,126,234,0.4)',
                borderRadius: 24, padding: 40, width: 520, maxWidth: '92vw',
                textAlign: 'center', boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
                color: 'white', position: 'relative'
              }}>
                <button onClick={() => setDevOpen(false)} style={{
                  position: 'absolute', top: 14, right: 18, background: 'transparent',
                  border: 'none', color: '#a0aec0', fontSize: 22, cursor: 'pointer', lineHeight: 1
                }}>✕</button>

                <img src="/developer.jpg" alt="Udit" style={{
                  width: 100, height: 100, borderRadius: '50%', objectFit: 'cover',
                  border: '4px solid #667eea', marginBottom: 12
                }} onError={(e) => { e.target.style.display = 'none' }} />

                <p style={{ fontSize: 11, color: '#667eea', margin: '0 0 4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
                  Designed & Developed by
                </p>
                <h2 style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 800 }}>Udit Kumar</h2>
                <p style={{ color: '#a0aec0', fontSize: 13, margin: '0 0 24px' }}>Full Stack Developer (MERN)</p>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '16px 20px', marginBottom: 20, textAlign: 'left' }}>
                  <a href="tel:+917079064312" style={{ color: '#a0aec0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 14 }}>
                    <i className="bi bi-telephone-fill" style={{ color: '#667eea', fontSize: 16 }} />
                    +91 7079064312
                  </a>
                  <a href="mailto:uditkumar969364@gmail.com" style={{ color: '#a0aec0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <i className="bi bi-envelope-fill" style={{ color: '#667eea', fontSize: 16 }} />
                    uditkumar969364@gmail.com
                  </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <a href="https://instagram.com/udit.chandrvnshi" target="_blank" rel="noreferrer" style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: 12, padding: '10px 16px', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="bi bi-instagram" style={{ fontSize: 15 }} /> Instagram
                  </a>
                  <a href="https://linkedin.com/in/udit-kumar-01b3b5288" target="_blank" rel="noreferrer" style={{ background: '#0077b5', borderRadius: 12, padding: '10px 16px', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="bi bi-linkedin" style={{ fontSize: 15 }} /> LinkedIn
                  </a>
                  <a href="https://github.com/Uditkumc" target="_blank" rel="noreferrer" style={{ background: '#333', borderRadius: 12, padding: '10px 16px', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="bi bi-github" style={{ fontSize: 15 }} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          )}

          <button onClick={toggleTheme} className="nav-item" style={{ marginBottom: 6 }}>
            <i className={`bi bi-${theme === 'dark' ? 'sun-fill' : 'moon-fill'}`} style={{ fontSize: 15 }} />
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '10px 12px', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'capitalize' }}>{user?.plan} plan</p>
              </div>
              <button onClick={handleLogout} title="Logout" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 4, borderRadius: 6, fontSize: 16, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <i className="bi bi-box-arrow-right" />
              </button>
            </div>
          </div>

          <button onClick={handleLogout} className="btn-danger" style={{ width: '100%', padding: '8px 12px', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 10 }}>
            <i className="bi bi-box-arrow-right" /> Sign Out
          </button>
        </div>
      </div>
    </>
  )
}