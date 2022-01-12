import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Assets } from '../const/assets';

@Component({
  selector: 'app-artorias',
  templateUrl: './artorias.component.html',
  styleUrls: ['./artorias.component.scss'],
})

export class ArtoriasComponent implements OnInit {
  @Input() currentLocation: string | undefined;
  @Output() vertushka: EventEmitter<void> = new EventEmitter();

  public saltuhaInProgress: boolean = false;
  public rotation: number = 0;
  public Assets = Assets;

  constructor() {
  }

  public saltuha() {
    this.vertushka.emit();
    this.saltuhaInProgress = !this.saltuhaInProgress
  }

  ngOnInit(): void {
  }

  public onSaltuhaFinished(): void {
    this.saltuhaInProgress = false;
  }

}
