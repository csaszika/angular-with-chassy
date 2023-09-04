import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, Signal, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface HeaderLink {
  label: string;
  route: string;
}

@Component({
  selector: 'exa-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public links: Signal<HeaderLink[]> = signal([
    {
      label: 'Kyton',
      route: '/kyton',
    },
    {
      label: 'Ckody',
      route: '/ckody',
    },
    {
      label: 'Lacii',
      route: '/lacii',
    },
    {
      label: 'Lajos',
      route: '/lajos',
    },
    {
      label: 'Kalamboo',
      route: '/kalamboo',
    },
    {
      label: 'David',
      route: '/david',
    },
    {
      label: 'Kreatin',
      route: '/kreatin',
    },
    {
      label: 'Peti',
      route: '/peti',
    },
  ]);
  constructor(public readonly router: Router) {}

  public trackLink(_: number, link: HeaderLink): string {
    return link.label;
  }
}
