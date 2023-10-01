import express from 'express'
import path from 'path'

/*
The path module provides utilities for working with file and directory paths. 
It can be used to manipulate file paths, normalize them, join them together, 
and extract information such as the directory name, file name, and file extension.v
*/

import { fileURLToPath } from 'url'

import courseData from '../data/course.js'

import courseController from '../Controllers/courses.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', courseController.getCourses)

router.get('/:courseId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/course.html'))
})

export default router