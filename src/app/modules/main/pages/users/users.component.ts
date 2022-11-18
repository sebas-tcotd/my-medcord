import { Component, OnInit } from '@angular/core';
import { usersListMock } from '../../../../mocks/users-list.mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  public users: any[] = usersListMock;
  public columns: string[] = [
    'DNI',
    'Apellidos',
    'Nombres',
    'Celular',
    'Correo electrónico',
    'Rol',
    'Permisos',
    'Acciones',
  ];

  constructor() {}

  ngOnInit(): void {}
}
