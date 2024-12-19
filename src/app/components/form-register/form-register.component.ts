import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup; // myForm para que coincida con el HTML

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm(); // Llamamos a buildForm en ngOnInit
  }

  private buildForm(): void {
    //los campos coiciden con el html formControlName
    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      surename: [, Validators.required], 
      email: [, [Validators.required, Validators.email]], 
      url: [, Validators.required], 
      password: [, [Validators.required, Validators.minLength(8)]], 
      repitpassword: [, [Validators.required, this.checkPasswords]] 
    });
  }

  public register(): void {
    if (this.myForm.valid) {
      let user = this.myForm.value;
      console.log(user);
    } else {
      console.log('Formulario inválido');
    }
  }

  private checkPasswords(control: AbstractControl)
   {
     let resultado = {matchPassword:true};
     console.log(control.value);
     console.log(control.parent);
     console.log(control.parent?.value.password);

     if(control.parent?.value.password == control.value)
     {resultado = null}

     return resultado;
  }

 

}