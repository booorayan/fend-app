import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'App Development with Angular';
  nums = [2030,3040,23,46,98,87,109];

  sum = ()=>{
    return this.nums[0] + this.nums[1];
  }

  darkcyan = "color: darkcyan";
  dcyan = "background-color: darkcyan";
  green = "background-color: darkseagreen";
  cadetblue = "color: cadetblue";


  message = "";
  clickMe = (val: any) =>{
    console.log("Clicked !! !!");
    console.log(val);
    this.message = val;
  }

  show=true;
  toggle() {
    this.show = !this.show;
  }

  inc(){
    this.nums.push( Math.floor(Math.random() * 100));
  }

  dec(){
    this.nums.pop();
  }

}
