import { LastFmCredentials } from "src/app/data-types/interfaces/lastfm-credentials.interface";

export const environment = {
  production: true,
  lastFMCreds: window['env' as any]['lastFMCreds' as any] as unknown as LastFmCredentials,
};
