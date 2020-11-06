module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    extend: { translate: { "-5-1/2": "-1.375rem" } },
  },
  variants: [
    "responsive",
    "motion-safe",
    "motion-reduce",
    "hover",
    "focus",
    "active",
    "checked",
    "group-hover",
    "group-focus",
    "focus-visible",
    "focus-within",
    "disabled",
    "first",
    "last",
    "even",
    "odd",
    "visited",
  ],
  plugins: [],
};
