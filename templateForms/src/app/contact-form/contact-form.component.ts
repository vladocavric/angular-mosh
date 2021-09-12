import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactMethod = [
    {id: 1, contact: 'Phone'},
    {id: 2, contact: 'Email'},
  ];
  // @ViewChild('form') form: NgForm;
  // firstName = '';
  // comment = '';

  // constructor() {
  // }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.form.value);
    form.form.reset();
  }
}
