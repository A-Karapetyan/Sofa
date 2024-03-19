import { Component } from '@angular/core';
import { ItemComponent } from '../../item/item.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}