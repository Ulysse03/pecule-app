import Layout from '../components/Layout';
import { ledgerEntries } from '../data/mock';
import { IconCheck, IconRefresh } from '../components/Icons';

export default function Ledger() {
  return (
    <Layout pageEyebrow="Noyau comptable — écritures équilibrées" pageTitle="Grand livre · Journal">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* intégrité hero */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', color: '#e9f0ea', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Intégrité du grand livre</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '4px 11px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
              <IconCheck size={13} color="#c9f24e" />Équilibré
            </span>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#93a89b' }}>Total débit = total crédit</div>
            <div style={{ color: '#fff', fontSize: 46, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1, marginTop: 6 }}>8 583,49 €</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 13, padding: 13 }}>
                <div style={{ fontSize: 11, color: '#5e7368' }}>Débit cumulé</div>
                <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", marginTop: 3, color: '#7fd9af' }}>8 583,49</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 13, padding: 13 }}>
                <div style={{ fontSize: 11, color: '#5e7368' }}>Crédit cumulé</div>
                <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", marginTop: 3, color: '#7fd9af' }}>8 583,49</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: '#5e7368' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0e9f6e', display: 'inline-block' }} />
            Dernier recalcul déterministe · aujourd'hui 09:12
          </div>
        </section>

        {/* KPI */}
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Écritures</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1 }}>124</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>ce mois</div></div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Lignes</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1 }}>312</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>débit / crédit</div></div>
        </section>
        <section style={{ background: '#c9f24e', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700 }}>Équilibre</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#0a1f0a' }}>100 %</div><div style={{ fontSize: 11, color: '#3a4a12', marginTop: 7 }}>écritures balancées</div></div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #e2a23c' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>À revoir</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#b27d1a' }}>2</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>nature à confirmer</div></div>
        </section>

        {/* journal */}
        <section style={{ gridColumn: 'span 4', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Journal des écritures</div>
              <div style={{ fontSize: 12, color: '#93a29a', marginTop: 2 }}>Chaque écriture est équilibrée : somme des débits = somme des crédits.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 11.5, color: '#93a29a' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: '50%', background: '#0a7a52', display: 'inline-block' }} />Débit</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e2574c', display: 'inline-block' }} />Crédit</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr 150px 120px 120px', gap: 8, fontSize: 10.5, color: '#a9b5ad', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 700, padding: '0 4px 10px', borderBottom: '1px solid #eef3f0' }}>
            <span>Date</span><span>Écriture / Compte</span><span>Pièce</span><span style={{ textAlign: 'right' }}>Débit</span><span style={{ textAlign: 'right' }}>Crédit</span>
          </div>

          {ledgerEntries.map(e => (
            <div key={e.id} style={{ padding: '13px 4px 11px', borderBottom: '1px solid #f2f6f3' }}>
              {/* entry header */}
              <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr 150px 120px 120px', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#59685f', fontFamily: "'JetBrains Mono',monospace" }}>{e.date}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: e.tColor, background: e.tBg, padding: '3px 9px', borderRadius: 20, whiteSpace: 'nowrap' }}>{e.type}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.label}</span>
                </div>
                <span style={{ fontSize: 11, color: '#0a7a52', fontFamily: "'JetBrains Mono',monospace" }}>{e.id}</span>
                <span />
                <span style={{ textAlign: 'right', fontSize: 10.5, color: '#0a7a52', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 5 }}>
                  <IconCheck size={12} color="#0a7a52" />balancé
                </span>
              </div>
              {/* lines */}
              {e.lines.map((l, li) => (
                <div key={li} style={{ display: 'grid', gridTemplateColumns: '88px 1fr 150px 120px 120px', gap: 8, alignItems: 'center', paddingTop: 5 }}>
                  <span />
                  <span style={{ fontSize: 12.5, color: '#3a4a42', fontFamily: "'JetBrains Mono',monospace", paddingLeft: 2 }}>↳ {l.acct}</span>
                  <span />
                  <span style={{ textAlign: 'right', fontSize: 13, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#0a7a52' }}>{l.debit}</span>
                  <span style={{ textAlign: 'right', fontSize: 13, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#c2473d' }}>{l.credit}</span>
                </div>
              ))}
              {/* source */}
              <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 8, marginTop: 7 }}>
                <span />
                <span style={{ fontSize: 10.5, color: '#a9b5ad' }}>Source · {e.src}</span>
              </div>
            </div>
          ))}
        </section>

        {/* rebuild */}
        <section style={{ gridColumn: 'span 4', background: '#07150f', borderRadius: 20, padding: 24, color: '#e9f0ea', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Recalcul déterministe du grand livre</div>
            <div style={{ fontSize: 12.5, color: '#93a89b', marginTop: 4, maxWidth: 560, lineHeight: 1.5 }}>
              Le ledger est reconstructible à 100 % depuis les sources (raw → normalized → classified → ledgerized). Le rebuild rejoue toutes les règles et revérifie l'équilibre débit/crédit de chaque écriture.
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
              <div><div style={{ fontSize: 11, color: '#5e7368' }}>Pipeline</div><div style={{ fontSize: 12.5, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#7fd9af' }}>raw → ledgerized</div></div>
              <div><div style={{ fontSize: 11, color: '#5e7368' }}>Dernier rebuild</div><div style={{ fontSize: 12.5, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace" }}>auj. 09:12 · 0,8 s</div></div>
              <div><div style={{ fontSize: 11, color: '#5e7368' }}>Anomalies</div><div style={{ fontSize: 12.5, fontWeight: 600, fontFamily: "'JetBrains Mono',monospace", color: '#7fd9af' }}>0 déséquilibre</div></div>
            </div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#c9f24e', color: '#0a1f0a', padding: '13px 20px', borderRadius: 13, fontSize: 13.5, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit' }}>
            <IconRefresh color="#0a1f0a" />Lancer un rebuild
          </button>
        </section>
      </div>
    </Layout>
  );
}
