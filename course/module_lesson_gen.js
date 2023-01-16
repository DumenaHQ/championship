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
    <article>
    <b>${name}</b>
    <video height="240" controls="">
    <source src="${url}" type="video/mp4">
    Your browser does not support the video tag.
  </video></article>
  `;
  }





  //Gen Display

  //Set Courses
  for (let i = 0; i < data.courses.length; i++) {
    if(data.courses[i].name.replaceAll(/\s/g, '')==parameter1){
        
        for (let j = 0; j < data.courses[i].modules.length; j++) {
            if(data.courses[i].modules[j].name.replaceAll(/\s/g, '')==parameter2){
              document.getElementById('module-title').insertAdjacentHTML('afterbegin', moduleSectionUI(data.courses[i].modules[j].name,data.courses[i].modules[j].description)) //Course Name
              //Lessons
              for (let k = 0; k < data.courses[i].modules[j].lessons.length; k++) {
                document.getElementById('lesson-body').insertAdjacentHTML('beforeend', lessonSectionUI(data.courses[i].modules[j].lessons[k].name,data.courses[i].modules[j].lessons[k].link)) //Course Name

              }
              }
            
          }  
        
        }
 
  }


