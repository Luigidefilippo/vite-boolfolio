<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default{
    name: "ProjectPage",
    data(){
    return{
      projects: []
    }
  },
  mounted(){
    this.getProjects();
  },
  methods: {
    getProjects(){
      console.log('get Project');
      axios.get('http://127.0.0.1:8000/api/projects').then(resp =>{
        this.projects = resp.data.results;
      })
    }
  },
components: {ProjectCard}
}
</script>

<template>

    <h2>ProjectPage</h2>
            <div class="container">
            <h2>Lista Dei Progetti</h2>
            <div class="row row-cols-4 g-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
                
            </div>
            </div>
           
        </div>

</template>


<style lang="scss" scoped> 


</style>