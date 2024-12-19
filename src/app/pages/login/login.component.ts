import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public form1: Form

  constructor(){
this.form1 = new Form
  }


  // Método que se llama al enviar el formulario
  onSubmit(form: NgForm) {
   console.log(form.value);
   console.log(this.form1);
    }

  ngOnInit():void{

  }
  }
