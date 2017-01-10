import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ciasteczkowy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  class: string = "";
  flag: boolean = true;
  onClick() {
    let tmpFlag = this.flag;
    this.flag = false;
    if (tmpFlag) {
      this.class =  "angrytext";
      let that = this;
      setTimeout(function() {
        that.count += 1;    
        that.class =  "";
        that.flag =  true;;
        console.log('koniec');
      }, 1250);
    }
    

  }

}
