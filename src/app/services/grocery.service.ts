import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private groceries = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'bananas' },
    { id: 3, name: 'Carrots' },
  ];

  getGroceries(){
    return of(this.groceries);
  }

  getGroceriesById(id: number) {
    const grocery = this.groceries.find((item) => item.id === id);
    return of(grocery);
  }
}
