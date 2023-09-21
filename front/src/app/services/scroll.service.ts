import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  // private scrollToSectionSource = new Subject<string>();

  // scrollToSection$ = this.scrollToSectionSource.asObservable();

  // scrollToSection(sectionId: string) {
  //   this.scrollToSectionSource.next(sectionId);
  // }

  // constructor() { }
  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
