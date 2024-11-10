import { Component, Input } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-grocery-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-grocery-item.component.html',
  styleUrl: './edit-grocery-item.component.css',
})
export class EditGroceryItemComponent {
  grocery$!: Observable<any>;
  constructor(private groceryService: GroceryService) {}
  // in routes app.config.ts: withComponentInputBinding: Enables binding information from the Router state directly to the inputs of the component in Route configurations.
  // here the id is in route we will use input to get the id:
  @Input() set id(groceryId: string) {
    this.grocery$ = this.groceryService.getGroceriesById(+groceryId);
  }
}
