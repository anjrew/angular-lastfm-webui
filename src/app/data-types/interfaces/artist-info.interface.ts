export interface ArtistInfoDto {
  artist: ArtistInfo;
}

export interface ArtistInfo {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: Stats;
  similar: Similar;
  tags: Tags;
  bio: Bio;
}

export interface Image {
  '#text': string;
  size: string;
}

export interface Stats {
  listeners: string;
  playcount: string;
}

export interface Similar {
  artist: Artist2[];
}

export interface Artist2 {
  name: string;
  url: string;
  image: Image2[];
}

export interface Image2 {
  '#text': string;
  size: string;
}

export interface Tags {
  tag: Tag[];
}

export interface Tag {
  name: string;
  url: string;
}

export interface Bio {
  links: Links;
  published: string;
  summary: string;
  content: string;
}

export interface Links {
  link: Link;
}

export interface Link {
  '#text': string;
  rel: string;
  href: string;
}
