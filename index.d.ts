import type { configs, rules } from './src/index';

declare var plugin: {
  configs: typeof configs;
  rules: typeof rules;
};

export default plugin;