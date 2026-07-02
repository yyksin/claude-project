export const brand = {
  name: '알뜰창고',
  tagline: '더 크게 사서, 더 크게 아끼다',
  description:
    '연회비 멤버십으로 대용량 생필품과 식품을 시중가보다 합리적으로 만나는 창고형 할인마트입니다.',
  instagram: 'https://instagram.com/alttl.warehouse',
  email: 'membership@alttlchanggo.example',
  phone: '1588-0000',
  address: '경기도 고양시 알뜰로 88',
  hours: '매일 09:00 - 22:00 (매월 둘째·넷째 주 수요일 휴무)',
}

export const features = [
  {
    icon: '📦',
    title: '대용량 패키지',
    description: '가정용부터 사업자용까지, 필요한 만큼 넉넉하게 담아가는 대용량 구성.',
  },
  {
    icon: '🏷️',
    title: '회원 전용 특가',
    description: '멤버십 회원에게만 열리는 매주 갱신되는 단독 할인 상품.',
  },
  {
    icon: '🚚',
    title: '당일 픽업 · 배송',
    description: '매장 픽업은 무료, 5만원 이상 구매 시 당일 배송을 지원합니다.',
  },
  {
    icon: '↩️',
    title: '무조건 환불 보장',
    description: '이유를 묻지 않는 100% 환불 정책으로 안심하고 구매하세요.',
  },
]

export type MembershipPlan = {
  name: string
  price: string
  period: string
  perks: string[]
  highlighted?: boolean
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: '베이직 멤버십',
    price: '35,000원',
    period: '연 회원권',
    perks: ['전 매장 이용 가능', '주간 특가 알림', '무료 매장 픽업'],
  },
  {
    name: '프리미엄 멤버십',
    price: '70,000원',
    period: '연 회원권',
    perks: ['베이직 혜택 모두 포함', '구매 금액 2% 캐시백', '당일 배송 무료', '전용 상담 라인'],
    highlighted: true,
  },
]

export type Product = {
  name: string
  description: string
  price: string
  tag: string
}

export const products: Product[] = [
  {
    name: '점보 키친타월 30롤',
    description: '3겹 엠보싱 키친타월 대용량 세트. 한 번 사면 반년은 든든합니다.',
    price: '24,900원',
    tag: '생필품',
  },
  {
    name: '엑스트라버진 올리브오일 3L',
    description: '콜드프레스 방식으로 짜낸 대용량 올리브오일 캔.',
    price: '32,900원',
    tag: '식품',
  },
  {
    name: '견과류 트레일믹스 2kg',
    description: '아몬드, 캐슈넛, 크랜베리를 섞은 대용량 견과 간식.',
    price: '19,900원',
    tag: '베스트',
  },
  {
    name: '고농축 세탁세제 5L',
    description: '한 번에 최대 160회 사용 가능한 고농축 액체 세제.',
    price: '18,500원',
    tag: '생필품',
  },
  {
    name: '냉동 만두 대용량 3kg',
    description: '한입 크기 왕만두를 소분 포장한 대용량 냉동 세트.',
    price: '21,900원',
    tag: '베스트',
  },
  {
    name: '멀티비타민 365정',
    description: '하루 한 알, 1년치 영양을 챙기는 종합 비타민.',
    price: '27,900원',
    tag: '건강',
  },
]

export type Testimonial = {
  name: string
  comment: string
}

export const testimonials: Testimonial[] = [
  {
    name: '정OO 님',
    comment: '4인 가족 생필품을 한 번에 쟁여두니 장보는 횟수가 확 줄었어요.',
  },
  {
    name: '최OO 님',
    comment: '프리미엄 멤버십 캐시백만으로 연회비가 몇 달 만에 빠지네요.',
  },
  {
    name: '한OO 님',
    comment: '환불 정책이 확실해서 대용량으로 구매해도 부담이 없어요.',
  },
]
