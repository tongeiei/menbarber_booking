import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingHomeComponent } from './booking-home.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8Nveu2mp9_7D1aOprDF8N_qzXKY7miNM'
    })
  ],
  declarations: [BookingHomeComponent],
  exports: [
    BookingHomeComponent
  ],
  providers: [
   
  ]
})
export class BookingHomeModule { }
