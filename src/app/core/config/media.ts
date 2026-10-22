/**
 * Origem dos ficheiros de média.
 *
 * Por enquanto as imagens e os logótipos são lidos directamente do site actual da Drilha.
 * Para tornar o site independente, copie os ficheiros para `src/assets/images/` e
 * altere apenas `BASE` (e, se quiser, os nomes) neste ficheiro.
 */
const BASE = 'https://www.drilharob.ao';

export const MEDIA = {
  logo: `${BASE}/dr_vemelho.png`,
  logoFull: `${BASE}/logo_vermelho.png`,
  cover: `${BASE}/capa_drilha.jpg`,
  construction: `${BASE}/img/construcao.jpg`,
  logistics: `${BASE}/img/logistica.jpg`,
  gallery: Array.from({ length: 8 }, (_, i) => `${BASE}/img/galeria/img-${i + 1}.webp`),
  partners: [
    `${BASE}/img/parceiro-1.png`,
    `${BASE}/img/parceiro-2.png`,
    `${BASE}/img/parceiro-3.png`,
    `${BASE}/img/parceiro-4.png`,
    `${BASE}/img/parceiro-5.png`,
    `${BASE}/img/parceiro-6.png`,
    `${BASE}/img/parceiro-7.jpg`,
    `${BASE}/img/parceiro-8.jpeg`,
  ],
  heroVideo: 'assets/video/hero.mp4',
  heroPoster: `${BASE}/img/galeria/img-5.webp`,
};
