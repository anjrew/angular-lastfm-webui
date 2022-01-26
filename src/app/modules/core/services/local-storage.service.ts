import { Injectable } from '@angular/core';

export const LOCAL_STORAGE_KEYS = {
  BEARER_TOKEN: 'LAST_EVER_FM_BEARER_TOKEN',
};

@Injectable()
export class LocalStorageService {
  /** @returns The value if successful  */
  public setString(key: string, value: string): string {
    localStorage.setItem(key, value);

    return value;
  }

  /** @returns The value of the key if successful  */
  public getString(key: string): string {
    const val = localStorage.getItem(key);

    if (typeof val === 'string' || !val) {
      return (val ?? '') as string;
    } else {
      throw new Error(
        `[LocalStorageService][getString] Received a none string type.`
      );
    }
  }

  public setBearerToken(token: string): string {
    this.setString(LOCAL_STORAGE_KEYS.BEARER_TOKEN, token);
    return token;
  }

  public getBearerToken(): string {
    return this.getString(LOCAL_STORAGE_KEYS.BEARER_TOKEN);
  }
}
