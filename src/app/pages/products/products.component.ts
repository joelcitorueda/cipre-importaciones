import { Component, signal } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  icon: string;
  image?: string;
  price: string;
  specs: string[];
  badge?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, TitleCasePipe, IconComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  activeCategory = signal('all');

  categories = [
    { id: 'all', label: 'Todos', icon: 'apps' },
    { id: 'computadoras', label: 'Computadoras', icon: 'desktop' },
    { id: 'laptops', label: 'Laptops', icon: 'laptop' },
    { id: 'impresoras', label: 'Impresoras', icon: 'print' },
    { id: 'monitores', label: 'Monitores', icon: 'monitor' },
    { id: 'accesorios', label: 'Accesorios', icon: 'mouse' },
  ];

  products: Product[] = [
    // === COMPUTADORAS ===
    {
      id: 1,
      name: 'PC Escritorio Core i5 13va Gen.',
      brand: 'Ensamblado Cronex',
      category: 'computadoras',
      icon: 'desktop',
      image: 'assets/prod_desktop_corei5.png',
      price: 'Consultar',
      specs: [
        'Intel® Core™ i5-13400 hasta 4.60 GHz',
        'Tarjeta Madre Asrock H610 + WiFi',
        '8GB DDR4 3200 MHz',
        'SSD M.2 500GB',
        'Intel® UHD Graphics 730',
        'Case Cronex: Teclado, Mouse, Parlante, 1200W'
      ],
    },
    {
      id: 2,
      name: 'PC Escritorio Core i3 10ma Gen.',
      brand: 'Ensamblado Cronex',
      category: 'computadoras',
      icon: 'desktop',
      image: 'assets/prod_desktop_corei3.png',
      price: 'Consultar',
      specs: [
        'Intel Core i3-10100 hasta 4.3 GHz',
        'Tarjeta Madre Intel Asrock H510',
        '8GB DDR4 3200 MHz',
        'SSD 500GB',
        'WiFi PCI-E 300 Mbps, 2 Antenas',
        'Case Cronex: Teclado, Mouse, Parlante, 1200W'
      ],
    },
    {
      id: 3,
      name: 'PC Todo en Uno HP 24 CB1020LA',
      brand: 'HP',
      category: 'computadoras',
      icon: 'monitor',
      image: 'assets/prod_desktop_hp_aio.png',
      price: 'Consultar',
      specs: [
        'Intel® Core™ i3-1215U hasta 4.4 GHz',
        '8GB DDR4 3200 MHz',
        'SSD 512GB M.2 PCIe',
        'Pantalla FHD 23.8" IPS (1920x1080)',
        'Windows 11 Español',
        'WiFi + Bluetooth 5.7 integrado'
      ],
    },
    // === LAPTOPS ===
    {
      id: 4,
      name: 'Notebook HP 255 G10',
      brand: 'HP',
      category: 'laptops',
      icon: 'laptop',
      image: 'assets/prod_laptop_hp255g10.png',
      price: '6.599 Bs.',
      specs: ['AMD Ryzen 5 7520U', '16GB RAM', '512GB SSD', '15.6" HD'],
      badge: 'Más vendido',
    },
    {
      id: 5,
      name: 'Notebook HP 15-FD013WM',
      brand: 'HP',
      category: 'laptops',
      icon: 'laptop',
      image: 'assets/prod_laptop_hp15fd.png',
      price: '5.999 Bs.',
      specs: ['Intel Core i3 N305', '8GB RAM', '256GB SSD', '15.6 Pulgadas'],
    },
    {
      id: 6,
      name: 'Notebook Lenovo V15 G4 AMN',
      brand: 'Lenovo',
      category: 'laptops',
      icon: 'laptop',
      image: 'assets/prod_laptop_lenovov15.png',
      price: '5.399 Bs.',
      specs: ['AMD Ryzen 3 7320U', '8GB RAM', '256GB SSD', '15.6" FHD'],
    },
    // === IMPRESORAS LEXMARK ===
    {
      id: 7,
      name: 'Lexmark B3340dw',
      brand: 'Lexmark',
      category: 'impresoras',
      icon: 'print',
      image: 'assets/prod_lexmark_b3340dw.png',
      price: 'Consultar',
      specs: ['42 ppm velocidad', 'Impresión dúplex', 'WiFi y Ethernet', 'Hasta 100,000 pág/mes'],
      badge: 'Distribuidor Oficial',
      featured: true
    },
    {
      id: 8,
      name: 'Lexmark B3442dw',
      brand: 'Lexmark',
      category: 'impresoras',
      icon: 'print',
      image: 'assets/prod_lexmark_b3442dw.png',
      price: 'Consultar',
      specs: ['50 ppm velocidad', 'Pantalla táctil 2.8"', 'NFC integrado', 'Bajo costo/página'],
      badge: 'Distribuidor Oficial'
    },
    {
      id: 9,
      name: 'Lexmark MX431adn',
      brand: 'Lexmark',
      category: 'impresoras',
      icon: 'scanner',
      image: 'assets/prod_lexmark_mx431.png',
      price: 'Consultar',
      specs: ['Multifunción Láser', '40 ppm', 'Imprime, escanea, copia, fax', 'Dúplex automático'],
      badge: 'Distribuidor Oficial'
    },
    // === IMPRESORAS HP ===
    {
      id: 10,
      name: 'HP LaserJet Pro M404dn',
      brand: 'HP',
      category: 'impresoras',
      icon: 'print',
      image: 'assets/prod_hp_laserjet.png',
      price: 'Consultar',
      specs: ['38 ppm velocidad', 'Dúplex automático', 'Red Ethernet', 'HP JetIntelligence'],
    },
    {
      id: 11,
      name: 'HP DeskJet Ink Advantage',
      brand: 'HP',
      category: 'impresoras',
      icon: 'print',
      image: 'assets/prod_hp_deskjet.png',
      price: 'Consultar',
      specs: ['Impresión a color', 'WiFi integrado', 'Tinta Continua', 'Imprime desde el móvil'],
    },
    {
      id: 12,
      name: 'HP OfficeJet Pro 9010',
      brand: 'HP',
      category: 'impresoras',
      icon: 'scanner',
      image: 'assets/prod_hp_officejet.png',
      price: 'Consultar',
      specs: ['All-in-One color', '22 ppm', 'Dúplex automático', 'Pantalla táctil 2.7"'],
    },
    // === IMPRESORAS XEROX ===
    {
      id: 19,
      name: 'Xerox® C235 Multifunción Color',
      brand: 'Xerox',
      category: 'impresoras',
      icon: 'scanner',
      image: 'assets/prod_xerox_c235.png',
      price: 'Consultar',
      specs: [
        'Copia, impresión, escaneado, fax',
        'Salida en Color · Carta/A4',
        'Hasta 24 ppm · Hasta 1.5K pág/mes',
        'Apple AirPrint, Mopria, Wi-Fi Direct',
        'Xerox Workflow Central',
        'Funciones de seguridad avanzadas'
      ],
    },
    {
      id: 20,
      name: 'Xerox® C325 Multifunción Color',
      brand: 'Xerox',
      category: 'impresoras',
      icon: 'scanner',
      image: 'assets/prod_xerox_c325.png',
      price: 'Consultar',
      specs: [
        'Copia, impresión, escaneado, fax',
        'Salida en Color · Carta/A4',
        'Hasta 35 ppm · Hasta 6K pág/mes',
        'Apple AirPrint y Mopria',
        'Xerox Workflow Central',
        'Seguridad integral empresarial'
      ],
    },
    {
      id: 21,
      name: 'Xerox® B115 Multifunción B&N',
      brand: 'Xerox',
      category: 'impresoras',
      icon: 'scanner',
      image: 'assets/prod_xerox_b115.png',
      price: 'Consultar',
      specs: [
        'Copia, impresión, escaneado, fax',
        'Salida B&N · Carta/A4',
        'Hasta 21 ppm · Hasta 1.5K pág/mes',
        'Pantalla LCD 2 líneas',
        'Apple AirPrint y Mopria',
        'Wi-Fi integrado · Alimentador automático'
      ],
    },
    // === MONITORES ===
    {
      id: 13,
      name: 'Samsung Monitor 27" FHD IPS LS27C310',
      brand: 'Samsung',
      category: 'monitores',
      icon: 'monitor',
      image: 'assets/prod_monitor_samsung.png',
      price: 'Consultar',
      specs: [
        'Pantalla 27" Plano IPS',
        'Resolución FHD 1920 x 1080',
        'Tasa de actualización 75Hz',
        'Tiempo de respuesta 5ms (GTG)',
        'Brillo 250 cd/m² · Contraste 1000:1',
        'Interfaz HDMI y VGA'
      ],
    },
    {
      id: 14,
      name: 'ASUS TUF Gaming 27" FHD IPS VG279Q5A',
      brand: 'ASUS',
      category: 'monitores',
      icon: 'monitor',
      image: 'assets/prod_monitor_asus.png',
      price: 'Consultar',
      specs: [
        'Pantalla 27" Fast IPS · 1920x1080',
        'Frecuencia 200Hz · Resp. 1ms GTG',
        'AMD FreeSync Premium + NVIDIA G-SYNC',
        'HDR10 · Color Space sRGB 99%',
        'Brillo 350 cd/m² · 16.7M colores',
        'DisplayPort 1.4 x1 + HDMI 2.0 x2'
      ],
    },
    {
      id: 15,
      name: 'Monitor Hikvision 27" FHD IPS 100Hz',
      brand: 'Hikvision',
      category: 'monitores',
      icon: 'monitor',
      image: 'assets/prod_monitor_hikvision.png',
      price: 'Consultar',
      specs: [
        'Pantalla 27" IPS · 1920x1080',
        'Frecuencia 100Hz · Resp. 5ms',
        'Brillo 300 cd/m² · Contraste 1300:1',
        'Ángulo de visión 178°/178°',
        'Gama de colores 72% NTSC · 8 bit',
        'Interfaz HDMI 1.4 x1 + VGA x1'
      ],
    },
    // === ACCESORIOS / SUMINISTROS ===
    {
      id: 16,
      name: 'Tóner Lexmark Original',
      brand: 'Lexmark',
      category: 'accesorios',
      icon: 'ink',
      price: 'Consultar',
      specs: [
        'Tóner original Lexmark 100% compatible',
        'Modelos: B3340, B3442, MX431 y más',
        'Alta capacidad de rendimiento',
        'Garantía y calidad del fabricante'
      ],
    },
    {
      id: 17,
      name: 'Tóner Xerox Original',
      brand: 'Xerox',
      category: 'accesorios',
      icon: 'ink',
      price: 'Consultar',
      specs: [
        'Tóner original Xerox 100% compatible',
        'Modelos: B115, C235, C325 y más',
        'Disponible en B&N y color',
        'Garantía y calidad del fabricante'
      ],
    },
    {
      id: 18,
      name: 'Drum / Unidad Fotoconductora',
      brand: 'Lexmark / Xerox',
      category: 'accesorios',
      icon: 'settings',
      price: 'Consultar',
      specs: [
        'Drums y unidades fotoconductoras',
        'Compatibles con Lexmark y Xerox',
        'Reemplazo garantizado',
        'Distribuidor autorizado Bolivia'
      ],
    },
    {
      id: 22,
      name: 'Fusor y Rodillo de Transferencia',
      brand: 'Lexmark / Xerox',
      category: 'accesorios',
      icon: 'settings',
      price: 'Consultar',
      specs: [
        'Kit de mantenimiento y fusor',
        'Rodillos de transferencia originales',
        'Compatibles con modelos Lexmark y Xerox',
        'Instalación y soporte técnico incluido'
      ],
    },
    {
      id: 23,
      name: 'Cartuchos HP Originales',
      brand: 'HP',
      category: 'accesorios',
      icon: 'ink',
      price: 'Consultar',
      specs: [
        'Cartuchos de tinta HP originales',
        'Tóner HP para LaserJet y OfficeJet',
        'Alta resolución y colores vivos',
        'Importación directa HP Bolivia'
      ],
    },
    {
      id: 24,
      name: 'Kit Teclado + Mouse Inalámbrico',
      brand: 'Logitech / HP',
      category: 'accesorios',
      icon: 'keyboard',
      price: 'Consultar',
      specs: ['Teclado inalámbrico', 'Mouse óptico 1600 DPI', 'Receptor USB unificado', 'Pilas incluidas'],
    },
  ];

  get filteredProducts(): Product[] {
    const cat = this.activeCategory();
    return cat === 'all' ? this.products : this.products.filter(p => p.category === cat);
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }

  whatsAppNumber = '59175470318';

  getWhatsAppLink(product: Product): string {
    const specsText = product.specs.map(s => encodeURIComponent(`- ${s}`)).join('%0A');
    const message = encodeURIComponent('Hola, estoy interesado en:') +
      '%0A%0A' + encodeURIComponent(product.name) +
      '%0A%0A' + encodeURIComponent('Especificaciones:') +
      '%0A' + specsText +
      '%0A%0A' + encodeURIComponent('¿Podrían informarme si está disponible y el precio por favor?');
    return `https://wa.me/${this.whatsAppNumber}?text=${message}`;
  }
}
