import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  arr = [
    {
      title: "angma",
      subtitle: "bulma components for angular",
      imgUrl: "https://picsum.photos/400/300"
    },
    {
      title: "ja-camera",
      subtitle: "web camera capture component for angular based on webrtc",
      imgUrl: "https://picsum.photos/400/300"
    },
    {
      title: "neoboardapp.com",
      subtitle: "Front end dev volunteer at neoboard",
      imgUrl: "https://picsum.photos/400/300"

    },
    {
      title: "barcodexchange.com",
      subtitle: "Front end dev at barcodexchange mobile solutions",
      imgUrl: "https://picsum.photos/400/300"
    }
  ]

  backgroundColor = '#fff' //white
  springEls: any;
  awesome: any;

  ngOnInit() {

    this.awesome = document.getElementById('awesome')
    console.log(this.awesome)
    this.springEls = document.querySelectorAll('.spring');
    this.springEls.forEach((springEl: any) => {
      let animation = 'rubberBand'
      springEl.addEventListener('mouseover', () => {
        springEl.classList.add('animated', animation)
      });

      springEl.addEventListener('animationend', () => {
        springEl.classList.remove('animated', animation)
      })
    })

  }

  triggered() {
    this.backgroundColor = '#000'
    this.springEls.forEach((springEl: any) => {
      springEl.classList.add('is-secondary')
    })

    this.awesome.classList.add('animated', 'tada')

  }

  untrigger() {
    this.backgroundColor = '#fff'
    this.awesome.classList.remove('animated', 'tada')

    this.springEls.forEach((springEl: any) => {
      springEl.classList.remove('is-secondary')
    })
  }

}
