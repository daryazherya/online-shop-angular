import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ RouterLink, MatToolbarModule, MatButtonModule],
})

export class  HeaderComponent {
    constructor(public dialog: MatDialog ) {

    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent,{
            width: '500px',
            data: 333
        });
  
        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    }
}


