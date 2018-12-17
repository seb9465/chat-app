import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

   public constructor(private router: Router) { } 

   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       if (localStorage.getItem('currentUser')) {
           return true;
       }

       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
       return false;
   }
}
