import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { 

  }

  readData: any;

  ngOnInit(): void {
	  this.service.getAllData().subscribe( ( response ) => {
		   console.log(response, "res==>", typeof(response.data));
		   this.readData = response.data;
	  });
  }

}
