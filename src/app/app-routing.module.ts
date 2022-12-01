import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

//   loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.CustomerAppSupplierModule)

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('../app/customers/customers.module').then(
        (x) => x.CustomersModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
