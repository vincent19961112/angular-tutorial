import { FakerService } from '../../shared/faker.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private FakerService:FakerService
    ) { }

  ngOnInit(): void {
  }
  addfakerProduct(){
    this.FakerService.addOne();
  }

}
