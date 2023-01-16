import {data} from '../scripts/content/content.js';

let paramString = window.location.href;
let queryString = new URLSearchParams(paramString);

let parameter =null;
for (let pair of queryString.entries()) {
   parameter = pair[1]; //Make more elegant
 }


function genCourseTitle(name,description){
    return `<header class="main">
    <h1 style = "font-size:42px;">${name}</h1>
</header>
<p>${description}
</p>`
}

function genModuleRowUI(courseName,moduleName,description) {
    return ` <tr>
    <td>
        <a href="module.html?course=${courseName.replaceAll(/\s/g, '')}&module=${moduleName.replaceAll(/\s/g, '')}">
            <h3>${moduleName}</h3>
            <p>${description}</p>
        </a>
    </td>
</tr>`;
}


  //Gen Display

  //Set Courses
  for (let i = 0; i < data.courses.length; i++) {
    if(data.courses[i].name.replaceAll(/\s/g, '')==parameter){
        document.getElementById('course-details').insertAdjacentHTML('afterbegin', genCourseTitle(data.courses[i].name,data.courses[i].description)) //Course Name
        for (let j = 0; j < data.courses[i].modules.length; j++) {
            if(data.courses[i].name.replaceAll(/\s/g, '')==parameter){
                document.getElementById('module-content').insertAdjacentHTML('beforeend', genModuleRowUI(data.courses[i].name,data.courses[i].modules[j].name,data.courses[i].modules[j].description)) //Course Name
            }
            
          }
    }

  }


