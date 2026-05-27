import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

interface ICvOption {
  lang: string;
  flag: string;
  labelKey: string;
  href: string;
  download: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly #transloco = inject(TranslocoService);
  readonly #host = inject(ElementRef<HTMLElement>);

  public activeLang = signal<string>(this.#transloco.getActiveLang());
  public cvMenuOpen = signal<boolean>(false);

  public readonly cvOptions: ICvOption[] = [
    {
      lang: 'pt',
      flag: '🇧🇷',
      labelKey: 'hero.cvPt',
      href: 'assets/pdf/cv.pdf',
      download: 'Damaris-Dwayne-CV-PT.pdf',
    },
    {
      lang: 'en',
      flag: '🇺🇸',
      labelKey: 'hero.cvEn',
      href: 'assets/pdf/cv-en.pdf',
      download: 'Damaris-Dwayne-CV-EN.pdf',
    },
  ];

  public toggleCvMenu(): void {
    this.cvMenuOpen.update((open) => !open);
  }

  public closeCvMenu(): void {
    this.cvMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.#host.nativeElement.contains(event.target)) {
      this.closeCvMenu();
    }
  }

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    this.closeCvMenu();
  }

  public toggleLang(): void {
    const next = this.activeLang() === 'pt' ? 'en' : 'pt';
    this.#transloco.setActiveLang(next);
    this.activeLang.set(next);
  }
}
