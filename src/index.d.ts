import type { Linter } from "eslint";

import type RulesOfHooks from './RulesOfHooks';
import type ExhaustiveDeps from './ExhaustiveDeps';

export const configs: {
  recommended: Linter.Config;
};

export const rules: {
  'rules-of-hooks': typeof RulesOfHooks;
  'exhaustive-deps': typeof ExhaustiveDeps;
};