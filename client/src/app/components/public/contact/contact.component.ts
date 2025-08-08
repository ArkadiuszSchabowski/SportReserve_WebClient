import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    sender: ['', [Validators.required, Validators.email]],
    topic: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(500),
      ],
    ],
  });

  sendEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }

  get senderError(): string | null {
    const control = this.form.get('sender');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Sender is required.';
      }
      if (control.errors['email']) {
        return 'Invalid email address format.';
      }
    }
    return null;
  }

  get topicError(): string | null {
    const control = this.form.get('topic');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Message topic is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Message topic must be between 5 and 50 characters.';
      }
    }
    return null;
  }

  get messageError(): string | null {
    const control = this.form.get('message');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Message is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Message must be between 25 and 500 characters.';
      }
    }
    return null;
  }
}
