  export function getEncodedUrlParam(artist: string): string {
    return artist.split(' ').join('-')
  }
