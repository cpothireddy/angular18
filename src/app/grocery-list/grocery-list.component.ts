import { Component, inject } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryService = inject(GroceryService);
  groceries$ = this.groceryService.getGroceries();
}
