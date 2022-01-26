# My Last Ever Fm App

This app interacts with the Last FM API to get data on Artists Tracks and Albums.

It has four features:

- Show top artists by country
- Show details of artists
- Search for artists
- Get a Last FM web session token (for no real reason but to prove that it can).

## Getting started

Install the dependencies with `npm install`

### Development server

Run `ng start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get a web session token
This feature depends on a secrets file being available in the project. The file is ignored by git and is not part of the repository. It has to be added manually.

The file location is: src\app\resources\secrets\last-fm.secrets.ts

```typescript
import { LastFmCredentials } from "src/app/data-types/interfaces/lastfm-credentials.interface";

export const lastFMCreds: LastFmCredentials = {
  apiKey: `[YOUR API KEY]`,
  sharedSecret: `[YOUR SECRET]`,
};
```

Fill in the details that you obtain from LastFM on account creation. https://www.last.fm/api/account/create
