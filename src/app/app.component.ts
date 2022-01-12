import { Component } from '@angular/core';

import { Assets } from './const/assets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter: number = 0;
  public title: string = 'firelink shrine';
  public Assets = Assets;

  public saltuhaListener() {
    this.counter++;
  }
}

