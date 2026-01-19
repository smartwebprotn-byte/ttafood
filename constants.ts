
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'pasteurizer', label: 'Pasteurizer', icon: 'fa-vial' },
  { id: 'batch-freezer', label: 'Batch Freezer', icon: 'fa-snowflake' },
  { id: 'combined-machine', label: 'Combined machine', icon: 'fa-arrows-spin' },
  { id: 'blast-freezer', label: 'Blast freezer', icon: 'fa-wind' },
  { id: 'pastry-custard', label: 'Pastry Custard', icon: 'fa-cake-candles' },
  { id: 'soft-ice', label: 'Soft ice cream machine', icon: 'fa-ice-cream' },
  { id: 'fresh-machine', label: 'Fresh machine', icon: 'fa-blender' },
  { id: 'gelato-case', label: 'Gelato case', icon: 'fa-store' },
];

export const PRODUCTS: Product[] = [
  // PASTEURIZERS - ICETEAM 1927 / Cattabriga
  {
    id: 1,
    name: 'PSK PRO 65',
    brand: 'ICETEAM 1927',
    category: 'pasteurizer',
    image: '/dist/images/a.png',
    specs: {
      dimensions: '520 x 730 x 1180 mm',
      power: '6.5 kW',
      capacity: '65 Litres',
      description: 'Pasteurisateur électronique Cattabriga PSK PRO avec 3 programmes automatiques. Moteur nouvelle génération garantissant efficacité maximale et fiabilité. Parfait pour la production artisanale de gelato italien.'
    }
  },
  {
    id: 2,
    name: 'PSK PRO 125',
    brand: 'ICETEAM 1927',
    category: 'pasteurizer',
    image: '/dist/images/b.png',
    specs: {
      dimensions: '620 x 840 x 1290 mm',
      power: '9.2 kW',
      capacity: '125 Litres',
      description: 'Grand pasteurisateur professionnel Cattabriga pour haute production. Contrôle précis de température, système de refroidissement rapide et mélangeur puissant pour une qualité optimale.'
    }
  },
  {
    id: 3,
    name: 'MIX 7 Easymix',
    brand: 'ICETEAM 1927',
    category: 'pasteurizer',
    image: '/dist/images/c.jpg',
    specs: {
      dimensions: '380 x 620 x 480 mm',
      power: '2.8 kW',
      capacity: '3-7 Litres',
      description: 'Pasteurisateur compact de comptoir avec 3 programmes de pasteurisation automatiques. Idéal pour les petites productions et laboratoires de glace artisanale.'
    }
  },

  // BATCH FREEZERS - ICETEAM 1927
  {
    id: 4,
    name: 'Multifreeze PRO 15/75',
    brand: 'ICETEAM 1927',
    category: 'batch-freezer',
    image: '/dist/images/d.jpg',
    specs: {
      dimensions: '720 x 920 x 1420 mm',
      power: '11.5 kW',
      capacity: '15-75 kg/h',
      description: 'Turbine horizontale professionnelle avec technologie brevetée de refroidissement rapide. Production de gelato haute qualité avec texture parfaite et incorporation d\'air optimale.'
    }
  },
  {
    id: 5,
    name: 'Multifreeze PRO 20/100',
    brand: 'ICETEAM 1927',
    category: 'batch-freezer',
    image: '/dist/images/e.png',
    specs: {
      dimensions: '820 x 1050 x 1520 mm',
      power: '14.0 kW',
      capacity: '20-100 kg/h',
      description: 'Turbine à glace horizontale haute performance pour production intensive. Système de contrôle électronique avancé et affichage digital pour précision maximale.'
    }
  },
  {
    id: 6,
    name: 'EFFE 30 Vertical',
    brand: 'ICETEAM 1927',
    category: 'batch-freezer',
    image: '/dist/images/f.png',
    specs: {
      dimensions: '580 x 780 x 1680 mm',
      power: '8.5 kW',
      capacity: '30 kg/h',
      description: 'Turbine verticale Cattabriga EFFE avec système breveté "Stir & Stick" imitant le mouvement traditionnel. Visible en gelateria pour le show du chef.'
    }
  },

  // COMBINED MACHINES - ICETEAM 1927
  {
    id: 7,
    name: 'Compacta 8 Vario',
    brand: 'ICETEAM 1927',
    category: 'combined-machine',
    image: '/dist/images/g.png',
    specs: {
      dimensions: '650 x 900 x 1850 mm',
      power: '12.5 kW',
      capacity: '8-40 kg/h',
      description: 'Machine combinée pasteurisateur + turbine horizontale. Solution tout-en-un pour cycle complet de production gelato. Boiler supérieur 60L et cylindre batch freezer inférieur.'
    }
  },
  {
    id: 8,
    name: 'Compacta 4 Silver',
    brand: 'ICETEAM 1927',
    category: 'combined-machine',
    image: '/dist/images/h.jpg',
    specs: {
      dimensions: '480 x 750 x 1420 mm',
      power: '7.8 kW',
      capacity: '4-20 kg/h',
      description: 'Machine compacte de comptoir combinant pasteurisation et production. Parfaite pour boutiques et restaurants souhaitant produire leur gelato frais sur place.'
    }
  },

  // BLAST FREEZERS - GEMM
  {
    id: 9,
    name: 'GEMM BCB/05',
    brand: 'GEMM',
    category: 'blast-freezer',
    image: '/dist/images/ir00.jpg',
    specs: {
      dimensions: '820 x 870 x 2060 mm',
      power: '2.2 kW',
      capacity: '5 GN 1/1',
      description: 'Cellule de refroidissement rapide et surgélation GEMM. Abaissement température de +90°C à +3°C en 90 minutes. Construction inox AISI 304, fabrication italienne premium.'
    }
  },
  {
    id: 10,
    name: 'GEMM BCB/10',
    brand: 'GEMM',
    category: 'blast-freezer',
    image: '/dist/images/s5u1.jpg',
    specs: {
      dimensions: '820 x 870 x 2060 mm',
      power: '3.5 kW',
      capacity: '10 GN 1/1',
      description: 'Blast chiller/freezer professionnel GEMM 10 niveaux. Surgélation ultra-rapide pour préserver structure cristalline parfaite. Idéal laboratoires pâtisserie et glacerie.'
    }
  },
  {
    id: 11,
    name: 'GEMM BCC/4008 Roll-In',
    brand: 'GEMM',
    category: 'blast-freezer',
    image: '/dist/images/soft.jpg',
    specs: {
      dimensions: '1320 x 1050 x 2180 mm',
      power: '5.8 kW',
      capacity: '40 GN 1/1 (Chariot)',
      description: 'Cellule de refroidissement Roll-In GEMM pour chariots. Grande capacité production, porte isolée double vitrage, panneau de contrôle digital avec 99 programmes mémorisables.'
    }
  },
  {
    id: 12,
    name: 'GEMM Runner 5',
    brand: 'GEMM',
    category: 'blast-freezer',
    image: '/dist/images/bouche_a.png',
    specs: {
      dimensions: '780 x 800 x 2000 mm',
      power: '2.0 kW',
      capacity: '5 Niveaux GN',
      description: 'Nouvelle série RUNNER GEMM - Blast chiller compact avec design moderne. Cycle soft chilling pour produits délicats, affichage tactile intuitif, faible consommation énergétique.'
    }
  },

  // GELATO DISPLAY CASES - CLABO
  {
    id: 13,
    name: 'Orion Tecnica 12',
    brand: 'CLABO',
    category: 'gelato-case',
    image: '/dist/images/bouche_d.png',
    specs: {
      dimensions: '1560 x 1100 x 1380 mm',
      power: '3.8 kW',
      capacity: '12 Bacs Gelato 5L',
      description: 'Vitrine gelato ORION Tecnica - Design italien classique avec empreinte moderne. Vitrage panoramique courbé, éclairage LED, température -14°C à -18°C. Fabriquée en Italie.'
    }
  },
  {
    id: 14,
    name: 'Orion Tecnica 18',
    brand: 'CLABO',
    category: 'gelato-case',
    image: '/dist/images/bouche_e.png',
    specs: {
      dimensions: '2160 x 1100 x 1380 mm',
      power: '4.8 kW',
      capacity: '18 Bacs Gelato 5L',
      description: 'Grande vitrine ORION 18 bacs avec système de réfrigération ventilé. Exposition optimale des parfums, structure inox, éclairage LED programmable RGB.'
    }
  },
  {
    id: 15,
    name: 'Orion Italiana G12',
    brand: 'CLABO',
    category: 'gelato-case',
    image: '/dist/images/bouche_i.jpg',
    specs: {
      dimensions: '1660 x 1150 x 1420 mm',
      power: '4.2 kW',
      capacity: '12 Bacs Gelato 7.5L',
      description: 'Série ITALIANA - Vitrine prestige avec design contemporain épuré. Verre trempé haute transparence, système anti-buée intégré, bacs extra-profonds pour présentation spectaculaire.'
    }
  },
  {
    id: 16,
    name: 'Orion Trilogy 16',
    brand: 'CLABO',
    category: 'gelato-case',
    image: '/dist/images/bouche_o.png',
    specs: {
      dimensions: '1860 x 1120 x 1400 mm',
      power: '4.5 kW',
      capacity: '16 Bacs Gelato 5L',
      description: 'Vitrine TRILOGY au style bijouterie avec finitions luxueuses. Triple vitrage isolant, éclairage LED blanc/couleur, structure aluminium anodisé noir brillant.'
    }
  },
  {
    id: 17,
    name: 'Orion Eden Pastry 10',
    brand: 'CLABO',
    category: 'gelato-case',
    image: '/dist/images/bouche_u.png',
    specs: {
      dimensions: '1360 x 920 x 1340 mm',
      power: '2.8 kW',
      capacity: '3 Niveaux réglables',
      description: 'Vitrine EDEN spéciale pâtisserie et desserts glacés. Verre droit extra-clair, plateaux réglables en hauteur, température contrôlée +2°C à +10°C, éclairage LED anti-UV.'
    }
  },

  // SOFT ICE CREAM MACHINES - ICETEAM 1927
  {
    id: 18,
    name: 'Softy Freeze SF200',
    brand: 'ICETEAM 1927',
    category: 'soft-ice',
    image: '/dist/images/a.png',
    specs: {
      dimensions: '520 x 680 x 1450 mm',
      power: '3.2 kW',
      capacity: '20-25 kg/h',
      description: 'Machine à glace soft professionnelle 2 cylindres + 1 mixte. Système de refroidissement à air, pompe péristaltique, production continue. Idéale fast-food et restaurants.'
    }
  },
  {
    id: 19,
    name: 'Cream Soft CS3',
    brand: 'ICETEAM 1927',
    category: 'soft-ice',
    image: '/dist/images/b.png',
    specs: {
      dimensions: '680 x 780 x 1520 mm',
      power: '4.8 kW',
      capacity: '35-40 kg/h',
      description: 'Machine soft ice cream 3 becs haute production. Réservoirs transparents 2x12L, cylindres en acier inoxydable, système autonettoyant, panneau digital tactile.'
    }
  },

  // PASTRY CUSTARD MACHINES
  {
    id: 20,
    name: 'Creamer Revolution',
    brand: 'ICETEAM 1927',
    category: 'pastry-custard',
    image: '/dist/images/c.jpg',
    specs: {
      dimensions: '480 x 720 x 1280 mm',
      power: '6.5 kW',
      capacity: '30 Litres',
      description: 'Machine à crème pâtissière professionnelle. Cuisson automatique crème anglaise, crème pâtissière, zabaione. Mélangeur planétaire, contrôle température précis 0.1°C.'
    }
  },
  {
    id: 21,
    name: 'Pastry Chef Pro 60',
    brand: 'ICETEAM 1927',
    category: 'pastry-custard',
    image: '/dist/images/d.jpg',
    specs: {
      dimensions: '580 x 850 x 1380 mm',
      power: '9.0 kW',
      capacity: '60 Litres',
      description: 'Cuiseur multifonction pour pâtisserie et glacerie. 15 programmes pré-enregistrés, fonction maintien température, système anti-débordement, cuve amovible inox.'
    }
  }
];
