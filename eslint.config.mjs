import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Project-specific rule overrides
  {
    rules: {
      // Many content strings across the site include apostrophes and quotes
      // which trigger `react/no-unescaped-entities`. Disabling this rule
      // keeps the developer experience focused on more actionable issues.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
