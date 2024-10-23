import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponentComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.signInForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}
  onSubmit() {
    if (this.signInForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.signInForm.value);
    } else {
      // Mark all fields as touched to trigger validation messages
      this.signInForm.markAllAsTouched();
    }
  }
}
