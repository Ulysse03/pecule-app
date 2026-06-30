import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  { icon: '⇄', title: 'Flux & ingestion', desc: 'Import bancaire Bridge + CSV, dédoublonnage, détection des transferts internes, catégorisation par règles puis IA.' },
  { icon: '📒', title: 'Grand livre V2', desc: 'Chaque opération devient une écriture équilibrée (débit = crédit). Recalcul déterministe depuis les sources.' },
  { icon: '📈', title: 'Résultat & trésorerie', desc: 'Distinguez ce qui change votre patrimoine de ce qui bouge votre cash, période par période, via des ponts clairs.' },
  { icon: '🏛️', title: 'Patrimoine & dettes', desc: 'Actifs en valeur réelle, amortissements, emprunts adossés aux actifs, valeur nette et LTV.' },
  { icon: '🔭', title: 'Projections & scénarios', desc: 'Curseur d\'horizon, scénarios prudent/central/optimiste, stress-tests et journal prévisionnel.' },
  { icon: '✦', title: 'Copilote IA', desc: 'Des propositions annotées avec score de confiance — vous gardez la main, l\'IA ne décide jamais.' },
];

const pipeline = [
  { step: '01 · raw', title: 'Capté', desc: 'Transactions brutes persistées, append-only, jamais altérées.' },
  { step: '02 · normalized', title: 'Normalisé', desc: 'Libellés canoniques, signes, dates de valeur, empreinte de dédoublonnage.' },
  { step: '03 · classified', title: 'Classé', desc: 'Règles utilisateur puis IA avec score ; sinon mis en revue.' },
  { step: '04 · ledgerized', title: 'Écrit', desc: 'Génération d\'écritures équilibrées au grand livre.' },
  { step: '05 · aggregated', title: 'Restitué', desc: 'KPI, résultat, trésorerie, patrimoine, projections.' },
];

const trust = [
  { title: 'DSP2 / PSD2', desc: 'Consentement horodaté, suivi de l\'expiration SCA, révocation à tout moment.' },
  { title: 'Chiffrement', desc: 'TLS en transit, AES-256 au repos, secrets côté serveur uniquement.' },
  { title: 'RGPD', desc: 'Minimisation, export, effacement, registre des traitements.' },
  { title: 'PCI', desc: 'Aucune donnée carte stockée — flux de paiement délégués à Stripe.' },
];

