import { makeLinkResolver, type LinkResolver } from "./_util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/SherpaConfig";

export interface ResourcesSherpa {
  logo: LinkResolver;
}

export const makeResourcesSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig,
): ResourcesSherpa => ({
  logo: (props) =>
    makeLinkResolver(`${path}logo-placeholder.jpg`, props, config),
});
