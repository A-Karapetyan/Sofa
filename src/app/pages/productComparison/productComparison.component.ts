import { Component } from '@angular/core';
import { ItemComponent } from '../../item/item.component';

@Component({
  selector: 'app-productComparison',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './productComparison.component.html',
  styleUrl: './productComparison.component.scss'
})
export class ProductComparisonComponent {

}
