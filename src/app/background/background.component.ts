import { Component, OnInit } from '@angular/core';
import * as Particles from "particlesjs"

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Particles.init({
      selector: '.background',
      color: '#ff6347',
      maxParticles: 100,
      sizeVariations: 3,
      connectParticles: true,
      responsive: [
          {
             breakpoint: 768,
             options: {
               maxParticles: 40,
             }
           }, {
             breakpoint: 425,
             options: {
               maxParticles: 30,
             }
           }, {
             breakpoint: 320,
             options: {
               maxParticles: 10 // disables particles.js
             }
           }
         ]
    })
  }

}
