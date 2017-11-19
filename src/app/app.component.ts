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
      title: "Neoboardapp",
      subtitle: "Front end developer volunteer at neoboard.",
      imgUrl: "../assets/neoboard-screengrab.png",
      colSpan: 'is-half'
      
    },
    {
      title: "Barcodexchange",
      subtitle: "Front end deveveloper at barcodexchange mobile solutions.",
      imgUrl: "../assets/barcodexchange-screengrab.png",
      colSpan: 'is-half'
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
