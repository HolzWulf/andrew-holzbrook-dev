import { makeLinkResolver, type LinkResolver } from "./_util/LinkResolver";
import { defaultSherpaConfig, type SherpaConfig } from "./_util/SherpaConfig";
import { makePlaySherpa, type PlaySherpa } from "./PlaySherpa";
import { makeWorkSherpa, type WorkSherpa } from "./WorkSherpa";
import { makeFamilySherpa, type FamilySherpa } from "./FamilySherpa";
import { makeResourcesSherpa, type ResourcesSherpa } from "./ResourcesSherpa";

interface Sherpa {
  family: FamilySherpa;
  home: LinkResolver;
  play: PlaySherpa;
  resources: ResourcesSherpa;
  test: LinkResolver;
  work: WorkSherpa;
}

export const makeSherpa = (
  config: SherpaConfig = defaultSherpaConfig,
): Sherpa => ({
  family: makeFamilySherpa("/family", config),
  home: (props) => makeLinkResolver("/", props, config),
  play: makePlaySherpa("/play", config),
  resources: makeResourcesSherpa("/", config),
  work: makeWorkSherpa("/work", config),
  test: (props) =>
    makeLinkResolver(config.featureFlags?.testPageEnabled ? "/test" : "/", props, config),
});
