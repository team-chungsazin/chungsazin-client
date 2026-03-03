export interface ProjectSection {
  heading?: string
  body?: string
  media?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  oneLine: string
  tileImage: string
  heroImages?: string[]
  qna?: { question: string; answer: string }[]
}

export interface AboutData {
  project: {
    title: string
    heroMedia: string
    oneLine: string
    sections: ProjectSection[]
  }
  members: TeamMember[]
}

export const aboutData: AboutData = {
  project: {
    title: '프로젝트 소개',
    heroMedia:
      'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1200',
    oneLine:
      '청사진(ChungSazin)은 시와 그림을 한 편의 정제된 작품처럼 읽는 웹 시집 경험을 만듭니다.',
    sections: [
      {
        heading: '지향하는 가치',
        body: '우리는 디지털 환경에서도 종이가 주는 따뜻한 질감과 여백의 리듬을 느낄 수 있기를 바랍니다. 먼저 읽히고 깊게 남는 타이포그래피를 지향하며, 문장 사이의 간격이 만드는 고유한 리듬을 존중합니다.',
        media:
          'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
      },
      {
        heading: '우리의 철학',
        body: '누구나 어떤 환경에서도 편안하게 시를 감상할 수 있어야 한다는 믿음 아래, 웹 접근성과 가독성을 최우선으로 고려합니다. 청사진은 단순한 아카이브를 넘어, 시가 가진 본연의 힘을 전달하는 매개체가 되고자 합니다.',
        media:
          'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=800',
      },
      {
        heading: '기술적 지향점',
        body: '최신 웹 기술을 활용하여 안정적이고 매끄러운 사용자 경험을 제공합니다. vanilla-extract와 React를 기반으로 견고한 디자인 시스템을 구축하여 일관된 시각적 언어를 유지합니다.',
        media:
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  members: [
    {
      id: 'member1',
      name: '김청사',
      role: '기획 & 디자인',
      oneLine: '시각적 언어로 감정을 전달하는 디자이너입니다.',
      tileImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=400',
      heroImages: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      ],
      qna: [
        {
          question: '청사진 프로젝트를 시작하게 된 계기는 무엇인가요?',
          answer:
            '디지털 기기로 글을 읽는 경험이 파편화되어 있다고 느꼈습니다. 종이책을 넘길 때의 몰입감을 웹에서도 구현해보고 싶었습니다.',
        },
        {
          question: '가장 중요하게 생각하는 디자인 원칙은?',
          answer:
            '의도된 비어있음, 즉 여백의 미입니다. 모든 것을 채우기보다 독자의 생각이 머물 자리를 남겨두는 것을 중요하게 생각합니다.',
        },
      ],
    },
    {
      id: 'member2',
      name: '이진수',
      role: '개발',
      oneLine: '코드와 문학의 접점을 탐구하는 개발자입니다.',
      tileImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
      heroImages: [
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
      ],
      qna: [
        {
          question: '기술적으로 가장 도전적이었던 부분은?',
          answer:
            '시의 호흡을 살리기 위해 타이포그래피의 세세한 조절과 유연한 레이아웃을 vanilla-extract로 구현하는 과정이 흥미로웠습니다.',
        },
        {
          question: '개발자로서 바라보는 문학의 매력은?',
          answer:
            '가장 적은 수의 문자로 가장 큰 세계를 만들어낸다는 점이, 가장 효율적인 코드로 문제를 해결하는 것과 닮아 있다고 생각합니다.',
        },
      ],
    },
    {
      id: 'member3',
      name: '박진영',
      role: '개발',
      oneLine: '사용자의 편안한 경험을 위해 고민합니다.',
      tileImage:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=500',
      heroImages: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500',
      ],
      qna: [
        {
          question: '가장 보람찼던 순간은?',
          answer:
            '우리가 만든 페이지에서 시를 읽는 것이 편안하다는 피드백을 받았을 때 개발자로서 가장 큰 보람을 느꼈습니다.',
        },
        {
          question: '앞으로의 목표는?',
          answer:
            '더 많은 사람이 디지털 환경에서도 문학의 즐거움을 온전히 누릴 수 있도록 접근성 높은 웹을 만드는 것입니다.',
        },
      ],
    },
  ],
}
