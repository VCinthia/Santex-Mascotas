import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDTO } from 'src/app/models/login.dto';
import { UserDTO } from 'src/app/models/user.dto';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  mostrarFaseUno = true;
  mostrarFaseDos = false;

  userRegister: UserDTO | null = null;
  nombre: string;
  apellido: string;
  telefono: string;
  dniPersona: number | null;
  email: string;
  password: string;
  respuesta: string;


  constructor(
    private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.dniPersona = null;
    this.respuesta = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void { };

  onCreate(): void {
    const user: LoginUserDTO = { email: this.email, password: this.password, };
    this.userRegister = new UserDTO(this.nombre, this.apellido, this.telefono, this.dniPersona!, this.respuesta, user);
    this.registerService.createUser(this.userRegister).subscribe({
      next: (data) => {
        console.log(data);
        this.toastrService.success(data.response, 'Se registró correctamente. Ahora puedes logearte', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.router.navigate(['/log-in'])
      },
      error: (err) => {
        this.toastrService.error(err.error.message, 'Datos incorrectos de registro', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }
    }
    )
  }
}