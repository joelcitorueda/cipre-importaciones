import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  stats = [
    { value: '10+', label: 'Años de Experiencia' },
    { value: '500+', label: 'Clientes Satisfechos' },
    { value: '2', label: 'Marcas Distribuidoras' },
    { value: '1000+', label: 'Equipos Entregados' },
  ];

  features = [
    {
      icon: 'shield',
      title: 'Garantía Oficial',
      desc: 'Todos nuestros productos cuentan con garantía directa del fabricante y soporte técnico especializado.'
    },
    {
      icon: 'truck',
      title: 'Entrega Rápida',
      desc: 'Distribución ágil en toda Cochabamba y Bolivia. Tu equipo listo cuando lo necesitas.'
    },
    {
      icon: 'lightbulb',
      title: 'Asesoría Técnica',
      desc: 'Nuestro equipo de expertos te ayuda a elegir la solución tecnológica ideal para tu empresa.'
    },
    {
      icon: 'headset',
      title: 'Soporte Post-Venta',
      desc: 'Acompañamiento continuo después de la compra. Estamos aquí para lo que necesites.'
    },
  ];

  topProducts = [
    {
      category: 'Computadoras',
      name: 'PC Escritorio Profesional',
      desc: 'Equipos de alto rendimiento para oficina y empresa. Procesadores Intel Core i5/i7, memoria RAM ampliable.',
      icon: 'desktop',
      badge: 'Más vendido'
    },
    {
      category: 'Laptops',
      name: 'Notebooks Empresariales',
      desc: 'Movilidad y potencia en un solo equipo. Ideales para trabajo remoto y presentaciones profesionales.',
      icon: 'laptop',
      badge: 'Nuevo'
    },
    {
      category: 'Impresoras',
      name: 'Impresoras Láser Lexmark',
      desc: 'Impresión profesional de alta calidad. Velocidad, eficiencia y bajo costo por página.',
      icon: 'print',
      badge: 'Distribuidor oficial'
    },
    {
      category: 'Multifuncional',
      name: 'Xerox Multifuncional',
      desc: 'Imprime, escanea y copia con un solo equipo. Solución integral para tu oficina.',
      icon: 'scanner',
      badge: 'Distribuidor oficial'
    },
  ];

  testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Gerente de TI, Empresa Constructora',
      text: 'CIPRE nos proveyó de toda nuestra flota de impresoras Lexmark. Excelente servicio y precios competitivos.',
      initials: 'CM'
    },
    {
      name: 'María Villarroel',
      role: 'Directora, Colegio Privado',
      text: 'Compramos 30 computadoras para el laboratorio. La calidad y el soporte post-venta fue impecable.',
      initials: 'MV'
    },
    {
      name: 'Roberto Quiroga',
      role: 'Propietario, Consultora Contable',
      text: 'Siempre encuentro lo que necesito en CIPRE. Precios justos y atención personalizada.',
      initials: 'RQ'
    },
  ];
}
