export const profile = {
  name: '홍길동',
  role: 'Frontend Developer',
  tagline: '사용자 경험을 고민하는 프론트엔드 개발자입니다.',
  github: 'https://github.com/yyksin',
  email: 'yyksin7@gmail.com',
  about:
    '웹 프론트엔드를 중심으로 React, TypeScript를 활용한 서비스 개발 경험을 쌓아가고 있습니다. ' +
    '깔끔한 코드와 좋은 사용자 경험을 만드는 것을 좋아하며, 새로운 기술을 배우고 적용하는 것을 즐깁니다. ' +
    '이 사이트의 내용은 예시(placeholder)이니 src/data.ts 파일에서 자유롭게 수정해 주세요.',
}

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
  'HTML / CSS',
  'Node.js',
  'Git / GitHub',
  'REST API',
]

export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: '프로젝트 A',
    description:
      '간단한 프로젝트 설명을 이곳에 적어주세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 소개하면 좋습니다.',
    tags: ['React', 'TypeScript'],
    link: 'https://github.com/yyksin',
  },
  {
    title: '프로젝트 B',
    description:
      '두 번째 프로젝트 예시입니다. 주요 기능이나 기여한 부분을 강조해서 작성해 보세요.',
    tags: ['Vite', 'REST API'],
    link: 'https://github.com/yyksin',
  },
  {
    title: '프로젝트 C',
    description:
      '세 번째 프로젝트 예시입니다. 링크는 실제 배포된 사이트나 GitHub 저장소로 교체해 주세요.',
    tags: ['Node.js', 'CSS'],
    link: 'https://github.com/yyksin',
  },
]
