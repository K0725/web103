//Performing CRUD operations 
import { pool } from '../config/database.js'

const getCourses = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM courses ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

export default {
  getCourses
}