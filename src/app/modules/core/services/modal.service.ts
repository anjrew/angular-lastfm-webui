import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthDialogComponent } from '../components/dialogs/auth-dialog/auth-dialog.component';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';


@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  /**  Open the upload dialog. */
  public openAuthTokenDialog(token: string): Observable<void> {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      minHeight: 200 + 'px',
      maxWidth: 600 + 'px',
      minWidth: 400 + 'px',
      data: token,
    } as MatDialogConfig);

    return dialogRef.afterClosed();
  }

  public showErrorToast(message: string): Observable<MatSnackBarDismiss> {

    const dialogRef = this.snackBar.open(message, 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      panelClass: `danger-snackbar`,
    });

    return dialogRef.afterDismissed();
  }
}
