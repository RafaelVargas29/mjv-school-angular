import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from '../../models/product.model';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  
  product?: Product;

  constructor(private activedRoute: ActivatedRoute,
    private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['productId']);
      this.product = this.ProductsService.getById(id);
      console.log(this.product);
    });
  }

}
