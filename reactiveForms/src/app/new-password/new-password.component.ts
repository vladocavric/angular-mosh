import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(6)], [PasswordValidators.checkPassword]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  }, PasswordValidators.confirmPassword);

  get oldPassword(): FormControl {
    return (this.newPasswordForm.get('oldPassword') as FormControl);
  }

  get newPassword(): FormControl {
    return (this.newPasswordForm.get('newPassword') as FormControl);
  }

  get confirmPassword(): FormControl {
    return (this.newPasswordForm.get('confirmPassword') as FormControl);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.newPasswordForm);
  }
}
