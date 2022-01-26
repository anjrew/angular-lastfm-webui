/* ANGULAR */
import { Injectable } from '@angular/core';

/* APP */
import { AppHttpService } from 'src/app/modules/core/services/app-http.service';
import { ArtistTopTracksDTO } from 'src/app/data-types/interfaces/artist-top-tracks.interface';
import { ArtistInfoDto } from 'src/app/data-types/interfaces/artist-info.interface';

/* RXJS */
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ArtistTopAlbumsDTO } from 'src/app/data-types/interfaces/artist-top-albums.interface';

@Injectable()
export class DetailsDataService {
  private baseUrl = '';

  constructor(private httpService: AppHttpService) {}

  public getArtistInfo(artist: string): Observable<ArtistInfoDto> {
    return this.httpService.get(this.baseUrl, {
      params: new HttpParams()
        .set('method', 'artist.getinfo')
        .set('artist', artist),
    });
  }

  public getArtistTop5Tracks(artist: string): Observable<ArtistTopTracksDTO> {
    return this.httpService.get(this.baseUrl, {
      params: new HttpParams()
        .set('method', 'artist.gettoptracks')
        .set('artist', artist)
        .set('limit', 5),
    });
  }
  public getArtistTop5Albums(artist: string): Observable<ArtistTopAlbumsDTO> {
    return this.httpService.get(this.baseUrl, {
      params: new HttpParams()
        .set('method', 'artist.gettopalbums')
        .set('artist', artist)
        .set('limit', 5),
    });
  }
}
