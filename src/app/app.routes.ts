import { Routes } from '@angular/router';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamplayerComponent } from './components/teamplayer/teamplayer.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: WhyMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'teamplayer', component: TeamplayerComponent },
  { path: 'contact', component: ContactComponent },
];
