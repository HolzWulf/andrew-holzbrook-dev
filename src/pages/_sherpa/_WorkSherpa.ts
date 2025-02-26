import { makeLinkResolver, type LinkResolver } from "./_util/_LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/_SherpaConfig";

export interface WorkSherpa {
  index: LinkResolver;
  resume: LinkResolver;
}

export const makeWorkSherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig,
): WorkSherpa => ({
  index: (props) => makeLinkResolver(`${path}`, props, config),
  resume: (props) => makeLinkResolver(`${path}/resume`, props, config),
});
