import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(private router: Router,private authService: AuthService) {
  }
  
  canActivate(){
    console.log("auth")
    if(this.authService.loggedIn()){
      console.log("entree")
      this.router.navigate(['listado']);
      return true;
    }else{
      this.router.navigate(['land']);
      return false;
    }
    
  }
  
}
