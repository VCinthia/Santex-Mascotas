import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent { 
  constructor(private scrollService: ScrollService) {}

  scrollToHomeSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
