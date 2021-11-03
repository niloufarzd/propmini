Vue.component('course-box', {
    props: ['teacher', 'courseImg', 'students', 'name'],
    template: `
    <div class="container">
    <img :src="courseImg"/>
    <h2>{{name}}</h2>
    <br />
    <div class="footer">
      <h3 class="teacher">{{ teacher }}</h3>
      <h3 class="students">{{students}}</h3>
    </div>
  </div>  
    `
  })

new Vue({
     el:"#app"
    
})