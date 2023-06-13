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
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <div class="card h-100">
          <img  v-if="project.image" :src="`http://127.0.0.1:8000/storage/${project.image}`" class="card-img-top" alt="">
        <div v-else >
          Nessuna immagine presente 
        </div>
          <div class="card-body">
            <h5>{{ project.title }}</h5>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;



</style>