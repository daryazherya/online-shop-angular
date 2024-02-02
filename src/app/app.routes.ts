import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BasketComponent } from './components/basket/basket.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'basket', component: BasketComponent},
    {path:'favorites', component: FavoritesComponent},
    {path: '**', redirectTo:'', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  






