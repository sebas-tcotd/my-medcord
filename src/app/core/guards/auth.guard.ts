import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { LocalStorageKeyEnum } from '../enums/localStorage-key.enum';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private usersService: UsersService) {}
  canLoad(): Promise<boolean> | boolean {
    const token = localStorage.getItem(LocalStorageKeyEnum.TOKEN);
    if (!token) {
      return this.router.navigate(['login']);
    }
    return true;
  }
}
