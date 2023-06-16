<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "SingleProjectPage",
    data() {
        return {
            store,
            project: null,
            errorMessage: ""
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/project/${slug}`).then(
            resp => {
                
                console.log(resp);
                this.project = resp.data.results;
            },
            error => {
                console.log(error.response.status);
                console.log(error.response.data);
                if (error.response.status === 404) {

                    this.$router.push({ name: "not-found" });
                } else {
                    this.errorMessage = " Qualcosa è andato storto..";
                }
            })
    },
    computed: {
        imgSrc() {

            if (!this.project.image) return "";
            if (this.project.image.startsWith('https://')) {
                return this.project.image;
            } else {
                return `${this.store.apiBaseUrl}/storage/${this.project.image}`;
            }
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<template>
    <div class="container">
        <a @click.prevent="goBack()" class="btn btn-warning" href="">Back</a>
        <div class="project-details" v-if="project">
            <h2>{{ project.title }}</h2>
            <!-- Type -->
            <p v-if="project.tags.length > 0">
                <span class="me-1" v-for="tag in project.tags">#{{ tag.name }} </span>
            </p>
            <p v-else>{{ "Nessun tag assegnato" }}</p>
            <img class="w-25" :src="imgSrc" alt="">
            <p>{{ project.content }}</p>
        </div>
    </div>
</template>
