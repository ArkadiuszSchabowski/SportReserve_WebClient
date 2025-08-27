import { Component } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendEmailToAdminDto } from 'src/app/models/email/send-email-to-admin-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form = this.fb.group({
    sender: ['', [Validators.required, Validators.email]],
    subject: [
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

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  sendEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let dto: SendEmailToAdminDto = {
      from: this.form.get('sender')!.value,
      subject: this.form.get('subject')!.value,
      message: this.form.get('message')!.value,
    };

    this.emailService.sendToAdmin(dto).subscribe({
      next: () => {
        this.toastr.success('Email sent successfully.');
        this.router.navigateByUrl('/');
      },
    });
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

  get subjectError(): string | null {
    const control = this.form.get('subject');
    if (control && control.touched && control.errors) {
      if (control.errors['required']) {
        return 'Subject is required.';
      }
      if (control.errors['minlength'] || control.errors['maxlength']) {
        return 'Subject must be between 5 and 50 characters.';
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
