import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-reportar-perdida',
  templateUrl: './reportar-perdida.component.html',
  styleUrls: ['./reportar-perdida.component.css']
})
export class ReportarPerdidaComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToHomeSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
