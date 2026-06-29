// ── helpers ────────────────────────────────────────────────────────────────
export const eur = (n: number) =>
  Math.round(n).toLocaleString('fr-FR').replace(/[  ]/g, ' ') + ' €';

export const seur = (n: number) =>
  (n >= 0 ? '+' : '−') +
  Math.abs(Math.round(n)).toLocaleString('fr-FR').replace(/[  ]/g, ' ') +
  ' €';

// ── period definitions ──────────────────────────────────────────────────────
export type PeriodKey = 's1' | 't2' | 'y12';

export interface Period {
  label: string;
  d0: string;
  d1: string;
  netStart: number;
  netEnd: number;
  result: number;
  pv: number;
  regul: number;
  treso: number;
  invest: number;
  capital: number;
  cca: number;
  chargesAP: number;
  encaiss: number;
  rate: string;
}

export const periods: Record<PeriodKey, Period> = {
  s1: {
    label: '1er semestre 2026', d0: '1 janv 2026', d1: '30 juin 2026',
    netStart: 236800, netEnd: 248520, result: 9200, pv: 3600, regul: -1080,
    treso: 1100, invest: -4500, capital: -3200, cca: -2400, chargesAP: 540, encaiss: 1460, rate: '34 %',
  },
  t2: {
    label: '2e trimestre 2026', d0: '1 avr 2026', d1: '30 juin 2026',
    netStart: 242100, netEnd: 248520, result: 4700, pv: 2200, regul: -480,
    treso: 320, invest: -2200, capital: -1600, cca: -1200, chargesAP: 260, encaiss: 360, rate: '31 %',
  },
  y12: {
    label: '12 mois glissants', d0: '25 juin 2025', d1: '25 juin 2026',
    netStart: 224000, netEnd: 248520, result: 18600, pv: 7800, regul: -1880,
    treso: 2400, invest: -9000, capital: -6400, cca: -1800, chargesAP: 600, encaiss: 400, rate: '33 %',
  },
};

export function netBridge(P: Period) {
  return [
    { amount: eur(P.netStart), label: 'Patrimoine début', note: P.d0, color: '#0f1a14', colorD: '#e9f0ea' },
    { amount: seur(P.result), label: 'Résultat retenu', note: 'épargne nette', color: '#0a7a52', colorD: '#7fd9af' },
    { amount: seur(P.pv), label: 'Plus-values latentes', note: 'valorisation sans cash', color: '#5a6b1a', colorD: '#c9f24e' },
    { amount: seur(P.regul), label: 'Régularisations', note: 'ajustements de valeur', color: '#b23b30', colorD: '#f3a59d' },
    { amount: eur(P.netEnd), label: 'Patrimoine fin', note: P.d1, color: '#0f1a14', colorD: '#e9f0ea' },
  ];
}

export function rtBridge(P: Period) {
  let acc = P.result;
  const step = (v: number) => { acc += v; return eur(acc); };
  return [
    { amount: seur(P.result), label: 'Résultat', note: 'point de départ', run: eur(P.result), color: '#c9f24e' },
    { amount: seur(P.invest), label: 'Investissements', note: "hausse d'actif, pas une charge", run: step(P.invest), color: '#f3a59d' },
    { amount: seur(P.capital), label: 'Rembours. capital', note: 'baisse de passif, pas une charge', run: step(P.capital), color: '#f3a59d' },
    { amount: seur(P.cca), label: "Paiements d'avance", note: 'cash sorti, charge future', run: step(P.cca), color: '#f3a59d' },
    { amount: seur(P.chargesAP), label: 'Charges à payer', note: 'charge constatée, cash à venir', run: step(P.chargesAP), color: '#7fd9af' },
    { amount: seur(P.encaiss), label: 'Décalages encaissement', note: 'créances encaissées', run: step(P.encaiss), color: '#7fd9af' },
    { amount: seur(P.treso), label: 'Variation trésorerie', note: 'résultat de trésorerie', run: eur(P.treso), color: '#c9f24e' },
  ];
}

// ── accounts ─────────────────────────────────────────────────────────────────
export const accounts = [
  { name: 'Immobilier', type: 'Actif', value: '148 000 €', ini: 'IM' },
  { name: 'Assurance-vie', type: 'Épargne', value: '74 900 €', ini: 'AV' },
  { name: 'PEA', type: 'Investissement', value: '58 400 €', ini: 'PE' },
  { name: 'Livret A', type: 'Épargne', value: '22 300 €', ini: 'LA' },
  { name: 'Compte courant', type: 'Liquidités', value: '4 820 €', ini: 'CC' },
];

