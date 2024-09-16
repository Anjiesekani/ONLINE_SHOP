import { Component, Input, input } from '@angular/core';
import { ProductService } from '../../../../Services/product-service.service';
import { Product } from '../../../../Model/model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.css',
})
export class BuildingComponent {
  ngOnInit(): void {}
}
