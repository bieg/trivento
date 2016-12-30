import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';

//import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.show.html',
  styleUrls: ['./app.component.css'],
  //directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class HelloWorld {
public show:boolean = false;
public prevClicked:number = -1;
    clicked(index) {// only show clicked img info 
      if(this.things[this.prevClicked] && this.prevClicked != index) {
        this.things[this.prevClicked].show = false;
      }
      this.things[index].show = !this.things[index].show;
      this.prevClicked = index;
  };

  public things:Array<any> = [{
    data: "information for img1:",
    data2: "only the info img1 is displayed"
  },
    {
      data: "information for img2:",
      data2: "only the info for img2 is displayed"
    },
    {
      data: "information for img3:",
      data2: "only the  info for img3 is displayed"
    }]


}
