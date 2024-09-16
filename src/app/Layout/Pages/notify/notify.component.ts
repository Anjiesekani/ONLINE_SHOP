import { Component, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceAllowed.validators';
import { Product } from '../../../Model/model';
import { ProductService } from '../../../Services/product-service.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'], // Updated to styleUrls
})
export class NotifyComponent implements OnInit {
  formStatus: string = '';
  reactiveForm: FormGroup;

  formData: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      productName: [null, [Validators.required]],
      image: [null, [Validators.required]],
      // id: [null, [Validators.required, CustomValidators.noSpaceAllowed]],
      description: [null, [Validators.required]],
      details: this.fb.group({
        category: ['', Validators.required],
        price: ['', Validators.required],
      }),
    });

    // this.reactiveForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    //   this.formStatus = status;
    // });
  }

  onFormSubmitted() {
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value;
    this.productService.sendFormData(this.formData);
    this.reactiveForm.reset({
      productName: '',
      id: '',
      description: '',
      details: {
        category: '',
        price: '',
      },
    });
  }
}
