import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import * as Particles from "particlesjs"

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements AfterViewInit {
  @Input() color: string;

  particles: any;
  constructor() { }

  ngAfterViewInit() {
    this.initParticles()
  }

  initParticles(speed: number = 0.5) {
    console.log('speed', speed)
    Particles.init({
      selector: '.background',
      color: '#ff6347',
      maxParticles: 200,
      sizeVariations: 3,
      connectParticles: false,
      speed,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 40,
          }
        }, {
          breakpoint: 425,
          options: {
            maxParticles: 0,
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 0
          }
        }
      ]
    })
  }
}
