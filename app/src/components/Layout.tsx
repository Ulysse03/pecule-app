import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePeriod } from '../context/PeriodContext';
import { notifs, footProduct, footLegal, footCompany } from '../data/mock';
import {
  IconBell, IconHelp, IconChevronDown,
  IconLogout, IconUser, IconSettings, IconSecurity, IconPrefs, IconHelpCircle,
  IconShield, IconGlobe,
} from './Icons';

// Universe → sub-pages mapping (matches design)
const UNIVERSES = [
  {
    key: 'pilotage',
    label: 'Pilotage',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="5" height="5" rx="1.4" /><rect x="10" y="3" width="5" height="5" rx="1.4" />
        <rect x="3" y="10" width="5" height="5" rx="1.4" /><rect x="10" y="10" width="5" height="5" rx="1.4" />
      </svg>
    ),
    pages: [
      { path: '/dashboard', label: 'Tableau de bord' },
      { path: '/analyses', label: 'Analyses' },
      { path: '/ledger', label: 'Grand livre' },
      { path: '/fiscalite', label: 'Fiscalité' },
    ],
  },
  {
    key: 'flux',
    label: 'Flux',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M3 6.5h9l-2.6-2.6M15 11.5H6l2.6 2.6" />
      </svg>
    ),
    pages: [
      { path: '/comptes', label: 'Comptes' },
      { path: '/flux', label: 'Transactions' },
      { path: '/imports', label: 'Imports' },
    ],
  },
  {
    key: 'engagements',
    label: 'Engagements',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M4.5 2.5h6L14 6v9.5H4.5Z" /><path d="M10 2.5V6h3.5M6.5 9.5h5M6.5 12h5" />
      </svg>
    ),
    pages: [
      { path: '/contrats', label: 'Contrats' },
      { path: '/abonnements', label: 'Abonnements' },
      { path: '/obligations', label: 'Obligations' },
      { path: '/projections', label: 'Projections' },
    ],
  },
  {
    key: 'patrimoine',
    label: 'Patrimoine',
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M9 2.5 15.5 6 9 9.5 2.5 6Z" /><path d="M2.5 9.5 9 13l6.5-3.5M2.5 12.5 9 16l6.5-3.5" />
      </svg>
    ),
    pages: [
      { path: '/patrimoine', label: 'Patrimoine' },
    ],
  },
];

const UNIVERSE_OF: Record<string, string> = {
  '/dashboard': 'pilotage', '/analyses': 'pilotage', '/ledger': 'pilotage', '/fiscalite': 'pilotage',
  '/comptes': 'flux', '/flux': 'flux', '/imports': 'flux',
  '/contrats': 'engagements', '/abonnements': 'engagements', '/obligations': 'engagements', '/projections': 'engagements',
  '/patrimoine': 'patrimoine',
};

const PROFILE_MENU = [
  { label: 'Mon profil', Icon: IconUser },
  { label: 'Paramètres du compte', Icon: IconSettings },
  { label: 'Sécurité & connexion', Icon: IconSecurity },
  { label: 'Préférences & langue', Icon: IconPrefs },
  { label: 'Aide & support', Icon: IconHelpCircle },
];

interface LayoutProps {
  children: React.ReactNode;
  pageEyebrow: string;
  pageTitle: string;
  showPeriod?: boolean;
}

