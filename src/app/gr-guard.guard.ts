import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'

})

export class GrGuardGuard implements CanActivate, OnChanges {


  ngAfterViewInit(): void {

  }

  GuardAuthorized=false
  messages: any[] = [];

  constructor(

  ) {



  }



  setGlobalValue(value: string) {
    // All components that are subscribed to the
    // messenger service receive the update

  }


  ngOnInit() {


  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //authentication code here




    //this WORKS!!!





    return this.GuardAuthorized
  }



  ngOnChanges(changes: SimpleChanges): void {


  }

  ngOnDestroy() {


  }


}
