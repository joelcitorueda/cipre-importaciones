import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  mision = 'Comercializar equipos tecnológicos e insumos de impresión de última generación, brindando soluciones integrales que impulsen la productividad de nuestros clientes. Nos destacamos por ofrecer asesoría técnica calificada, entrega oportuna y productos innovadores que satisfacen las exigencias del mercado.';

  vision = 'Consolidarnos como la principal importadora y distribuidora de referencia en el sector tecnológico e insumos de impresión. Buscamos dominar el mercado ofreciendo un catálogo más completo de insumos y equipos, garantizando siempre una calidad insuperable y una cadena de suministro altamente eficiente para nuestros clientes.';

  values = [
    { icon: 'target', title: 'Compromiso', desc: 'Nos comprometemos con cada cliente para brindar el mejor servicio y las mejores soluciones tecnológicas.' },
    { icon: 'shield', title: 'Calidad', desc: 'Solo trabajamos con marcas y productos de primera calidad con garantía directa del fabricante.' },
    { icon: 'verified', title: 'Honestidad', desc: 'Transparencia total en precios, plazos y condiciones. Tu confianza es nuestra mayor recompensa.' },
    { icon: 'lightbulb', title: 'Innovación', desc: 'Siempre a la vanguardia tecnológica para ofrecerte las últimas soluciones del mercado.' },
    { icon: 'people', title: 'Responsabilidad', desc: 'Comprometidos con nuestros clientes, empleados y la comunidad de Cochabamba, Bolivia.' },
    { icon: 'star', title: 'Excelencia', desc: 'Buscamos superar las expectativas en cada interacción, antes, durante y después de la venta.' },
  ];

  milestones = [
    { year: '2010', title: 'Fundación de CIPRE', desc: 'Nacemos como importadora de equipos de cómputo en Cochabamba, Bolivia.' },
    { year: '2014', title: 'Distribuidores Lexmark', desc: 'Obtenemos la distribución oficial de Lexmark en Bolivia, ampliando nuestro portafolio.' },
    { year: '2017', title: 'Distribuidores Xerox', desc: 'Sumamos la distribución oficial de Xerox y certificación CAS a nivel nacional.' },
    { year: '2020', title: 'Importadores HP, Lenovo, Dell', desc: 'Nos consolidamos como importadores directos de HP, Lenovo, Dell y Epson en Bolivia.' },
    { year: '2024', title: '+500 Clientes Satisfechos', desc: 'Superamos los 500 clientes satisfechos con cobertura a nivel nacional.' },
  ];

  team = [
    { name: 'Rudy Galarza', role: 'Gerente General', initials: 'RG', desc: 'Fundador con más de 14 años de experiencia en el sector tecnológico boliviano.' },
    { name: 'Equipo Técnico', role: 'Soporte & Servicio CAS', initials: 'ET', desc: 'Técnicos certificados por Lexmark y Xerox. Centro Autorizado de Servicio (CAS) con cobertura nacional.' },
    { name: 'Equipo Comercial', role: 'Ventas & Asesoría', initials: 'EC', desc: 'Asesores especializados en soluciones tecnológicas para empresas y personas naturales.' },
  ];

  benefits = [
    'Distribuidor autorizado en BOLIVIA para la marca LEXMARK y XEROX.',
    'Certificación CAS (Centro Autorizado de Servicio) con cobertura a nivel nacional.',
    'Importadores directos de equipo tecnológico de las marcas HP, LENOVO, DELL y EPSON.',
  ];
}
