import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamplayerComponent } from './components/teamplayer/teamplayer.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    WhyMeComponent,
    ProjectsComponent,
    TeamplayerComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    // Verhindert das Scrollen nur, wenn du es manuell steuern möchtest.
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.snap-section');
    let closestSection: HTMLElement | null = null;
    let minDistance = Number.MAX_VALUE;
  
    sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
  
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });
  
    if (closestSection && minDistance > 100) {
      this.smoothScroll(closestSection);
      event.preventDefault();  // Blockiert nur das Standard-Scrollen, wenn wir die benutzerdefinierte Logik ausführen
    }
  }
  
  // Die Methode smoothScroll bleibt wie vorher.
  smoothScroll(target: HTMLElement) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const duration = 3000; // Dauer der Animation in Millisekunden (1 Sekunde)
    let startTime: number | null = null;
  
    function animateScroll(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollY = start + (distance * (progress / duration));
  
      window.scrollTo(0, scrollY);
  
      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, end); // Um sicherzustellen, dass das Ziel erreicht wird
      }
    }
  
    requestAnimationFrame(animateScroll);
  }
  
}
