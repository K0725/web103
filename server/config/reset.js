import { pool } from '../config/database.js'
import '../config/dotenv.js'
import courses from '../data/course.js'

// Creating queries for courses
const createCourseTable = async () => {
  const createTableQuery = 
  `
    DROP TABLE IF EXISTS courses;

    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      difficulty VARCHAR(255),
      image VARCHAR(255),
      description VARCHAR(255)
    )`

  try {
    await pool.query(createTableQuery)
    console.log('🎉 table created successfully')
  } catch (err) {
    console.error('⚠️ error creating table', err)
  }
}

const callCourseTable = async () => {
  await createCourseTable()

  courses.forEach(async (course) => {
    const insertQuery = {
      text: 'INSERT INTO courses (name, difficulty, image, description) VALUES ($1, $2, $3, $4)'
    }

    const values = [
      course.name,
      course.difficulty,
      course.image,
      course.description
    ]

    try {
      await pool.query(insertQuery, values)
      console.log(`✅ ${course.name} added successfully`)
    } catch (err) {
      console.error('⚠️ error inserting course', err)
    }
  })
}

callCourseTable()
