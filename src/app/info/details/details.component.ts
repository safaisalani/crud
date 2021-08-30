import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import * as superdata from '../states.json'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  countryList: any

  able: any;
  SuperData = (superdata as any).default;
  Statelist: any;
  car: any;
  balck: any;

  formG: FormGroup;
  fa: any;
  country_store: any;
  constructor(public ListingService: CountryService, public formbuilder: FormBuilder , private router:Router) {
    this.Getcountrylist();
    this.formG = this.formbuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      MiddleName: ["", Validators.required],
      Address: ["", Validators.required],
      Email: ["", Validators.required],
      ZipCode: ["", Validators.required],
      PhoneNumber: ["", Validators.required],
      Height: ["", Validators.required],
      Weight: ["", Validators.required]
    });
  }

  ngOnInit(): void {

    // this.ListingService.getusername().subscribe((data=>{
    //   this.car = data
   // }))

    // console.log("hi"+this.car);
    

    // console.log(this.countryList[0].name); 
    // console.log(this.SuperData.countries[0].country)


    this.Statelist = this.SuperData.countries
    this.balck = this.Statelist[0].states
    console.log(this.Statelist[1].states)
  }
  public Getcountrylist() {
    this.ListingService.getnow().subscribe(data => {
      this.countryList = data;
      // console.log(this.countryList[0].name);

    });
  }
  setnow(valke: any) {
    document.getElementsByClassName("nu")[0].innerHTML = "+" + valke;



  }
  public GetStatelist(value: any) {
    // console.log(value)
    this.balck = this.Statelist[value].states
    console.log(this.Statelist[value].states)

   console.log(document.getElementById("statem")?.innerHTML);
  //  console.log(document.getElementById('country')?.innerHTML);
   console.log(document.getElementsByClassName('country')[value].innerHTML);
   console.log(document.getElementById("call")?.innerHTML);
   this.country_store = document.getElementsByClassName('country')[value].innerHTML
   
   
    // this.car = this.SuperData.countries[0].country + this.SuperData.countries[1].country
    // console.log(this.car);




    //this.Statelist = this.SuperData.filter((u: { countries: { country: any; }; }) => {u.countries.country;
    //});
  }
  save() {
    if(this.formG.invalid){
      //  this.submit = true;
       console.log("form invlid");
       
       
     }else{

      this.fa = this.formG.value
      this.fa.state = document.getElementById("statem")?.innerHTML
      this.fa.country = this.country_store
      this.fa.countryCode =  document.getElementById("call")?.innerHTML
    console.log(this.fa);}

    this.ListingService.getdetails(this.fa).subscribe(data =>{    

    
   }

   

    )
  
    alert("details added")
    setTimeout(() => {
      this.router.navigate(['/info'])
    }, 1000);
  
  }

  


}