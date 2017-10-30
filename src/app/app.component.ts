import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let springEls: any = document.querySelectorAll('.spring');
    springEls.forEach((springEl: any) => {
      let animation = 'tada'
      springEl.addEventListener('mouseover', () => {
        springEl.classList.add('animated', animation)
      });

      springEl.addEventListener('animationend', () => {
        springEl.classList.remove('animated', animation)
      })
    })


  }


}
