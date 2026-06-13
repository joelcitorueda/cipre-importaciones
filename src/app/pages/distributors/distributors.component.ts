import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-distributors',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './distributors.component.html',
  styleUrl: './distributors.component.scss'
})
export class DistributorsComponent {
  distributors = [
    {
      name: 'Lexmark',
      tagline: 'La nueva generación de la impresión',
      color: '#00843D',
      description: 'Lexmark International es una empresa tecnológica global líder en soluciones de impresión e imagen. Fundada en 1991, Lexmark ofrece impresoras, suministros y soluciones de gestión documental que ayudan a las empresas a trabajar de manera más inteligente.',
      origin: 'EE.UU.',
      founded: '1991',
      products: ['Impresoras Láser Monocromáticas', 'Impresoras Láser a Color', 'Multifuncionales', 'Tóners y Cartuchos', 'Soluciones de Impresión Empresarial'],
      advantages: [
        'Alta velocidad de impresión (hasta 50 ppm)',
        'Bajo costo por página',
        'Tecnología de impresión láser de última generación',
        'Soluciones de seguridad integradas',
        'Conectividad WiFi, Ethernet y NFC',
      ],
      models: ['B3340dw', 'B3442dw', 'C3326dw', 'C3426dw', 'MX431adn', 'MC3426adw'],
      logo: 'assets/logolexmark.png'
    },
    {
      name: 'Xerox',
      tagline: 'Innovación sin límites',
      color: '#E31837',
      description: 'Xerox Holdings Corporation es una empresa americana líder en tecnología de documentos. Con más de 100 años de historia, Xerox es sinónimo de fotocopiado e impresión de calidad en todo el mundo. Sus equipos multifuncionales son estándar en millones de oficinas globalmente.',
      origin: 'EE.UU.',
      founded: '1906',
      products: ['Impresoras Multifuncionales', 'Fotocopiadoras', 'Impresoras de Gran Formato', 'Tóners Originales', 'Soluciones de Gestión Documental'],
      advantages: [
        'Más de 100 años de innovación tecnológica',
        'Equipos de impresión de producción',
        'Soluciones de flujo de trabajo digital',
        'Alta durabilidad y confiabilidad',
        'Soporte técnico especializado',
      ],
      models: ['B215', 'B225', 'C235', 'C235/DNI', 'VersaLink B400', 'VersaLink C400'],
      logo: 'assets/logoxerox.png'
    },
  ];

  whyDistributor = [
    { icon: 'graduate', title: 'Capacitación Certificada', desc: 'Nuestro equipo está certificado directamente por Lexmark y Xerox para garantizar el mejor servicio.' },
    { icon: 'package', title: 'Stock Disponible', desc: 'Mantenemos inventario actualizado de equipos y suministros para entrega inmediata.' },
    { icon: 'wrench', title: 'Servicio Técnico', desc: 'Contamos con técnicos especializados para instalación, configuración y mantenimiento.' },
    { icon: 'shield', title: 'Garantía Oficial', desc: 'Todos los productos llevan garantía directa del fabricante respaldada por CIPRE.' },
  ];
}
