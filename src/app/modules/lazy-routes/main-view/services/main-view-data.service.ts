import { HttpParams } from '@angular/common/http';
/* ANGULAR */
import { Injectable } from '@angular/core';

/* APP */
import { AppHttpService } from 'src/app/modules/core/services/app-http.service';

/* RXJS */
import { Observable } from 'rxjs';
import { TopArtistsResponseDTO } from 'src/app/data-types/interfaces/top-artists-response.interface';

@Injectable()
export class MainViewDataService {
  private baseUrl = '';

  constructor(private httpService: AppHttpService) {}

  public getTop10ArtistsByCountry(
    country: string
  ): Observable<TopArtistsResponseDTO> {
    return this.httpService.get(this.baseUrl, {
      params: new HttpParams()
        .set('method', 'geo.gettopartists')
        .set('country', country)
        .set('limit', 10),
    });
  }
}
