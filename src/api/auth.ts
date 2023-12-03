import type { LoginReqData, RegisterReqData } from '@/types'

import { instance } from '@/api'

export const login = async (data: LoginReqData): Promise<void> => {
  await instance.post('/auth/login', data).then(({ data }) => {
    localStorage.setItem('token', data?.token)
    instance.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`
  })

  await getUser()
}

export const register = async (data: RegisterReqData): Promise<void> => {
  await instance.post('/auth/register', data).then(({ data }) => {
    localStorage.setItem('token', data?.token)
    instance.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`
  })

  await getUser()
}

export const getUser = async (): Promise<void> => {
  await instance.get('/auth/user')
}
