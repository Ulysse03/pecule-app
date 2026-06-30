import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PeriodProvider } from './context/PeriodContext';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Comptes from './pages/Comptes';
import Flux from './pages/Flux';
import Contrats from './pages/Contrats';
import Ledger from './pages/Ledger';
import Projections from './pages/Projections';
import Patrimoine from './pages/Patrimoine';
import Fiscalite from './pages/Fiscalite';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <BrowserRouter>
      <PeriodProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyses" element={<Placeholder eyebrow="Trésorerie · Patrimoine · Résultat dans le temps" title="Analyses" />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/fiscalite" element={<Fiscalite />} />
          <Route path="/comptes" element={<Comptes />} />
          <Route path="/flux" element={<Flux />} />
          <Route path="/imports" element={<Placeholder eyebrow="Alimenter — relevés & agrégation" title="Imports" />} />
          <Route path="/contrats" element={<Contrats />} />
          <Route path="/abonnements" element={<Placeholder eyebrow="Cockpit des abonnements récurrents" title="Abonnements" />} />
          <Route path="/obligations" element={<Placeholder eyebrow="Charges récurrentes planifiées" title="Obligations" />} />
          <Route path="/projections" element={<Projections />} />
          <Route path="/patrimoine" element={<Patrimoine />} />
        </Routes>
      </PeriodProvider>
    </BrowserRouter>
  );
}