export default function Layout({ children, pageEyebrow, pageTitle, showPeriod = true }: LayoutProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { periodKey, period, setPeriod } = usePeriod();
  const navigate = useNavigate();
  const loc = useLocation();

  const currentUniKey = UNIVERSE_OF[loc.pathname] || 'pilotage';
  const currentUni = UNIVERSES.find(u => u.key === currentUniKey)!;
  const showSubNav = currentUni.pages.length > 1;

  const toggleProfile = () => { setProfileOpen(p => !p); setNotifOpen(false); };
  const toggleNotif = () => { setNotifOpen(p => !p); setProfileOpen(false); };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#eef3f0', paddingBottom: 24 }}>

      {/* ── HEADER ── */}
      <header style={{ position: 'sticky', top: 18, zIndex: 40, maxWidth: 1480, width: '100%', margin: '18px auto 0', padding: '0 24px' }}>
        <div style={{ background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(16px)', border: '1px solid #e6ece8', borderRadius: 22, boxShadow: '0 1px 2px rgba(11,40,28,.05),0 26px 50px -34px rgba(11,40,28,.45)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 16 }}>

          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingRight: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>P</div>
            <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em' }}>Pécule</span>
          </div>

          {/* Universe nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 3, background: '#f1f5f3', padding: 5, borderRadius: 14 }}>
            {UNIVERSES.map(u => {
              const active = u.key === currentUniKey;
              const defaultPath = u.pages[0].path;
              return (
                <button
                  key={u.key}
                  onClick={() => navigate(defaultPath)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7, padding: '8px 15px 8px 12px',
                    borderRadius: 11, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    fontSize: 13.5, whiteSpace: 'nowrap', transition: 'all .18s',
                    fontWeight: active ? 600 : 500,
                    background: active ? '#0f1a14' : 'transparent',
                    color: active ? '#fff' : '#5a6a61',
                    boxShadow: active ? '0 6px 16px -6px rgba(11,40,28,.5)' : 'none',
                  }}
                >
                  <span style={{ color: active ? '#34d399' : 'currentColor' }}>{u.icon}</span>
                  {u.label}
                </button>
              );
            })}
          </nav>

          {/* Search */}
          <button style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, background: '#f4f8f6', border: '1px solid #e9efeb', borderRadius: 12, padding: '9px 12px', color: '#8a988f', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .18s', width: 292, height: 42 }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6.4" cy="6.4" r="4.4" /><line x1="9.7" y1="9.7" x2="13" y2="13" /></svg>
            <span style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono',monospace", background: '#fff', border: '1px solid #e3ebe6', borderRadius: 6, padding: '2px 6px', color: '#93a29a' }}>⌘K</span>
          </button>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f4f8f6', border: '1px solid #e9efeb', borderRadius: 14, padding: 4 }}>
            <button aria-label="Aide" style={{ width: 38, height: 38, borderRadius: 11, border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#5a6a61' }}>
              <IconHelp />
            </button>

            <div style={{ position: 'relative' }}>
              <button onClick={toggleNotif} aria-label="Notifications" style={{ position: 'relative', width: 38, height: 38, borderRadius: 11, border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#5a6a61' }}>
                <IconBell />
                <span style={{ position: 'absolute', top: 7, right: 8, width: 8, height: 8, borderRadius: '50%', background: '#e2574c', border: '2px solid #f4f8f6' }} />
              </button>
            </div>

            {/* Profile */}
            <div style={{ position: 'relative' }}>
              <button onClick={toggleProfile} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '4px 11px 4px 4px', borderRadius: 11, border: 'none', background: 'transparent', cursor: 'pointer' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: '#0b1611', color: '#c9f24e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>CM</div>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>Camille M.</div>
                  <div style={{ fontSize: 10.5, color: '#93a29a' }}>Premium</div>
                </div>
                <IconChevronDown />
              </button>

              {profileOpen && (
                <div style={{ position: 'absolute', right: 0, top: 52, width: 236, background: '#fff', border: '1px solid #e3ebe6', borderRadius: 16, boxShadow: '0 16px 44px -14px rgba(11,40,28,.34)', padding: 8, zIndex: 50 }}>
                  <div style={{ padding: '12px 12px 10px', borderBottom: '1px solid #f2f6f3', marginBottom: 6 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>Camille Moreau</div>
                    <div style={{ fontSize: 11.5, color: '#93a29a' }}>camille@pecule.fr</div>
                  </div>
                  {PROFILE_MENU.map(({ label, Icon }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 10, fontSize: 13, color: '#243029', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#f4f8f6')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <span style={{ color: '#93a29a', display: 'flex' }}><Icon /></span>{label}
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid #f2f6f3', marginTop: 6, paddingTop: 6 }}>
                    <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 10, fontSize: 13, color: '#b23b30', cursor: 'pointer' }}>
                      <IconLogout /> Se déconnecter
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Notif panel */}
      {notifOpen && (
        <div style={{ position: 'fixed', right: 30, top: 92, width: 330, background: '#fff', border: '1px solid #e3ebe6', borderRadius: 18, boxShadow: '0 24px 56px -16px rgba(11,40,28,.38)', zIndex: 60, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 18px', borderBottom: '1px solid #f2f6f3' }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Notifications</span>
            <span style={{ fontSize: 11.5, color: '#0e9f6e', fontWeight: 600, cursor: 'pointer' }}>Tout marquer lu</span>
          </div>
          {notifs.map(n => (
            <div key={n.title} style={{ display: 'flex', gap: 12, padding: '13px 18px', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: n.color, marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.35 }}>{n.title}</div>
                <div style={{ fontSize: 11.5, color: '#93a29a', marginTop: 2 }}>{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── MAIN ── */}
      <main style={{ flex: 1, width: '100%', maxWidth: 1480, margin: '0 auto', padding: '22px 24px 14px' }}>

        {/* Page header + period */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: showSubNav ? 14 : 20 }}>
          <div>
            <div style={{ fontSize: 13, color: '#93a29a' }}>{pageEyebrow}</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.025em', margin: '4px 0 0' }}>{pageTitle}</h1>
            <div style={{ fontSize: 12.5, color: '#93a29a', fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>{period.d0} → {period.d1}</div>
          </div>

          {showPeriod && (
            <div style={{ display: 'flex', gap: 4, background: '#fff', padding: 5, borderRadius: 13, border: '1px solid #e3ebe6' }}>
              {(['s1', 't2', 'y12'] as const).map(k => {
                const labels: Record<string, string> = { s1: '1er semestre', t2: '2e trimestre', y12: '12 mois' };
                const active = periodKey === k;
                return (
                  <button key={k} onClick={() => setPeriod(k)} style={{ padding: '8px 15px', borderRadius: 9, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, transition: 'all .15s', background: active ? '#0f1a14' : 'transparent', color: active ? '#fff' : '#59685f' }}>
                    {labels[k]}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Sub-navigation */}
        {showSubNav && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#93a29a' }}>{currentUni.label}</span>
            <span style={{ width: 1, height: 16, background: '#e3ebe6' }} />
            <div style={{ display: 'flex', gap: 7 }}>
              {currentUni.pages.map(p => {
                const active = loc.pathname === p.path;
                return (
                  <button
                    key={p.path}
                    onClick={() => navigate(p.path)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 7, padding: '7px 14px',
                      borderRadius: 10, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13,
                      fontWeight: 600, transition: 'all .15s', background: '#fff',
                      color: active ? '#0f1a14' : '#59685f',
                      border: active ? '1px solid #bfe3cf' : '1px solid #e3ebe6',
                    }}
                  >
                    {active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0e9f6e' }} />}
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ maxWidth: 1480, width: '100%', margin: '14px auto 0', padding: '0 24px' }}>
        <div style={{ background: '#07150f', borderRadius: 20, color: '#e9f0ea', padding: '34px 32px 26px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, bottom: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.08),transparent 70%)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 28, position: 'relative' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>P</div>
                <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>Pécule</span>
              </div>
              <p style={{ fontSize: 12, color: '#93a89b', lineHeight: 1.6, margin: '14px 0 0', maxWidth: 340 }}>Pécule SAS — agrégateur de comptes & outil de pilotage financier personnel. Service de fourniture d'informations sur les comptes (DSP2) opéré via un prestataire agréé.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, fontSize: 11.5, color: '#7fd9af', fontWeight: 600 }}>
                <IconShield size={14} color="#7fd9af" />
                Données chiffrées (AES-256) · Conforme RGPD
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#5e7368', fontWeight: 700, marginBottom: 2 }}>Produit</div>
              {footProduct.map(l => <div key={l} style={{ fontSize: 12.5, color: '#93a89b', marginTop: 11, cursor: 'pointer' }}>{l}</div>)}
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#5e7368', fontWeight: 700, marginBottom: 2 }}>Légal</div>
              {footLegal.map(l => <div key={l} style={{ fontSize: 12.5, color: '#93a89b', marginTop: 11, cursor: 'pointer' }}>{l}</div>)}
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#5e7368', fontWeight: 700, marginBottom: 2 }}>Société</div>
              {footCompany.map(l => <div key={l} style={{ fontSize: 12.5, color: '#93a89b', marginTop: 11, cursor: 'pointer' }}>{l}</div>)}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 26, paddingTop: 18, position: 'relative' }}>
            <p style={{ fontSize: 11, color: '#5e7368', lineHeight: 1.7, margin: 0 }}>Pécule SAS au capital de 120 000 € — RCS Paris 912 345 678 — Siège social : 24 rue de la Banque, 75002 Paris. Immatriculée à l'ORIAS sous le n° 22 001 234. Agrément ACPR. Les projections affichées sont des estimations non contractuelles et ne constituent pas une recommandation financière.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 18, paddingTop: 18, position: 'relative' }}>
            <div style={{ fontSize: 11.5, color: '#5e7368' }}>© 2026 Pécule SAS — Tous droits réservés.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              {['Mentions légales', 'CGU', 'Confidentialité', 'Cookies'].map(l => (
                <span key={l} style={{ fontSize: 11.5, color: '#93a89b', cursor: 'pointer' }}>{l}</span>
              ))}
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#93a89b', cursor: 'pointer' }}>
                <IconGlobe /> Français
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
