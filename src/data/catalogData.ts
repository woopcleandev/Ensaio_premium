/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SceneItem {
  code: string;
  num: string;
  fullImg: string;
  thumbImg: string;
  width: number;
  height: number;
  alt: string;
  note: string;
  unavailable?: boolean;
}

export interface InstructionItem {
  roman: string;
  title: string;
  desc: string;
}

export interface CatalogCategory {
  id: string;
  title: string;
  countLabel: string;
  is18Plus?: boolean;
  instructions: InstructionItem[];
  scenes: SceneItem[];
}

export const WHATSAPP_NUMBER = '5511926933436';
export const WHATSAPP_DISPLAY = '(11) 92693-3436';
export const ASSET_BASE_URL = '';
export const FALLBACK_REMOTE_URL = 'https://catalogo.ultreix.com';

export const CATEGORIES_SUMMARY = [
  {
    id: 'aniversario',
    title: 'Ensaio de Aniversário',
    count: '70 cenas',
    subtitle: '',
    is18Plus: false,
  },
  {
    id: 'corporativo',
    title: 'Ensaio Corporativo',
    count: '50 cenas',
    subtitle: '',
    is18Plus: false,
  },
  {
    id: 'casal',
    title: 'Ensaio de Casal',
    count: '50 cenas',
    subtitle: '',
    is18Plus: false,
  },
  {
    id: 'infantil',
    title: 'Ensaio Infantil',
    count: '50 cenas',
    subtitle: 'Meninas e meninos, com os códigos F e M.',
    is18Plus: false,
  },
  {
    id: 'casual',
    title: 'Ensaio Casual',
    count: '49 cenas',
    subtitle: '',
    is18Plus: false,
  },
  {
    id: 'sensual',
    title: 'Ensaio Sensual',
    count: '49 cenas',
    subtitle: 'Só para maiores de 18 anos.',
    is18Plus: true,
  },
];

