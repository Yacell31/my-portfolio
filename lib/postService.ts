import pool from "./database"
export async function getPostBySlug(id: string) {
    const client = await pool.connect()
  
    try {
      const result = await client.query(' SELECT id, title, content, author, date, CAST(id AS TEXT) as slug FROM blogposts WHERE id = $1', [id])
      const post = result.rows[0]
      return post
    } finally {
      client.release()
    }
  }