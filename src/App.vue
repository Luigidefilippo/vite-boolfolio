<script>
import AppHeader from './pages/AppHeader.vue';

export default {
 components:{ AppHeader,   }
}
</script>


<template>
<AppHeader></AppHeader>

<router-view></router-view>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;


</style>