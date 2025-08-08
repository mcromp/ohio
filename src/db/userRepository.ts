import Database from 'better-sqlite3'
import { User, UserRepository } from '../user'

const sql = {
  init: `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    age INTEGER,
    home_town TEXT
  )
  `,
  selectAll: `
  SELECT * FROM users
  ORDER BY id DESC
  `,
  insert: `
  INSERT INTO users (name, title, age, home_town)
  VALUES (@name, @title, @age, @home_town)
  `,
}

const init = (): UserRepository => {
  const db = new Database('db.sqlite3')
  db.exec(sql.init)

  return {
    getAll: (): User[] => db.prepare(sql.selectAll).all() as User[],
    addOne: (user: User): User | Error => {
      const { name, age, title, homeTown: home_town } = user
      try {
        db.prepare(sql.insert).run({ name, age, title, home_town })
        return user
      } catch (e) {
        if (e instanceof Error) return e
        return new Error('Failure saving to database')
      }
    },
  }
}

export const userRepository = init()
