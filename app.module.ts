import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { BookingHomeModule } from './booking-home/booking-home.module';
import { BookModule } from './book/book.module';
import { BookingBranchModule } from './booking-branch/booking-branch.module';
import { BookBranchDetailModule } from './booking-branch-detail/booking-branch-detail.module';
import { RegisterComponent } from './register/register.component';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider} from "angular-6-social-login";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import * as Material from "@angular/material";





  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("513708895874470")
          }
          ,{
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("698478030708-36a6ftljmfdahs3q5qk12br3p20hrl9i.apps.googleusercontent.com")
          }
        ]
    )
    return config;
  }
  


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  exports: [ RegisterComponent, Material.MatGridListModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingHomeModule,
    BookModule,
    BookingBranchModule,
    BookBranchDetailModule,
    SocialLoginModule,
    Material.MatDialogModule,
    BrowserAnimationsModule,
    Material.MatMenuModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatTabsModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    Material.MatProgressSpinnerModule,
    Material.MatSelectModule,
    Material.MatSortModule,
    Material.MatGridListModule,
    Material.MatNativeDateModule
  ],
  providers: [ MatDatepickerModule,AuthGuard,{  provide: AuthServiceConfig,  
    useFactory: getAuthServiceConfigs  }
  ],
  bootstrap: [AppComponent],
  entryComponents : [RegisterComponent]
})
export class AppModule { }
