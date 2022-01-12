import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  title = 'firelink shrine';

  public saltuxaListener() {
    this.counter = this.counter + 1;
  }
}

