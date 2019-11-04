import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingHomeComponent } from './booking-home/booking-home.component';
import { BookComponent } from './book/book.component';
import { BookingBranchComponent } from './booking-branch/booking-branch.component';
import { BookBranchDetailComponent } from './booking-branch-detail/booking-branch-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookingHomeComponent
    //,canActivate: [NeedAuthGuard]
  },
  {
    path: 'book',
    component: BookComponent
    //,canActivate: [NeedAuthGuard]
  },
  {
    path: 'bookbranch',
    component: BookingBranchComponent
    //,canActivate: [NeedAuthGuard]
  },
  {
    path: 'bookbranch-detail',
    component: BookBranchDetailComponent
    //,canActivate: [NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
