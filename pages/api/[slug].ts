// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import pool from '../../lib/database';

interface Post {
    id: string
  title: string
  content: string
  author: string
  date: Date
  }

  export const getPostHandler = async (slug: string): Promise<Post | null> => {
    
    console.log({slug:slug})

    try {
      const { rows } = await pool.query(
        'SELECT * FROM blogposts WHERE slug = $1',
        [slug]
      )
  

      console.log({rows:rows})
      if (rows.length === 0) {
        console.log('no rows')
        return null
      }
  
      return {
        id: rows[0].id,
        title: rows[0].title,
        content: rows[0].content,
        author: rows[0].author,
        date: rows[0].date,
      }
    } catch (err) {
      console.error('Error retrieving post:', err)
      return null
    }
  }
  
  export default getPostHandler;