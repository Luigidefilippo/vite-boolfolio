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
        console.log(resp)
      })
    }
  }

}
</script>


<template>
  <h1>Hello</h1>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;



</style>