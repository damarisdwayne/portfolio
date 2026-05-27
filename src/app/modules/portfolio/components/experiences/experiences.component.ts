import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<string[]>([
    'pensiondynamics',
    'bhsoftwares',
    'projelet',
    'multicredito',
  ]);
}
