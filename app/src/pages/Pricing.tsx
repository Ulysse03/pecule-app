import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faq = [
  { q: 'Puis-je résilier à tout moment ?', a: 'Oui. Les plans sont sans engagement et résiliables en un clic depuis vos paramètres. Aucun prélèvement ne se poursuit après résiliation.' },
  { q: 'Mes données bancaires sont-elles en sécurité ?', a: 'Les connexions passent par des agrégateurs agréés ACPR (Powens, Bridge) en lecture seule. Aucune donnée de carte n\'est stockée — les paiements transitent par Stripe.' },
  { q: 'Que se passe-t-il si je rétrograde ?', a: 'Vos écritures et documents restent accessibles. Les fonctions du palier supérieur (grand livre, scénarios) sont mises en pause sans perte de données.' },
  { q: 'Le plan annuel est-il vraiment moins cher ?', a: 'Oui — facturé une fois par an, il revient à 2 mois offerts par rapport au mensuel, sur Premium comme sur Patrimoine.' },
  { q: 'Puis-je exporter ma comptabilité ?', a: 'Le plan Patrimoine inclut l\'export comptable et fiscal (formats standard) pour votre expert-comptable ou votre déclaration.' },
  { q: 'Y a-t-il une version d\'essai du Premium ?', a: 'Le plan Découverte est gratuit à vie. Vous pouvez passer en Premium quand vous le souhaitez, sans reconfigurer vos comptes.' },
];

const yes = '#0a7a52', no = '#c5cfc8', txt = '#0f1a14';
const C = (a: string, b: string, c: string) => ({
  c0: a, c0col: a === '✓' ? yes : a === '—' ? no : txt,
  c1: b, c1col: b === '✓' ? yes : b === '—' ? no : txt,
  c2: c, c2col: c === '✓' ? yes : c === '—' ? no : txt,
});

