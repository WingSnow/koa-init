import sqlite3 from 'sqlite3'
import path from 'path'

const storage = path.join(__dirname, '../secrets/db.db')

const db = new sqlite3.Database(storage, (e) => {
  if (e) throw e
})

const get = (sql: string, params: any) => {
  return new Promise<any>((resolve, reject) => {
    db.get(sql, params, (err: Error | null, result: any) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
}

const seqliteDB = {
  get,
}

export default seqliteDB
