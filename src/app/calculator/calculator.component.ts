import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1:any = 0;
  public num2:any = 0;
  public results:any = 0;
  public calType:any = '';
  public icon:any = '';
  constructor() { }

  ngOnInit(): void {
  }

  Add() {
    this.results =  parseInt(this.num1) + parseInt(this.num2);
  }

  sub() {
    this.results =  parseInt(this.num1) - parseInt(this.num2);
  }

  multiply() {
    this.results =  parseInt(this.num1) * parseInt(this.num2);
  }

  devide() {
    this.results =  parseInt(this.num1) / parseInt(this.num2);
  }

  type(type:any, symbol:any) {
    this.calType = type;
    this.icon = symbol;
  }

  eqaul() {
    if(this.calType == 'Addtion') this.Add();
    if(this.calType == 'Substration') this.sub();
    if(this.calType == 'Multiply') this.multiply();
    if(this.calType == 'Devide') this.devide();
  }

}
