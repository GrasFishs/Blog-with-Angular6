import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../User';

@Component({
  selector: 'ng-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  providers: [UserService]
})
export class UserPanelComponent implements OnInit {

  public user: User;

  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

}
