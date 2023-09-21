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

  //TODO: PARA MOSTRAR PHASE ONE O TWO EN FORM Y DESPUES ENVIAR TODO A FUNCION:
  mostrarFaseUno = true;
  mostrarFaseDos = false;

  userRegister: UserDTO | null = null;
  nombre: string;
  apellido: string;
  telefono: string;
  dniPersona: number | null;

  //user: LoginUserDTO | null = null;
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
    this.dniPersona = null;
    //this.user = null;
    // this.userLogin?.email = '';
    // this.userLogin?.password = '';
    
    this.email = '';
    this.password = '';
    //this.secret = '';
  }

  ngOnInit(): void {

  }

  


  //TODO: funcion para crear usuario ok -> ver que identifica por dni pero no por mail
  onCreate(): void {
    //this.user = new LoginUserDTO(this.email, this.password);
    const user: LoginUserDTO = { email: this.email, password: this.password, };

    //console.log(`Ingreso login: email:${this.email} | password:${this.password}`);

    this.userRegister = new UserDTO(this.nombre, this.apellido, this.telefono, this.dniPersona!, user /*this.email, this.password, this.secret*/);

    //console.log('Ingreso usuario:', this.userRegister);

    // console.log(`Ingreso usuario: nombre:${this.nombre} | apellido:${this.apellido} | telefono:${this.telefono} | dniPersona:${this.dniPersona} | userLoginEmail:${this.email} | userLoginPassword:${this.password}`);
    // console.log(`objeto user datos login: email:${this.email} | password:${this.password}`);
    // console.log(`objeto userLogin: ${user}`);
    // console.log(this.userRegister);

    this.registerService.createUser(this.userRegister).subscribe(data => {
      console.log(data);

      this.toastrService.success(data.response, 'Se registró correctamente. Ahora puedes logearte', {
        timeOut: 3000, positionClass: 'toast-top-right'
      });

      this.router.navigate(['/log-in'])
    },
      err => {
        this.toastrService.error(err.error.message, 'Datos incorrectos de registro', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      })
  }
}