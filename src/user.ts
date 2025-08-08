export type User = {
  name: string
  title: string
  age?: number
  homeTown?: string
}
export type UserRecord = User & { id: string }
export type UserRepository = {
  getAll: () => User[]
  addOne: (user: User) => User | Error
}

export const validateUser = (data: any): User | Error => {
  if (typeof data !== 'object' || data === null) return Error('Invalid payload object')
  if (!data.title) return Error('User requires `Title`')
  if (!data.name) return Error('User requires `Name`')
  return {
    name: data.name,
    title: data.title,
    age: +data.age || undefined,
    homeTown: data.homeTown || undefined,
  }
}
