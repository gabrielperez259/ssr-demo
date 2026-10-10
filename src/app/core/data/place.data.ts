
import { Place } from '../models/place.model';

export const PLACES_MOCK: Place[] = [
  {
    id: 1,
    slug: 'parque-portugal-lagoa-do-taquaral',
    name: 'Parque Portugal (Lagoa do Taquaral)',
    description:
      'Um dos espaços de lazer mais conhecidos de Campinas, com lagoa, áreas verdes, pistas para caminhada e atrações para toda a família.',
    category: 'PARK',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/37/Parque_Portugal_%2813%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    address: 'Av. Dr. Heitor Penteado, 1671 - Parque Taquaral',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Lagoa',
      'Caminhada e ciclismo',
      'Áreas verdes',
      'Passeios em família',
    ],
    metaTitle: 'Parque Portugal: o que fazer na Lagoa do Taquaral',
    metaDescription:
      'Conheça o Parque Portugal, a famosa Lagoa do Taquaral em Campinas, e descubra suas atrações, áreas verdes e opções de lazer.',
  },
  {
    id: 2,
    slug: 'bosque-dos-jequitibas',
    name: 'Bosque dos Jequitibás',
    description:
      'Um refúgio verde na região central da cidade, com vegetação nativa, espaços para passear e atrações culturais e educativas.',
    category: 'PARK',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/37/5d/48/bem-cuidado.jpg?w=1200&h=-1&s=1',
    address: 'Rua Coronel Quirino, 2 - Bosque',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Natureza',
      'Trilhas e caminhos',
      'Museu de História Natural',
      'Passeios em família',
    ],
    metaTitle: 'Bosque dos Jequitibás em Campinas: guia de visita',
    metaDescription:
      'Descubra o Bosque dos Jequitibás, um espaço de natureza, lazer e cultura no coração de Campinas.',
  },
  {
    id: 3,
    slug: 'torre-do-castelo',
    name: 'Torre do Castelo',
    description:
      'Um dos cartões-postais de Campinas, conhecido por seu mirante e pela vista panorâmica de diferentes regiões da cidade.',
    category: 'TOURIST_ATTRACTION',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Torre_do_Castelo_-_Campinas.JPG?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    address: 'Praça Vinte e Três de Outubro - Jardim Chapadão',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Vista panorâmica',
      'Arquitetura histórica',
      'Fotografia',
      'Ponto turístico',
    ],
    metaTitle: 'Torre do Castelo: conheça um cartão-postal de Campinas',
    metaDescription:
      'Saiba mais sobre a Torre do Castelo, um dos pontos turísticos tradicionais de Campinas, e planeje sua visita.',
  },
  {
    id: 4,
    slug: 'mercado-municipal-de-campinas',
    name: 'Mercado Municipal de Campinas',
    description:
      'Um mercado tradicional que reúne bancas de alimentos, produtos regionais, especiarias e opções para conhecer os sabores locais.',
    category: 'TOURIST_ATTRACTION',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Atras_do_Mercad%C3%A3o_-_panoramio.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    address: 'Rua Benjamin Constant, s/n - Centro',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 1,
    highlights: [
      'Gastronomia',
      'Produtos regionais',
      'Compras',
      'Arquitetura tradicional',
    ],
    metaTitle: 'Mercado Municipal de Campinas: sabores e tradição',
    metaDescription:
      'Explore o Mercado Municipal de Campinas, conheça sua tradição e descubra opções de gastronomia e produtos regionais.',
  },
  {
    id: 5,
    slug: 'catedral-metropolitana-de-campinas',
    name: 'Catedral Metropolitana de Campinas',
    description:
      'Uma importante construção histórica e religiosa da cidade, conhecida por sua arquitetura e por sua presença marcante no centro.',
    category: 'TOURIST_ATTRACTION',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlgeqlcnY1fjq0_Ta1FdbXgPRp-XEip3E-9pn_njo9w&s=10',
    address: 'Praça José Bonifácio - Centro',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Arquitetura histórica',
      'Patrimônio cultural',
      'Centro histórico',
      'Fotografia',
    ],
    metaTitle: 'Catedral Metropolitana de Campinas: história e arquitetura',
    metaDescription:
      'Conheça a Catedral Metropolitana de Campinas e descubra um dos marcos históricos e arquitetônicos do centro da cidade.',
  },
  {
    id: 6,
    slug: 'estacao-cultura',
    name: 'Estação Cultura',
    description:
      'Antiga estação ferroviária transformada em espaço cultural, com arquitetura histórica e programação de eventos ao longo do ano.',
    category: 'TOURIST_ATTRACTION',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Esta%C3%A7%C3%A3o_ferrovi%C3%A1ria_-_centro_cultural_de_Campinas_001.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    address: 'Praça Marechal Floriano, s/n - Centro',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte a programação e os horários oficiais.',
    priceLevel: 0,
    highlights: [
      'Patrimônio ferroviário',
      'Eventos culturais',
      'Arquitetura histórica',
      'Fotografia',
    ],
    metaTitle: 'Estação Cultura de Campinas: história e eventos',
    metaDescription:
      'Visite a Estação Cultura de Campinas, um espaço que conecta a história ferroviária da cidade à sua programação cultural.',
  },
  {
    id: 7,
    slug: 'pedreira-do-chapadao',
    name: 'Pedreira do Chapadão',
    description:
      'Um parque urbano com áreas abertas, paisagens interessantes e espaços para caminhar, descansar e aproveitar o ar livre.',
    category: 'PARK',
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/68/35/32/pedreira-do-chapadao.jpg?w=1200&h=1200&s=1',
    address: 'Praça Ulysses Guimarães - Jardim Chapadão',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Paisagens',
      'Caminhada',
      'Áreas abertas',
      'Fotografia',
    ],
    metaTitle: 'Pedreira do Chapadão: natureza e lazer em Campinas',
    metaDescription:
      'Conheça a Pedreira do Chapadão, um espaço de lazer ao ar livre em Campinas, ideal para caminhadas e momentos de descanso.',
  },
  {
    id: 8,
    slug: 'parque-ecologico-de-campinas',
    name: 'Parque Ecológico Monsenhor Emílio José Salim',
    description:
      'Uma ampla área verde com paisagens naturais, caminhos para caminhadas e espaços para aproveitar a natureza longe do ritmo urbano.',
    category: 'PARK',
    imageUrl:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Parque_Ecol%C3%B3gico_Campinas_%281%29.jpg/1280px-Parque_Ecol%C3%B3gico_Campinas_%281%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    address: 'Rodovia Heitor Penteado, km 3,2 - Campinas',
    city: 'Campinas',
    state: 'SP',
    openingHours: 'Consulte os horários oficiais antes da visita.',
    priceLevel: 0,
    highlights: [
      'Áreas verdes',
      'Caminhadas',
      'Contato com a natureza',
      'Fotografia',
    ],
    metaTitle: 'Parque Ecológico de Campinas: guia de visita',
    metaDescription:
      'Descubra o Parque Ecológico Monsenhor Emílio José Salim, uma opção de lazer ao ar livre em Campinas.',
  },
];
