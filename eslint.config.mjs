import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config} */ 
const config = { 
  parser: "@typescript-eslint/parser", 
  parserOptions: { 
    project: true, 
  }, 
  plugins: [ 
    "@typescript-eslint", 
    "drizzle", 
    "check-file", 
    "no-relative-import-paths", 
    "n", 
  ], 
  extends: [ 
    "next/core-web-vitals", 
    "plugin:@typescript-eslint/recommended-type-checked", 
    "plugin:@typescript-eslint/stylistic-type-checked", 
    "next/typescript", 
    "prettier", 
  ], 
  rules: { 
    "@typescript-eslint/prefer-nullish-coalescing": "off", 
    "@typescript-eslint/no-unsafe-argument": "off", 
    "prefer-arrow-callback": ["error"], 
    "prefer-template": ["error"], 
    quotes: ["error", "double"], 
    "no-process-env": ["error"], 
    "no-relative-import-paths/no-relative-import-paths": [ 
      "error", 
      { allowSameFolder: true, rootDir: "src", prefix: "@" }, 
    ], 
    "check-file/filename-naming-convention": [ 
      "error", 
      { 
        "**/*.{ts,tsx}": "KEBAB_CASE", 
      }, 
      { 
        ignoreMiddleExtensions: true, 
      }, 
    ], 
    "check-file/folder-naming-convention": [ 
      "error", 
      { 
        "src/**/!^[.*": "KEBAB_CASE", 
      }, 
    ], 
    "@typescript-eslint/array-type": "off", 
    "@typescript-eslint/consistent-type-definitions": "off", 
    "@typescript-eslint/consistent-type-imports": [ 
      "warn", 
      { 
        prefer: "type-imports", 
        fixStyle: "inline-type-imports", 
      }, 
    ], 
    "@typescript-eslint/no-unused-vars": [ 
      "warn", 
      { 
        argsIgnorePattern: "^_", 
      }, 
    ], 
    "@typescript-eslint/require-await": "off", 
    "@typescript-eslint/no-misused-promises": [ 
      "error", 
      { 
        checksVoidReturn: { 
          attributes: false, 
        }, 
      }, 
    ], 
    "drizzle/enforce-delete-with-where": [ 
      "error", 
      { 
        drizzleObjectName: ["db", "ctx.db"], 
      }, 
    ], 
    "drizzle/enforce-update-with-where": [ 
      "error", 
      { 
        drizzleObjectName: ["db", "ctx.db"], 
      }, 
    ], 
  }, 
}; 

export default config;
