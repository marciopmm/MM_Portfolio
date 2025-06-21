import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.less']
})
export class EmailComponent implements OnInit {
  
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private emailService: EmailService) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }

  onSubmit() {
    const loader = document.getElementById("loader");

    loader?.classList.remove('d-none');
    
    if (!this.formGroup.valid) {
      Swal.fire('Pay attention, please', 'There are validations errors', 'warning');
      return;
    }

    let name = this.formGroup.get('name')?.value;
    let email = this.formGroup.get('email')?.value;
    let message = this.formGroup.get('message')?.value;
    
    this.emailService.sendGMail(name, email, message).subscribe({
      next: (resp) => {
                        console.log("Response Data: ", resp);
                        this.formGroup.reset();
                        loader?.classList.add('d-none');
                        Swal.fire("MESSAGE SENT!", 
                                  "Soon I'll get in touch with you! 😃", 
                                  "success");
                      },
      error: (error) => {
                          console.error(error);
                          loader?.classList.add('d-none');
                          Swal.fire("Houston ...", 
                                    "There was an error when sending the message: " + error, 
                                    "error");
                        }
    });
  }

  applyCssError(field: string) {
    let fieldControl = this.formGroup.get(field);
    return {
      '': !fieldControl?.touched,
      'is-valid': fieldControl?.valid && fieldControl?.touched,
      'is-invalid': !fieldControl?.valid && fieldControl?.touched
    };
  } 
}
