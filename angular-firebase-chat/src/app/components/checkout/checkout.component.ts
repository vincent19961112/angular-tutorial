import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CountryService } from '../../services/country.service';
import { PersonalDataService } from '../../services/personal-data.service';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  name = '';
  email = '';
  address = '';
  phone = '';
  telphone = '';
  city;
  site_id;
  All_cities;
  FormGroup;
  All_site_id=[];
  Country:any=[];
  memberCart;

  matcher = new MyErrorStateMatcher();
  constructor(
    private cityApi:CountryService
    ,private fb:FormBuilder
    ,private cd:ChangeDetectorRef
    ,private presonApi:PersonalDataService
    ,private CartApi:CartService
    ,private router:Router) {
    this.FormGroup = this.fb.group(
    {
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
      telphone:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })
  }


  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.getCity();
   this.getCart();
  }

  getCity(){
   this.cityApi.getCities().subscribe(data=>{

    let cities = data[0]['cities'];
    this.All_cities = cities;

      this.cityApi.getSite_ids().subscribe(data=>{

        data.forEach((e:any,index,arr)=>{

        let sites = arr[0]['site_ids'];
          cities.forEach(ele => {
            if(ele === this.city){
                sites.forEach(element => {
                if(element.indexOf(ele)!=-1){
                  this.All_site_id.push(element);
                  }
                });
              }
          });
        })
      })
   })
  }

  getCart(){
    this.CartApi.getCart().subscribe(data=>{
    this.memberCart = data;
   });
  }

  cityChanged(event){
  this.All_site_id = [];
  this.cityApi.getCities().subscribe(data=>{

    let cities = data[0]['cities'];
    this.All_cities = cities;

      this.cityApi.getSite_ids().subscribe(data=>{

        data.forEach((e:any,index,arr)=>{

        let sites = arr[0]['site_ids'];
          cities.forEach(ele => {
            if(ele === this.city){
                sites.forEach(element => {
                if(element.indexOf(ele)!=-1){
                  this.All_site_id.push(element);
                  }
                });
              }
          });
        })
      })
   })
  this.address = event;
  this.cd.detectChanges();
  }

  siteChanged(event){
    this.address = event;
    this.cd.detectChanges();
  }


  onSubmit(form){
    console.log(form.value)
    let PensonalData = {name:'',address:'',email:'',phone:'',telphone:'',product:[],chockoutCount:0};
    PensonalData.name = this.name;
    PensonalData.address = this.address;
    PensonalData.email = this.email;
    PensonalData.phone = `09${this.phone}`;
    PensonalData.telphone = `02${this.telphone}`;
    PensonalData.product = this.memberCart;
    this.name = '';
    this.address = '';
    this.email = '';
    this.phone = '';
    this.telphone = '';
    this.city = '縣市';
    this.site_id = '鄉鎮市';
    this.presonApi.sendData(PensonalData);
    this.cd.detectChanges();
    this.router.navigate(['checkoutSuccessfully']);
    }

}
