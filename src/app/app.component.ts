import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is simple form service built with Angular...';
  isTrue: number = 1;
  isSucess: boolean = false;
  lastName: string = '';
  firstName: string = '';
  birthday: number = null;
  city: string = '';
  age: number = null;
  flag: boolean;
  flag1: boolean;

  proceed(){
    this.isTrue = 2;
  }

  proceed2(){
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    this.isSucess = true;
    this.isTrue = 3;
    
    if(this.birthday == null){
      this.flag1 = true;
    }
    else{
      this.age = currentYear - this.birthday;
      this.flag1 = false;
    }

    if(this.city == ''){
      this.flag = true;
    }
    else{
      this.flag = false;
    }
  }

  reset(){
    this.isTrue = 1;
    this.isSucess = false;
    this.firstName = '';
    this.lastName = '';
    this.birthday = null;
    this.city = '';
  }
}
