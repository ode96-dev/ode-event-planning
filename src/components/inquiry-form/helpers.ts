export const formatKShs = (val: number) => {
  return `KShs ${new Intl.NumberFormat("en-KE", {
    maximumFractionDigits: 0,
  }).format(val)}`;
};

export const getBudgetTierLabel = (amount: number) => {
  if (amount < 2500000) return "Intimate Curated Salon";
  if (amount < 10000000) return "Signature Grand Gala";
  if (amount < 25000000) return "Sovereign Multi-Zone Immersion";
  return "Architectural Masterwork & Global Charter";
};
