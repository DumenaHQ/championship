
import {data} from './content.js';


$(document).ready(function () {

  //Data Retreival

  //Display
  function courseBodyUI(name) {
    return `<section id="course-content-${name.replaceAll(/\s/g, '')}">
    <header class="major">
      <h2 style = "font-size:2em">${name}</h2>
    </header>
    <div class="table-wrapper">
    <h2 style = "font-size:2em">Modules</h2>

														<table class="alt">
															<tbody id="course-content-modules${name.replaceAll(/\s/g, '')}">

															</tbody>
														</table>
													</div>
    <div class="posts" id="modules-list">
    
    </div>
                  <!--    <dl>
                          <h2>Test your knowledge !</h2>
                          <dt>Lorem Question ipsum dolor sit amet consectetur adipisicing elit.</dt>
                          <dd>
                              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                          </dd>
                          <dt>Lorem Question ipsum dolor sit amet consectetur adipisicing elit.</dt>
                          <dd>
                              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                          </dd>
                          <dt>Lorem Question ipsum dolor sit amet consectetur adipisicing elit.</dt>
                          <dd>
                              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                          </dd>
                      </dl> -->
  </section>`
  }

  function courseTileUI(name, description) {
    return `<article>
    <!-- <span class="image fit" style="width:200px;"><img src="images/pic02.jpg" alt=""></span> -->
    <a style="border-bottom:0px solid; color:black;"  href="course/course.html?course=${name.replaceAll(/\s/g, '')}">
      <div class="content" style="padding: 0px 0px 0px 30px;">
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
    </a>
  </article>`.trim();
  }

function moduelTableOfContent(courseName,moduleName){
  return `
  <tr>
  <td>
  <a style = "border-bottom: solid 1px" href="course/module.html?course=${courseName.replaceAll(/\s/g, '')}&module=${moduleName.replaceAll(/\s/g, '')}"> 
  ${moduleName}
  </a>
  </td>
  <td>
  <a style = "border-bottom: solid 0px"  href="course/module.html?course=${courseName.replaceAll(/\s/g, '')}&module=${moduleName.replaceAll(/\s/g, '')}"> 
  <i class="fa-solid fa-link"></i>
  </a>
  </td> 
  </tr>`;

}





  //Gen Display

  //Set Courses
  for (let i = 0; i < data.courses.length; i++) {

    document.getElementById('page-main-body').insertAdjacentHTML('beforeend', courseBodyUI(data.courses[i].name))
    let courseListUI = document.getElementById('courses-list')
    courseListUI.insertAdjacentHTML('beforeend', courseTileUI(data.courses[i].name, data.courses[i].description))
    let moduleOutlineListUI = document.getElementById(`course-content-modules${data.courses[i].name.replaceAll(/\s/g, '')}`)
    
    for (let m = 0; m < data.courses[i].modules.length; m++) { 
    moduleOutlineListUI.insertAdjacentHTML('beforeend',moduelTableOfContent(data.courses[i].name,data.courses[i].modules[m].name))
    }
    //Set Modules Per Course

    // for (let j = 0; j < data.courses[i].modules.length; j++) {

    //   let moduleListUI = document.getElementById('modules-list')
    //   moduleListUI.insertAdjacentHTML('beforeend', moduleSectionUI(data.courses[i].modules[j].name, data.courses[i].modules[j].description))
    //   //Set Lessons Per Module
    //   for (let k = 0; k < data.courses[i].modules[j].lessons.length; k++) {
    //     document.getElementById(`module-lesson${data.courses[i].modules[j].name.replaceAll(/\s/g,'')}`).insertAdjacentHTML('beforeend',lessonSectionUI(data.courses[i].modules[j].lessons[k].name,data.courses[i].modules[j].lessons[k].link))
    //   }
    // }

  }



})
