import express from 'express'
import path from 'path'

/*
The path module provides utilities for working with file and directory paths. 
It can be used to manipulate file paths, normalize them, join them together, 
and extract information such as the directory name, file name, and file extension.v
*/

import { fileURLToPath } from 'url'
/* converts a file URL to a file path */
import courseData from '../data/course.js'
/* Convert the import.meta.url property to a file path and store the result in a variable called __filename */
const __filename = fileURLToPath(import.meta.url)
/* the directory name of the current module file. */
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(courseData)
})

router.get('/:courseId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/course.html'))
})

export default router