export const accountsFull = [
  { name: 'Immobilier', type: 'Actif', value: '148 000 €', ini: 'IM', delta: '+0,4 %', delc: '#0a7a52' },
  { name: 'Assurance-vie', type: 'Épargne', value: '74 900 €', ini: 'AV', delta: '+1,1 %', delc: '#0a7a52' },
  { name: 'PEA', type: 'Investissement', value: '58 400 €', ini: 'PE', delta: '+3,2 %', delc: '#0a7a52' },
  { name: 'Livret A', type: 'Épargne', value: '22 300 €', ini: 'LA', delta: '+0,2 %', delc: '#0a7a52' },
  { name: 'Compte courant', type: 'Liquidités', value: '4 820 €', ini: 'CC', delta: '−180 €', delc: '#b23b30' },
  { name: 'Crypto', type: 'Investissement', value: '4 380 €', ini: 'CR', delta: '−6,4 %', delc: '#b23b30' },
];

export const allocation = [
  { name: 'Immobilier', value: '148 000 €', pct: '47%', color: '#0e9f6e' },
  { name: 'Assurance-vie', value: '74 900 €', pct: '24%', color: '#16b67f' },
  { name: 'PEA', value: '58 400 €', pct: '19%', color: '#3ccf8e' },
  { name: 'Liquidités', value: '31 500 €', pct: '10%', color: '#a7ecc4' },
];

// ── contracts ─────────────────────────────────────────────────────────────────
export const contracts = [
  {
    ini: 'VY', color: '#0e9f6e', name: 'Voyage Japon', cat: 'Loisirs · séjour 2 sem.',
    badge: "Payé d'avance", bColor: '#0a7a52', bBg: '#eef8f2',
    total: '2 400 €', sub: 'consommé 0 €',
    cash: [{ left: '4%' }],
    result: [{ left: '95%' }],
    start: 'Payé · mars 26', end: 'Séjour · avr. 27',
  },
  {
    ini: 'TH', color: '#16b67f', name: 'Abonnement théâtre', cat: 'Culture · 6 séances',
    badge: 'Étalé', bColor: '#3a4a12', bBg: '#eef6cf',
    total: '180 €', sub: '2 / 6 séances',
    cash: [{ left: '2%' }],
    result: [{ left: '14%' }, { left: '30%' }, { left: '46%' }, { left: '62%' }, { left: '78%' }, { left: '95%' }],
    start: 'Payé · juin', end: 'Mars 27',
  },
  {
    ini: 'AS', color: '#3ccf8e', name: 'Assurance habitation', cat: 'Logement · prime annuelle',
    badge: 'Étalé', bColor: '#3a4a12', bBg: '#eef6cf',
    total: '312 €', sub: '6 / 12 mois',
    cash: [{ left: '2%' }],
    result: Array.from({ length: 12 }, (_, i) => ({ left: `${Math.round(6 + i * 8.5)}%` })),
    start: 'Prélevé · janv', end: 'Déc',
  },
  {
    ini: 'CO', color: '#e2574c', name: 'Régul. charges copro', cat: 'Logement · charge à payer',
    badge: 'À payer', bColor: '#b23b30', bBg: '#fdeeec',
    total: '540 €', sub: 'cash à venir',
    cash: [{ left: '92%' }],
    result: [{ left: '6%' }],
    start: 'Constaté · juin', end: 'Décaissé · sept',
  },
];

// ── debts ──────────────────────────────────────────────────────────────────────
export const debts = [
  { name: 'Prêt immobilier', asset: 'Appartement Lyon 4e', amount: '58 900 €', ltv: 'LTV 40 %' },
  { name: 'Prêt auto', asset: 'Renault Mégane', amount: '5 380 €', ltv: 'LTV 61 %' },
];

