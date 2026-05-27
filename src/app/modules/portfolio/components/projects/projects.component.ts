import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@jsverse/transloco';
import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule, TranslocoModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      title: 'Quiz',
      key: 'quiz',
      href: 'https://quiz-psi-seven.vercel.app/',
    },
    {
      title: 'Notes',
      key: 'notes',
      href: 'https://export-notes.vercel.app/',
    },
    {
      title: 'DevStore',
      key: 'devstore',
      href: 'https://devstore-seven-sandy.vercel.app/',
    },
    {
      title: 'My Wallet',
      key: 'mywallet',
      href: 'https://my-wallet-nine-ruddy.vercel.app/login',
    },
    {
      title: 'Milhas.Pro',
      key: 'milhaspro',
      href: 'https://milhas-pro-git-main-damarisdwaynes-projects.vercel.app/',
    },
  ]);

  public openDialog(data: IProjects): void {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
