import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


export const buildSpecificModules = [

  !environment.production
    ?
    StoreDevtoolsModule.instrument({ maxAge: 100 })
    :
    []

];
