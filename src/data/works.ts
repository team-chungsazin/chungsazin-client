export type Work = {
  id: string
  title: string
  teaser: string
}

export const works: Work[] = [
  {
    id: '101',
    title: 'First Work',
    teaser: 'A quiet opening for the reader flow.',
  },
  {
    id: '102',
    title: 'Second Work',
    teaser: 'A second sample to validate numeric id routing.',
  },
]

export const workById = new Map(works.map((work) => [work.id, work]))
