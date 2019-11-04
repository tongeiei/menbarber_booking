import { Component, OnInit, Input } from '@angular/core';
import {AuthService,FacebookLoginProvider, GoogleLoginProvider} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import {Customers} from '../model/customers';
import { analyzeAndValidateNgModules } from '@angular/compiler';


declare var jquery: any;
declare var $: any;
declare var FB: any;


@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.css'],
})


export class BookingHomeComponent implements OnInit {
  texto : string = 'Tis Guard';
  lat: number = 13.7245206;
  lng: number = 100.6331102;
  zoom: number = 15;

  @Input()
  customers: Customers[];

  
  constructor( private socialAuthService: AuthService,private dialog: MatDialog ) { }

  ngOnInit() {
 
  } 
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
            if(userData.email != null){
              this.gotoBooking();
            }
      }
    );
  }

  gotoBooking(){
    $('.bd-example-modal-lg').modal('hide');
    window.location.href = "#/book";
  }

  openDialog() {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
    
  // //   dialogConfig.data = { 
  // //     no: "",
  // //     fname : "",
  // //     lname : "",
  // //     tel : ""
  // // };
  // dialogConfig.data ={customers : this.customers }
  //   this.dialog.open(RegisterComponent, dialogConfig);
    
  //   const dialogRef = this.dialog.open(RegisterComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(
  //       data => console.log("Dialog output:", data)
        
  //   );  
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
     dialogConfig.width = "30%";
    this.dialog.open(RegisterComponent,dialogConfig);
    $('.bd-example-modal-lg').modal('hide');  
}

 
  //load default script
  loadDefaultScript(){
}
//end load default script
    


}
