import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: any;
  password: any;

  constructor(private servicio:ServiciosService,private router:Router) {}

  login() {
    console.log(this.usuario);
    console.log(this.password);
    const datos = {
      usuario : this.usuario,
      password : this.password
    }
    this.servicio.Login(datos).subscribe(data =>{
      console.log(data);
      if(data.message.includes("exito")){
        this.router.navigateByUrl('/principal/buscador')
      }
    });
  }
}
