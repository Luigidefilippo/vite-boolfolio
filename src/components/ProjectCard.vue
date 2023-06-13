<script>
export default{
    name:'ProjectCard',
    props:{
        project : Object
    }
}
</script>



<template>
  <div class="card h-100">
          <img  v-if="project.image" :src="`http://127.0.0.1:8000/storage/${project.image}`" class="card-img-top" alt="">
        <div v-else >
          Nessuna immagine presente 
        </div>
          <div class="card-body">
            <h5>{{ project.title }}</h5>
          </div> 
        </div>
</template>


<style lang="scss" scoped>
</style>