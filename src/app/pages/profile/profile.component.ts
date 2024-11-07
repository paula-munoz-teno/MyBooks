import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent 
{

  public miUser : User;
  public isHidden: boolean;
  // public input1: Input;

  constructor()
  {
    this.miUser = new User(422224,"Paula","Muñoz Teno",
      "paulamunozteno@gmail.com", "assets/img/pau.jpg","636363636" )
    console.log(this.miUser)

    this.isHidden = false; 
  }

enviar1(input1:HTMLInputElement){
  console.log(input1)
  console.log(this.miUser.name);
  this.miUser.name = input1.value;
  console.log(this.miUser.name);

}

enviar2(input2:HTMLInputElement){
  console.log(input2)
  console.log(this.miUser.last_name);
  this.miUser.last_name = input2.value;
  console.log(this.miUser.last_name);

}

enviar3(input3:HTMLInputElement){
  console.log(input3)
  console.log(this.miUser.email);
  this.miUser.email = input3.value;
  console.log(this.miUser.email);

}

}