const matrix = [
  { group: 'Agrégation & flux', rows: [
    { label: 'Comptes bancaires connectés', ...C('2', 'Illimités', 'Illimités') },
    { label: 'Synchronisation DSP2', ...C('Quotidienne', 'Temps réel', 'Temps réel') },
    { label: 'Catégorisation automatique', ...C('✓', '✓', '✓') },
    { label: 'Règles de mapping personnalisées', ...C('—', '✓', '✓') },
  ]},
  { group: 'Comptabilité & pilotage', rows: [
    { label: 'Tableau de bord & analyses', ...C('✓', '✓', '✓') },
    { label: 'Grand livre (double-entrée)', ...C('—', '✓', '✓') },
    { label: 'Rebuild comptable déterministe', ...C('—', '✓', '✓') },
    { label: 'Projections & scénarios', ...C('—', '✓', '✓') },
    { label: 'Copilote IA', ...C('—', '✓', '✓') },
  ]},
  { group: 'Patrimoine & fiscalité', rows: [
    { label: 'Suivi du patrimoine net', ...C('Basique', '✓', '✓') },
    { label: 'Amortissements avancés', ...C('—', '—', '✓') },
    { label: 'Candidats fiscaux', ...C('—', '✓', '✓') },
    { label: 'Espaces multiples (SCI, foyer)', ...C('—', '—', '✓') },
    { label: 'Export comptable & fiscal', ...C('—', '—', '✓') },
  ]},
  { group: 'Support & sécurité', rows: [
    { label: 'Chiffrement & coffre-fort documentaire', ...C('✓', '✓', '✓') },
    { label: 'Support', ...C('Communauté', 'Prioritaire', 'Dédié') },
  ]},
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const yearly = billing === 'yearly';
  const navigate = useNavigate();

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: '9px 20px', borderRadius: 10, border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', fontSize: 13.5, fontWeight: 700,
    background: active ? '#0f1a14' : 'transparent', color: active ? '#fff' : '#59685f',
    display: 'inline-flex', alignItems: 'center',
  });

  const plans = [
    { name: 'Découverte', tagline: 'Pour démarrer et agréger vos comptes.', price: '0 €', per: '/ toujours', featured: false,
      sav: '', savCol: '#93a29a',
      bg: '#fff', fg: '#0f1a14', muted: '#93a29a', border: '1px solid #eef3f0', check: '#0e9f6e',
      btnBg: '#fff', btnFg: '#0f1a14', btnBorder: '1px solid #e3ebe6', cta: 'Commencer',
      lines: ['2 comptes bancaires', 'Catégorisation automatique', 'Tableau de bord & analyses'] },
    { name: 'Premium', tagline: 'Le pilotage complet à noyau comptable.', price: yearly ? '119 €' : '11,90 €', per: yearly ? '/ an' : '/ mois', featured: true,
      sav: yearly ? 'soit 9,92 €/mois — 24 € économisés' : '', savCol: '#7fd9af',
      bg: '#07150f', fg: '#fff', muted: '#93a89b', border: '2px solid #07150f', check: '#c9f24e',
      btnBg: '#c9f24e', btnFg: '#07150f', btnBorder: 'none', cta: 'Choisir Premium',
      lines: ['Comptes illimités', 'Grand livre & rebuild', 'Projections & scénarios', 'Copilote IA', 'Candidats fiscaux'] },
    { name: 'Patrimoine', tagline: 'Pour les patrimoines complexes et les SCI.', price: yearly ? '249 €' : '24,90 €', per: yearly ? '/ an' : '/ mois', featured: false,
      sav: yearly ? 'soit 20,75 €/mois — 50 € économisés' : '', savCol: '#0a7a52',
      bg: '#fff', fg: '#0f1a14', muted: '#93a29a', border: '1px solid #eef3f0', check: '#0e9f6e',
      btnBg: '#0f1a14', btnFg: '#fff', btnBorder: 'none', cta: 'Choisir',
      lines: ['Tout Premium', 'Espaces multiples (SCI, foyer)', 'Amortissements avancés', 'Export comptable & fiscal'] },
  ];

  const cols = [
    { name: 'Découverte', price: '0 €', col: '#59685f' },
    { name: 'Premium', price: yearly ? '119 €/an' : '11,90 €', col: '#0a7a52' },
    { name: 'Patrimoine', price: yearly ? '249 €/an' : '24,90 €', col: '#0f1a14' },
  ];

  return (
    <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: '#0f1a14', background: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 0' }}>
          <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#0f1a14' }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: '#07150f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9f24e', fontWeight: 800, fontSize: 15 }}>P</div>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em' }}>Pécule</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#59685f', fontSize: 14, fontWeight: 600, padding: '11px 16px', borderRadius: 11 }}>Produit</button>
            <button onClick={() => navigate('/auth')} style={{ background: 'none', border: '1px solid #e3ebe6', cursor: 'pointer', fontFamily: 'inherit', color: '#0f1a14', fontSize: 14, fontWeight: 600, padding: '11px 16px', borderRadius: 11 }}>Se connecter</button>
            <button onClick={() => navigate('/auth')} style={{ background: '#c9f24e', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#07150f', fontSize: 14, fontWeight: 700, padding: '11px 18px', borderRadius: 11 }}>Essayer gratuitement</button>
          </div>
        </header>

        {/* HERO */}
        <section style={{ textAlign: 'center', padding: '46px 0 30px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#0e9f6e', background: '#eef8f2', padding: '6px 14px', borderRadius: 20 }}>Tarifs</span>
          <h1 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, margin: '20px auto 0', maxWidth: 760 }}>Un prix juste pour des comptes qui tombent juste</h1>
          <p style={{ fontSize: 17, color: '#59685f', lineHeight: 1.55, margin: '18px auto 0', maxWidth: 580 }}>Sans engagement, résiliable à tout moment. Vos données restent les vôtres — export comptable inclus à chaque palier payant.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#f7faf8', border: '1px solid #e3ebe6', borderRadius: 14, padding: 5, marginTop: 28 }}>
            <button onClick={() => setBilling('monthly')} style={tabStyle(!yearly)}>Mensuel</button>
            <button onClick={() => setBilling('yearly')} style={tabStyle(yearly)}>
              Annuel
              <span style={{ fontSize: 11, fontWeight: 700, color: '#0a7a52', background: '#dff3e8', padding: '2px 8px', borderRadius: 20, marginLeft: 8 }}>−2 mois</span>
            </button>
          </div>
        </section>

        {/* PLAN CARDS */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, alignItems: 'stretch', padding: '14px 0 10px' }}>
          {plans.map(p => (
            <div key={p.name} style={{ border: p.border, borderRadius: 22, padding: 30, background: p.bg, color: p.fg, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {p.featured && <span style={{ position: 'absolute', top: 20, right: 20, fontSize: 10.5, fontWeight: 700, background: '#c9f24e', color: '#0a1f0a', padding: '4px 11px', borderRadius: 20 }}>Le plus choisi</span>}
              <div style={{ fontSize: 16, fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: p.muted, marginTop: 5, lineHeight: 1.45, minHeight: 38 }}>{p.tagline}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, marginTop: 20 }}>
                <span style={{ fontSize: 42, fontWeight: 800, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em' }}>{p.price}</span>
                <span style={{ fontSize: 13, color: p.muted, paddingBottom: 8 }}>{p.per}</span>
              </div>
              <div style={{ fontSize: 12, color: p.savCol, marginTop: 6, minHeight: 18, fontWeight: 600 }}>{p.sav}</div>
              <button onClick={() => navigate('/auth')} style={{ marginTop: 18, padding: 13, borderRadius: 12, fontSize: 14, fontWeight: 700, background: p.btnBg, color: p.btnFg, border: p.btnBorder, cursor: 'pointer', fontFamily: 'inherit' }}>{p.cta}</button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 22, flex: 1 }}>
                {p.lines.map(l => (
                  <div key={l} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: p.fg, lineHeight: 1.4 }}>
                    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke={p.check} strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><path d="M3 8.5 6.5 12 13 4" /></svg>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* COMPARISON MATRIX */}
        <section style={{ padding: '52px 0 10px' }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.025em', textAlign: 'center', margin: 0 }}>Comparer en détail</h2>
          <p style={{ fontSize: 14.5, color: '#93a29a', textAlign: 'center', margin: '10px 0 0' }}>Toutes les fonctionnalités, palier par palier.</p>
          <div style={{ marginTop: 32, border: '1px solid #eef3f0', borderRadius: 20, overflow: 'hidden' }}>
            {/* header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', background: '#fbfdfc', borderBottom: '1px solid #eef3f0' }}>
              <div style={{ padding: '18px 22px', fontSize: 13, fontWeight: 700, color: '#59685f' }}>Fonctionnalité</div>
              {cols.map(c => (
                <div key={c.name} style={{ padding: '18px 16px', textAlign: 'center', borderLeft: '1px solid #eef3f0' }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: c.col }}>{c.name}</div>
                  <div style={{ fontSize: 11.5, color: '#93a29a', fontFamily: "'JetBrains Mono',monospace", marginTop: 3 }}>{c.price}</div>
                </div>
              ))}
            </div>
            {matrix.map(g => (
              <div key={g.group}>
                <div style={{ padding: '13px 22px', background: '#f4f8f6', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: '#7a8a80' }}>{g.group}</div>
                {g.rows.map(r => (
                  <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', borderBottom: '1px solid #f3f7f4', alignItems: 'center' }}>
                    <div style={{ padding: '14px 22px', fontSize: 13.5, color: '#0f1a14' }}>{r.label}</div>
                    <div style={{ padding: '14px 16px', textAlign: 'center', borderLeft: '1px solid #f3f7f4', fontSize: 13, fontWeight: 600, color: r.c0col }}>{r.c0}</div>
                    <div style={{ padding: '14px 16px', textAlign: 'center', borderLeft: '1px solid #f3f7f4', fontSize: 13, fontWeight: 600, color: r.c1col, background: '#fcfefb' }}>{r.c1}</div>
                    <div style={{ padding: '14px 16px', textAlign: 'center', borderLeft: '1px solid #f3f7f4', fontSize: 13, fontWeight: 600, color: r.c2col }}>{r.c2}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '54px 0 10px' }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.025em', textAlign: 'center', margin: 0 }}>Questions fréquentes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
            {faq.map(f => (
              <div key={f.q} style={{ border: '1px solid #eef3f0', borderRadius: 16, padding: 22 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{f.q}</div>
                <div style={{ fontSize: 13.5, color: '#59685f', lineHeight: 1.6, marginTop: 10 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ margin: '56px 0', background: '#07150f', borderRadius: 26, padding: 54, textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.025em', margin: 0 }}>Commencez gratuitement aujourd'hui</h2>
          <p style={{ fontSize: 16, color: '#93a89b', margin: '14px auto 0', maxWidth: 480, lineHeight: 1.55 }}>Agrégez vos comptes en 2 minutes. Aucune carte requise pour le plan Découverte.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/auth')} style={{ background: '#c9f24e', color: '#07150f', fontSize: 15, fontWeight: 700, padding: '15px 26px', borderRadius: 13, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Créer mon compte</button>
            <button onClick={() => navigate('/dashboard')} style={{ background: 'rgba(255,255,255,.08)', color: '#fff', fontSize: 15, fontWeight: 600, padding: '15px 26px', borderRadius: 13, border: '1px solid rgba(255,255,255,.14)', cursor: 'pointer', fontFamily: 'inherit' }}>Voir une démo</button>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #eef3f0', padding: '30px 0 50px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: 11.5, color: '#93a29a' }}>
          <span>© 2026 Pécule SAS — RCS Paris 912 345 678 — ORIAS 22 001 234 — Agréé ACPR.</span>
          <span>Les projections sont des estimations non contractuelles. Pas de conseil en investissement.</span>
        </footer>
      </div>
    </div>
  );
}
