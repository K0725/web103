const renderCourse = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/courses')
    console.log(response);
    const data = await response.json()
    console.log(data);

    const courseContent = document.getElementById('course-content')
  
    let course 
    course = data.find(course => course.id === requestedID)
  
    if (course) {
      document.getElementById('image').src = course.image
      document.getElementById('name').textContent = course.name
      document.getElementById('description').textContent = course.description
      document.getElementById('difficulty').textContent = course.difficulty
      document.title = `CS - ${course.name}`
    }
    else {
      // message created for h2 
      const message = document.createElement('h2')
      message.textContent = 'No course Available '
      courseContent.appendChild(message)   
    }
    }
  
  renderCourse()
   