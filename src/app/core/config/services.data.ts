import { MEDIA } from './media';

export type ServiceKey = 'construction' | 'welding' | 'logistics' | 'naval';

export interface ServiceDef {
  key: ServiceKey;
  /** fragmento usado em /servicos#<anchor> */
  anchor: string;
  image: string;
}

export const SERVICES: ServiceDef[] = [
  { key: 'construction', anchor: 'construcao', image: MEDIA.construction },
  { key: 'welding', anchor: 'soldadura', image: MEDIA.gallery[5] },
  { key: 'logistics', anchor: 'logistica', image: MEDIA.logistics },
  { key: 'naval', anchor: 'manutencao-naval', image: MEDIA.gallery[2] },
];

export const CONTACT = {
  email: 'geral@drilharob.ao',
  phones: ['+244 932 096 219', '+244 922 360 776'],
  whatsapp: 'https://wa.me/244922360776',
  facebook: 'https://www.facebook.com/share/1a3SjQ5RLq/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/in/drilha-rob-lda-165397369',
  address: 'Estrada Direita do Cacuaco, Bairro Petrangol, Rua da Socola',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Estrada Direita do Cacuaco, Bairro Petrangol, Rua da Socola, Luanda'),
};
