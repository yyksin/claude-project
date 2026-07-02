export const brand = {
  name: '몽글베이커리',
  tagline: '매일 아침, 갓 구운 행복을 굽습니다',
  description:
    '국내산 재료와 정직한 레시피로 매일 새벽 빵을 굽는 작은 동네 베이커리입니다. 인공 첨가물 없이, 눈으로 보이는 재료만 사용합니다.',
  instagram: 'https://instagram.com/monggeul.bakery',
  email: 'hello@monggeulbakery.example',
  phone: '02-1234-5678',
  address: '서울시 마포구 몽글길 12',
  hours: '매일 08:00 - 20:00 (매주 월요일 휴무)',
}

export const features = [
  {
    icon: '🌾',
    title: '국내산 재료',
    description: '밀가루, 버터, 우유까지 눈으로 확인한 국내산 재료만 사용합니다.',
  },
  {
    icon: '🌙',
    title: '매일 새벽 굽는 빵',
    description: '전날 재고를 남기지 않고, 매일 새벽 그날 판매할 만큼만 굽습니다.',
  },
  {
    icon: '🚫',
    title: '무첨가 레시피',
    description: '인공 방부제와 향료 없이 담백한 본연의 맛을 지향합니다.',
  },
  {
    icon: '📦',
    title: '포장 & 픽업',
    description: '전화 또는 인스타그램 DM으로 미리 주문하면 대기 없이 픽업 가능합니다.',
  },
]

export type MenuItem = {
  name: string
  description: string
  price: string
  tag: string
}

export const menu: MenuItem[] = [
  {
    name: '크림치즈 스콘',
    description: '겉은 바삭하고 속은 촉촉한 정통 스콘 위에 크림치즈를 듬뿍 올렸습니다.',
    price: '4,500원',
    tag: '베스트',
  },
  {
    name: '얼그레이 파운드케이크',
    description: '얼그레이 찻잎을 우려낸 반죽으로 은은한 향을 살린 촉촉한 파운드케이크.',
    price: '5,800원',
    tag: '시그니처',
  },
  {
    name: '버터 소금빵',
    description: '겹겹이 쌓은 반죽에 발효 버터를 넣어 짭짤하고 고소하게 구웠습니다.',
    price: '3,800원',
    tag: '베스트',
  },
  {
    name: '티라미수 크로플',
    description: '바삭한 크로플 위에 마스카포네 크림과 코코아 파우더를 올린 디저트.',
    price: '6,500원',
    tag: 'NEW',
  },
  {
    name: '무화과 갈레트',
    description: '제철 무화과를 듬뿍 올려 자유롭게 접어 구운 프렌치 타르트.',
    price: '7,200원',
    tag: '시즌 한정',
  },
  {
    name: '딸기 생크림 롤케이크',
    description: '부드러운 시트에 신선한 생크림과 딸기를 가득 채운 롤케이크.',
    price: '28,000원',
    tag: 'NEW',
  },
]

export type Testimonial = {
  name: string
  comment: string
}

export const testimonials: Testimonial[] = [
  {
    name: '김OO 님',
    comment: '소금빵이 정말 인생 소금빵이에요. 매주 사러 갑니다.',
  },
  {
    name: '이OO 님',
    comment: '재료가 좋다는 게 한입 먹으면 느껴져요. 아이 간식으로도 안심하고 사줘요.',
  },
  {
    name: '박OO 님',
    comment: '아침 일찍 가야 원하는 빵을 살 수 있을 정도로 인기가 많아요!',
  },
]
