import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  protected isLoginFormVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public handleLoginFormData(event: any) {
    console.log(event);
    this.isLoginFormVisible = false;

    // 1. Se recibe la data
    // 2. Se la envía al server ('til they do it)
    // 3. Se cambia al otro componente
    // 4. Se verifica si el código es correcto mandando eso al server
    // 5. Si este es correcto, se redirige al dashboard; si no, se lanza mensaje de error
  }

  public handleVerificationCode(event: string) {
    console.log(event);
  }
}
