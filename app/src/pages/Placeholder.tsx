import Layout from '../components/Layout';

interface PlaceholderProps {
  eyebrow: string;
  title: string;
}

export default function Placeholder({ eyebrow, title }: PlaceholderProps) {
  return (
    <Layout pageEyebrow={eyebrow} pageTitle={title}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}>
        <div style={{ textAlign: 'center', color: '#93a29a' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#0f1a14' }}>{title}</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Page en cours de développement</div>
        </div>
      </div>
    </Layout>
  );
}
