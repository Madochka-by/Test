import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  public name = 'Ychy Angular epta';
  public surname = 'DEVEloper';

  public date = new Date().toDateString();
}
