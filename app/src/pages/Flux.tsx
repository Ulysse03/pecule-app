import Layout from '../components/Layout';
import { transactions } from '../data/mock';
import { IconPlus } from '../components/Icons';

export default function Flux() {
  return (
    <Layout pageEyebrow="Capter & qualifier le réel" pageTitle="Flux · Transactions">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* ingestion hero */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', color: '#e9f0ea', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Ingestion bancaire</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '4px 11px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9f24e', display: 'inline-block' }} />Synchronisé
            </span>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#93a89b' }}>Transactions importées ce mois</div>
            <div style={{ color: '#fff', fontSize: 48, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1, marginTop: 6 }}>142</div>
            <div style={{ display: 'flex', height: 10, borderRadius: 6, overflow: 'hidden', marginTop: 18, background: 'rgba(255,255,255,.08)' }}>
              <div style={{ width: '81%', background: '#34d399' }} />
              <div style={{ width: '13%', background: '#e2a23c' }} />
              <div style={{ width: '6%', background: '#e2574c' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 12, fontSize: 11.5, color: '#93a89b' }}>
              {[['#34d399', 'Classées 81 %'], ['#e2a23c', 'À revoir 13 %'], ['#e2574c', 'Doublons 6 %']].map(([color, label]) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: color, display: 'inline-block' }} />{label}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: '#5e7368' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0e9f6e', display: 'inline-block' }} />
            Bridge · 2 connexions · dernière synchro il y a 2 h
          </div>
        </section>

        {/* KPI */}
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>À classer</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#b27d1a' }}>11</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>en attente</div>
          </div>
        </section>
        <section style={{ background: '#c9f24e', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700 }}>Auto-classé</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#0a1f0a' }}>81 %</div>
            <div style={{ fontSize: 11, color: '#3a4a12', marginTop: 7 }}>règles + IA</div>
          </div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #e2574c' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Doublons</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#e2574c' }}>3</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>à fusionner</div>
          </div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Transferts</div>
          <div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1 }}>5</div>
            <div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>internes neutralisés</div>
          </div>
        </section>

        {/* transactions table */}
        <section style={{ gridColumn: 'span 4', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Transactions normalisées</div>
              <div style={{ fontSize: 12, color: '#93a29a', marginTop: 2 }}>Pipeline raw → normalized → classified. Catégorisation par règles puis IA (score de confiance).</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#f4f8f6', border: '1px solid #e9efeb', borderRadius: 10, padding: '8px 13px', fontSize: 12.5, color: '#0a7a52', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              <IconPlus />Importer un relevé
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.1fr 130px 120px', gap: 8, fontSize: 10.5, color: '#a9b5ad', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 700, padding: '0 4px 10px', borderBottom: '1px solid #eef3f0' }}>
            <span>Marchand</span><span>Compte</span><span>Catégorie</span><span style={{ textAlign: 'right' }}>Montant</span><span style={{ textAlign: 'right' }}>Statut</span>
          </div>
          {transactions.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.1fr 130px 120px', gap: 8, alignItems: 'center', padding: '11px 4px', borderBottom: '1px solid #f6f9f7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: '#f2f6f3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: '#5a6a61', flexShrink: 0 }}>{t.ini}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.mer}</div>
                  <div style={{ fontSize: 11, color: '#93a29a' }}>{t.date}</div>
                </div>
              </div>
              <span style={{ fontSize: 12, color: '#59685f', fontFamily: "'JetBrains Mono',monospace" }}>{t.acct}</span>
              <span>
                <span style={{ fontSize: 11, fontWeight: 600, color: t.catC, background: t.catBg, padding: '3px 10px', borderRadius: 20 }}>{t.cat}</span>
              </span>
              <span style={{ textAlign: 'right', fontSize: 13.5, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: t.amtColor }}>{t.amount}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: t.stColor, background: t.stBg, padding: '3px 9px', borderRadius: 20, whiteSpace: 'nowrap' }}>{t.status}</span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
