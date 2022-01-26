import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistSearchDTO } from 'src/app/data-types/interfaces/artist-search.interface';
import { AppHttpService } from './app-http.service';

@Injectable()
export class CoreDataService {
  private baseUrl = '';

  constructor(private httpService: AppHttpService) {}

  public getArtistMatches(query: string): Observable<ArtistSearchDTO> {
    return this.httpService.get(this.baseUrl, {
      params: new HttpParams()
        .set('method', 'artist.search')
        .set('artist', query)
        .set('limit', 5),
    });
  }
}