// ── ledger entries ─────────────────────────────────────────────────────────────
export const ledgerEntries = [
  {
    id: 'EC-2026-0412', date: '28 juin', type: 'Bancaire', tColor: '#0a7a52', tBg: '#eef8f2',
    label: 'Salaire — virement employeur', src: 'TX · BNP ····4821',
    lines: [
      { acct: '512 · Compte courant', debit: '3 950,00', credit: '' },
      { acct: '706 · Revenus salaire', debit: '', credit: '3 950,00' },
    ],
  },
  {
    id: 'EC-2026-0413', date: '28 juin', type: 'Bancaire', tColor: '#0a7a52', tBg: '#eef8f2',
    label: 'Loyer & charges — Lyon 4e', src: 'TX · BNP ····4821',
    lines: [
      { acct: '614 · Charges logement', debit: '1 180,00', credit: '' },
      { acct: '512 · Compte courant', debit: '', credit: '1 180,00' },
    ],
  },
  {
    id: 'EC-2026-0414', date: '27 juin', type: 'Virement interne', tColor: '#3a4a12', tBg: '#eef6cf',
    label: 'Épargne automatique → Livret A', src: 'Transfert détecté',
    lines: [
      { acct: '517 · Livret A', debit: '500,00', credit: '' },
      { acct: '512 · Compte courant', debit: '', credit: '500,00' },
    ],
  },
  {
    id: 'EC-2026-0415', date: '26 juin', type: 'Récurrent', tColor: '#0a5fb0', tBg: '#e9f2fb',
    label: 'Abonnement Netflix', src: 'Abo · rapproché',
    lines: [
      { acct: '628 · Charges abonnements', debit: '13,49', credit: '' },
      { acct: '512 · Compte courant', debit: '', credit: '13,49' },
    ],
  },
  {
    id: 'EC-2026-0416', date: '25 juin', type: 'Manuel', tColor: '#7a4a00', tBg: '#fbf0df',
    label: 'Facture client #A-204 — prestation', src: 'Créance saisie',
    lines: [
      { acct: '411 · Créances clients', debit: '2 400,00', credit: '' },
      { acct: '706 · Produits prestations', debit: '', credit: '2 400,00' },
    ],
  },
  {
    id: 'EC-2026-0417', date: '24 juin', type: 'Manuel', tColor: '#7a4a00', tBg: '#fbf0df',
    label: 'Régularisation charges copropriété', src: 'Charge à payer',
    lines: [
      { acct: '614 · Charges logement', debit: '540,00', credit: '' },
      { acct: '486 · Charges à payer', debit: '', credit: '540,00' },
    ],
  },
];

// ── transactions ──────────────────────────────────────────────────────────────
export const transactions = [
  { ini: 'CB', mer: 'Carrefour Market', acct: 'BNP ····4821', cat: 'Alimentation', catC: '#0a7a52', catBg: '#eef8f2', amount: '−84,30 €', amtColor: '#0f1a14', date: '28 juin', status: 'Classée', stColor: '#0a7a52', stBg: '#eef8f2' },
  { ini: 'VR', mer: 'Virement — Employeur SA', acct: 'BNP ····4821', cat: 'Revenu salaire', catC: '#0a7a52', catBg: '#eef8f2', amount: '+3 950,00 €', amtColor: '#0a7a52', date: '28 juin', status: 'Classée', stColor: '#0a7a52', stBg: '#eef8f2' },
  { ini: 'PR', mer: 'SCI Foncia — loyer', acct: 'BNP ····4821', cat: 'Logement', catC: '#0a7a52', catBg: '#eef8f2', amount: '−1 180,00 €', amtColor: '#0f1a14', date: '28 juin', status: 'Classée', stColor: '#0a7a52', stBg: '#eef8f2' },
  { ini: 'NF', mer: 'NETFLIX.COM', acct: 'BNP ····4821', cat: 'Abonnements', catC: '#0a5fb0', catBg: '#e9f2fb', amount: '−13,49 €', amtColor: '#0f1a14', date: '26 juin', status: 'IA · 98 %', stColor: '#0a5fb0', stBg: '#e9f2fb' },
  { ini: 'VI', mer: 'Virement interne → Livret A', acct: 'BNP ····4821', cat: 'Transfert interne', catC: '#7a4a00', catBg: '#fbf0df', amount: '−500,00 €', amtColor: '#93a29a', date: '27 juin', status: 'Transfert', stColor: '#7a4a00', stBg: '#fbf0df' },
  { ini: 'SQ', mer: 'SQ *LE COMPTOIR', acct: 'Curve ····0192', cat: 'À catégoriser', catC: '#b27d1a', catBg: '#fbf3e2', amount: '−27,80 €', amtColor: '#0f1a14', date: '25 juin', status: 'À revoir', stColor: '#b27d1a', stBg: '#fbf3e2' },
  { ini: 'AM', mer: 'AMZN Mktp FR', acct: 'BNP ····4821', cat: 'Shopping', catC: '#0a5fb0', catBg: '#e9f2fb', amount: '−42,15 €', amtColor: '#0f1a14', date: '24 juin', status: 'IA · 88 %', stColor: '#0a5fb0', stBg: '#e9f2fb' },
  { ini: 'DB', mer: 'Doublon potentiel — AMZN', acct: 'BNP ····4821', cat: 'Doublon ?', catC: '#b23b30', catBg: '#fdeeec', amount: '−42,15 €', amtColor: '#b23b30', date: '24 juin', status: 'Doublon', stColor: '#b23b30', stBg: '#fdeeec' },
];

