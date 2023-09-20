import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDTO } from 'src/app/models/login.dto';
import { UserDTO } from 'src/app/models/user.dto';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  // standalone: true,
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  userRegister: UserDTO | null = null;
  nombre: string;
  apellido: string;
  telefono: string;
  dniPersona: number;

  user: LoginUserDTO | null = null;
  email: string;
  password: string;

  //secret: string;


  constructor(
    private registerService: RegisterService,
    // private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.dniPersona = 0;
    this.user = null;
    // this.userLogin?.email = '';
    // this.userLogin?.password = '';
    
    this.email = '';
    this.password = '';
    //this.secret = '';
  }

  ngOnInit(): void {

  }

  //TODO: HACER FUNCION PARA MOSTRAR PHASE ONE O TWO EN FORM Y DESPUES ENVIAR TODO A FUNCION:

  onCreate(): void {
    this.user = new LoginUserDTO(this.email, this.password);

    console.log(`Ingreso login: email:${this.email} | password:${this.password}`);

    this.userRegister = new UserDTO(this.nombre, this.apellido, this.telefono, this.dniPersona, this.user/*, this.email, this.password, this.secret*/);

    console.log(`Ingreso usuario: nombre:${this.nombre} | apellido:${this.apellido} | telefono:${this.telefono} | dniPersona:${this.dniPersona} | userLogin:${this.user.email} | userLogin:${this.user.email}, ${this.user.password}`);
    console.log(`objeto user datos login: email:${this.user.email} | password:${this.user.password}`);
    console.log(`objeto user: ${this.user}`);
    console.log(this.userRegister);

    this.registerService.createUser(this.userRegister).subscribe(data => {
      //console.log(`email:${this.email} | password:${this.password}`);
      //console.log(data);


      this.toastrService.success(data.response, 'Se registró correctamente. Ahora puedes logearte', {
        timeOut: 3000, positionClass: 'toast-top-right'
        // if(!data.access_token) {
        //   this.toastrService.error(data.response.message, 'Fallo en sistema',{
        //     timeOut: 3000, positionClass:'toast-top-right'
      });
      // } else {
      //   this.tokenService.setToken(data.access_token);
      //   this.toastrService.success(data.response, 'Ingresó correctamente',{
      //     timeOut: 3000, positionClass:'toast-top-right'
      //   });    
      // }
    },
      err => {
        this.toastrService.error(err.error.message, 'Datos incorrectos de registro', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      })
  }
}