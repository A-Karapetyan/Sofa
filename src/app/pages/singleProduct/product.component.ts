import { Component } from '@angular/core';
import { ItemComponent } from '../../item/item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
