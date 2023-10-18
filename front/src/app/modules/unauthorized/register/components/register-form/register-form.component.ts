import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('formularioRegister') formularioRegister?: NgForm;

  mostrarFaseUno = true;
  mostrarFaseDos = false;

  onSiguiente(): void {
    if (this.validateFase(this.mostrarFaseUno)) {
      this.mostrarFaseUno = false;
      this.mostrarFaseDos = true;
    }
  }

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

  ngOnInit(): void {}

  onCreate(): void {
    const faseUnoValida = this.validateFase(this.mostrarFaseUno);
    const faseDosValida = this.validateFase(!this.mostrarFaseUno);

    if (!faseUnoValida || !faseDosValida) {
      return;
    }

    const user: LoginUserDTO = { email: this.email, password: this.password };
    this.userRegister = new UserDTO(
      this.nombre,
      this.apellido,
      this.telefono,
      this.dniPersona!,
      this.respuesta,
      user
    );
    this.registerService.createUser(this.userRegister).subscribe({
      next: (data) => {
        this.toastrService.success(
          data.response,
          'Se registró correctamente. Ahora puedes logearte',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
        this.router.navigate(['/log-in']);
      },
      error: (err) => {
        this.toastrService.error(
          err.error.message,
          'Datos incorrectos de registro',
          {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }
        );
      },
    });
  }

  validateFase(faseUno: boolean): boolean {
    if (faseUno) {
      if (!this.nombre || !this.apellido || !this.telefono || this.dniPersona === null) {
        this.mostrarAlerta("Fase uno: Debes completar todos los campos.");
        return false;
      }
    } else {
      if (!this.email || !this.password || !this.respuesta) {
        this.mostrarAlerta("Fase dos: Debes completar todos los campos.");
        return false;
      }
    }
    return true;
  }

  private mostrarAlerta(mensaje: string): void {
    this.toastrService.warning(mensaje, 'Campos requeridos', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
}
