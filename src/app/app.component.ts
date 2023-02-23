import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Frontend Dev</h1>',
  styleUrls: ['./app.component.css']
  // styles: ['h1{color: darkcyan}']
})
export class AppComponent {
  title = 'App Development with Angular';
  nums = [2030,3040,23,46,98,87,109];

  sum = ()=>{
    return this.nums[0] + this.nums[1];
  }

  darkcyan = "color: darkcyan";
  dcyan = "background-color: darkcyan";
  green = "background-color: darkseagreen";
  cadetblue = "color: cadetblue";
  // cblue = "background-color: cadetblue";

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
