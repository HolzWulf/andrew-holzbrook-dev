import type { FeatureFlags } from "./FeatureFlags";

interface CommonQueryParams { }

interface LinkProps {
  commonQueryParams?: CommonQueryParams;
}

type LinkResolver = (props: LinkProps) => string;

function makeLinkResolver(
  path: string,
  linkProps: LinkProps,
  sherpaConfig: SherpaConfig,
): string {
  return path;
}

interface SherpaConfig {
  featureFlags?: FeatureFlags;
}

interface Sherpa {
  family: LinkResolver;
  home: LinkResolver;
  play: LinkResolver;
  test: LinkResolver;
  work: LinkResolver;
}

const defaultSherpaConfig = {
  featureFlags: {
    testPageEnabled: true,
  },
};

export const makeSherpa = (
  config: SherpaConfig = defaultSherpaConfig,
): Sherpa => ({
  family: (props) => makeLinkResolver("/family", props, config),
  home: (props) => makeLinkResolver("/", props, config),
  play: (props) => makeLinkResolver("/play", props, config),
  work: (props) => makeLinkResolver("/work", props, config),
  test: (props) =>
    config.featureFlags?.testPageEnabled
      ? makeLinkResolver("/test", props, config)
      : makeLinkResolver("/", props, config),
});
