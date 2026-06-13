import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Productos', path: '/productos' },
    { label: 'Distribuidores', path: '/distribuidores' },
    { label: 'Contacto', path: '/contacto' },
  ];

  products = [
    'Computadoras Portátiles',
    'Impresoras Láser',
    'Impresoras Tinta Continua',
    'Suministros Originales',
    'Accesorios Tecnológicos'
  ];

  constructor(private router: Router) {}

  navigate(path: string, event: Event) {
    event.preventDefault();
    const currentUrl = this.router.url.split('?')[0];

    if (currentUrl === path) {
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
}
