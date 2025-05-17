export const pluralize = (
  quantity: number,
  ordinalTagMapping: Record<Intl.LDMLPluralRule, string>
) => {
  const ruOrdinalRules = new Intl.PluralRules("ru-RU");

  return ordinalTagMapping[ruOrdinalRules.select(quantity)];
};
