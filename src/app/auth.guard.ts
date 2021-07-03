import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor(private router: Router,private authService: AuthService) {
  }
 
 
  canLoad(route: Route): boolean {
    console.log("auth")
    
    if(this.authService.loggedIn()){
      console.log("entree canload")
      this.router.navigate(['listado']);
      return true;
    }else{
      // this.router.navigate(['land']);
      return false;
    }
    
  }
  
  // canLoad2(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

}
