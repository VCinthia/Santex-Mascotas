import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  private scrollToSectionSubscription?: Subscription;// | undefined;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // this.scrollToSectionSubscription = this.scrollService.scrollToSection$.subscribe(
    //   (sectionId: string) => {
    //     this.scrollToSection(sectionId);
    //   }
    // );
  }

  ngOnDestroy() {
    if (this.scrollToSectionSubscription) {
      this.scrollToSectionSubscription.unsubscribe();
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}