import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);
  submitError = signal(false);

  subjects = [
    'Cotización de Equipos',
    'Información de Productos',
    'Soporte Técnico',
    'Servicio Post-Venta',
    'Consulta General',
  ];

  contactInfo = [
    {
      icon: 'location',
      title: 'Dirección',
      lines: ['Calle Juana Azurduy de Padilla', 'Zona nueva Canan', 'Cochabamba, Bolivia'],
      action: null
    },
    {
      icon: 'phone',
      title: 'Teléfono Fijo',
      lines: ['+591 4 44 88 570'],
      action: 'tel:+591444 88570'
    },
    {
      icon: 'phone',
      title: 'Celular / WhatsApp',
      lines: ['+591 74545991'],
      action: 'tel:+59174545991'
    },
    {
      icon: 'email',
      title: 'Correo Electrónico',
      lines: ['rudygalarza123@gmail.com'],
      action: 'mailto:rudygalarza123@gmail.com'
    },
    {
      icon: 'calendar',
      title: 'Horario de Atención',
      lines: ['Lun - Vie: 8:00 AM - 6:00 PM', 'Sábados: 9:00 AM - 1:00 PM'],
      action: null
    },
  ];

  onSubmit() {
    this.isSubmitting.set(true);
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 1500);
  }

  resetForm() {
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
    this.isSubmitted.set(false);
  }
}
