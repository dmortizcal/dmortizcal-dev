import {Component} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContacto!: FormGroup;
  saving: boolean = false;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.saving = false;
    this.formContacto = new FormGroup({
      user_name: new FormControl("", [Validators.required]),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    })
  }

  public sendEmail(e: Event) {
    if (this.formContacto.invalid) {
      return;
    }
    this.saving = true;
    e.preventDefault();


    emailjs.sendForm('service_b9zjewj', 'template_bs7mh4j', e.target as HTMLFormElement, '8Sp-gFQFlTCmd79JT')
      .then((result: EmailJSResponseStatus) => {
        this.ngOnInit()
        console.log(result.text);
        this.snackBar.open(`${result.text}: Mensaje enviado`, 'Cerrar', {
          duration: 5000, //
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        });
      }, (error) => {
        console.log(error.text);
        this.snackBar.open(`${error.text}: No se envio el mensaje`, '', {
          duration: 5000, //
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        });
      });
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }

}