export default function Landing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const yearly = billing === 'yearly';
  const navigate = useNavigate();

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 18px', borderRadius: '9px', border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', fontSize: '13px', fontWeight: '600',
    background: active ? '#0f1a14' : 'transparent', color: active ? '#fff' : '#59685f', transition: 'all .15s',
  });

  const plans = [
    { name: 'Découverte', tagline: 'Pour démarrer et agréger vos comptes.', price: '0 €', per: '/ toujours', featured: false,
      bg: '#fff', fg: '#0f1a14', muted: '#93a29a', border: '1px solid #eef3f0', check: '#0e9f6e',
      btnBg: '#fff', btnFg: '#0f1a14', btnBorder: '1px solid #e3ebe6', cta: 'Commencer',
      lines: ['2 comptes bancaires', 'Catégorisation automatique', 'Tableau de bord & budgets'] },
    { name: 'Premium', tagline: 'Le pilotage complet, comptable et prévisionnel.', price: yearly ? '99 €' : '9,90 €', per: yearly ? '/ an' : '/ mois', featured: true,
      bg: '#07150f', fg: '#e9f0ea', muted: '#93a89b', border: '1px solid #0e9f6e', check: '#c9f24e',
      btnBg: '#c9f24e', btnFg: '#0a1f0a', btnBorder: 'none', cta: 'Essayer 14 jours',
      lines: ['Comptes illimités', 'Grand livre & rebuild', 'Projections & scénarios', 'Copilote IA', 'Candidats fiscaux'] },
    { name: 'Patrimoine', tagline: 'Pour les patrimoines complexes et les SCI.', price: yearly ? '249 €' : '24,90 €', per: yearly ? '/ an' : '/ mois', featured: false,
      bg: '#fff', fg: '#0f1a14', muted: '#93a29a', border: '1px solid #eef3f0', check: '#0e9f6e',
      btnBg: '#0f1a14', btnFg: '#fff', btnBorder: 'none', cta: 'Choisir',
      lines: ['Tout Premium', 'Espaces multiples (SCI, foyer)', 'Amortissements avancés', 'Export comptable & fiscal'] },
  ];

  return (
    <div style={{ background: '#fff', overflowX: 'hidden', fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", color: '#0f1a14' }}>

      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(14px)', borderBottom: '1px solid #eef3f0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>P</div>
            <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em' }}>Pécule</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 8 }}>
            {['Produit', 'Fonctionnement', 'Sécurité'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: 'none', color: '#59685f', fontSize: 14, fontWeight: 500, padding: '8px 12px', borderRadius: 9 }}>{l}</a>
            ))}
            <a href="#tarifs" style={{ textDecoration: 'none', color: '#59685f', fontSize: 14, fontWeight: 500, padding: '8px 12px', borderRadius: 9 }}>Tarifs</a>
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => navigate('/auth')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#0f1a14', fontSize: 14, fontWeight: 600, padding: '9px 14px', borderRadius: 11 }}>Se connecter</button>
            <button onClick={() => navigate('/auth')} style={{ background: '#0f1a14', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#fff', fontSize: 14, fontWeight: 600, padding: '10px 18px', borderRadius: 11 }}>Essayer gratuitement</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 40px', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eef8f2', color: '#0a7a52', padding: '6px 13px', borderRadius: 30, fontSize: 12.5, fontWeight: 600 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0e9f6e', display: 'inline-block' }} />
            Agrégation bancaire DSP2 · noyau comptable
          </div>
          <h1 style={{ fontSize: 54, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-.03em', margin: '20px 0 0' }}>
            Vos finances, tenues comme une <span style={{ color: '#0e9f6e' }}>comptabilité</span>, pas comme un budget.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#59685f', margin: '20px 0 0', maxWidth: 520 }}>
            Pécule agrège vos comptes, génère des écritures équilibrées, projette votre trésorerie et suit votre patrimoine — avec un copilote qui propose, mais ne décide jamais à votre place.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 30 }}>
            <button onClick={() => navigate('/dashboard')} style={{ background: '#0e9f6e', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#fff', fontSize: 15, fontWeight: 700, padding: '14px 24px', borderRadius: 13 }}>Ouvrir le tableau de bord</button>
            <a href="#fonctionnement" style={{ textDecoration: 'none', color: '#0f1a14', fontSize: 15, fontWeight: 600, padding: '14px 20px', borderRadius: 13, border: '1px solid #e3ebe6' }}>Voir comment ça marche</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 26, fontSize: 12.5, color: '#93a29a' }}>
            <span>🔒 Chiffré AES-256 · RGPD</span>
            <span>✓ Agréé ACPR · ORIAS</span>
          </div>
        </div>

        {/* Hero card */}
        <div style={{ background: '#07150f', borderRadius: 24, padding: 28, color: '#e9f0ea', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 90px -50px rgba(11,40,28,.6)' }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.18),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Patrimoine net</span>
            <span style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono',monospace", color: '#5e7368', border: '1px solid rgba(255,255,255,.12)', padding: '3px 9px', borderRadius: 6 }}>temps réel</span>
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', marginTop: 8 }}>248 520 €</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '6px 12px', borderRadius: 20, fontSize: 12.5, fontWeight: 600, marginTop: 10 }}>▲ +24 520 € sur 12 mois</div>
          <svg viewBox="0 0 460 110" width="100%" height={90} preserveAspectRatio="none" style={{ marginTop: 18 }}>
            <defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#34d399" stopOpacity="0.25" /><stop offset="1" stopColor="#34d399" stopOpacity="0" /></linearGradient></defs>
            <path d="M8,86 L60,80 L112,84 L164,66 L216,58 L268,62 L320,44 L372,36 L424,24 L452,16 L452,104 L8,104 Z" fill="url(#hg)" />
            <polyline points="8,86 60,80 112,84 164,66 216,58 268,62 320,44 372,36 424,24 452,16" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {[{ l: 'Résultat', v: '+9 200 €', c: '#34d399' }, { l: 'Trésorerie', v: '+1 100 €', c: '#c9f24e' }, { l: 'Épargne', v: '34 %', c: '#e9f0ea' }].map(x => (
              <div key={x.l} style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 12, padding: 12 }}>
                <div style={{ fontSize: 10.5, color: '#5e7368' }}>{x.l}</div>
                <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: x.c }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div style={{ borderTop: '1px solid #eef3f0', borderBottom: '1px solid #eef3f0', background: '#fbfdfc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 38, flexWrap: 'wrap', fontSize: 13, color: '#93a29a', fontWeight: 600 }}>
          <span>Connecté à 320+ banques via Bridge</span><span style={{ color: '#dfe7e2' }}>·</span>
          <span>Réconciliation comptable déterministe</span><span style={{ color: '#dfe7e2' }}>·</span>
          <span>Conforme PSD2 / DSP2</span><span style={{ color: '#dfe7e2' }}>·</span>
          <span>Aucune donnée carte stockée</span>
        </div>
      </div>

      {/* FEATURES */}
      <section id="produit" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0e9f6e', fontWeight: 700 }}>Une plateforme, huit domaines</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-.025em', margin: '12px 0 0' }}>Du flux bancaire brut à la décision éclairée</h2>
          <p style={{ fontSize: 16, color: '#59685f', margin: '14px 0 0', lineHeight: 1.6 }}>Chaque euro est capté, normalisé, classé, écrit au grand livre, puis projeté. Une seule source de vérité, recalculable à tout instant.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 44 }}>
          {features.map(f => (
            <div key={f.title} style={{ border: '1px solid #eef3f0', borderRadius: 18, padding: 24, background: '#fff' }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: '#eef8f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a7a52', fontSize: 20 }}>{f.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 16 }}>{f.title}</div>
              <div style={{ fontSize: 13.5, color: '#59685f', lineHeight: 1.55, marginTop: 8 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE */}
      <section id="fonctionnement" style={{ background: '#07150f', color: '#e9f0ea', marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7fd9af', fontWeight: 700 }}>Le pipeline</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-.025em', margin: '12px 0 0', color: '#fff' }}>Un traitement explicite et auditable</h2>
            <p style={{ fontSize: 16, color: '#93a89b', margin: '14px 0 0', lineHeight: 1.6 }}>Rien n'est magique : chaque étape est traçable, rejouable et réversible.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginTop: 48, flexWrap: 'wrap' }}>
            {pipeline.map((p, i) => (
              <div key={p.step} style={{ flex: 1, minWidth: 170, padding: '0 18px', borderRight: i < pipeline.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <div style={{ fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: '#c9f24e' }}>{p.step}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 10 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: '#93a89b', lineHeight: 1.5, marginTop: 8 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="securite" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0e9f6e', fontWeight: 700 }}>Sécurité & conformité</div>
          <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.025em', margin: '12px 0 0' }}>Vos données bancaires méritent un cadre bancaire</h2>
          <p style={{ fontSize: 16, color: '#59685f', lineHeight: 1.6, margin: '16px 0 0' }}>Agrégation server-side via un prestataire agréé, secrets jamais exposés au navigateur, consentement DSP2 horodaté et révocable, et une IA cantonnée à des propositions annotées.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {trust.map(t => (
            <div key={t.title} style={{ border: '1px solid #eef3f0', borderRadius: 16, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: '#59685f', lineHeight: 1.5, marginTop: 6 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section id="tarifs" style={{ background: '#fbfdfc', borderTop: '1px solid #eef3f0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#0e9f6e', fontWeight: 700 }}>Tarifs</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-.025em', margin: '12px 0 0' }}>Simple, sans engagement</h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fff', border: '1px solid #e3ebe6', borderRadius: 13, padding: 5, marginTop: 22 }}>
              <button onClick={() => setBilling('monthly')} style={tabStyle(!yearly)}>Mensuel</button>
              <button onClick={() => setBilling('yearly')} style={tabStyle(yearly)}>Annuel <span style={{ fontSize: 11, opacity: .8 }}>−2 mois</span></button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 40, alignItems: 'stretch' }}>
            {plans.map(p => (
              <div key={p.name} style={{ border: p.border, borderRadius: 20, padding: 28, background: p.bg, color: p.fg, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {p.featured && <span style={{ position: 'absolute', top: 18, right: 18, fontSize: 10.5, fontWeight: 700, background: '#c9f24e', color: '#0a1f0a', padding: '3px 10px', borderRadius: 20 }}>Populaire</span>}
                <div style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: p.muted, marginTop: 4, lineHeight: 1.4, minHeight: 36 }}>{p.tagline}</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 18 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em' }}>{p.price}</span>
                  <span style={{ fontSize: 13, color: p.muted, marginBottom: 8 }}>{p.per}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 20, flex: 1 }}>
                  {p.lines.map(l => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5 }}>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke={p.check} strokeWidth="2"><path d="M3 8.5 6.5 12 13 4.5" /></svg>
                      {l}
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate('/auth')} style={{ marginTop: 24, fontSize: 14, fontWeight: 700, padding: 13, borderRadius: 12, background: p.btnBg, color: p.btnFg, border: p.btnBorder, cursor: 'pointer', fontFamily: 'inherit' }}>{p.cta}</button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button onClick={() => navigate('/pricing')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: '#0e9f6e', fontSize: 14, fontWeight: 600 }}>Voir la comparaison complète →</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ background: '#0e9f6e', borderRadius: 28, padding: '56px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -60, bottom: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(201,242,78,.2)' }} />
          <div style={{ position: 'absolute', left: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }} />
          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.03em', color: '#fff', margin: 0, position: 'relative' }}>Reprenez le contrôle, écriture par écriture.</h2>
          <p style={{ fontSize: 17, color: '#dcfce9', margin: '14px 0 0', position: 'relative' }}>Connectez vos comptes en 2 minutes. Aucune carte requise.</p>
          <button onClick={() => navigate('/auth')} style={{ display: 'inline-block', marginTop: 28, background: '#07150f', color: '#c9f24e', fontSize: 16, fontWeight: 700, padding: '16px 32px', borderRadius: 14, position: 'relative', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Commencer gratuitement</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #eef3f0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 32 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#0e9f6e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>P</div>
                <span style={{ fontSize: 16, fontWeight: 800 }}>Pécule</span>
              </div>
              <p style={{ fontSize: 12.5, color: '#93a29a', lineHeight: 1.6, margin: '14px 0 0', maxWidth: 300 }}>Pécule SAS — agrégateur de comptes & pilotage financier personnel à noyau comptable. Service DSP2 opéré via un prestataire agréé.</p>
            </div>
            {[{ title: 'Produit', links: ['Fonctionnalités', 'Sécurité', 'Tarifs', 'Nouveautés'] },
              { title: 'Légal', links: ['Mentions légales', 'CGU', 'Confidentialité', 'Cookies'] },
              { title: 'Société', links: ['À propos', 'Blog', 'Contact', 'Statut'] }].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#93a29a', fontWeight: 700 }}>{col.title}</div>
                {col.links.map(l => <div key={l} style={{ fontSize: 13, color: '#59685f', marginTop: 11, cursor: 'pointer' }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #eef3f0', marginTop: 32, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: 11.5, color: '#93a29a' }}>
            <span>© 2026 Pécule SAS — RCS Paris 912 345 678 — ORIAS 22 001 234 — Agréé ACPR.</span>
            <span>Les projections sont des estimations non contractuelles. Pas de conseil en investissement.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
