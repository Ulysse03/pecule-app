import Layout from '../components/Layout';
import { usePeriod } from '../context/PeriodContext';
import { eur, seur, netBridge, allocation, debts } from '../data/mock';

export default function Patrimoine() {
  const { period } = usePeriod();
  const bridge = netBridge(period);

  return (
    <Layout pageEyebrow="Logique bilan — stock à date" pageTitle="Patrimoine net">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* patrimoine net hero */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', color: '#e9f0ea', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Patrimoine net</span>
            <span style={{ color: '#5e7368', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", border: '1px solid rgba(255,255,255,.12)', padding: '3px 9px', borderRadius: 6 }}>au {period.d1}</span>
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: 54, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1 }}>{eur(period.netEnd)}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '7px 14px', borderRadius: 30, fontSize: 14, fontWeight: 600, marginTop: 16 }}>
              ▲ {seur(period.netEnd - period.netStart)} sur la période
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 14, padding: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, color: '#5e7368' }}>Séquence de référence</div>
              <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace" }}>{eur(period.netStart)}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: '#5e7368' }}>au</div>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#9fe6c4' }}>{period.d0}</div>
            </div>
          </div>
        </section>

        {/* composition */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Composition du patrimoine</div>
          {allocation.map(al => (
            <div key={al.name} style={{ marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 6 }}>
                <span style={{ fontWeight: 600 }}>{al.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: '#0f1a14' }}>{al.value}</span>
              </div>
              <div style={{ height: 8, borderRadius: 5, background: '#f0f4f1', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: al.pct, background: al.color, borderRadius: 5 }} />
              </div>
            </div>
          ))}
        </section>

        {/* dettes adossées */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22, borderTop: '3px solid #e2574c' }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Dettes adossées</div>
          {debts.map(d => (
            <div key={d.name} style={{ padding: '11px 0', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{d.name}</div>
                  <div style={{ fontSize: 11, color: '#93a29a', marginTop: 2 }}>↳ {d.asset}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 600, color: '#e2574c' }}>{d.amount}</div>
                  <div style={{ fontSize: 10.5, color: '#93a29a' }}>{d.ltv}</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* pont du patrimoine */}
        <section style={{ gridColumn: 'span 4', background: '#07150f', borderRadius: 20, padding: 24, color: '#e9f0ea' }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Pont du patrimoine net</div>
          <div style={{ fontSize: 12.5, color: '#93a89b', marginTop: 2 }}>Ce qui explique l'évolution entre les deux séquences.</div>
          <div style={{ display: 'flex', marginTop: 18 }}>
            {bridge.map((b, i) => (
              <div key={i} style={{ flex: 1, padding: '0 13px', borderRight: i < bridge.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
                <div style={{ fontSize: 17, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: b.colorD }}>{b.amount}</div>
                <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{b.label}</div>
                <div style={{ fontSize: 10, color: '#5e7368', marginTop: 4, lineHeight: 1.35, minHeight: 24 }}>{b.note}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
