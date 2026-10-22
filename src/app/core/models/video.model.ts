export type Lang = 'pt' | 'en' | 'fr';

export type LocalizedText = Record<Lang, string>;

export interface VideoItem {
  id: number;
  titulo: LocalizedText;
  descricao: LocalizedText;
  thumbnailUrl: string;
  embedUrl: string;
  originalUrl: string;
  plataforma: 'facebook' | 'tiktok';
}
