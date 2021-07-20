const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const skills = document.querySelector('#skills')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent = document.querySelector('#skills-content')
const projectsContent = document.querySelector('#projects-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    background: '#00aa00',
    width: '400px',
    height: '700px',
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#7777')
    },
  })
})

skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'Skills',
    width: '400px',
    height: '710px',
    top: 150,
    bottom: 50,
    left: 200,
    right: 250,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#7777')
    },
  })
})

projects.addEventListener('click', () => {
  const projectsBox = new WinBox({
    title: 'Projects',
    width: '400px',
    height: '710px',
    top: 50,
    bottom: 50,
    left: 1450,
    right: 250,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#7777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '300px',
    top: 300,
    bottom: 50,
    left: 1200,
    right: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#7777')
    },
  })
})
