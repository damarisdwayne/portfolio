import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiencex.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Frontend Software Engineer',
        p: 'PensionDynamics AG | Jun 2022 - Present',
      },
      text: '<p>Como Desenvolvedora Frontend na PensionDynamics AG, trabalho com React, Redux, Jotai e React Query para desenvolver aplicações web robustas e eficientes. Utilizo Cypress e Jest para realizar testes rigorosos e garantir a qualidade do código. Além disso, sou responsável pela criação e manutenção de um design system que aprimora a consistência e a experiência do usuário em nossos produtos.</p>',
    },
    {
      summary: {
        strong: 'Software Developer',
        p: 'BH Softwares | Jan 2022 - Jun 2022',
      },
      text: '<p>Como Desenvolvedora de Software na Bh Softwares, desempenhei um papel fundamental na criação de sites e aplicativos personalizados, adaptados para atender às necessidades únicas de nossa clientela diversificada. Aproveitando o poder do React e do React Native, contribuí para o desenvolvimento de soluções digitais de ponta que combinam criatividade e funcionalidade.</p>',
    },
    {
      summary: {
        strong: 'Backend Developer',
        p: 'Projelet | Jun 2021 - Dec 2021',
      },
      text: '<p>Como Desenvolvedora de Software na Projelet, trabalhei com C# para automatizar a criação de projetos de instalação em Revit, melhorando a eficiência dos fluxos de trabalho. Colaborei com equipes e stakeholders em um ambiente Scrum e desenvolvi consultas MySQL para otimizar a gestão de dados.</p>',
    },
    {
      summary: {
        strong: 'Software Developer',
        p: 'MultiCrédito |  Jan 2020 - Jun 2021',
      },
      text: '<p>Como Desenvolvedora de Software na MultiCrédito, trabalhei com uma equipe para criar funcionalidades novas e inovadoras para web e mobile. Usamos JavaScript/TypeScript, HTML e CSS para melhorar a experiência digital dos nossos usuários. Também ajudei a modernizar um sistema antigo que foi feito com PL/SQL, utilizando Asp.NET.</p>',
    },
  ]);
}
