import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public numbers: Array<number>;

  ngOnInit(): void {
    this.numbers = Array.apply(null, {length: 50}).map(_ => 1);
  }
}
