import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptions } from 'src/app/data-types/interfaces/http-options.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpService {
  private baseUrl = `/2.0/`;

  constructor(private httpClient: HttpClient) {}

  public get(url: string, options?: HttpOptions): Observable<any> {

    const opts: HttpOptions = options ?? ({} as HttpOptions);

    let params = (options?.params as HttpParams) ?? new HttpParams();
    params = params.append('api_key', environment.lastFMCreds.apiKey).append('format', 'json');

    let headers = (options?.headers as HttpHeaders) ?? new HttpHeaders();

    return this.httpClient.get(this.baseUrl + url, {
      ...opts,
      headers,
      params,
    } as any);
  }
}
