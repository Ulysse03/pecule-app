import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePeriod } from '../context/PeriodContext';
import { notifs, footProduct, footLegal, footCompany } from '../data/mock';
import {
  IconDash, IconComptes, IconFlux, IconContrats, IconLedger,
  IconProjections, IconPatrimoine, IconFiscalite,
  IconBell, IconHelp, IconSearch, IconChevronDown,
  IconLogout, IconUser, IconSettings, IconSecurity, IconPrefs, IconHelpCircle,
  IconShield, IconGlobe,
} from './Icons';

const NAV = [
  { path: '/dashboard', label: 'Tableau de bord', Icon: IconDash },
  { path: '/comptes', label: 'Comptes', Icon: IconComptes },
  { path: '/flux', label: 'Flux', Icon: IconFlux },
  { path: '/contrats', label: 'Contrats', Icon: IconContrats },
  { path: '/ledger', label: 'Ledger', Icon: IconLedger },
  { path: '/projections', label: 'Projections', Icon: IconProjections },
  { path: '/patrimoine', label: 'Patrimoine', Icon: IconPatrimoine },
  { path: '/fiscalite', label: 'Fiscalité', Icon: IconFiscalite },
];

const PROFILE_MENU = [
  { label: 'Mon profil', Icon: IconUser },
  { label: 'Paramètres du compte', Icon: IconSettings },
  { label: 'Sécurité & connexion', Icon: IconSecurity },
  { label: 'Préférences & langue', Icon: IconPrefs },
  { label: 'Aide & support', Icon: IconHelpCircle },
];

const st = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    background: '#eef3f0',
    paddingBottom: 24,
  },
  header: {
    position: 'sticky' as const,
    top: 18,
    zIndex: 40,
    maxWidth: 1480,
    width: '100%',
    margin: '18px auto 0',
    padding: '0 24px',
  },
  card: {
    background: 'rgba(255,255,255,.9)',
    backdropFilter: 'blur(14px)',
    border: '1px solid #e3ebe6',
    borderRadius: 20,
    boxShadow: '0 1px 3px rgba(11,40,28,.06),0 22px 44px -32px rgba(11,40,28,.4)',
    padding: '11px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 18,
  },
  navWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    background: '#f4f8f6',
    padding: 5,
    borderRadius: 15,
    border: '1px solid #e9efeb',
  },
  actionCluster: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#f4f8f6',
    border: '1px solid #e9efeb',
    borderRadius: 14,
    padding: 4,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 11,
    border: 'none',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#5a6a61',
    transition: 'all .15s',
  },
};

