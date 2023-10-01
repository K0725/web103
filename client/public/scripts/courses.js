const courseRender = async () => {
    const response = await fetch('/courses')
    const data = await response.json()
  
    const mainContent = document.getElementById('main-content')

    if (data) {
      data.map(course => {
        const card = document.createElement('div')
    
        card.classList.add('card')
  
        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
  
        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')
  
        topContainer.style.backgroundImage = `url(${course.image})`
  
        const name = document.createElement('h3')
        name.textContent = course.name
        bottomContainer.appendChild(name)
  
        const difficulty = document.createElement('P')
        difficulty.textContent = "difficulty: " + course.difficulty
        bottomContainer.appendChild(difficulty)
  
        const link = document.createElement('a')
        link.textContent = 'Read More >'
        link.setAttribute('role', 'button')
        link.href = `/courses/${course.id}`
        bottomContainer.appendChild(link)
  
        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
  
        mainContent.appendChild(card)
      })
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No courses Available '
      mainContent.appendChild(message)
    }
  }
  
  const requestedUrl = window.location.href.split('/').pop()
 
  // if 
  if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    courseRender()[[[]]]
  }