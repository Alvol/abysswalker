import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-artorias',
  templateUrl: './artorias.component.html',
  styleUrls: ['./artorias.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArtoriasComponent implements OnInit {
  @Input() currentLocation: string | undefined;
  public saltuxaInProgress: boolean = false;
  @Output() vertuwka: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  public saltuxa() {
    this.vertuwka.emit();
    this.saltuxaInProgress = !this.saltuxaInProgress;
  }

  ngOnInit(): void {
  }

}
