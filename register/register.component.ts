import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Customers} from '../model/customers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  hide = true;
  

  constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<RegisterComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Customers ) {
       // this.form = fb.group({
          // no: [no],
          // fname:[fname],
          // lname: [lname],
          // tel : [tel],
          // image_avartar: [image_avartar ],
          // password: [password ],
          // email:[email ],
          // birthdate:[birthdate ],
          // provider : [provider ],
          // name : [name ],
          // token : [token ]
        //}); 
      }

  ngOnInit() {

  //   this.form = this.fb.group({
      
  // });
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