function NavBtn({ path, label, Icon }: { path: string; label: string; Icon: React.FC<any> }) {
  const nav = useNavigate();
  const loc = useLocation();
  const active = loc.pathname === path;
  return (
    <button
      onClick={() => nav(path)}
      style={{
        display: 'flex', alignItems: 'center', gap: 7,
        padding: '8px 14px 8px 11px', borderRadius: 11, border: 'none', cursor: 'pointer',
        fontFamily: 'inherit', fontSize: 13.5, whiteSpace: 'nowrap', transition: 'all .18s',
        fontWeight: active ? 600 : 500,
        background: active ? '#fff' : 'transparent',
        color: active ? '#0a7a52' : '#5a6a61',
        boxShadow: active ? '0 2px 6px -1px rgba(11,40,28,.13),0 1px 2px rgba(11,40,28,.07)' : 'none',
      }}
    >
      <Icon stroke={active ? 1.8 : 1.7} />
      {label}
    </button>
  );
}

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

  const toggleProfile = () => { setProfileOpen(p => !p); setNotifOpen(false); };
  const toggleNotif = () => { setNotifOpen(p => !p); setProfileOpen(false); };

  return (
    <div style={st.wrap}>
      {/* ── header ── */}
      <header style={st.header}>
        <div style={st.card}>
          {/* brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingRight: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>P</div>
            <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em' }}>Pécule</span>
          </div>

          {/* nav */}
          <nav style={st.navWrap}>
            {NAV.map(n => <NavBtn key={n.path} {...n} />)}
          </nav>

          {/* search */}
          <button style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, background: '#f4f8f6', border: '1px solid #e9efeb', borderRadius: 12, padding: '9px 12px', color: '#8a988f', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .18s' }}>
            <IconSearch />
            <span style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono', monospace", background: '#fff', border: '1px solid #e3ebe6', borderRadius: 6, padding: '2px 6px', color: '#93a29a' }}>⌘K</span>
          </button>

          {/* actions */}
          <div style={st.actionCluster}>
            <button aria-label="Aide" style={st.iconBtn}><IconHelp /></button>

            <div style={{ position: 'relative' }}>
              <button onClick={toggleNotif} aria-label="Notifications" style={{ ...st.iconBtn, position: 'relative' }}>
                <IconBell />
                <span style={{ position: 'absolute', top: 7, right: 8, width: 8, height: 8, borderRadius: '50%', background: '#e2574c', border: '2px solid #f4f8f6' }} />
              </button>
            </div>

            {/* profile */}
            <div style={{ position: 'relative' }}>
              <button onClick={toggleProfile} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '4px 11px 4px 4px', borderRadius: 11, border: 'none', background: 'transparent', cursor: 'pointer', transition: 'all .15s' }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', borderRadius: 10, fontSize: 13, color: '#b23b30', cursor: 'pointer' }}>
                      <IconLogout />{' '}Se déconnecter
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* notif panel */}
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

      {/* ── main ── */}
      <main style={{ flex: 1, width: '100%', maxWidth: 1480, margin: '0 auto', padding: '22px 24px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 13, color: '#93a29a' }}>{pageEyebrow}</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.025em', margin: '4px 0 0' }}>{pageTitle}</h1>
            <div style={{ fontSize: 12.5, color: '#93a29a', fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>
              {period.d0} → {period.d1}
            </div>
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

        {children}
      </main>

      {/* ── footer ── */}
      <footer style={{ maxWidth: 1480, width: '100%', margin: '14px auto 0', padding: '0 24px' }}>
        <div style={{ background: '#07150f', borderRadius: 20, color: '#e9f0ea', padding: '34px 32px 26px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, bottom: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.08),transparent 70%)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 28, position: 'relative' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>P</div>
                <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>Pécule</span>
              </div>
              <p style={{ fontSize: 12, color: '#93a89b', lineHeight: 1.6, margin: '14px 0 0', maxWidth: 340 }}>
                Pécule SAS — agrégateur de comptes &amp; outil de pilotage financier personnel. Service de fourniture d'informations sur les comptes (DSP2) opéré via un prestataire agréé.
              </p>
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
            <p style={{ fontSize: 11, color: '#5e7368', lineHeight: 1.7, margin: 0 }}>
              Pécule SAS au capital de 120 000 € — RCS Paris 912 345 678 — Siège social : 24 rue de la Banque, 75002 Paris — N° TVA FR 32 912345678. Immatriculée à l'ORIAS sous le n° 22 001 234 (www.orias.fr) en qualité d'intermédiaire. Agrément d'établissement de paiement délivré par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution, 4 place de Budapest, 75009 Paris). Pécule ne fournit pas de conseil en investissement ; les projections affichées sont des estimations non contractuelles et ne constituent pas une recommandation financière. Les performances passées ne préjugent pas des performances futures.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 18, paddingTop: 18, position: 'relative' }}>
            <div style={{ fontSize: 11.5, color: '#5e7368' }}>© 2026 Pécule SAS — Tous droits réservés.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              {['Mentions légales', 'CGU', 'Confidentialité', 'Cookies'].map(l => (
                <span key={l} style={{ fontSize: 11.5, color: '#93a89b', cursor: 'pointer' }}>{l}</span>
              ))}
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#93a89b', cursor: 'pointer' }}>
                <IconGlobe />Français
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
