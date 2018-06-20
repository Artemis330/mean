import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../upload/dialog/dialog.component';
import { UploadService } from '../upload/upload.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.scss']
})
export class SchemaComponent implements OnInit {

  constructor(public dialog: MatDialog, public uploadService: UploadService, private authService: AuthService) {}

  user: any;

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }


  public ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
