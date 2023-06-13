<script>
import axios from 'axios';

export default {
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
  }

}
</script>


<template>
  <div class="container">
    <h2>Lista Dei Progetti</h2>
    <div class="row row-cols-4">
      <div class="col">
        <div class="card" v-for="project in projects" :key="project.id">
            <h4>{{ project.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;



</style>