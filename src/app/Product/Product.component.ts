import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../Services/product-service.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit() {}
}
