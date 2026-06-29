import Layout from '../components/Layout';
import { fiscalCandidates } from '../data/mock';
import { IconDownload } from '../components/Icons';

export default function Fiscalite() {
  return (
    <Layout pageEyebrow="Candidats fiscaux & dossier" pageTitle="Fiscalité">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: 'minmax(140px,auto)', gap: 14 }}>

        {/* gain fiscal hero */}
        <section style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#07150f', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', color: '#e9f0ea', minHeight: 300 }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 230, height: 230, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,242,78,.16),transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#7fd9af', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>Gain fiscal estimé</span>
            <span style={{ color: '#5e7368', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", border: '1px solid rgba(255,255,255,.12)', padding: '3px 9px', borderRadius: 6 }}>année 2026</span>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#93a89b' }}>Réductions & crédits détectés</div>
            <div style={{ color: '#fff', fontSize: 50, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.03em', lineHeight: 1, marginTop: 6 }}>1 868 €</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(201,242,78,.16)', color: '#c9f24e', padding: '7px 14px', borderRadius: 30, fontSize: 13.5, fontWeight: 600, marginTop: 16 }}>
              818 € confirmés · 1 050 € à valider
            </div>
          </div>
          <div style={{ fontSize: 11.5, color: '#5e7368', lineHeight: 1.5 }}>
            Candidats détectés par IA depuis vos écritures — proposition annotée, validation humaine requise (non décisionnel).
          </div>
        </section>

        {/* KPI */}
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Candidats</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1 }}>4</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>postes fiscaux</div></div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #0a7a52' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>Confirmés</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#0a7a52' }}>2</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>818 €</div></div>
        </section>
        <section style={{ background: '#fff', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid #e2a23c' }}>
          <div style={{ fontSize: 13, color: '#59685f', fontWeight: 600 }}>À confirmer</div>
          <div><div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.02em', lineHeight: 1, color: '#b27d1a' }}>2</div><div style={{ fontSize: 11, color: '#93a29a', marginTop: 7 }}>1 050 €</div></div>
        </section>
        <section style={{ background: '#c9f24e', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: '#3a4a12', fontWeight: 700 }}>Dossier</div>
          <div><div style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.1, color: '#0a1f0a' }}>Prêt à exporter</div><div style={{ fontSize: 11, color: '#3a4a12', marginTop: 7 }}>formulaire 2042 RICI</div></div>
        </section>

        {/* candidats fiscaux table */}
        <section style={{ gridColumn: 'span 4', background: '#fff', borderRadius: 20, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Candidats fiscaux</div>
              <div style={{ fontSize: 12, color: '#93a29a', marginTop: 2 }}>Postes éligibles détectés dans vos flux — à valider avant intégration au dossier.</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#07150f', color: '#c9f24e', borderRadius: 10, padding: '9px 15px', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              <IconDownload color="#c9f24e" />Exporter le dossier fiscal
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 110px 110px 120px', gap: 8, fontSize: 10.5, color: '#a9b5ad', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 700, padding: '0 4px 10px', borderBottom: '1px solid #eef3f0' }}>
            <span>Poste</span><span>Référence</span><span style={{ textAlign: 'right' }}>Base</span><span style={{ textAlign: 'right' }}>Gain est.</span><span style={{ textAlign: 'right' }}>Statut</span>
          </div>
          {fiscalCandidates.map(f => (
            <div key={f.code} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 110px 110px 120px', gap: 8, alignItems: 'center', padding: '13px 4px', borderBottom: '1px solid #f6f9f7' }}>
              <span style={{ fontSize: 13.5, fontWeight: 600 }}>{f.code}</span>
              <span style={{ fontSize: 12, color: '#59685f' }}>{f.art}</span>
              <span style={{ textAlign: 'right', fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: '#59685f' }}>{f.base}</span>
              <span style={{ textAlign: 'right', fontSize: 13.5, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", color: '#0a7a52' }}>{f.gain}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: f.cColor, background: f.cBg, padding: '3px 9px', borderRadius: 20, whiteSpace: 'nowrap' }}>{f.conf}</span>
              </span>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
