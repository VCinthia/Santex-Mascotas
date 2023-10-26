import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToHomeSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
