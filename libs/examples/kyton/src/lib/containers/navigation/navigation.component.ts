import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'exa-navigation',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}
  public navigateToHome() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