// ── fiscal candidates ─────────────────────────────────────────────────────────
export const fiscalCandidates = [
  { code: 'Dons aux associations', art: 'Art. 200 CGI — réduction 66 %', base: '240,00 €', gain: '158 €', conf: 'Détecté', cColor: '#0a7a52', cBg: '#eef8f2' },
  { code: 'Emploi à domicile', art: 'Art. 199 sexdecies — crédit 50 %', base: '1 320,00 €', gain: '660 €', conf: 'Détecté', cColor: '#0a7a52', cBg: '#eef8f2' },
  { code: 'Versement PER', art: 'Art. 163 quatervicies — déduction', base: '2 000,00 €', gain: '600 €', conf: 'À confirmer', cColor: '#b27d1a', cBg: '#fbf3e2' },
  { code: 'Frais de garde enfant', art: 'Art. 200 quater B — crédit 50 %', base: '900,00 €', gain: '450 €', conf: 'À confirmer', cColor: '#b27d1a', cBg: '#fbf3e2' },
];

// ── projections ───────────────────────────────────────────────────────────────
export const scenarioDefs = {
  prudent: { label: 'Prudent', rate: 0.03, monthly: 1500, color: '#16b67f', note: 'Marché atone, épargne réduite' },
  central: { label: 'Central', rate: 0.05, monthly: 1850, color: '#0a7a52', note: 'Tendance actuelle prolongée' },
  optimiste: { label: 'Optimiste', rate: 0.08, monthly: 2200, color: '#5a6b1a', note: 'Marché porteur, épargne accrue' },
};

export const NET0 = 248520;

export function projectedValue(rate: number, monthly: number, years: number) {
  return NET0 * Math.pow(1 + rate, years) + monthly * 12 * ((Math.pow(1 + rate, years) - 1) / rate);
}

export const upcoming = [
  { label: 'Facture client #A-204', due: 'Échéance 12 juil', amount: '+2 400 €', dot: '#0e9f6e' },
  { label: 'Remboursement assurance', due: 'Échéance 18 juil', amount: '+320 €', dot: '#0e9f6e' },
  { label: 'Dette → Marc', due: 'Échéance 30 juil', amount: '−800 €', dot: '#e2574c' },
  { label: 'Acompte impôt sur le revenu', due: 'Échéance 15 sept', amount: '−1 240 €', dot: '#e2574c' },
];

export const subs = [
  { name: 'Netflix', cycle: '4 juil', price: '13,49 €', ini: 'N', color: '#6fe0a6' },
  { name: 'Salle de sport', cycle: '1 juil', price: '29,90 €', ini: 'S', color: '#3ccf8e' },
  { name: 'Adobe CC', cycle: '8 juil', price: '23,99 €', ini: 'A', color: '#16b67f' },
  { name: 'Spotify', cycle: '11 juil', price: '11,99 €', ini: 'S', color: '#6fe0a6' },
  { name: 'iCloud+', cycle: '2 juil', price: '2,99 €', ini: 'i', color: '#a7ecc4' },
];

// ── nav + profile menu ────────────────────────────────────────────────────────
export const notifs = [
  { title: 'Facture client #A-204 encaissée (+2 400 €)', time: 'Il y a 2 h', color: '#0e9f6e' },
  { title: 'Budget Loisirs dépassé de 60 €', time: 'Hier', color: '#e2574c' },
  { title: 'Abonnement Adobe prélevé le 8 juillet', time: 'Il y a 2 jours', color: '#16b67f' },
];

export const footProduct = ['Comptes & agrégation', 'Budgets & catégories', 'Contrats & engagements', 'Projections'];
export const footLegal = ["Mentions légales", "Conditions générales d'utilisation", 'Politique de confidentialité', 'Gestion des cookies', 'Conditions DSP2'];
export const footCompany = ['À propos', 'Sécurité', 'Statut des services', 'Nous contacter'];
