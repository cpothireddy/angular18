import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { EditGroceryItemComponent } from './edit-grocery-item/edit-grocery-item.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'groceries', component: GroceryListComponent },
  { path: 'groceries/edit/:id', component: EditGroceryItemComponent },
];
