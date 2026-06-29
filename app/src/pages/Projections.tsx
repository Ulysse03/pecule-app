import { useState } from 'react';
import Layout from '../components/Layout';
import { eur, projectedValue, scenarioDefs, upcoming, subs } from '../data/mock';

export default function Projections() {
  const [years, setYears] = useState(10);
  const [scenario, setScenario] = useState<keyof typeof scenarioDefs>('central');
  const SC = scenarioDefs[scenario];
  const fv = projectedValue(SC.rate, SC.monthly, years);

  return (
    <Layout pageEyebrow="Anticipation & scénarios" pageTitle="Projections">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* projection interactive */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#c9f24e', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Projection de patrimoine</div>
              <div style={{ fontSize: 14, color: '#1f2a0a', marginTop: 6 }}>Patrimoine net estimé dans <b>{years} ans</b></div>
            </div>
            <div style={{ background: '#07150f', color: '#c9f24e', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", padding: '5px 10px', borderRadius: 7 }}>
              +{(SC.rate * 100).toFixed(0)} %/an · {SC.monthly.toLocaleString('fr-FR')} €/mois
            </div>
          </div>

          {/* scenario selector */}
          <div style={{ display: 'flex', gap: 6 }}>
            {(Object.keys(scenarioDefs) as Array<keyof typeof scenarioDefs>).map(k => {
              const s = scenarioDefs[k];
              const active = scenario === k;
              return (
                <button key={k} onClick={() => setScenario(k)} style={{ flex: 1, padding: '7px 10px', borderRadius: 9, border: active ? '2px solid #07150f' : '2px solid rgba(10,31,10,.2)', background: active ? '#07150f' : 'rgba(255,255,255,.4)', color: active ? '#c9f24e' : '#1f2a0a', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                  {s.label}
                </button>
              );
            })}
          </div>

          <div style={{ color: '#0a1f0a', fontSize: 52, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1 }}>{eur(fv)}</div>
          <div>
            <input type="range" min={1} max={30} value={years} onChange={e => setYears(+e.target.value)}
              style={{ width: '100%', accentColor: '#07150f', height: 6, cursor: 'pointer' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#3a4a12', fontFamily: "'JetBrains Mono',monospace", marginTop: 6 }}>
              <span>1 an</span><span>15 ans</span><span>30 ans</span>
            </div>
          </div>
        </section>

        {/* créances & dettes */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Créances &amp; dettes à venir</div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <div style={{ flex: 1, background: '#eef8f2', borderRadius: 12, padding: 13 }}>
              <div style={{ fontSize: 11, color: '#0a7a52', fontWeight: 600 }}>À recevoir</div>
              <div style={{ fontSize: 19, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#0e9f6e', marginTop: 3 }}>+2 720 €</div>
            </div>
            <div style={{ flex: 1, background: '#fdeeec', borderRadius: 12, padding: 13 }}>
              <div style={{ fontSize: 11, color: '#b23b30', fontWeight: 600 }}>À payer</div>
              <div style={{ fontSize: 19, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#e2574c', marginTop: 3 }}>−2 040 €</div>
            </div>
          </div>
          {upcoming.map(u => (
            <div key={u.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: u.dot, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{u.label}</div>
                <div style={{ fontSize: 11, color: '#93a29a' }}>{u.due}</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13.5, fontWeight: 600, color: u.dot }}>{u.amount}</div>
            </div>
          ))}
        </section>

        {/* abonnements */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Abonnements récurrents</div>
            <div style={{ fontSize: 12.5, color: '#93a29a' }}>11 actifs · <b style={{ color: '#0f1a14', fontFamily: "'JetBrains Mono',monospace" }}>86,36 €/mois</b></div>
          </div>
          {subs.map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: '#07150f' }}>{s.ini}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: '#93a29a' }}>Prochain · {s.cycle}</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13.5, fontWeight: 600 }}>{s.price}</div>
            </div>
          ))}
        </section>

        {/* trésorerie prévisionnelle */}
        <section style={{ gridColumn: 'span 4', background: '#07150f', borderRadius: 20, padding: 24, color: '#e9f0ea' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Trésorerie prévisionnelle</div>
              <div style={{ fontSize: 12.5, color: '#93a89b', marginTop: 2 }}>Solde de compte projeté sur 8 semaines, échéances intégrées.</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: '#5e7368' }}>Point bas estimé</div>
              <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#c9f24e' }}>2 180 € · S5</div>
            </div>
          </div>
          <svg viewBox="0 0 1180 190" width="100%" height={170} preserveAspectRatio="none">
            <defs>
              <linearGradient id="pjGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#34d399" stopOpacity="0.2" />
                <stop offset="1" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="55" x2="1180" y2="55" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
            <line x1="0" y1="120" x2="1180" y2="120" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
            <path d="M20,70 L165,55 L310,95 L455,80 L600,130 L745,108 L890,75 L1035,52 L1160,40 L1160,180 L20,180 Z" fill="url(#pjGrad)" />
            <polyline points="20,70 165,55 310,95 455,80 600,130 745,108 890,75 1035,52 1160,40" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="600" cy="130" r="5" fill="#07150f" stroke="#e2574c" strokeWidth="3" />
            <circle cx="1160" cy="40" r="5.5" fill="#07150f" stroke="#34d399" strokeWidth="3" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: '#5e7368', fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>
            {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'].map(s => <span key={s}>{s}</span>)}
          </div>
        </section>
      </div>
    </Layout>
  );
}
