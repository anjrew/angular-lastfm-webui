export interface TopArtistsResponseDTO {
  topartists: TopArtists;
}

export interface TopArtists {
  artist: Artist[];
  '@attr': Attr;
}

export interface Attr {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface Image {
  '#text': string;
  size: string;
}
