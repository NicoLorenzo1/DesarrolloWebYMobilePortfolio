import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BeachInterface } from './beach-interface';

@Injectable({
  providedIn: 'root'
})
export class BeachServiceService {

  beachList: Array<BeachInterface> = []


  constructor() {
    this.beachList = [{
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    },
    {
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    },
    {
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    },
    {
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    },
    {
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    },
    {
      imgURL: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWFzfGVufDB8fDB8fHww&w=1000&q=80",
      titulo: "Vision-s",
      description: "Electrico"
    }
    ];
  }

  async getList(): Promise<BeachInterface[]> {
    return this.beachList;
  }

}
