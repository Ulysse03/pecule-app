import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PeriodProvider } from './context/PeriodContext';
import Dashboard from './pages/Dashboard';
import Comptes from './pages/Comptes';
import Flux from './pages/Flux';
import Contrats from './pages/Contrats';
import Ledger from './pages/Ledger';
import Projections from './pages/Projections';
import Patrimoine from './pages/Patrimoine';
import Fiscalite from './pages/Fiscalite';

export default function App() {
  return (
    <BrowserRouter>
      <PeriodProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/comptes" element={<Comptes />} />
          <Route path="/flux" element={<Flux />} />
          <Route path="/contrats" element={<Contrats />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/projections" element={<Projections />} />
          <Route path="/patrimoine" element={<Patrimoine />} />
          <Route path="/fiscalite" element={<Fiscalite />} />
        </Routes>
      </PeriodProvider>
    </BrowserRouter>
  );
}
