import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';
import {Observable} from 'rxjs';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @ViewChild('hobby') hobby: any;
  openHobby = false;
  signUp = new FormGroup({
    username: new FormControl('',
      [Validators.required, Validators.email, Validators.minLength(5), UsernameValidators.canNotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl('')
    }),
    topics: new FormArray([])
  });

  get username(): FormControl {
    return (this.signUp.get('username') as FormControl);
  }

  get password(): FormControl {
    return (this.signUp.get('password') as FormControl);
  }

  get topics(): FormArray {
    return (this.signUp.get('topics') as FormArray);
  }

  onSubmit(): void {
    console.log(this.signUp);
    // console.log(this.signUp.controls.username);
  }


  onAddTopic(topic: any): void {
    (this.signUp.get('topics') as FormArray).push(new FormControl({name: topic}));
    this.hobby.nativeElement.value = '';

  }

  // openHobby(): void {
  //
  // }
  onDelete(i: number): void {
    // this.topics.controls.splice(i, 1);
    this.topics.removeAt(i);
  }
}
