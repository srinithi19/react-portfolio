import avatar from './components/Access/avatar.jpeg'

const about = {
    photo:avatar,
    name : 'Srinithi Ravichandran',
    description:
    'A highly motivated individual with entry-level experience specializing in Front End development, Back end Development and Full Stack Development and user interface design with an additional 6 years of work experience as Sr QA Engineer and a year of experience as a web developer. With a passion for both personal growth and for software development, I attended a certification course on  Full Stack Web Development while sharpening existing skills. Ready to apply my passion for coding to a talented engineering team to develop quality solutions. ',
    resume : 'https://docs.google.com/document/d/1rCxz7rupVC1TW5ceGeMrR79qcliyvLVd/edit',
    linkedin : 'https://www.linkedin.com/in/srinithi-ravichandran-18891243/',
    github : 'https://github.com/srinithi19'

}

const projects = [
    {
        name : 'Know Your Government',
        description:'This application is to display a list of governement representatives upon entering the users address.It is build using HTML, CSS Bulma framework, Jquery, APIs request/response handling',
        sourceCode : 'https://github.com/bhaskell7901/know-your-government',
        demo : 'https://bhaskell7901.github.io/know-your-government'

    },
    {
        name : 'Expense Tracker',
        description : 
        'A gamified full stack budgeting application that lets users track their income and expense and get rewards for completing challenges and quests. It is deployed on Heroku.It is built using the technologies: HTML, CSS bulma, JS, NodeJs, ExpressJs, MySql, Sequalize ORM, Middlewares & Handlebars and deployed using Heroku .',
        sourceCode : 'https://github.com/srinithi19/Expense-Tracker',
        demo : 'https://secure-anchorage-04407.herokuapp.com/'

    },
    {
        name : 'Tech Blog',
        description : 
        'This is a full stack application which allows users to post a blog, view other users blog and comment on their posts. This app is built using HTML/CSS/JS on the front end and Nodejs/expressJs, sequelize ORM , mysql and npm packages on the back end. It is built to meet the requirements of MVC paradigm and deployed using Heroku.',
        sourceCode : 'https://github.com/srinithi19/Tech-Blog',
        demo : 'https://guarded-sea-42952.herokuapp.com/'

    },
    {
        name : 'Weather Dashboard',
        description : 
        'This application displays the weather data for any city that the user wants to view using openWeatherAPI. The user can search for any city to view the current weather and 5 day forecast. This application is built using HTML, CSS, jQuery, Serverside API call request/repsonse handling.',
        sourceCode : 'https://github.com/srinithi19/weather-dashboard',
        demo : 'https://srinithi19.github.io/weather-dashboard'

    },
    {
        name : 'Code Quiz App',
        description : 
        'This application generates quiz dynamically using HTML, CSS and Javascript.Final scores will be displayed and can be stored on local storage for viewing later.',
        sourceCode : 'https://github.com/srinithi19/Quiz-application',
        demo : 'https://srinithi19.github.io/Quiz-application/'

    },
    {
        name : 'https://github.com/srinithi19/Note-taker',
        description : 
        'This application is used for saving day to day tasks as note taker. Users can add/view/delete notes from the list of notes. This is built using HTML, CSS, JS on the front-end and nodeJs/expressJs as backend. This application is deployed using Heroku.',
        sourceCode : 'https://github.com/srinithi19/Note-taker',
        demo : 'https://serene-bastion-78075.herokuapp.com/'

    },  

]

const skills = [

  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'NodeJs',
  'Express',
  'REST API',
  'GraphQL',
  'MVC',
  'PWA',
   'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'Git',
  'MERN',
  'Heroku',

  'Figma',
  'Excalidraw',
  'linux'

]

const contact = {
    email: 'emailtonithi@gmail.com',
  }
  
  export {  about, projects, skills, contact }