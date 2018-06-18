import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-to-home',
  template: `
    <div (click)="to()" class="to-home">
      博客
    </div>
  `,
  styles: [`.to-home{
    font-size: 1.5em;
    color: #1A237E;
    cursor: pointer;
  }`]
})
export class ToHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  to() {
    this.router.navigate(['home']);
  }

}
