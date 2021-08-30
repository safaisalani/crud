import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  firstname:any = " not available";
  lastname:any  = " not available";
  middle:any  = " not available";
  address:any  = " not available";
  email:any  = " not available";
  phone:any  = " not available";
  height:any  = " not available";
  weight:any  = " not available";
  Userlist: any;




  constructor(public details:CountryService) { }

  ngOnInit(): void {
    this.details.setdetails().subscribe(data=>{
      this.Userlist = data;
      console.log(data);
      
      console.log(this.Userlist);
      

    })
    


  }




}
