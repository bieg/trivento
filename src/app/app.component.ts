import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  users: User[];  
  hideElement: true;
  public edited = false;
  public showGreeting = false;

  showDropDown:boolean;
  displayddl:string;

manualtoggle(event: any){
    this.showDropDown = !this.showDropDown;
    this.displayddl = this.showDropDown ? "block" : "none";

    console.log(event.currentTarget.id);
}

  constructor(private userService: UserService) { }  

  ngOnInit() {
    this.userService.getAll()
      .then(users => this.users = users);
  }

  private ik = 100;

  // title = 'app works!';

  title = this.ik;
    
};
