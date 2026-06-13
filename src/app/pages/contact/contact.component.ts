import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private http = inject(HttpClient);

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
      title: 'Ventas',
      lines: ['ventas@cipreimportaciones.com'],
      action: 'mailto:ventas@cipreimportaciones.com'
    },
    {
      icon: 'email',
      title: 'Gerencia',
      lines: ['gerencia@cipreimportaciones.com'],
      action: 'mailto:gerencia@cipreimportaciones.com'
    },
    {
      icon: 'calendar',
      title: 'Horario de Atención',
      lines: ['Lun - Vie: 8:00 AM - 6:00 PM', 'Sábados: 9:00 AM - 1:00 PM'],
      action: null
    },
  ];

  /**
   * Web3Forms Access Key
   * ¿Cómo obtenerla? Ve a https://web3forms.com/ e ingresa tu correo para recibir tu Access Key.
   * Luego en el panel de Web3Forms, configura el destino (to_email) como ventas@cipreimportaciones.com
   */
  private WEB3FORMS_ACCESS_KEY = '5078676f-40ab-42c0-8471-a6e5bd9b80b3';

  onSubmit() {
    if (this.WEB3FORMS_ACCESS_KEY === 'AQUI_TU_ACCESS_KEY_DE_WEB3FORMS') {
      console.warn('⚠️ Web3Forms no está configurado. Ve a https://web3forms.com/ para obtener tu Access Key.');
      this.submitError.set(true);
      this.isSubmitting.set(false);
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);

    const payload = {
      access_key: this.WEB3FORMS_ACCESS_KEY,
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'ventas@cipreimportaciones.com'
    };

    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: (response: any) => {
        this.isSubmitting.set(false);
        if (response.success) {
          this.isSubmitted.set(true);
        } else {
          this.submitError.set(true);
        }
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.submitError.set(true);
        console.error('Error al enviar formulario:', err);
      }
    });
  }

  resetForm() {
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
    this.isSubmitted.set(false);
    this.submitError.set(false);
  }
}