export const CATALOG_DATA: Record<string, CatalogCategory> = {
  "aniversario": {
    "id": "aniversario",
    "title": "Ensaio de Aniversário",
    "countLabel": "70 cenas · 01 — 70",
    "is18Plus": false,
    "instructions": [
      {
        "roman": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "roman": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "01",
        "num": "N° 01",
        "fullImg": "/img/aniversario/01.webp",
        "thumbImg": "/img/aniversario/01-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 01",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "02",
        "num": "N° 02",
        "fullImg": "/img/aniversario/02.webp",
        "thumbImg": "/img/aniversario/02-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "03",
        "num": "N° 03",
        "fullImg": "/img/aniversario/03.webp",
        "thumbImg": "/img/aniversario/03-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 03",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "04",
        "num": "N° 04",
        "fullImg": "/img/aniversario/04.webp",
        "thumbImg": "/img/aniversario/04-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "05",
        "num": "N° 05",
        "fullImg": "/img/aniversario/05.webp",
        "thumbImg": "/img/aniversario/05-p.webp",
        "width": 480,
        "height": 589,
        "alt": "Cena 05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "06",
        "num": "N° 06",
        "fullImg": "/img/aniversario/06.webp",
        "thumbImg": "/img/aniversario/06-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "07",
        "num": "N° 07",
        "fullImg": "/img/aniversario/07.webp",
        "thumbImg": "/img/aniversario/07-p.webp",
        "width": 480,
        "height": 599,
        "alt": "Cena 07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "08",
        "num": "N° 08",
        "fullImg": "/img/aniversario/08.webp",
        "thumbImg": "/img/aniversario/08-p.webp",
        "width": 480,
        "height": 856,
        "alt": "Cena 08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "09",
        "num": "N° 09",
        "fullImg": "/img/aniversario/09.webp",
        "thumbImg": "/img/aniversario/09-p.webp",
        "width": 480,
        "height": 644,
        "alt": "Cena 09",
        "note": "",
        "unavailable": false
      },
      {
        "code": "10",
        "num": "N° 10",
        "fullImg": "/img/aniversario/10.webp",
        "thumbImg": "/img/aniversario/10-p.webp",
        "width": 480,
        "height": 625,
        "alt": "Cena 10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "11",
        "num": "N° 11",
        "fullImg": "/img/aniversario/11.webp",
        "thumbImg": "/img/aniversario/11-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "12",
        "num": "N° 12",
        "fullImg": "/img/aniversario/12.webp",
        "thumbImg": "/img/aniversario/12-p.webp",
        "width": 480,
        "height": 841,
        "alt": "Cena 12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "13",
        "num": "N° 13",
        "fullImg": "/img/aniversario/13.webp",
        "thumbImg": "/img/aniversario/13-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "14",
        "num": "N° 14",
        "fullImg": "/img/aniversario/14.webp",
        "thumbImg": "/img/aniversario/14-p.webp",
        "width": 480,
        "height": 626,
        "alt": "Cena 14",
        "note": "Indisponível no momento",
        "unavailable": true
      },
      {
        "code": "15",
        "num": "N° 15",
        "fullImg": "/img/aniversario/15.webp",
        "thumbImg": "/img/aniversario/15-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "16",
        "num": "N° 16",
        "fullImg": "/img/aniversario/16.webp",
        "thumbImg": "/img/aniversario/16-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 16",
        "note": "",
        "unavailable": false
      },
      {
        "code": "17",
        "num": "N° 17",
        "fullImg": "/img/aniversario/17.webp",
        "thumbImg": "/img/aniversario/17-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "18",
        "num": "N° 18",
        "fullImg": "/img/aniversario/18.webp",
        "thumbImg": "/img/aniversario/18-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 18",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "19",
        "num": "N° 19",
        "fullImg": "/img/aniversario/19.webp",
        "thumbImg": "/img/aniversario/19-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "20",
        "num": "N° 20",
        "fullImg": "/img/aniversario/20.webp",
        "thumbImg": "/img/aniversario/20-p.webp",
        "width": 480,
        "height": 716,
        "alt": "Cena 20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "21",
        "num": "N° 21",
        "fullImg": "/img/aniversario/21.webp",
        "thumbImg": "/img/aniversario/21-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "22",
        "num": "N° 22",
        "fullImg": "/img/aniversario/22.webp",
        "thumbImg": "/img/aniversario/22-p.webp",
        "width": 480,
        "height": 856,
        "alt": "Cena 22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "23",
        "num": "N° 23",
        "fullImg": "/img/aniversario/23.webp",
        "thumbImg": "/img/aniversario/23-p.webp",
        "width": 480,
        "height": 594,
        "alt": "Cena 23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "24",
        "num": "N° 24",
        "fullImg": "/img/aniversario/24.webp",
        "thumbImg": "/img/aniversario/24-p.webp",
        "width": 480,
        "height": 597,
        "alt": "Cena 24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "25",
        "num": "N° 25",
        "fullImg": "/img/aniversario/25.webp",
        "thumbImg": "/img/aniversario/25-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena 25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "26",
        "num": "N° 26",
        "fullImg": "/img/aniversario/26.webp",
        "thumbImg": "/img/aniversario/26-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 26",
        "note": "",
        "unavailable": false
      },
      {
        "code": "27",
        "num": "N° 27",
        "fullImg": "/img/aniversario/27.webp",
        "thumbImg": "/img/aniversario/27-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 27",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "28",
        "num": "N° 28",
        "fullImg": "/img/aniversario/28.webp",
        "thumbImg": "/img/aniversario/28-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 28",
        "note": "",
        "unavailable": false
      },
      {
        "code": "29",
        "num": "N° 29",
        "fullImg": "/img/aniversario/29.webp",
        "thumbImg": "/img/aniversario/29-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 29",
        "note": "",
        "unavailable": false
      },
      {
        "code": "30",
        "num": "N° 30",
        "fullImg": "/img/aniversario/30.webp",
        "thumbImg": "/img/aniversario/30-p.webp",
        "width": 480,
        "height": 680,
        "alt": "Cena 30",
        "note": "",
        "unavailable": false
      },
      {
        "code": "31",
        "num": "N° 31",
        "fullImg": "/img/aniversario/31.webp",
        "thumbImg": "/img/aniversario/31-p.webp",
        "width": 480,
        "height": 841,
        "alt": "Cena 31",
        "note": "",
        "unavailable": false
      },
      {
        "code": "32",
        "num": "N° 32",
        "fullImg": "/img/aniversario/32.webp",
        "thumbImg": "/img/aniversario/32-p.webp",
        "width": 480,
        "height": 841,
        "alt": "Cena 32",
        "note": "",
        "unavailable": false
      },
      {
        "code": "33",
        "num": "N° 33",
        "fullImg": "/img/aniversario/33.webp",
        "thumbImg": "/img/aniversario/33-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 33",
        "note": "",
        "unavailable": false
      },
      {
        "code": "34",
        "num": "N° 34",
        "fullImg": "/img/aniversario/34.webp",
        "thumbImg": "/img/aniversario/34-p.webp",
        "width": 480,
        "height": 658,
        "alt": "Cena 34",
        "note": "",
        "unavailable": false
      },
      {
        "code": "35",
        "num": "N° 35",
        "fullImg": "/img/aniversario/35.webp",
        "thumbImg": "/img/aniversario/35-p.webp",
        "width": 480,
        "height": 598,
        "alt": "Cena 35",
        "note": "",
        "unavailable": false
      },
      {
        "code": "36",
        "num": "N° 36",
        "fullImg": "/img/aniversario/36.webp",
        "thumbImg": "/img/aniversario/36-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 36",
        "note": "",
        "unavailable": false
      },
      {
        "code": "37",
        "num": "N° 37",
        "fullImg": "/img/aniversario/37.webp",
        "thumbImg": "/img/aniversario/37-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 37",
        "note": "",
        "unavailable": false
      },
      {
        "code": "38",
        "num": "N° 38",
        "fullImg": "/img/aniversario/38.webp",
        "thumbImg": "/img/aniversario/38-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena 38",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "39",
        "num": "N° 39",
        "fullImg": "/img/aniversario/39.webp",
        "thumbImg": "/img/aniversario/39-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 39",
        "note": "",
        "unavailable": false
      },
      {
        "code": "40",
        "num": "N° 40",
        "fullImg": "/img/aniversario/40.webp",
        "thumbImg": "/img/aniversario/40-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 40",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "41",
        "num": "N° 41",
        "fullImg": "/img/aniversario/41.webp",
        "thumbImg": "/img/aniversario/41-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 41",
        "note": "",
        "unavailable": false
      },
      {
        "code": "42",
        "num": "N° 42",
        "fullImg": "/img/aniversario/42.webp",
        "thumbImg": "/img/aniversario/42-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 42",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "43",
        "num": "N° 43",
        "fullImg": "/img/aniversario/43.webp",
        "thumbImg": "/img/aniversario/43-p.webp",
        "width": 480,
        "height": 702,
        "alt": "Cena 43",
        "note": "",
        "unavailable": false
      },
      {
        "code": "44",
        "num": "N° 44",
        "fullImg": "/img/aniversario/44.webp",
        "thumbImg": "/img/aniversario/44-p.webp",
        "width": 480,
        "height": 658,
        "alt": "Cena 44",
        "note": "",
        "unavailable": false
      },
      {
        "code": "45",
        "num": "N° 45",
        "fullImg": "/img/aniversario/45.webp",
        "thumbImg": "/img/aniversario/45-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 45",
        "note": "",
        "unavailable": false
      },
      {
        "code": "46",
        "num": "N° 46",
        "fullImg": "/img/aniversario/46.webp",
        "thumbImg": "/img/aniversario/46-p.webp",
        "width": 480,
        "height": 603,
        "alt": "Cena 46",
        "note": "",
        "unavailable": false
      },
      {
        "code": "47",
        "num": "N° 47",
        "fullImg": "/img/aniversario/47.webp",
        "thumbImg": "/img/aniversario/47-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 47",
        "note": "",
        "unavailable": false
      },
      {
        "code": "48",
        "num": "N° 48",
        "fullImg": "/img/aniversario/48.webp",
        "thumbImg": "/img/aniversario/48-p.webp",
        "width": 480,
        "height": 723,
        "alt": "Cena 48",
        "note": "",
        "unavailable": false
      },
      {
        "code": "49",
        "num": "N° 49",
        "fullImg": "/img/aniversario/49.webp",
        "thumbImg": "/img/aniversario/49-p.webp",
        "width": 480,
        "height": 678,
        "alt": "Cena 49",
        "note": "",
        "unavailable": false
      },
      {
        "code": "50",
        "num": "N° 50",
        "fullImg": "/img/aniversario/50.webp",
        "thumbImg": "/img/aniversario/50-p.webp",
        "width": 480,
        "height": 723,
        "alt": "Cena 50",
        "note": "",
        "unavailable": false
      },
      {
        "code": "51",
        "num": "N° 51",
        "fullImg": "/img/aniversario/51.webp",
        "thumbImg": "/img/aniversario/51-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 51",
        "note": "",
        "unavailable": false
      },
      {
        "code": "52",
        "num": "N° 52",
        "fullImg": "/img/aniversario/52.webp",
        "thumbImg": "/img/aniversario/52-p.webp",
        "width": 480,
        "height": 641,
        "alt": "Cena 52",
        "note": "",
        "unavailable": false
      },
      {
        "code": "53",
        "num": "N° 53",
        "fullImg": "/img/aniversario/53.webp",
        "thumbImg": "/img/aniversario/53-p.webp",
        "width": 480,
        "height": 579,
        "alt": "Cena 53",
        "note": "",
        "unavailable": false
      },
      {
        "code": "54",
        "num": "N° 54",
        "fullImg": "/img/aniversario/54.webp",
        "thumbImg": "/img/aniversario/54-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 54",
        "note": "",
        "unavailable": false
      },
      {
        "code": "55",
        "num": "N° 55",
        "fullImg": "/img/aniversario/55.webp",
        "thumbImg": "/img/aniversario/55-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 55",
        "note": "",
        "unavailable": false
      },
      {
        "code": "56",
        "num": "N° 56",
        "fullImg": "/img/aniversario/56.webp",
        "thumbImg": "/img/aniversario/56-p.webp",
        "width": 480,
        "height": 686,
        "alt": "Cena 56",
        "note": "",
        "unavailable": false
      },
      {
        "code": "57",
        "num": "N° 57",
        "fullImg": "/img/aniversario/57.webp",
        "thumbImg": "/img/aniversario/57-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 57",
        "note": "",
        "unavailable": false
      },
      {
        "code": "58",
        "num": "N° 58",
        "fullImg": "/img/aniversario/58.webp",
        "thumbImg": "/img/aniversario/58-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 58",
        "note": "",
        "unavailable": false
      },
      {
        "code": "59",
        "num": "N° 59",
        "fullImg": "/img/aniversario/59.webp",
        "thumbImg": "/img/aniversario/59-p.webp",
        "width": 480,
        "height": 732,
        "alt": "Cena 59",
        "note": "",
        "unavailable": false
      },
      {
        "code": "60",
        "num": "N° 60",
        "fullImg": "/img/aniversario/60.webp",
        "thumbImg": "/img/aniversario/60-p.webp",
        "width": 480,
        "height": 644,
        "alt": "Cena 60",
        "note": "",
        "unavailable": false
      },
      {
        "code": "61",
        "num": "N° 61",
        "fullImg": "/img/aniversario/61.webp",
        "thumbImg": "/img/aniversario/61-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 61",
        "note": "",
        "unavailable": false
      },
      {
        "code": "62",
        "num": "N° 62",
        "fullImg": "/img/aniversario/62.webp",
        "thumbImg": "/img/aniversario/62-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 62",
        "note": "",
        "unavailable": false
      },
      {
        "code": "63",
        "num": "N° 63",
        "fullImg": "/img/aniversario/63.webp",
        "thumbImg": "/img/aniversario/63-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 63",
        "note": "",
        "unavailable": false
      },
      {
        "code": "64",
        "num": "N° 64",
        "fullImg": "/img/aniversario/64.webp",
        "thumbImg": "/img/aniversario/64-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 64",
        "note": "",
        "unavailable": false
      },
      {
        "code": "65",
        "num": "N° 65",
        "fullImg": "/img/aniversario/65.webp",
        "thumbImg": "/img/aniversario/65-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 65",
        "note": "",
        "unavailable": false
      },
      {
        "code": "66",
        "num": "N° 66",
        "fullImg": "/img/aniversario/66.webp",
        "thumbImg": "/img/aniversario/66-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 66",
        "note": "",
        "unavailable": false
      },
      {
        "code": "67",
        "num": "N° 67",
        "fullImg": "/img/aniversario/67.webp",
        "thumbImg": "/img/aniversario/67-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 67",
        "note": "",
        "unavailable": false
      },
      {
        "code": "68",
        "num": "N° 68",
        "fullImg": "/img/aniversario/68.webp",
        "thumbImg": "/img/aniversario/68-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 68",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "69",
        "num": "N° 69",
        "fullImg": "/img/aniversario/69.webp",
        "thumbImg": "/img/aniversario/69-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 69",
        "note": "",
        "unavailable": false
      },
      {
        "code": "70",
        "num": "N° 70",
        "fullImg": "/img/aniversario/70.webp",
        "thumbImg": "/img/aniversario/70-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 70",
        "note": "",
        "unavailable": false
      }
    ]
  },
  "corporativo": {
    "id": "corporativo",
    "title": "Ensaio Corporativo",
    "countLabel": "50 cenas · 01 — 50",
    "is18Plus": false,
    "instructions": [
      {
        "roman": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "roman": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "01",
        "num": "N° 01",
        "fullImg": "/img/corporativo/01.webp",
        "thumbImg": "/img/corporativo/01-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "02",
        "num": "N° 02",
        "fullImg": "/img/corporativo/02.webp",
        "thumbImg": "/img/corporativo/02-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "03",
        "num": "N° 03",
        "fullImg": "/img/corporativo/03.webp",
        "thumbImg": "/img/corporativo/03-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 03",
        "note": "",
        "unavailable": false
      },
      {
        "code": "04",
        "num": "N° 04",
        "fullImg": "/img/corporativo/04.webp",
        "thumbImg": "/img/corporativo/04-p.webp",
        "width": 480,
        "height": 682,
        "alt": "Cena 04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "05",
        "num": "N° 05",
        "fullImg": "/img/corporativo/05.webp",
        "thumbImg": "/img/corporativo/05-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "06",
        "num": "N° 06",
        "fullImg": "/img/corporativo/06.webp",
        "thumbImg": "/img/corporativo/06-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "07",
        "num": "N° 07",
        "fullImg": "/img/corporativo/07.webp",
        "thumbImg": "/img/corporativo/07-p.webp",
        "width": 480,
        "height": 911,
        "alt": "Cena 07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "08",
        "num": "N° 08",
        "fullImg": "/img/corporativo/08.webp",
        "thumbImg": "/img/corporativo/08-p.webp",
        "width": 480,
        "height": 715,
        "alt": "Cena 08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "09",
        "num": "N° 09",
        "fullImg": "/img/corporativo/09.webp",
        "thumbImg": "/img/corporativo/09-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena 09",
        "note": "",
        "unavailable": false
      },
      {
        "code": "10",
        "num": "N° 10",
        "fullImg": "/img/corporativo/10.webp",
        "thumbImg": "/img/corporativo/10-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "11",
        "num": "N° 11",
        "fullImg": "/img/corporativo/11.webp",
        "thumbImg": "/img/corporativo/11-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "12",
        "num": "N° 12",
        "fullImg": "/img/corporativo/12.webp",
        "thumbImg": "/img/corporativo/12-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "13",
        "num": "N° 13",
        "fullImg": "/img/corporativo/13.webp",
        "thumbImg": "/img/corporativo/13-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "14",
        "num": "N° 14",
        "fullImg": "/img/corporativo/14.webp",
        "thumbImg": "/img/corporativo/14-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 14",
        "note": "",
        "unavailable": false
      },
      {
        "code": "15",
        "num": "N° 15",
        "fullImg": "/img/corporativo/15.webp",
        "thumbImg": "/img/corporativo/15-p.webp",
        "width": 480,
        "height": 860,
        "alt": "Cena 15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "16",
        "num": "N° 16",
        "fullImg": "/img/corporativo/16.webp",
        "thumbImg": "/img/corporativo/16-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 16",
        "note": "",
        "unavailable": false
      },
      {
        "code": "17",
        "num": "N° 17",
        "fullImg": "/img/corporativo/17.webp",
        "thumbImg": "/img/corporativo/17-p.webp",
        "width": 416,
        "height": 740,
        "alt": "Cena 17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "18",
        "num": "N° 18",
        "fullImg": "/img/corporativo/18.webp",
        "thumbImg": "/img/corporativo/18-p.webp",
        "width": 480,
        "height": 758,
        "alt": "Cena 18",
        "note": "",
        "unavailable": false
      },
      {
        "code": "19",
        "num": "N° 19",
        "fullImg": "/img/corporativo/19.webp",
        "thumbImg": "/img/corporativo/19-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "20",
        "num": "N° 20",
        "fullImg": "/img/corporativo/20.webp",
        "thumbImg": "/img/corporativo/20-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena 20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "21",
        "num": "N° 21",
        "fullImg": "/img/corporativo/21.webp",
        "thumbImg": "/img/corporativo/21-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "22",
        "num": "N° 22",
        "fullImg": "/img/corporativo/22.webp",
        "thumbImg": "/img/corporativo/22-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "23",
        "num": "N° 23",
        "fullImg": "/img/corporativo/23.webp",
        "thumbImg": "/img/corporativo/23-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "24",
        "num": "N° 24",
        "fullImg": "/img/corporativo/24.webp",
        "thumbImg": "/img/corporativo/24-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "25",
        "num": "N° 25",
        "fullImg": "/img/corporativo/25.webp",
        "thumbImg": "/img/corporativo/25-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "26",
        "num": "N° 26",
        "fullImg": "/img/corporativo/26.webp",
        "thumbImg": "/img/corporativo/26-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 26",
        "note": "",
        "unavailable": false
      },
      {
        "code": "27",
        "num": "N° 27",
        "fullImg": "/img/corporativo/27.webp",
        "thumbImg": "/img/corporativo/27-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 27",
        "note": "",
        "unavailable": false
      },
      {
        "code": "28",
        "num": "N° 28",
        "fullImg": "/img/corporativo/28.webp",
        "thumbImg": "/img/corporativo/28-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 28",
        "note": "",
        "unavailable": false
      },
      {
        "code": "29",
        "num": "N° 29",
        "fullImg": "/img/corporativo/29.webp",
        "thumbImg": "/img/corporativo/29-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 29",
        "note": "",
        "unavailable": false
      },
      {
        "code": "30",
        "num": "N° 30",
        "fullImg": "/img/corporativo/30.webp",
        "thumbImg": "/img/corporativo/30-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 30",
        "note": "",
        "unavailable": false
      },
      {
        "code": "31",
        "num": "N° 31",
        "fullImg": "/img/corporativo/31.webp",
        "thumbImg": "/img/corporativo/31-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 31",
        "note": "",
        "unavailable": false
      },
      {
        "code": "32",
        "num": "N° 32",
        "fullImg": "/img/corporativo/32.webp",
        "thumbImg": "/img/corporativo/32-p.webp",
        "width": 480,
        "height": 597,
        "alt": "Cena 32",
        "note": "",
        "unavailable": false
      },
      {
        "code": "33",
        "num": "N° 33",
        "fullImg": "/img/corporativo/33.webp",
        "thumbImg": "/img/corporativo/33-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 33",
        "note": "",
        "unavailable": false
      },
      {
        "code": "34",
        "num": "N° 34",
        "fullImg": "/img/corporativo/34.webp",
        "thumbImg": "/img/corporativo/34-p.webp",
        "width": 480,
        "height": 641,
        "alt": "Cena 34",
        "note": "",
        "unavailable": false
      },
      {
        "code": "35",
        "num": "N° 35",
        "fullImg": "/img/corporativo/35.webp",
        "thumbImg": "/img/corporativo/35-p.webp",
        "width": 480,
        "height": 673,
        "alt": "Cena 35",
        "note": "",
        "unavailable": false
      },
      {
        "code": "36",
        "num": "N° 36",
        "fullImg": "/img/corporativo/36.webp",
        "thumbImg": "/img/corporativo/36-p.webp",
        "width": 480,
        "height": 608,
        "alt": "Cena 36",
        "note": "",
        "unavailable": false
      },
      {
        "code": "37",
        "num": "N° 37",
        "fullImg": "/img/corporativo/37.webp",
        "thumbImg": "/img/corporativo/37-p.webp",
        "width": 480,
        "height": 881,
        "alt": "Cena 37",
        "note": "",
        "unavailable": false
      },
      {
        "code": "38",
        "num": "N° 38",
        "fullImg": "/img/corporativo/38.webp",
        "thumbImg": "/img/corporativo/38-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 38",
        "note": "",
        "unavailable": false
      },
      {
        "code": "39",
        "num": "N° 39",
        "fullImg": "/img/corporativo/39.webp",
        "thumbImg": "/img/corporativo/39-p.webp",
        "width": 480,
        "height": 807,
        "alt": "Cena 39",
        "note": "",
        "unavailable": false
      },
      {
        "code": "40",
        "num": "N° 40",
        "fullImg": "/img/corporativo/40.webp",
        "thumbImg": "/img/corporativo/40-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 40",
        "note": "",
        "unavailable": false
      },
      {
        "code": "41",
        "num": "N° 41",
        "fullImg": "/img/corporativo/41.webp",
        "thumbImg": "/img/corporativo/41-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 41",
        "note": "",
        "unavailable": false
      },
      {
        "code": "42",
        "num": "N° 42",
        "fullImg": "/img/corporativo/42.webp",
        "thumbImg": "/img/corporativo/42-p.webp",
        "width": 346,
        "height": 474,
        "alt": "Cena 42",
        "note": "",
        "unavailable": false
      },
      {
        "code": "43",
        "num": "N° 43",
        "fullImg": "/img/corporativo/43.webp",
        "thumbImg": "/img/corporativo/43-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 43",
        "note": "",
        "unavailable": false
      },
      {
        "code": "44",
        "num": "N° 44",
        "fullImg": "/img/corporativo/44.webp",
        "thumbImg": "/img/corporativo/44-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 44",
        "note": "",
        "unavailable": false
      },
      {
        "code": "45",
        "num": "N° 45",
        "fullImg": "/img/corporativo/45.webp",
        "thumbImg": "/img/corporativo/45-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena 45",
        "note": "",
        "unavailable": false
      },
      {
        "code": "46",
        "num": "N° 46",
        "fullImg": "/img/corporativo/46.webp",
        "thumbImg": "/img/corporativo/46-p.webp",
        "width": 480,
        "height": 839,
        "alt": "Cena 46",
        "note": "",
        "unavailable": false
      },
      {
        "code": "47",
        "num": "N° 47",
        "fullImg": "/img/corporativo/47.webp",
        "thumbImg": "/img/corporativo/47-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 47",
        "note": "",
        "unavailable": false
      },
      {
        "code": "48",
        "num": "N° 48",
        "fullImg": "/img/corporativo/48.webp",
        "thumbImg": "/img/corporativo/48-p.webp",
        "width": 480,
        "height": 631,
        "alt": "Cena 48",
        "note": "",
        "unavailable": false
      },
      {
        "code": "49",
        "num": "N° 49",
        "fullImg": "/img/corporativo/49.webp",
        "thumbImg": "/img/corporativo/49-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 49",
        "note": "",
        "unavailable": false
      },
      {
        "code": "50",
        "num": "N° 50",
        "fullImg": "/img/corporativo/50.webp",
        "thumbImg": "/img/corporativo/50-p.webp",
        "width": 480,
        "height": 721,
        "alt": "Cena 50",
        "note": "",
        "unavailable": false
      }
    ]
  },
  "casal": {
    "id": "casal",
    "title": "Ensaio de Casal",
    "countLabel": "50 cenas · 01 — 50",
    "is18Plus": false,
    "instructions": [
      {
        "roman": "I",
        "title": "Vejam as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "roman": "II",
        "title": "Toquem para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Enviem os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "01",
        "num": "N° 01",
        "fullImg": "/img/casal/01.webp",
        "thumbImg": "/img/casal/01-p.webp",
        "width": 480,
        "height": 703,
        "alt": "Cena 01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "02",
        "num": "N° 02",
        "fullImg": "/img/casal/02.webp",
        "thumbImg": "/img/casal/02-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "03",
        "num": "N° 03",
        "fullImg": "/img/casal/03.webp",
        "thumbImg": "/img/casal/03-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 03",
        "note": "",
        "unavailable": false
      },
      {
        "code": "04",
        "num": "N° 04",
        "fullImg": "/img/casal/04.webp",
        "thumbImg": "/img/casal/04-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "05",
        "num": "N° 05",
        "fullImg": "/img/casal/05.webp",
        "thumbImg": "/img/casal/05-p.webp",
        "width": 480,
        "height": 861,
        "alt": "Cena 05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "06",
        "num": "N° 06",
        "fullImg": "/img/casal/06.webp",
        "thumbImg": "/img/casal/06-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "07",
        "num": "N° 07",
        "fullImg": "/img/casal/07.webp",
        "thumbImg": "/img/casal/07-p.webp",
        "width": 480,
        "height": 831,
        "alt": "Cena 07",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "08",
        "num": "N° 08",
        "fullImg": "/img/casal/08.webp",
        "thumbImg": "/img/casal/08-p.webp",
        "width": 480,
        "height": 696,
        "alt": "Cena 08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "09",
        "num": "N° 09",
        "fullImg": "/img/casal/09.webp",
        "thumbImg": "/img/casal/09-p.webp",
        "width": 480,
        "height": 1005,
        "alt": "Cena 09",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "10",
        "num": "N° 10",
        "fullImg": "/img/casal/10.webp",
        "thumbImg": "/img/casal/10-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena 10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "11",
        "num": "N° 11",
        "fullImg": "/img/casal/11.webp",
        "thumbImg": "/img/casal/11-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "12",
        "num": "N° 12",
        "fullImg": "/img/casal/12.webp",
        "thumbImg": "/img/casal/12-p.webp",
        "width": 480,
        "height": 725,
        "alt": "Cena 12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "13",
        "num": "N° 13",
        "fullImg": "/img/casal/13.webp",
        "thumbImg": "/img/casal/13-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "14",
        "num": "N° 14",
        "fullImg": "/img/casal/14.webp",
        "thumbImg": "/img/casal/14-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 14",
        "note": "",
        "unavailable": false
      },
      {
        "code": "15",
        "num": "N° 15",
        "fullImg": "/img/casal/15.webp",
        "thumbImg": "/img/casal/15-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "16",
        "num": "N° 16",
        "fullImg": "/img/casal/16.webp",
        "thumbImg": "/img/casal/16-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 16",
        "note": "",
        "unavailable": false
      },
      {
        "code": "17",
        "num": "N° 17",
        "fullImg": "/img/casal/17.webp",
        "thumbImg": "/img/casal/17-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 17",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "18",
        "num": "N° 18",
        "fullImg": "/img/casal/18.webp",
        "thumbImg": "/img/casal/18-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 18",
        "note": "",
        "unavailable": false
      },
      {
        "code": "19",
        "num": "N° 19",
        "fullImg": "/img/casal/19.webp",
        "thumbImg": "/img/casal/19-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "20",
        "num": "N° 20",
        "fullImg": "/img/casal/20.webp",
        "thumbImg": "/img/casal/20-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena 20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "21",
        "num": "N° 21",
        "fullImg": "/img/casal/21.webp",
        "thumbImg": "/img/casal/21-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "22",
        "num": "N° 22",
        "fullImg": "/img/casal/22.webp",
        "thumbImg": "/img/casal/22-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "23",
        "num": "N° 23",
        "fullImg": "/img/casal/23.webp",
        "thumbImg": "/img/casal/23-p.webp",
        "width": 480,
        "height": 643,
        "alt": "Cena 23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "24",
        "num": "N° 24",
        "fullImg": "/img/casal/24.webp",
        "thumbImg": "/img/casal/24-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "25",
        "num": "N° 25",
        "fullImg": "/img/casal/25.webp",
        "thumbImg": "/img/casal/25-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "26",
        "num": "N° 26",
        "fullImg": "/img/casal/26.webp",
        "thumbImg": "/img/casal/26-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 26",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "27",
        "num": "N° 27",
        "fullImg": "/img/casal/27.webp",
        "thumbImg": "/img/casal/27-p.webp",
        "width": 480,
        "height": 762,
        "alt": "Cena 27",
        "note": "",
        "unavailable": false
      },
      {
        "code": "28",
        "num": "N° 28",
        "fullImg": "/img/casal/28.webp",
        "thumbImg": "/img/casal/28-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 28",
        "note": "",
        "unavailable": false
      },
      {
        "code": "29",
        "num": "N° 29",
        "fullImg": "/img/casal/29.webp",
        "thumbImg": "/img/casal/29-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 29",
        "note": "",
        "unavailable": false
      },
      {
        "code": "30",
        "num": "N° 30",
        "fullImg": "/img/casal/30.webp",
        "thumbImg": "/img/casal/30-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 30",
        "note": "",
        "unavailable": false
      },
      {
        "code": "31",
        "num": "N° 31",
        "fullImg": "/img/casal/31.webp",
        "thumbImg": "/img/casal/31-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 31",
        "note": "",
        "unavailable": false
      },
      {
        "code": "32",
        "num": "N° 32",
        "fullImg": "/img/casal/32.webp",
        "thumbImg": "/img/casal/32-p.webp",
        "width": 480,
        "height": 1067,
        "alt": "Cena 32",
        "note": "",
        "unavailable": false
      },
      {
        "code": "33",
        "num": "N° 33",
        "fullImg": "/img/casal/33.webp",
        "thumbImg": "/img/casal/33-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 33",
        "note": "",
        "unavailable": false
      },
      {
        "code": "34",
        "num": "N° 34",
        "fullImg": "/img/casal/34.webp",
        "thumbImg": "/img/casal/34-p.webp",
        "width": 480,
        "height": 591,
        "alt": "Cena 34",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "35",
        "num": "N° 35",
        "fullImg": "/img/casal/35.webp",
        "thumbImg": "/img/casal/35-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 35",
        "note": "",
        "unavailable": false
      },
      {
        "code": "36",
        "num": "N° 36",
        "fullImg": "/img/casal/36.webp",
        "thumbImg": "/img/casal/36-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 36",
        "note": "",
        "unavailable": false
      },
      {
        "code": "37",
        "num": "N° 37",
        "fullImg": "/img/casal/37.webp",
        "thumbImg": "/img/casal/37-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 37",
        "note": "",
        "unavailable": false
      },
      {
        "code": "38",
        "num": "N° 38",
        "fullImg": "/img/casal/38.webp",
        "thumbImg": "/img/casal/38-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 38",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "39",
        "num": "N° 39",
        "fullImg": "/img/casal/39.webp",
        "thumbImg": "/img/casal/39-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 39",
        "note": "",
        "unavailable": false
      },
      {
        "code": "40",
        "num": "N° 40",
        "fullImg": "/img/casal/40.webp",
        "thumbImg": "/img/casal/40-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 40",
        "note": "",
        "unavailable": false
      },
      {
        "code": "41",
        "num": "N° 41",
        "fullImg": "/img/casal/41.webp",
        "thumbImg": "/img/casal/41-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 41",
        "note": "",
        "unavailable": false
      },
      {
        "code": "42",
        "num": "N° 42",
        "fullImg": "/img/casal/42.webp",
        "thumbImg": "/img/casal/42-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 42",
        "note": "",
        "unavailable": false
      },
      {
        "code": "43",
        "num": "N° 43",
        "fullImg": "/img/casal/43.webp",
        "thumbImg": "/img/casal/43-p.webp",
        "width": 480,
        "height": 960,
        "alt": "Cena 43",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "44",
        "num": "N° 44",
        "fullImg": "/img/casal/44.webp",
        "thumbImg": "/img/casal/44-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 44",
        "note": "",
        "unavailable": false
      },
      {
        "code": "45",
        "num": "N° 45",
        "fullImg": "/img/casal/45.webp",
        "thumbImg": "/img/casal/45-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 45",
        "note": "",
        "unavailable": false
      },
      {
        "code": "46",
        "num": "N° 46",
        "fullImg": "/img/casal/46.webp",
        "thumbImg": "/img/casal/46-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 46",
        "note": "",
        "unavailable": false
      },
      {
        "code": "47",
        "num": "N° 47",
        "fullImg": "/img/casal/47.webp",
        "thumbImg": "/img/casal/47-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 47",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "48",
        "num": "N° 48",
        "fullImg": "/img/casal/48.webp",
        "thumbImg": "/img/casal/48-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 48",
        "note": "",
        "unavailable": false
      },
      {
        "code": "49",
        "num": "N° 49",
        "fullImg": "/img/casal/49.webp",
        "thumbImg": "/img/casal/49-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 49",
        "note": "",
        "unavailable": false
      },
      {
        "code": "50",
        "num": "N° 50",
        "fullImg": "/img/casal/50.webp",
        "thumbImg": "/img/casal/50-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 50",
        "note": "",
        "unavailable": false
      }
    ]
  },
  "infantil": {
    "id": "infantil",
    "title": "Ensaio Infantil",
    "countLabel": "Meninas F01 — F25 · Meninos M01 — M25",
    "is18Plus": false,
    "instructions": [
      {
        "roman": "I",
        "title": "Veja as cenas",
        "desc": "Meninas de F01 a F25, meninos de M01 a M25."
      },
      {
        "roman": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Envie os códigos",
        "desc": "Copie os códigos e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "F01",
        "num": "F01",
        "fullImg": "/img/infantil/F01.webp",
        "thumbImg": "/img/infantil/F01-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F02",
        "num": "F02",
        "fullImg": "/img/infantil/F02.webp",
        "thumbImg": "/img/infantil/F02-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena F02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F03",
        "num": "F03",
        "fullImg": "/img/infantil/F03.webp",
        "thumbImg": "/img/infantil/F03-p.webp",
        "width": 480,
        "height": 784,
        "alt": "Cena F03",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F04",
        "num": "F04",
        "fullImg": "/img/infantil/F04.webp",
        "thumbImg": "/img/infantil/F04-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena F04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F05",
        "num": "F05",
        "fullImg": "/img/infantil/F05.webp",
        "thumbImg": "/img/infantil/F05-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena F05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F06",
        "num": "F06",
        "fullImg": "/img/infantil/F06.webp",
        "thumbImg": "/img/infantil/F06-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F07",
        "num": "F07",
        "fullImg": "/img/infantil/F07.webp",
        "thumbImg": "/img/infantil/F07-p.webp",
        "width": 480,
        "height": 664,
        "alt": "Cena F07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F08",
        "num": "F08",
        "fullImg": "/img/infantil/F08.webp",
        "thumbImg": "/img/infantil/F08-p.webp",
        "width": 480,
        "height": 646,
        "alt": "Cena F08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F09",
        "num": "F09",
        "fullImg": "/img/infantil/F09.webp",
        "thumbImg": "/img/infantil/F09-p.webp",
        "width": 480,
        "height": 677,
        "alt": "Cena F09",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F10",
        "num": "F10",
        "fullImg": "/img/infantil/F10.webp",
        "thumbImg": "/img/infantil/F10-p.webp",
        "width": 480,
        "height": 658,
        "alt": "Cena F10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F11",
        "num": "F11",
        "fullImg": "/img/infantil/F11.webp",
        "thumbImg": "/img/infantil/F11-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena F11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F12",
        "num": "F12",
        "fullImg": "/img/infantil/F12.webp",
        "thumbImg": "/img/infantil/F12-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F13",
        "num": "F13",
        "fullImg": "/img/infantil/F13.webp",
        "thumbImg": "/img/infantil/F13-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena F13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F14",
        "num": "F14",
        "fullImg": "/img/infantil/F14.webp",
        "thumbImg": "/img/infantil/F14-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F14",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F15",
        "num": "F15",
        "fullImg": "/img/infantil/F15.webp",
        "thumbImg": "/img/infantil/F15-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F16",
        "num": "F16",
        "fullImg": "/img/infantil/F16.webp",
        "thumbImg": "/img/infantil/F16-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F16",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F17",
        "num": "F17",
        "fullImg": "/img/infantil/F17.webp",
        "thumbImg": "/img/infantil/F17-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena F17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F18",
        "num": "F18",
        "fullImg": "/img/infantil/F18.webp",
        "thumbImg": "/img/infantil/F18-p.webp",
        "width": 438,
        "height": 673,
        "alt": "Cena F18",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F19",
        "num": "F19",
        "fullImg": "/img/infantil/F19.webp",
        "thumbImg": "/img/infantil/F19-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena F19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F20",
        "num": "F20",
        "fullImg": "/img/infantil/F20.webp",
        "thumbImg": "/img/infantil/F20-p.webp",
        "width": 480,
        "height": 791,
        "alt": "Cena F20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F21",
        "num": "F21",
        "fullImg": "/img/infantil/F21.webp",
        "thumbImg": "/img/infantil/F21-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena F21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F22",
        "num": "F22",
        "fullImg": "/img/infantil/F22.webp",
        "thumbImg": "/img/infantil/F22-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena F22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F23",
        "num": "F23",
        "fullImg": "/img/infantil/F23.webp",
        "thumbImg": "/img/infantil/F23-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena F23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F24",
        "num": "F24",
        "fullImg": "/img/infantil/F24.webp",
        "thumbImg": "/img/infantil/F24-p.webp",
        "width": 480,
        "height": 704,
        "alt": "Cena F24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "F25",
        "num": "F25",
        "fullImg": "/img/infantil/F25.webp",
        "thumbImg": "/img/infantil/F25-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena F25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M01",
        "num": "M01",
        "fullImg": "/img/infantil/M01.webp",
        "thumbImg": "/img/infantil/M01-p.webp",
        "width": 438,
        "height": 657,
        "alt": "Cena M01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M02",
        "num": "M02",
        "fullImg": "/img/infantil/M02.webp",
        "thumbImg": "/img/infantil/M02-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena M02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M03",
        "num": "M03",
        "fullImg": "/img/infantil/M03.webp",
        "thumbImg": "/img/infantil/M03-p.webp",
        "width": 480,
        "height": 616,
        "alt": "Cena M03",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M04",
        "num": "M04",
        "fullImg": "/img/infantil/M04.webp",
        "thumbImg": "/img/infantil/M04-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M04",
        "note": "traje de herói exclusivo",
        "unavailable": false
      },
      {
        "code": "M05",
        "num": "M05",
        "fullImg": "/img/infantil/M05.webp",
        "thumbImg": "/img/infantil/M05-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M06",
        "num": "M06",
        "fullImg": "/img/infantil/M06.webp",
        "thumbImg": "/img/infantil/M06-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena M06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M07",
        "num": "M07",
        "fullImg": "/img/infantil/M07.webp",
        "thumbImg": "/img/infantil/M07-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M08",
        "num": "M08",
        "fullImg": "/img/infantil/M08.webp",
        "thumbImg": "/img/infantil/M08-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena M08",
        "note": "traje de herói exclusivo",
        "unavailable": false
      },
      {
        "code": "M09",
        "num": "M09",
        "fullImg": "/img/infantil/M09.webp",
        "thumbImg": "/img/infantil/M09-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena M09",
        "note": "uniforme sem marca · número = idade",
        "unavailable": false
      },
      {
        "code": "M10",
        "num": "M10",
        "fullImg": "/img/infantil/M10.webp",
        "thumbImg": "/img/infantil/M10-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M11",
        "num": "M11",
        "fullImg": "/img/infantil/M11.webp",
        "thumbImg": "/img/infantil/M11-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena M11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M12",
        "num": "M12",
        "fullImg": "/img/infantil/M12.webp",
        "thumbImg": "/img/infantil/M12-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M13",
        "num": "M13",
        "fullImg": "/img/infantil/M13.webp",
        "thumbImg": "/img/infantil/M13-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M14",
        "num": "M14",
        "fullImg": "/img/infantil/M14.webp",
        "thumbImg": "/img/infantil/M14-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena M14",
        "note": "uniforme sem marca · número = idade",
        "unavailable": false
      },
      {
        "code": "M15",
        "num": "M15",
        "fullImg": "/img/infantil/M15.webp",
        "thumbImg": "/img/infantil/M15-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M16",
        "num": "M16",
        "fullImg": "/img/infantil/M16.webp",
        "thumbImg": "/img/infantil/M16-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M16",
        "note": "com a mamãe · traje de herói exclusivo",
        "unavailable": true
      },
      {
        "code": "M17",
        "num": "M17",
        "fullImg": "/img/infantil/M17.webp",
        "thumbImg": "/img/infantil/M17-p.webp",
        "width": 480,
        "height": 724,
        "alt": "Cena M17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M18",
        "num": "M18",
        "fullImg": "/img/infantil/M18.webp",
        "thumbImg": "/img/infantil/M18-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M18",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M19",
        "num": "M19",
        "fullImg": "/img/infantil/M19.webp",
        "thumbImg": "/img/infantil/M19-p.webp",
        "width": 480,
        "height": 673,
        "alt": "Cena M19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M20",
        "num": "M20",
        "fullImg": "/img/infantil/M20.webp",
        "thumbImg": "/img/infantil/M20-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M21",
        "num": "M21",
        "fullImg": "/img/infantil/M21.webp",
        "thumbImg": "/img/infantil/M21-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena M21",
        "note": "tema Dino Park",
        "unavailable": false
      },
      {
        "code": "M22",
        "num": "M22",
        "fullImg": "/img/infantil/M22.webp",
        "thumbImg": "/img/infantil/M22-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena M22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M23",
        "num": "M23",
        "fullImg": "/img/infantil/M23.webp",
        "thumbImg": "/img/infantil/M23-p.webp",
        "width": 480,
        "height": 642,
        "alt": "Cena M23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M24",
        "num": "M24",
        "fullImg": "/img/infantil/M24.webp",
        "thumbImg": "/img/infantil/M24-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena M24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "M25",
        "num": "M25",
        "fullImg": "/img/infantil/M25.webp",
        "thumbImg": "/img/infantil/M25-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena M25",
        "note": "",
        "unavailable": false
      }
    ]
  },
  "casual": {
    "id": "casual",
    "title": "Ensaio Casual",
    "countLabel": "49 cenas · 01 — 49",
    "is18Plus": false,
    "instructions": [
      {
        "roman": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "roman": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "01",
        "num": "N° 01",
        "fullImg": "/img/casual/01.webp",
        "thumbImg": "/img/casual/01-p.webp",
        "width": 480,
        "height": 554,
        "alt": "Cena 01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "02",
        "num": "N° 02",
        "fullImg": "/img/casual/02.webp",
        "thumbImg": "/img/casual/02-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "03",
        "num": "N° 03",
        "fullImg": "/img/casual/03.webp",
        "thumbImg": "/img/casual/03-p.webp",
        "width": 480,
        "height": 679,
        "alt": "Cena 03",
        "note": "",
        "unavailable": false
      },
      {
        "code": "04",
        "num": "N° 04",
        "fullImg": "/img/casual/04.webp",
        "thumbImg": "/img/casual/04-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "05",
        "num": "N° 05",
        "fullImg": "/img/casual/05.webp",
        "thumbImg": "/img/casual/05-p.webp",
        "width": 480,
        "height": 787,
        "alt": "Cena 05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "06",
        "num": "N° 06",
        "fullImg": "/img/casual/06.webp",
        "thumbImg": "/img/casual/06-p.webp",
        "width": 480,
        "height": 719,
        "alt": "Cena 06",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "07",
        "num": "N° 07",
        "fullImg": "/img/casual/07.webp",
        "thumbImg": "/img/casual/07-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "08",
        "num": "N° 08",
        "fullImg": "/img/casual/08.webp",
        "thumbImg": "/img/casual/08-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "09",
        "num": "N° 09",
        "fullImg": "/img/casual/09.webp",
        "thumbImg": "/img/casual/09-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 09",
        "note": "",
        "unavailable": false
      },
      {
        "code": "10",
        "num": "N° 10",
        "fullImg": "/img/casual/10.webp",
        "thumbImg": "/img/casual/10-p.webp",
        "width": 480,
        "height": 1005,
        "alt": "Cena 10",
        "note": "",
        "unavailable": false
      },
      {
        "code": "11",
        "num": "N° 11",
        "fullImg": "/img/casual/11.webp",
        "thumbImg": "/img/casual/11-p.webp",
        "width": 480,
        "height": 643,
        "alt": "Cena 11",
        "note": "",
        "unavailable": false
      },
      {
        "code": "12",
        "num": "N° 12",
        "fullImg": "/img/casual/12.webp",
        "thumbImg": "/img/casual/12-p.webp",
        "width": 480,
        "height": 643,
        "alt": "Cena 12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "13",
        "num": "N° 13",
        "fullImg": "/img/casual/13.webp",
        "thumbImg": "/img/casual/13-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 13",
        "note": "",
        "unavailable": false
      },
      {
        "code": "14",
        "num": "N° 14",
        "fullImg": "/img/casual/14.webp",
        "thumbImg": "/img/casual/14-p.webp",
        "width": 480,
        "height": 657,
        "alt": "Cena 14",
        "note": "",
        "unavailable": false
      },
      {
        "code": "15",
        "num": "N° 15",
        "fullImg": "/img/casual/15.webp",
        "thumbImg": "/img/casual/15-p.webp",
        "width": 480,
        "height": 861,
        "alt": "Cena 15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "16",
        "num": "N° 16",
        "fullImg": "/img/casual/16.webp",
        "thumbImg": "/img/casual/16-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 16",
        "note": "",
        "unavailable": false
      },
      {
        "code": "17",
        "num": "N° 17",
        "fullImg": "/img/casual/17.webp",
        "thumbImg": "/img/casual/17-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "18",
        "num": "N° 18",
        "fullImg": "/img/casual/18.webp",
        "thumbImg": "/img/casual/18-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 18",
        "note": "",
        "unavailable": false
      },
      {
        "code": "19",
        "num": "N° 19",
        "fullImg": "/img/casual/19.webp",
        "thumbImg": "/img/casual/19-p.webp",
        "width": 480,
        "height": 856,
        "alt": "Cena 19",
        "note": "",
        "unavailable": false
      },
      {
        "code": "20",
        "num": "N° 20",
        "fullImg": "/img/casual/20.webp",
        "thumbImg": "/img/casual/20-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 20",
        "note": "",
        "unavailable": false
      },
      {
        "code": "21",
        "num": "N° 21",
        "fullImg": "/img/casual/21.webp",
        "thumbImg": "/img/casual/21-p.webp",
        "width": 480,
        "height": 844,
        "alt": "Cena 21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "22",
        "num": "N° 22",
        "fullImg": "/img/casual/22.webp",
        "thumbImg": "/img/casual/22-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "23",
        "num": "N° 23",
        "fullImg": "/img/casual/23.webp",
        "thumbImg": "/img/casual/23-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 23",
        "note": "",
        "unavailable": false
      },
      {
        "code": "24",
        "num": "N° 24",
        "fullImg": "/img/casual/24.webp",
        "thumbImg": "/img/casual/24-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "25",
        "num": "N° 25",
        "fullImg": "/img/casual/25.webp",
        "thumbImg": "/img/casual/25-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "26",
        "num": "N° 26",
        "fullImg": "/img/casual/26.webp",
        "thumbImg": "/img/casual/26-p.webp",
        "width": 480,
        "height": 918,
        "alt": "Cena 26",
        "note": "",
        "unavailable": false
      },
      {
        "code": "27",
        "num": "N° 27",
        "fullImg": "/img/casual/27.webp",
        "thumbImg": "/img/casual/27-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 27",
        "note": "",
        "unavailable": false
      },
      {
        "code": "28",
        "num": "N° 28",
        "fullImg": "/img/casual/28.webp",
        "thumbImg": "/img/casual/28-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 28",
        "note": "",
        "unavailable": false
      },
      {
        "code": "29",
        "num": "N° 29",
        "fullImg": "/img/casual/29.webp",
        "thumbImg": "/img/casual/29-p.webp",
        "width": 480,
        "height": 850,
        "alt": "Cena 29",
        "note": "",
        "unavailable": false
      },
      {
        "code": "30",
        "num": "N° 30",
        "fullImg": "/img/casual/30.webp",
        "thumbImg": "/img/casual/30-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 30",
        "note": "",
        "unavailable": false
      },
      {
        "code": "31",
        "num": "N° 31",
        "fullImg": "/img/casual/31.webp",
        "thumbImg": "/img/casual/31-p.webp",
        "width": 480,
        "height": 856,
        "alt": "Cena 31",
        "note": "",
        "unavailable": false
      },
      {
        "code": "32",
        "num": "N° 32",
        "fullImg": "/img/casual/32.webp",
        "thumbImg": "/img/casual/32-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 32",
        "note": "",
        "unavailable": false
      },
      {
        "code": "33",
        "num": "N° 33",
        "fullImg": "/img/casual/33.webp",
        "thumbImg": "/img/casual/33-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 33",
        "note": "",
        "unavailable": false
      },
      {
        "code": "34",
        "num": "N° 34",
        "fullImg": "/img/casual/34.webp",
        "thumbImg": "/img/casual/34-p.webp",
        "width": 480,
        "height": 840,
        "alt": "Cena 34",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "35",
        "num": "N° 35",
        "fullImg": "/img/casual/35.webp",
        "thumbImg": "/img/casual/35-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 35",
        "note": "",
        "unavailable": false
      },
      {
        "code": "36",
        "num": "N° 36",
        "fullImg": "/img/casual/36.webp",
        "thumbImg": "/img/casual/36-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 36",
        "note": "",
        "unavailable": false
      },
      {
        "code": "37",
        "num": "N° 37",
        "fullImg": "/img/casual/37.webp",
        "thumbImg": "/img/casual/37-p.webp",
        "width": 376,
        "height": 558,
        "alt": "Cena 37",
        "note": "",
        "unavailable": false
      },
      {
        "code": "38",
        "num": "N° 38",
        "fullImg": "/img/casual/38.webp",
        "thumbImg": "/img/casual/38-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 38",
        "note": "",
        "unavailable": false
      },
      {
        "code": "39",
        "num": "N° 39",
        "fullImg": "/img/casual/39.webp",
        "thumbImg": "/img/casual/39-p.webp",
        "width": 480,
        "height": 599,
        "alt": "Cena 39",
        "note": "",
        "unavailable": false
      },
      {
        "code": "40",
        "num": "N° 40",
        "fullImg": "/img/casual/40.webp",
        "thumbImg": "/img/casual/40-p.webp",
        "width": 480,
        "height": 544,
        "alt": "Cena 40",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "41",
        "num": "N° 41",
        "fullImg": "/img/casual/41.webp",
        "thumbImg": "/img/casual/41-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 41",
        "note": "",
        "unavailable": false
      },
      {
        "code": "42",
        "num": "N° 42",
        "fullImg": "/img/casual/42.webp",
        "thumbImg": "/img/casual/42-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena 42",
        "note": "",
        "unavailable": false
      },
      {
        "code": "43",
        "num": "N° 43",
        "fullImg": "/img/casual/43.webp",
        "thumbImg": "/img/casual/43-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 43",
        "note": "",
        "unavailable": false
      },
      {
        "code": "44",
        "num": "N° 44",
        "fullImg": "/img/casual/44.webp",
        "thumbImg": "/img/casual/44-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 44",
        "note": "",
        "unavailable": false
      },
      {
        "code": "45",
        "num": "N° 45",
        "fullImg": "/img/casual/45.webp",
        "thumbImg": "/img/casual/45-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 45",
        "note": "",
        "unavailable": false
      },
      {
        "code": "46",
        "num": "N° 46",
        "fullImg": "/img/casual/46.webp",
        "thumbImg": "/img/casual/46-p.webp",
        "width": 480,
        "height": 768,
        "alt": "Cena 46",
        "note": "",
        "unavailable": false
      },
      {
        "code": "47",
        "num": "N° 47",
        "fullImg": "/img/casual/47.webp",
        "thumbImg": "/img/casual/47-p.webp",
        "width": 480,
        "height": 658,
        "alt": "Cena 47",
        "note": "",
        "unavailable": false
      },
      {
        "code": "48",
        "num": "N° 48",
        "fullImg": "/img/casual/48.webp",
        "thumbImg": "/img/casual/48-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 48",
        "note": "",
        "unavailable": false
      },
      {
        "code": "49",
        "num": "N° 49",
        "fullImg": "/img/casual/49.webp",
        "thumbImg": "/img/casual/49-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 49",
        "note": "",
        "unavailable": false
      }
    ]
  },
  "sensual": {
    "id": "sensual",
    "title": "Ensaio Sensual",
    "countLabel": "49 cenas · 01 — 49 · 18+",
    "is18Plus": true,
    "instructions": [
      {
        "roman": "I",
        "title": "Veja as cenas",
        "desc": "Cada foto é uma direção de arte completa: figurino, luz, cenário e composição."
      },
      {
        "roman": "II",
        "title": "Toque para escolher",
        "desc": "O círculo no canto da foto marca a cena. Toque na foto para ver grande."
      },
      {
        "roman": "III",
        "title": "Envie os números",
        "desc": "Copie os números e cole na nossa conversa do WhatsApp."
      }
    ],
    "scenes": [
      {
        "code": "01",
        "num": "N° 01",
        "fullImg": "/img/sensual/01.webp",
        "thumbImg": "/img/sensual/01-p.webp",
        "width": 480,
        "height": 599,
        "alt": "Cena 01",
        "note": "",
        "unavailable": false
      },
      {
        "code": "02",
        "num": "N° 02",
        "fullImg": "/img/sensual/02.webp",
        "thumbImg": "/img/sensual/02-p.webp",
        "width": 480,
        "height": 580,
        "alt": "Cena 02",
        "note": "",
        "unavailable": false
      },
      {
        "code": "03",
        "num": "N° 03",
        "fullImg": "/img/sensual/03.webp",
        "thumbImg": "/img/sensual/03-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 03",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "04",
        "num": "N° 04",
        "fullImg": "/img/sensual/04.webp",
        "thumbImg": "/img/sensual/04-p.webp",
        "width": 480,
        "height": 854,
        "alt": "Cena 04",
        "note": "",
        "unavailable": false
      },
      {
        "code": "05",
        "num": "N° 05",
        "fullImg": "/img/sensual/05.webp",
        "thumbImg": "/img/sensual/05-p.webp",
        "width": 434,
        "height": 550,
        "alt": "Cena 05",
        "note": "",
        "unavailable": false
      },
      {
        "code": "06",
        "num": "N° 06",
        "fullImg": "/img/sensual/06.webp",
        "thumbImg": "/img/sensual/06-p.webp",
        "width": 480,
        "height": 598,
        "alt": "Cena 06",
        "note": "",
        "unavailable": false
      },
      {
        "code": "07",
        "num": "N° 07",
        "fullImg": "/img/sensual/07.webp",
        "thumbImg": "/img/sensual/07-p.webp",
        "width": 480,
        "height": 599,
        "alt": "Cena 07",
        "note": "",
        "unavailable": false
      },
      {
        "code": "08",
        "num": "N° 08",
        "fullImg": "/img/sensual/08.webp",
        "thumbImg": "/img/sensual/08-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 08",
        "note": "",
        "unavailable": false
      },
      {
        "code": "09",
        "num": "N° 09",
        "fullImg": "/img/sensual/09.webp",
        "thumbImg": "/img/sensual/09-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 09",
        "note": "",
        "unavailable": false
      },
      {
        "code": "10",
        "num": "N° 10",
        "fullImg": "/img/sensual/10.webp",
        "thumbImg": "/img/sensual/10-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 10",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "11",
        "num": "N° 11",
        "fullImg": "/img/sensual/11.webp",
        "thumbImg": "/img/sensual/11-p.webp",
        "width": 480,
        "height": 636,
        "alt": "Cena 11",
        "note": "versão com bralette",
        "unavailable": false
      },
      {
        "code": "12",
        "num": "N° 12",
        "fullImg": "/img/sensual/12.webp",
        "thumbImg": "/img/sensual/12-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 12",
        "note": "",
        "unavailable": false
      },
      {
        "code": "13",
        "num": "N° 13",
        "fullImg": "/img/sensual/13.webp",
        "thumbImg": "/img/sensual/13-p.webp",
        "width": 480,
        "height": 585,
        "alt": "Cena 13",
        "note": "versão com bralette",
        "unavailable": false
      },
      {
        "code": "14",
        "num": "N° 14",
        "fullImg": "/img/sensual/14.webp",
        "thumbImg": "/img/sensual/14-p.webp",
        "width": 480,
        "height": 856,
        "alt": "Cena 14",
        "note": "versão com bralette",
        "unavailable": false
      },
      {
        "code": "15",
        "num": "N° 15",
        "fullImg": "/img/sensual/15.webp",
        "thumbImg": "/img/sensual/15-p.webp",
        "width": 480,
        "height": 654,
        "alt": "Cena 15",
        "note": "",
        "unavailable": false
      },
      {
        "code": "16",
        "num": "N° 16",
        "fullImg": "/img/sensual/16.webp",
        "thumbImg": "/img/sensual/16-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 16",
        "note": "versão com bralette",
        "unavailable": false
      },
      {
        "code": "17",
        "num": "N° 17",
        "fullImg": "/img/sensual/17.webp",
        "thumbImg": "/img/sensual/17-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 17",
        "note": "",
        "unavailable": false
      },
      {
        "code": "18",
        "num": "N° 18",
        "fullImg": "/img/sensual/18.webp",
        "thumbImg": "/img/sensual/18-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 18",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "19",
        "num": "N° 19",
        "fullImg": "/img/sensual/19.webp",
        "thumbImg": "/img/sensual/19-p.webp",
        "width": 480,
        "height": 590,
        "alt": "Cena 19",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "20",
        "num": "N° 20",
        "fullImg": "/img/sensual/20.webp",
        "thumbImg": "/img/sensual/20-p.webp",
        "width": 480,
        "height": 678,
        "alt": "Cena 20",
        "note": "preto &amp; branco · versão com bandeau",
        "unavailable": false
      },
      {
        "code": "21",
        "num": "N° 21",
        "fullImg": "/img/sensual/21.webp",
        "thumbImg": "/img/sensual/21-p.webp",
        "width": 480,
        "height": 721,
        "alt": "Cena 21",
        "note": "",
        "unavailable": false
      },
      {
        "code": "22",
        "num": "N° 22",
        "fullImg": "/img/sensual/22.webp",
        "thumbImg": "/img/sensual/22-p.webp",
        "width": 480,
        "height": 563,
        "alt": "Cena 22",
        "note": "",
        "unavailable": false
      },
      {
        "code": "23",
        "num": "N° 23",
        "fullImg": "/img/sensual/23.webp",
        "thumbImg": "/img/sensual/23-p.webp",
        "width": 480,
        "height": 574,
        "alt": "Cena 23",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "24",
        "num": "N° 24",
        "fullImg": "/img/sensual/24.webp",
        "thumbImg": "/img/sensual/24-p.webp",
        "width": 347,
        "height": 519,
        "alt": "Cena 24",
        "note": "",
        "unavailable": false
      },
      {
        "code": "25",
        "num": "N° 25",
        "fullImg": "/img/sensual/25.webp",
        "thumbImg": "/img/sensual/25-p.webp",
        "width": 480,
        "height": 693,
        "alt": "Cena 25",
        "note": "",
        "unavailable": false
      },
      {
        "code": "26",
        "num": "N° 26",
        "fullImg": "/img/sensual/26.webp",
        "thumbImg": "/img/sensual/26-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 26",
        "note": "",
        "unavailable": false
      },
      {
        "code": "27",
        "num": "N° 27",
        "fullImg": "/img/sensual/27.webp",
        "thumbImg": "/img/sensual/27-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 27",
        "note": "versão com body de renda",
        "unavailable": false
      },
      {
        "code": "28",
        "num": "N° 28",
        "fullImg": "/img/sensual/28.webp",
        "thumbImg": "/img/sensual/28-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 28",
        "note": "preto &amp; branco · versão com calcinha",
        "unavailable": false
      },
      {
        "code": "29",
        "num": "N° 29",
        "fullImg": "/img/sensual/29.webp",
        "thumbImg": "/img/sensual/29-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 29",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "30",
        "num": "N° 30",
        "fullImg": "/img/sensual/30.webp",
        "thumbImg": "/img/sensual/30-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 30",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "31",
        "num": "N° 31",
        "fullImg": "/img/sensual/31.webp",
        "thumbImg": "/img/sensual/31-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 31",
        "note": "versão com forro",
        "unavailable": false
      },
      {
        "code": "32",
        "num": "N° 32",
        "fullImg": "/img/sensual/32.webp",
        "thumbImg": "/img/sensual/32-p.webp",
        "width": 480,
        "height": 853,
        "alt": "Cena 32",
        "note": "",
        "unavailable": false
      },
      {
        "code": "33",
        "num": "N° 33",
        "fullImg": "/img/sensual/33.webp",
        "thumbImg": "/img/sensual/33-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 33",
        "note": "versão com forro",
        "unavailable": false
      },
      {
        "code": "34",
        "num": "N° 34",
        "fullImg": "/img/sensual/34.webp",
        "thumbImg": "/img/sensual/34-p.webp",
        "width": 480,
        "height": 617,
        "alt": "Cena 34",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "35",
        "num": "N° 35",
        "fullImg": "/img/sensual/35.webp",
        "thumbImg": "/img/sensual/35-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 35",
        "note": "",
        "unavailable": false
      },
      {
        "code": "36",
        "num": "N° 36",
        "fullImg": "/img/sensual/36.webp",
        "thumbImg": "/img/sensual/36-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 36",
        "note": "versão com body",
        "unavailable": false
      },
      {
        "code": "37",
        "num": "N° 37",
        "fullImg": "/img/sensual/37.webp",
        "thumbImg": "/img/sensual/37-p.webp",
        "width": 480,
        "height": 639,
        "alt": "Cena 37",
        "note": "",
        "unavailable": false
      },
      {
        "code": "38",
        "num": "N° 38",
        "fullImg": "/img/sensual/38.webp",
        "thumbImg": "/img/sensual/38-p.webp",
        "width": 480,
        "height": 658,
        "alt": "Cena 38",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "39",
        "num": "N° 39",
        "fullImg": "/img/sensual/39.webp",
        "thumbImg": "/img/sensual/39-p.webp",
        "width": 480,
        "height": 594,
        "alt": "Cena 39",
        "note": "",
        "unavailable": false
      },
      {
        "code": "40",
        "num": "N° 40",
        "fullImg": "/img/sensual/40.webp",
        "thumbImg": "/img/sensual/40-p.webp",
        "width": 480,
        "height": 600,
        "alt": "Cena 40",
        "note": "",
        "unavailable": false
      },
      {
        "code": "41",
        "num": "N° 41",
        "fullImg": "/img/sensual/41.webp",
        "thumbImg": "/img/sensual/41-p.webp",
        "width": 480,
        "height": 640,
        "alt": "Cena 41",
        "note": "",
        "unavailable": false
      },
      {
        "code": "42",
        "num": "N° 42",
        "fullImg": "/img/sensual/42.webp",
        "thumbImg": "/img/sensual/42-p.webp",
        "width": 480,
        "height": 704,
        "alt": "Cena 42",
        "note": "preto &amp; branco",
        "unavailable": false
      },
      {
        "code": "43",
        "num": "N° 43",
        "fullImg": "/img/sensual/43.webp",
        "thumbImg": "/img/sensual/43-p.webp",
        "width": 480,
        "height": 723,
        "alt": "Cena 43",
        "note": "",
        "unavailable": false
      },
      {
        "code": "44",
        "num": "N° 44",
        "fullImg": "/img/sensual/44.webp",
        "thumbImg": "/img/sensual/44-p.webp",
        "width": 480,
        "height": 562,
        "alt": "Cena 44",
        "note": "versão com body por baixo",
        "unavailable": false
      },
      {
        "code": "45",
        "num": "N° 45",
        "fullImg": "/img/sensual/45.webp",
        "thumbImg": "/img/sensual/45-p.webp",
        "width": 480,
        "height": 872,
        "alt": "Cena 45",
        "note": "versão com bralette",
        "unavailable": false
      },
      {
        "code": "46",
        "num": "N° 46",
        "fullImg": "/img/sensual/46.webp",
        "thumbImg": "/img/sensual/46-p.webp",
        "width": 480,
        "height": 852,
        "alt": "Cena 46",
        "note": "",
        "unavailable": false
      },
      {
        "code": "47",
        "num": "N° 47",
        "fullImg": "/img/sensual/47.webp",
        "thumbImg": "/img/sensual/47-p.webp",
        "width": 480,
        "height": 663,
        "alt": "Cena 47",
        "note": "",
        "unavailable": false
      },
      {
        "code": "48",
        "num": "N° 48",
        "fullImg": "/img/sensual/48.webp",
        "thumbImg": "/img/sensual/48-p.webp",
        "width": 480,
        "height": 721,
        "alt": "Cena 48",
        "note": "",
        "unavailable": false
      },
      {
        "code": "49",
        "num": "N° 49",
        "fullImg": "/img/sensual/49.webp",
        "thumbImg": "/img/sensual/49-p.webp",
        "width": 480,
        "height": 720,
        "alt": "Cena 49",
        "note": "preto &amp; branco",
        "unavailable": false
      }
    ]
  }
};
