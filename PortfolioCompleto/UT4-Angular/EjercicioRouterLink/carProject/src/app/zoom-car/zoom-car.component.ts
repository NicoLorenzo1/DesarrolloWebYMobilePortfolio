import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zoom-car',
  templateUrl: './zoom-car.component.html',
  styleUrls: ['./zoom-car.component.css']
})
export class ZoomCarComponent implements OnInit{
  
  imageURL: string | null = "";
  model: string | null = "";
  description: string | null = "";
  type: string | null = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imageURL = this.route.snapshot.paramMap.get('imageURL');
    this.model = this.route.snapshot.paramMap.get('model');
    this.description = this.route.snapshot.paramMap.get('description');
    this.type = this.route.snapshot.paramMap.get('type');

}

}

