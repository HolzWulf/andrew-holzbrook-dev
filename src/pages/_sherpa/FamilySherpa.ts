import { makeLinkResolver, type LinkResolver } from "./_util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/SherpaConfig";

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig,
): FamilySherpa => ({
  index: (props) => makeLinkResolver(`${path}`, props, config),
});
