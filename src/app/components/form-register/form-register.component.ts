import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserServiceService } from 'src/app/shared/user.service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  public myForm: FormGroup; // myForm para que coincida con el HTML

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.buildForm(); // Llamamos a buildForm en ngOnInit
  }

  private buildForm(): void {
    // Los campos coinciden con el html formControlName
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      surename: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      url: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(8)]], 
      repitpassword: ['', [Validators.required, this.checkPasswords]] 
    });
  }

  public register(): void {
    if (this.myForm.valid) {
      // Verificar que las contraseñas coincidan
      if (this.myForm.value.password !== this.myForm.value.repitpassword) {
        console.log('Las contraseñas no coinciden');
        return; // Salir de la función si las contraseñas no coinciden
      }

      // Crear un nuevo objeto User
      const user: User = new User(
        0, // id_user, puedes ajustarlo según tu lógica
        this.myForm.value.name,
        this.myForm.value.surename,
        this.myForm.value.email,
        this.myForm.value.url,
        this.myForm.value.password
      );

      // Llamar al servicio para registrar el usuario
      this.userService.register(user).subscribe(
        response => {
          console.log('Usuario registrado exitosamente:', response);
          // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al registrar el usuario:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }

  private checkPasswords(control: AbstractControl) {
    let resultado = { matchPassword: true };
    if (control.parent) {
      const password = control.parent.get('password')?.value;
      if (password === control.value) {
        resultado = null; // Las contraseñas coinciden
      }
    }
    return resultado;
  }
}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// @Component({
//   selector: 'app-form-register',
//   templateUrl: './form-register.component.html',
//   styleUrls: ['./form-register.component.css']
// })
// export class FormRegisterComponent implements OnInit {

//   public myForm: FormGroup; // myForm para que coincida con el HTML

//   constructor(private formBuilder: FormBuilder) {
//   }

//   ngOnInit(): void {
//     this.buildForm(); // Llamamos a buildForm en ngOnInit
//   }

//   private buildForm(): void {
//     //los campos coiciden con el html formControlName
//     this.myForm = this.formBuilder.group({
//       name: [, Validators.required],
//       surename: [, Validators.required], 
//       email: [, [Validators.required, Validators.email]], 
//       url: [, Validators.required], 
//       password: [, [Validators.required, Validators.minLength(8)]], 
//       repitpassword: [, [Validators.required, this.checkPasswords]] 
//     });
//   }

//   public register(): void {
//     if (this.myForm.valid) {
//       let user = this.myForm.value;
//       console.log(user);
//     } else {
//       console.log('Formulario inválido');
//     }
//   }

//   private checkPasswords(control: AbstractControl)
//    {
//      let resultado = {matchPassword:true};
//      console.log(control.value);
//      console.log(control.parent);
//      console.log(control.parent?.value.password);

//      if(control.parent?.value.password == control.value)
//      {resultado = null}

//      return resultado;
//   }

 

// }