import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { AppNgrxStoreModule } from './store/app-ngrx-store.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,

    CoreModule,
    SharedModule,

    BrowserModule,
    BrowserAnimationsModule,

    AppNgrxStoreModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
