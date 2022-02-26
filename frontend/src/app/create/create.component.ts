import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  errormsg: string;

  ngOnInit(): void {
  }

  formAnggota = new FormGroup({
	  "nama": new FormControl("", Validators.required),
	  "email": new FormControl("", Validators.required),
	  "noTelpon": new FormControl("", Validators.required)

  });

  userSubmit () {
	  if (this.formAnggota.valid) {
		  console.log(this.formAnggota.value);
	  } else {
		  this.errormsg = "Semua kolom harus diisi !";

	  };



  };

}