export interface ArtistTopTracksDTO {
  toptracks: Toptracks;
}

export interface Toptracks {
  track: Track[];
  '@attr': Attr2;
}

export interface Track {
  name: string;
  playcount: string;
  listeners: string;
  mbid?: string;
  url: string;
  streamable: string;
  artist: Artist;
  image: Image[];
  '@attr': Attr;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  '#text': string;
  size: string;
}

export interface Attr {
  rank: string;
}

export interface Attr2 {
  artist: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
