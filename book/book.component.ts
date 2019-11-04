import { Component, OnInit } from '@angular/core';
import {AuthService,FacebookLoginProvider, GoogleLoginProvider} from 'angular-6-social-login';

declare var jquery: any;
declare var $: any;
declare var FB: any;
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  paid = false;
  user: any;
  constructor( public authService: AuthService ) { }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '513708895874470',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
     
     this.authService.authState.subscribe((user) => {
       this.user = user;
        console.log(this.user);

    });
  } 

  paidProcess(){
    $('.bd-example-modal-lg').modal('hide');
    this.paid = true;
  }
  //load default script
  loadDefaultScript(){

  }

  signOut(){
    this.user = null;
    this.authService.signOut();
    console.log("out")
  }
//end load default script

}
