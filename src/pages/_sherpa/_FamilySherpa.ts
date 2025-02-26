import { makeLinkResolver, type LinkResolver } from "./_util/_LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/_SherpaConfig";

export interface FamilySherpa {
  index: LinkResolver;
}

export const makeFamilySherpa = (
  path: string,
  config: SherpaConfig = defaultSherpaConfig,
): FamilySherpa => ({
  index: (props) => makeLinkResolver(`${path}`, props, config),
});
