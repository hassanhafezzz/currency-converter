export const getThemeProperty = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};
