import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate();
  const login = mode === 'login';

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, padding: 9, borderRadius: 9, border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', fontSize: 13.5, fontWeight: 600,
    background: active ? '#fff' : 'transparent', color: active ? '#0a7a52' : '#59685f',
    boxShadow: active ? '0 1px 3px rgba(11,40,28,.12)' : 'none', transition: 'all .15s',
  });

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#fff', fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }}>

      {/* LEFT PANEL */}
      <div style={{ background: '#07150f', color: '#e9f0ea', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -80, top: -80, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
        <div style={{ position: 'absolute', left: -60, bottom: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle,rgba(14,159,110,.18),transparent 70%)' }} />

        <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', position: 'relative' }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 17 }}>P</div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>Pécule</span>
        </button>

        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7fd9af', fontWeight: 700 }}>Votre vérité financière</div>
          <h1 style={{ fontSize: 38, lineHeight: 1.1, fontWeight: 800, letterSpacing: '-.03em', margin: '16px 0 0', color: '#fff' }}>Chaque euro, capté, classé et écrit au grand livre.</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 30 }}>
            {['Écritures équilibrées, recalculables à tout instant', 'Projections de trésorerie et scénarios', 'Un copilote qui propose, vous qui décidez'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14.5, color: '#cdd9d1' }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(201,242,78,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#c9f24e" strokeWidth="2.2"><path d="M2.5 7.5 6 11l5.5-7" /></svg>
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: '#5e7368' }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#7fd9af" strokeWidth="1.7"><path d="M8 1.5 13 4v4c0 3-2.2 5.2-5 6.5C5.2 13.2 3 11 3 8V4Z" /><path d="M6 8l1.5 1.5L10.5 6.5" /></svg>
          Agrégation DSP2 chiffrée · agréé ACPR · conforme RGPD
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          {/* Tab switch */}
          <div style={{ display: 'flex', gap: 4, background: '#f4f8f6', border: '1px solid #e9efeb', padding: 5, borderRadius: 13, marginBottom: 28 }}>
            <button onClick={() => setMode('login')} style={tabStyle(login)}>Connexion</button>
            <button onClick={() => setMode('signup')} style={tabStyle(!login)}>Créer un compte</button>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: 0, color: '#0f1a14' }}>
            {login ? 'Bon retour 👋' : 'Créer votre compte'}
          </h2>
          <p style={{ fontSize: 14, color: '#93a29a', margin: '8px 0 0' }}>
            {login ? 'Accédez à votre pilotage financier.' : 'Quelques secondes pour démarrer, sans carte.'}
          </p>

          {/* OAuth */}
          <div style={{ marginTop: 24 }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: 13, border: '1px solid #e3ebe6', background: '#fff', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: '#0f1a14' }}>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.8H9v3.5h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6Z" />
                <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3A9 9 0 0 0 9 18Z" />
                <path fill="#FBBC05" d="M3.9 10.7a5.4 5.4 0 0 1 0-3.4V5H.9a9 9 0 0 0 0 8l3-2.3Z" />
                <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 .9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6Z" />
              </svg>
              Continuer avec Google
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#eef3f0' }} />
            <span style={{ fontSize: 12, color: '#a9b5ad' }}>ou par e-mail</span>
            <div style={{ flex: 1, height: 1, background: '#eef3f0' }} />
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {!login && (
              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: '#59685f' }}>Nom complet</label>
                <input type="text" placeholder="Camille Moreau" style={{ width: '100%', marginTop: 6, padding: '12px 14px', border: '1px solid #e3ebe6', borderRadius: 11, fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
              </div>
            )}
            <div>
              <label style={{ fontSize: 12.5, fontWeight: 600, color: '#59685f' }}>E-mail</label>
              <input type="email" placeholder="camille@exemple.fr" style={{ width: '100%', marginTop: 6, padding: '12px 14px', border: '1px solid #e3ebe6', borderRadius: 11, fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: '#59685f' }}>Mot de passe</label>
                {login && <span style={{ fontSize: 12, color: '#0e9f6e', fontWeight: 600, cursor: 'pointer' }}>Oublié ?</span>}
              </div>
              <input type="password" placeholder="••••••••" style={{ width: '100%', marginTop: 6, padding: '12px 14px', border: '1px solid #e3ebe6', borderRadius: 11, fontSize: 14, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            </div>

            <button onClick={() => navigate('/dashboard')} style={{ width: '100%', padding: 14, background: '#0e9f6e', color: '#fff', borderRadius: 12, fontSize: 15, fontWeight: 700, marginTop: 4, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              {login ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </div>

          <p style={{ fontSize: 12, color: '#a9b5ad', lineHeight: 1.5, marginTop: 18, textAlign: 'center' }}>
            {login ? 'Connexion sécurisée — vos identifiants ne quittent jamais un canal chiffré.' : 'En créant un compte, vous acceptez les CGU et la Politique de confidentialité.'}
          </p>
          <p style={{ fontSize: 13.5, color: '#59685f', marginTop: 18, textAlign: 'center' }}>
            {login ? 'Pas encore de compte ?' : 'Vous avez déjà un compte ?'}{' '}
            <span onClick={() => setMode(login ? 'signup' : 'login')} style={{ color: '#0e9f6e', fontWeight: 700, cursor: 'pointer' }}>
              {login ? 'Créer un compte' : 'Se connecter'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
