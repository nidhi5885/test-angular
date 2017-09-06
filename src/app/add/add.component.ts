import { Component, OnInit } from '@angular/core';
import { Employee } from '../home/home.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee:Employee;

  constructor() { }

  ngOnInit() {
  }

}
