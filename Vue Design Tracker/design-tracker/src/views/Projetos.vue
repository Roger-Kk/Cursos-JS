<template>
    <div class="projetos">
        <h1 class="title">Projetos</h1>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent ({
    name: "ProjetosCadastrados"
})

</script>
<style scoped>

.projetos {
    padding: 1.5rem;
}
</style>