import {data} from '../scripts/content/content.js';

let paramString = window.location.href.split('?')[1].split("&");
// let queryString = new URLSearchParams(paramString);
let parameter1 = paramString[0].split("=")[1]
let parameter2 = paramString[1].split("=")[1]



 function moduleSectionUI(name, description) {
    return `

    <header style = "padding-top: 70px;">
      <h2>${name}</h2>
      <p>${description}</p>
    </header>
 `;
  }

  function lessonSectionUI(name, url) {
    return `
    <article style="padding:5px">
    <b style = "font-size:1.4em;display:block;">${name}</b>
    <video height="100%" width="100%" controls="controls" preload="metadata">
    <source src="${url}#t=1" type="video/mp4">
    Your browser does not support the video tag.
  </video></article>
  `;
  }

  function courseSectionUI(name){
    return `<a href="course.html?course=${name.replaceAll(/\s/g, '')}"><h2 style="padding: 5%;"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
    ${name} </h2> </a>`
  }

  function testSectionUI(quizName,link){
    return `<dl>
    <h2>Test your knowledge !</h2>
    <b><a class="button" target="_blank" href="${link}">${quizName}</a></b>
</dl> `;
  }




  //Gen Display

  //Set Courses
  for (let i = 0; i < data.courses.length; i++) {
    if(data.courses[i].name.replaceAll(/\s/g, '')==parameter1){
      document.getElementById('course-title').insertAdjacentHTML('afterbegin', courseSectionUI(data.courses[i].name)) //Course Name
        
        for (let j = 0; j < data.courses[i].modules.length; j++) {
            if(data.courses[i].modules[j].name.replaceAll(/\s/g, '')==parameter2){
              document.getElementById('module-title').insertAdjacentHTML('afterbegin', moduleSectionUI(data.courses[i].modules[j].name,data.courses[i].modules[j].description)) //Course Name
              //Lessons
              for (let k = 0; k < data.courses[i].modules[j].lessons.length; k++) {
                document.getElementById('lesson-body').insertAdjacentHTML('beforeend', lessonSectionUI(data.courses[i].modules[j].lessons[k].name,data.courses[i].modules[j].lessons[k].link)) //Course Name

              }
              document.getElementById('module-title').insertAdjacentHTML('beforeend', testSectionUI(data.courses[i].modules[j].module_quiz.name,data.courses[i].modules[j].module_quiz.link)) //Course Name

              }
            
          }  
        
        }
 
  }


