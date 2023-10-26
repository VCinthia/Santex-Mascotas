import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-buscar-ahora',
  templateUrl: './buscar-ahora.component.html',
  styleUrls: ['./buscar-ahora.component.css'],
})
export class BuscarAhoraComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToHomeSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
  
}
