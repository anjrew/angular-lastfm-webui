import { Artist } from "./top-artists-response.interface";

export interface ArtistSearchDTO {
  results: Results;
}

export interface Results {
  'opensearch:Query': OpensearchQuery;
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  artistmatches: Artistmatches;
  '@attr': Attr;
}

export interface OpensearchQuery {
  '#text': string;
  role: string;
  searchTerms: string;
  startPage: string;
}

export interface Artistmatches {
  artist: Artist[];
}


export interface Image {
  '#text': string;
  size: string;
}

export interface Attr {
  for: string;
}
