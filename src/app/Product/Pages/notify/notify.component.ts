import { Component, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      productName: [null, [Validators.required]],
      image: [null, [Validators.required]],
      id: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.activeRoute.queryParams.subscribe((params) => {
      if (params) {
        this.reactiveForm.patchValue({
          productName: params['name'],
          id: params['id'],
          description: params['description'] || '', // default to empty if not provided
          image: params['image'],
          category: params['category'] || 'building', // default category if not provided
          price: params['price'],
          // default price range if not provided
        });
      }
    });

    // this.reactiveForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    //   this.formStatus = status;
    // });
  }

  onFormSubmitted() {
    const formData = this.reactiveForm.value;
    this.productService.sendFormData(formData);
    this.reactiveForm.reset({
      productName: '',
      id: '',
      description: '',
      category: '',
      price: '',
    });
  }
}
