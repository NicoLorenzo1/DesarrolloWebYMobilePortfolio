import { Component } from '@angular/core';
import { BeachInterface } from '../beach-interface';
import { BeachServiceService } from '../beach-service.service';
@Component({
  selector: 'app-beach-container',
  templateUrl: './beach-container.component.html',
  styleUrls: ['./beach-container.component.css']
})
export class BeachContainerComponent {

  listOfBeach: Array<BeachInterface> = [];


  constructor(private beachService: BeachServiceService) {
    beachService.getList().then(beachList => { this.listOfBeach = beachList });
  }
}
