import { type SherpaConfig } from "./_SherpaConfig";

export interface CommonQueryParams { }

export interface LinkProps {
  commonQueryParams?: CommonQueryParams;
}

export type LinkResolver = (props: LinkProps) => string;

export function makeLinkResolver(
  path: string,
  linkProps: LinkProps,
  sherpaConfig: SherpaConfig,
): string {
  return path;
}
