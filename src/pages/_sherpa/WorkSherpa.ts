import { makeLinkResolver, type LinkResolver } from "./_util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/SherpaConfig";

export interface WorkSherpa {
  index: LinkResolver;
}

export const makeWorkSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig,
): WorkSherpa => ({
  index: (props) => makeLinkResolver(`${path}`, props, config),
});
