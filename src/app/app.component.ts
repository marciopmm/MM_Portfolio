import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formGroup);
    if (!this.formGroup.valid) {
      Swal.fire('Pay attention, please', 'There are validations errors', 'warning');
    }
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