import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: '',
      alt: 'Projeto Quiz',
      title: 'Quiz',
      width: '100%',
      height: '100%',
      description:
        '<p>O projeto Quiz é projetado para testar o conhecimento geral do usuário através de uma série de perguntas. Ele utiliza o Next.js para o frontend e incorpora o react-countdown-circle-timer para um temporizador animado envolvente. No final do quiz, o projeto apresenta ao usuário o total de respostas, o número de respostas corretas e a porcentagem de acertos.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://quiz-psi-seven.vercel.app/',
        },
      ],
    },
    {
      src: '',
      alt: 'Projeto Notes',
      title: 'Notes',
      width: '100%',
      height: '100%',
      description:
        '<p>Esta é uma aplicação simples para registrar notas em texto ou por voz usando a API de Reconhecimento de Fala. Ela é desenvolvida com tecnologias modernas como Tailwind CSS, Vite, Date-fns, Lucide, Sonner e Radix Dialog.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://export-notes.vercel.app/',
        },
      ],
    },
    {
      src: '',
      alt: 'Projeto DevStore',
      title: 'DevStore',
      width: '100%',
      height: '100%',
      description:
        '<p>Esta aplicação é um e-commerce inovador focado em produtos exclusivos para desenvolvedores e entusiastas da tecnologia. Criada com Next.js, a plataforma oferece uma experiência de navegação rápida e responsiva, garantindo que os usuários encontrem com facilidade produtos como camisetas temáticas, acessórios de tecnologia, livros e ferramentas essenciais para o dia a dia dos devs.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://devstore-seven-sandy.vercel.app/',
        },
      ],
    },
    {
      src: '',
      alt: 'Projeto My Wallet',
      title: 'My Wallet',
      width: '100%',
      height: '100%',
      description:
        '<p>O My Wallet é uma aplicação de controle financeiro pessoal que permite ao usuário gerenciar suas entradas e saídas de forma prática e organizada. Com autenticação de usuários, a plataforma oferece um acompanhamento claro do saldo e das movimentações financeiras do dia a dia.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://my-wallet-nine-ruddy.vercel.app/login',
        },
      ],
    },
    {
      src: '',
      alt: 'Projeto Milhas.Pro',
      title: 'Milhas.Pro',
      width: '100%',
      height: '100%',
      description:
        '<p>O Milhas.Pro é uma aplicação voltada para o gerenciamento e a otimização de milhas aéreas, ajudando o usuário a controlar seus programas de fidelidade e a aproveitar melhor seus pontos e benefícios.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://milhas-pro-silk.vercel.app/index.html',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects): void {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
