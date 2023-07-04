import { Component, Input } from '@angular/core';
import { BeachInterface } from '../beach-interface';
@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent {
  @Input() beach!: BeachInterface;

}
