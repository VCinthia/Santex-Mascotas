import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDTO } from 'src/app/models/login.dto';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
})
export class LogInFormComponent implements OnInit {

  nombre: string | null;
  user: LoginUserDTO | null = null;
  emailLogin: string;
  passwordLogin: string;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.nombre = this.tokenService.getNombreUsuario();
    this.emailLogin = '';
    this.passwordLogin = '';
  }

  ngOnInit(): void { }

  onLogin(): void {
    this.user = new LoginUserDTO(this.emailLogin, this.passwordLogin);
    this.loginService.login(this.user).subscribe({
      next: (data) => {
        if (!data.access_token) {
          this.toastrService.error(data.response.message, 'Fallo en sistema', {
            timeOut: 3000, positionClass: 'toast-top-right'
          });
        } else {
          this.tokenService.setToken(data.access_token);
          this.nombre = this.tokenService.getNombreUsuario();
          this.toastrService.success(data.response, `Bienvenido ${this.nombre}`, {
            timeOut: 3000, positionClass: 'toast-top-right'
          });
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        this.toastrService.error(err.error.message, 'Datos incorrectos', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }
    }
    )
  }
}