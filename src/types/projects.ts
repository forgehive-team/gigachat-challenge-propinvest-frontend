export type ProjectPruned = {
  id: number
  image: string
  title: string
  description: string
}

export type Project = {
  id: number
  name: string
  description: string
  images: string[]
  coordinates: number[]
  metro?: string
  city?: string
  area?: string
  region?: string
  street?: string
}
