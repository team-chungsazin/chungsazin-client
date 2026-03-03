export type Work = {
  id: string
  title: string
  teaser: string
  cover: {
    src: string
    alt: string
  }
  poem: {
    stanzas: Array<{
      id: string
      lines: string[]
    }>
  }
}

export const works: Work[] = [
  {
    id: '101',
    title: '첫 장',
    teaser: '조용히 시작하는 인사.',
    cover: {
      src: '/images/cover-01.svg',
      alt: '추상 표지 이미지 01',
    },
    poem: {
      stanzas: [
        {
          id: '101-1',
          lines: ['문장을 다듬기 전에', '숨을 한 번 고른다', '오늘의 여백을 펼친다'],
        },
        {
          id: '101-2',
          lines: ['읽는 속도가', '너의 하루와 닮아가길', '바란다'],
        },
      ],
    },
  },
  {
    id: '102',
    title: '빛의 목록',
    teaser: '빛과 그림자를 천천히 세어보기.',
    cover: {
      src: '/images/cover-02.svg',
      alt: '추상 표지 이미지 02',
    },
    poem: {
      stanzas: [
        {
          id: '102-1',
          lines: ['창가에 남은', '작은 먼지까지', '빛은 이름을 준다'],
        },
        {
          id: '102-2',
          lines: ['나는 그 이름들을', '주머니에 넣고', '천천히 걸었다'],
        },
      ],
    },
  },
  {
    id: '103',
    title: '비가 오면',
    teaser: '젖은 문장 위로 그림이 번지는 순간.',
    cover: {
      src: '/images/cover-03.svg',
      alt: '추상 표지 이미지 03',
    },
    poem: {
      stanzas: [
        {
          id: '103-1',
          lines: ['비가 오면', '색이 먼저 소리를 낸다'],
        },
        {
          id: '103-2',
          lines: ['그 다음에야', '단어가 젖은 발로', '문 안으로 들어온다'],
        },
      ],
    },
  },
  {
    id: '104',
    title: '손끝의 지도',
    teaser: '페이지를 넘기는 손의 감각.',
    cover: {
      src: '/images/cover-01.svg',
      alt: '추상 표지 이미지 01',
    },
    poem: {
      stanzas: [
        {
          id: '104-1',
          lines: ['손끝으로', '지도처럼 펼쳐지는', '문장들의 골목'],
        },
        {
          id: '104-2',
          lines: ['길을 잃어도', '다시 돌아올 수 있는', '작은 표시'],
        },
      ],
    },
  },
]

export const workById = new Map(works.map((work) => [work.id, work]))
