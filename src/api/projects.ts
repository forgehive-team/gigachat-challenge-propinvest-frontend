import { instance } from '@/api'
import type { Project, ProjectPruned } from '@/types'

export const getProjects = async (): Promise<ProjectPruned[]> => {
  return instance.get('/projects').then(({ data }) => data)
}
export const getProjectById = async (id: string): Promise<Project> => {
  return instance.get(`/projects/${id}`).then(({ data }) => data)
}
