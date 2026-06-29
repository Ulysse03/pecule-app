import Layout from '../components/Layout';
import { usePeriod } from '../context/PeriodContext';
import { eur, seur, netBridge, rtBridge, accounts } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const grid = { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 };

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <section style={{ borderRadius: 20, padding: 22, ...style }}>{children}</section>;
}

export default function Dashboard() {
  const { period } = usePeriod();
  const nav = useNavigate();
  const bridge = netBridge(period);
  const rt = rtBridge(period);

  return (
    <Layout pageEyebrow="Bonjour Camille — voici votre pilotage" pageTitle="Tableau de bord">
      <div style={grid}>

        {/* bilan hero */}
        <Card style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', color: '#e9f0ea', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Bilan — patrimoine net</span>
            <span style={{ color: '#5e7368', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", border: '1px solid rgba(255,255,255,.12)', padding: '3px 9px', borderRadius: 6 }}>stock à date</span>
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: 56, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1 }}>{eur(period.netEnd)}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '7px 14px', borderRadius: 30, fontSize: 14, fontWeight: 600, marginTop: 16 }}>
              ▲ {seur(period.netEnd - period.netStart)} sur la période
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 13, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#5e7368' }}>Actifs</div>
              <div style={{ fontSize: 18, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", marginTop: 3 }}>312 800 €</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 13, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#5e7368' }}>Dettes</div>
              <div style={{ fontSize: 18, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", marginTop: 3, color: '#f3a59d' }}>64 280 €</div>
            </div>
          </div>
        </Card>

        {/* résultat */}
        <Card style={{ background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Résultat</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', color: '#0e9f6e', lineHeight: 1 }}>{seur(period.result)}</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>produits − charges</div>
          </div>
        </Card>

        {/* trésorerie */}
        <Card style={{ background: '#c9f24e', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700 }}>Trésorerie</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', color: '#0a1f0a', lineHeight: 1 }}>{seur(period.treso)}</div>
            <div style={{ fontSize: 11, color: '#3a4a12', marginTop: 7 }}>encaiss. − décaiss.</div>
          </div>
        </Card>

        {/* taux d'épargne */}
        <Card style={{ background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Taux d'épargne</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1 }}>{period.rate}</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>du revenu net</div>
          </div>
        </Card>

        {/* endettement */}
        <Card style={{ background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #e2574c' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Endettement</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#e2574c' }}>26 %</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>dettes / actifs</div>
          </div>
        </Card>

        {/* pont du patrimoine */}
        <Card style={{ gridColumn: 'span 2', background: '#fff' }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Pont du patrimoine net</div>
          <div style={{ fontSize: 12, color: '#93a29a', marginTop: 2 }}>Ce qui relie les deux séquences de patrimoine net.</div>
          <div style={{ display: 'flex', marginTop: 18 }}>
            {bridge.map((b, i) => (
              <div key={i} style={{ flex: 1, padding: '0 11px', borderRight: i < bridge.length - 1 ? '1px solid #f2f6f3' : 'none' }}>
                <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: b.color }}>{b.amount}</div>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, lineHeight: 1.3, color: '#0f1a14' }}>{b.label}</div>
                <div style={{ fontSize: 10, color: '#a9b5ad', marginTop: 4, lineHeight: 1.35, minHeight: 26 }}>{b.note}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* mes comptes */}
        <Card style={{ gridColumn: 'span 2', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Mes comptes</div>
            <button onClick={() => nav('/comptes')} style={{ fontSize: 12.5, color: '#0e9f6e', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', padding: 0 }}>Tout voir</button>
          </div>
          {accounts.map(a => (
            <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: '#f2f8f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: '#0a7a52' }}>{a.ini}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{a.name}</div>
                <div style={{ fontSize: 11, color: '#93a29a' }}>{a.type}</div>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace" }}>{a.value}</div>
            </div>
          ))}
        </Card>

        {/* pont résultat → trésorerie */}
        <Card style={{ gridColumn: 'span 4', background: '#07150f', color: '#e9f0ea', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Pont résultat → trésorerie</div>
              <div style={{ fontSize: 12.5, color: '#93a89b', marginTop: 2 }}>Les catégories qui se croisent : pourquoi le résultat ≠ la trésorerie sur la période.</div>
            </div>
            <span style={{ fontSize: 11, color: '#5e7368', fontFamily: "'JetBrains Mono',monospace", border: '1px solid rgba(255,255,255,.12)', padding: '4px 10px', borderRadius: 6 }}>flux de la période</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            {rt.map((b, i) => (
              <div key={i} style={{ flex: 1, padding: '0 13px', borderRight: i < rt.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: b.color }}>{b.amount}</div>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{b.label}</div>
                <div style={{ fontSize: 10, color: '#5e7368', marginTop: 4, lineHeight: 1.35, minHeight: 26 }}>{b.note}</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 9, paddingTop: 7, fontSize: 9.5, color: '#7fd9af' }}>
                  cumul <b style={{ fontFamily: "'JetBrains Mono',monospace", color: '#e9f0ea' }}>{b.run}</b>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}
