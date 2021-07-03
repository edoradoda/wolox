import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {
  loggedIn = false;
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

    const x = 0;
    if(this.auth.loggedIn()){
      this.loggedIn=true;
      console.log("con token");
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

registrarse() {
  console.log('hola');
  this.router.navigate(['/land/register']);
}

}
