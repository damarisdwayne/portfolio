import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IKnowledge } from '../../interface/IKnowledge.interface copy';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
      name: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
      name: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      name: 'JavaScript',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de React',
      name: 'React',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      name: 'Angular',
    },
  ]);
}
