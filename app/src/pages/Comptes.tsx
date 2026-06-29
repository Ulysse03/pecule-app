import Layout from '../components/Layout';
import { accountsFull, allocation } from '../data/mock';

export default function Comptes() {
  return (
    <Layout pageEyebrow="Vue agrégée de vos comptes" pageTitle="Comptes & actifs">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* total agrégé hero */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', color: '#e9f0ea', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ fontSize: 13, color: '#7fd9af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Total agrégé</div>
          <div>
            <div style={{ color: '#fff', fontSize: 52, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1 }}>312 800 €</div>
            <div style={{ fontSize: 13, color: '#93a89b', marginTop: 10 }}>6 comptes synchronisés · 4 établissements</div>
            <div style={{ display: 'flex', height: 12, borderRadius: 7, overflow: 'hidden', marginTop: 20 }}>
              {allocation.map(al => (
                <div key={al.name} style={{ width: al.pct, background: al.color }} />
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 14 }}>
              {allocation.map(al => (
                <div key={al.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#93a89b' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: al.color, display: 'inline-block' }} />
                  {al.name} <b style={{ color: '#e9f0ea' }}>{al.pct}</b>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: '#7fd9af' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0e9f6e', display: 'inline-block' }} />
            Dernière synchro il y a 2 h
          </div>
        </section>

        {/* répartition par classe */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Répartition par classe d'actif</div>
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

        {/* détail des comptes */}
        <section style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Détail des comptes</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr .9fr', gap: 8, fontSize: 10.5, color: '#a9b5ad', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 700, paddingBottom: 9, borderBottom: '1px solid #eef3f0' }}>
            <span>Compte</span><span style={{ textAlign: 'right' }}>Solde</span><span style={{ textAlign: 'right' }}>Évolution</span>
          </div>
          {accountsFull.map(a => (
            <div key={a.name} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr .9fr', gap: 8, alignItems: 'center', padding: '11px 0', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: '#f2f8f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: '#0a7a52' }}>{a.ini}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{a.name}</div>
                  <div style={{ fontSize: 11, color: '#93a29a' }}>{a.type}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 13.5, fontWeight: 600 }}>{a.value}</div>
              <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, fontWeight: 600, color: a.delc }}>{a.delta}</div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
