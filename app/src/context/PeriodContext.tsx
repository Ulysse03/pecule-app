import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { periods } from '../data/mock';
import type { PeriodKey, Period } from '../data/mock';

interface PeriodCtx {
  periodKey: PeriodKey;
  period: Period;
  setPeriod: (k: PeriodKey) => void;
}

const Ctx = createContext<PeriodCtx>(null!);

export function PeriodProvider({ children }: { children: ReactNode }) {
  const [periodKey, setPeriodKey] = useState<PeriodKey>('s1');
  return (
    <Ctx.Provider value={{ periodKey, period: periods[periodKey], setPeriod: setPeriodKey }}>
      {children}
    </Ctx.Provider>
  );
}

export const usePeriod = () => useContext(Ctx);
