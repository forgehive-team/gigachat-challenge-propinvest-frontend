import type { QuestResult } from '@/types'
import { instance } from '@/api'

export const submitQuest = async (data: QuestResult): Promise<void> => {
  await instance.post('/form/submit', data)
}
