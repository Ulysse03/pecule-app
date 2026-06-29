import Layout from '../components/Layout';
import { contracts } from '../data/mock';

export default function Contrats() {
  return (
    <Layout pageEyebrow="Engagements pluri-échéances" pageTitle="Contrats & engagements">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* KPI tiles */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #0e9f6e' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Payé d'avance · résultat à venir</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#0e9f6e', letterSpacing: '-.02em', lineHeight: 1 }}>2 856 €</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>cash décaissé, charge étalée</div>
          </div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #e2574c' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Charges à payer</div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#e2574c', letterSpacing: '-.02em', lineHeight: 1 }}>540 €</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>cash à venir</div>
          </div>
        </section>
        <section style={{ background: '#c9f24e', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700 }}>Décalage net</div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#0a1f0a', letterSpacing: '-.02em', lineHeight: 1 }}>+2 316 €</div>
            <div style={{ fontSize: 11, color: '#3a4a12', marginTop: 7 }}>cash / résultat</div>
          </div>
        </section>

        {/* contrats suivis */}
        <section style={{ gridColumn: 'span 4', background: '#07150f', borderRadius: 20, padding: 24, color: '#e9f0ea' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Contrats suivis</div>
            <div style={{ fontSize: 11.5, color: '#93a89b', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#c9f24e', display: 'inline-block' }} />Cash décaissé
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #7fd9af', boxSizing: 'border-box', display: 'inline-block' }} />Résultat consommé
              </span>
            </div>
          </div>

          {contracts.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
              {/* name + icon */}
              <div style={{ width: 230, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#07150f', flexShrink: 0 }}>{c.ini}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: '#5e7368' }}>{c.cat}</div>
                </div>
              </div>
              {/* badge */}
              <div style={{ width: 104, flexShrink: 0 }}>
                <span style={{ fontSize: 10.5, fontWeight: 600, color: c.bColor, background: c.bBg, padding: '3px 9px', borderRadius: 20 }}>{c.badge}</span>
              </div>
              {/* tracks */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                  <span style={{ width: 50, fontSize: 10, color: '#7fd9af', flexShrink: 0 }}>Cash</span>
                  <div style={{ flex: 1, position: 'relative', height: 11 }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: 4.5, height: 2, background: 'rgba(255,255,255,.1)' }} />
                    {c.cash.map((m, i) => (
                      <div key={i} style={{ position: 'absolute', top: 0, left: m.left, width: 11, height: 11, borderRadius: '50%', background: '#c9f24e', transform: 'translateX(-50%)', boxShadow: '0 0 0 3px #07150f' }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ width: 50, fontSize: 10, color: '#93a89b', flexShrink: 0 }}>Résultat</span>
                  <div style={{ flex: 1, position: 'relative', height: 11 }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: 4.5, height: 2, background: 'rgba(255,255,255,.1)' }} />
                    {c.result.map((r, i) => (
                      <div key={i} style={{ position: 'absolute', top: 0, left: r.left, width: 11, height: 11, borderRadius: '50%', border: `2px solid ${c.color}`, background: '#07150f', boxSizing: 'border-box', transform: 'translateX(-50%)' }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 59, marginTop: 6, fontSize: 10, color: '#5e7368', fontFamily: "'JetBrains Mono',monospace" }}>
                  <span>{c.start}</span><span>{c.end}</span>
                </div>
              </div>
              {/* amount */}
              <div style={{ width: 130, textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, fontWeight: 700 }}>{c.total}</div>
                <div style={{ fontSize: 10.5, color: '#93a89b', marginTop: 2 }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
