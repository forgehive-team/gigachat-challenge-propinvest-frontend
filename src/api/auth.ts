import { instance } from '@/api'

export const login = async (email: string, password: string, remember: boolean): Promise<void> => {
  await instance.post('/auth/login', { email, password, remember }).then(({ data }) => {
    localStorage.setItem('token', data?.token)
    instance.defaults.headers.common['Authorization'] = `Bearer ${data?.token}`
  })

  await getUser()
}

export const getUser = async (): Promise<void> => {
  await instance.get('/user')
}
