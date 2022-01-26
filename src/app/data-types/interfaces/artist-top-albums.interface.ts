export interface ArtistTopAlbumsDTO {
  topalbums: Topalbums;
}

export interface Topalbums {
  album: Album[];
  '@attr': Attr;
}

export interface Album {
  name: string;
  playcount: number;
  mbid?: string;
  url: string;
  artist: Artist;
  image: Image[];
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
  artist: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
