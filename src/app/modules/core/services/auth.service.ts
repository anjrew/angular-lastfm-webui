import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lastFMCreds } from 'src/app/resources/secrets/last-fm.secrets';
import { AppHttpService } from './app-http.service';
import { LocalStorageService } from './local-storage.service';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {
  private authToken = '';
  public bearerToken = '';

  constructor(
    private httpService: AppHttpService,
    private localStorage: LocalStorageService // private location: Location
  ) {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    this.authToken = token as string;
  }

  /** Initialized the Authentification process and
  on completion emits boolean value depending on weather auth was successful */
  public initialize(): Observable<boolean> {
    return new Observable((subscriber) => {
      if (!this.bearerToken) {
        this.bearerToken = this.localStorage.getBearerToken();
      }

      if (this.bearerToken) {
        subscriber.next(true);
      }

      /**If no bearer token is found check for a authentification token in the Url 'token' parameter*/

      const urlAuthToken = this.authToken;
      const apiKey = lastFMCreds.apiKey;
      const secret = lastFMCreds.sharedSecret;

      if (!urlAuthToken) {
        const location = window.location;
        /* Make a call with the API key for the Auth Token */
        location.href = `http://www.last.fm/api/auth?api_key=${apiKey}&cb=${location.origin}`;
      } else {
        /* Get a Web service session */
        const signatureString = `api_key${apiKey}methodauth.getSessiontoken${urlAuthToken}${secret}`;
        const hashedSignature = Md5.hashStr(signatureString);
        const getWebSessionUrl = `?method=auth.getSession&token=${urlAuthToken}&api_key=${apiKey}&api_sig=${hashedSignature}`;

        this.httpService
          .get(getWebSessionUrl, { responseType: 'text' })
          .subscribe(
            (response) => {
              const parser = new DOMParser();
              const result = parser.parseFromString(
                response as string,
                'application/xml'
              );
              const sessionToken =
                result.getElementsByTagName('key')[0]?.innerHTML;

              if (!sessionToken) {
                subscriber.next(false);
                return
              }

              this.localStorage.setBearerToken(sessionToken);

              this.bearerToken = sessionToken;
              subscriber.next(true);
              return
            },
            () => {
              subscriber.next(false);
              return
            }
          );
      }
    });
  }
}
