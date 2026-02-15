<script setup>
import { useRouter } from "vue-router";
import { RouterView } from "vue-router";
import { ref } from "vue";
import Navbar from "./views/Navbar.vue";

</script>

<template>

    <Navbar />
    <RouterView />
  
</template>

<style scoped>

</style>
