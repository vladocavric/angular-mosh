import {Component, HostListener} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Injectable} from '@angular/core';
import {Observable, timer} from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from "./modal/modal.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public screenWidth: any;
  public screenHeight: any;
  isSmallScreen = false;
  isChecked = true
  title = 'material-demo2';
  foods = [
    {value: 'Pizza', viewValue: 'Pizza'},
    {value: 'Pasta', viewValue: 'Pasta'},
    {value: 'Burgers', viewValue: 'Burgers'},
  ]
  isTouch: any
  minDate = new Date(2021, 10, 15);
  maxDate = new Date(2021, 12, 15);
  percentage = 0;
  isLoading = false
  animal = '';
  name = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.isLoading = true
    this.getCourses().subscribe(() => this.isLoading = false)
    const timer = setInterval(() => {
      this.percentage++
      if (this.percentage === 100) {
        clearInterval(timer)
        this.percentage = 0
      }
    }, 50)
    this.isTouch = "ontouchstart" in document.documentElement;
    console.log(this.isTouch)

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.isSmallScreen = this.screenWidth < 992 || this.isTouch;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.isSmallScreen = this.screenWidth < 992;
    // console.log(this.screenWidth)
  }

  onChange($event: MatCheckboxChange) {
    console.log($event)
    console.log(this.isChecked)
  }

  getCourses() {
    // return Observable.timer(2000)
    return timer(5000)
  }


  iconClick() {
    // console.log('klikno sam ikonicu')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '550px',
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
