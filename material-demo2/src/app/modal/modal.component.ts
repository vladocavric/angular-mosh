import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppComponent, DialogData} from "../app.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
