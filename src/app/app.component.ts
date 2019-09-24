import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  srcstring = "";
  value = 0;
  enlarge = false;
  imgclick(val) {
    this.value = val;
    this.srcstring = "https://cdn.jsdelivr.net/gh/kishvd/angular-Test@master/src/assets/image" + val + ".jpg";

  }

  enlargeclick(){
    console.log("val");

this.enlarge = !this.enlarge;

  console.log(this.enlarge);
  }
}

