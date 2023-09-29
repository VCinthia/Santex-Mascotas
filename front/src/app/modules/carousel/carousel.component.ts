import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  public screenSize = true;
  ngOnInit() {
    window.onresize = () => (this.screenSize = window.innerWidth > 1100);
  }
}
