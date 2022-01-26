import { ModalService } from './services/modal.service';
/* ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* COMPONENTS */
import { ToolBarComponent } from './components/elements/tool-bar/tool-bar.component';

/* MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

/* SERVICES */
import { AppHttpService } from './services/app-http.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';
import { CoreDataService } from './services/core-data.service';
import { AuthDialogComponent } from './components/dialogs/auth-dialog/auth-dialog.component';

const sharedComponents = [ToolBarComponent];

@NgModule({
  declarations: [...sharedComponents, AuthDialogComponent],
  imports: [
    /* Angular */
    CommonModule,
    RouterModule,

    SharedModule,
  ],
  exports: [...sharedComponents],
  providers: [
    AppHttpService,
    LocalStorageService,
    AuthService,
    CoreDataService,
    ModalService
  ],
})
export class CoreModule {}
