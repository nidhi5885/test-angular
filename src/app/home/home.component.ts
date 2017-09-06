import { Component, OnInit } from '@angular/core';
import {NgZone} from '@angular/core'

export class Employee {
	id :  number;
  name : string;
  contact : number;
}
const EMP : Employee[] = [

	{id : 7497,name : 'Vivek',contact : 9811234567},
	{id : 7503, name : 'Ashish',contact : 9811234568},
	{id : 7517, name : 'Akshay',contact : 9811234569},
	{id : 7490, name : 'Praveen',contact : 9811234566},
	{id : 7533, name : 'Dharmagya',contact : 9811234565}
];

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openAdd:boolean;
  openEdit : boolean;
  employees = EMP;
  name:string;
  id : number;
  contct : number;
  conts:any;
  
 
  title = 'My App';
  selectedEmp = EMP;
  constructor(){
  
  }
  ngOnInit() {
    this.openAdd = false;
    this.openEdit = false;
  }


  addContact(){
    this.openAdd = true;
    
    }
  
  saveContact(){
    
    var cont ={
      id:this.id,
      name:this.name,
      contact:this.contct
    }
    EMP.push(cont);

    }

   editContact(emp)
   {
    this.openEdit = true;
    this.conts = emp; 
   } 

   saveEditContact(conts){
     
     
    for(var i=0;i<EMP.length;i++){
      if(EMP[i].id == conts.id){
        alert(conts.name);
      }
    } 
   }
   
   hello()
   {
     alert("hello world");
     alert("hello Nidhi")
   }
    

}
