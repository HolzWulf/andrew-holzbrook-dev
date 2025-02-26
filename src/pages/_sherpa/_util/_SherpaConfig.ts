import type { FeatureFlags } from "../../../lib/FeatureFlags";

export interface SherpaConfig {
  featureFlags?: FeatureFlags;
}

export const defaultSherpaConfig = {
  featureFlags: {
    testPageEnabled: true,
  },
};
