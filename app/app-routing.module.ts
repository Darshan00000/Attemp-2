import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  {path:'Tourists',component: TouristListComponent},
  {path: 'create-tourist',component:CreateTouristComponent},
  {path: '',redirectTo: 'Tourists',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
