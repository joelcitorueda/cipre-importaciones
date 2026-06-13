import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Productos', path: '/productos' },
    { label: 'Distribuidores', path: '/distribuidores' },
    { label: 'Contacto', path: '/contacto' },
  ];

  constructor(public router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  navigate(path: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();

    const currentUrl = this.router.url.split('?')[0];

    if (currentUrl === path) {
      // Reload page natively if already on same path to restart AOS animations and reset state
      this.router.navigateByUrl('/?refresh=1', { skipLocationChange: true }).then(() => {
        this.router.navigate([path], { skipLocationChange: true }).then(() => {
          window.scrollTo(0,0);
        });
      });
    } else {
      this.router.navigate([path], { skipLocationChange: true }).then(() => {
        window.scrollTo(0,0);
      });
    }
  }

  isActive(path: string): boolean {
    const currentUrl = this.router.url.split('?')[0];
    return currentUrl === path || (path === '/' && currentUrl === '/');
  }
}
