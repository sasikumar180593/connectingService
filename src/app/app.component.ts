import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'connectingService';
  
  constructor(public route: Router){
        //  this.route.navigate(['empD']);
         this.route.navigate(['taskD']);
  }
}
