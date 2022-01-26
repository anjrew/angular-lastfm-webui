import { NgrxMatSelectViewAdapter } from './directives/mat-select-view-adapter';
import { NgModule } from '@angular/core';

/* MATERIAL */
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgrxFormsModule } from 'ngrx-forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const directives = [NgrxMatSelectViewAdapter];

const modules = [
  NgrxFormsModule,

  /* Material */
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...directives],
  providers: [
  ],
})
export class SharedModule {}
