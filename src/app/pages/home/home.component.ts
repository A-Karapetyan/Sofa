import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
