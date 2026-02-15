<script>
export default {
  data() {
    return {};
  },
  methods: {
    contactBtn() {
      this.$router.push("/contact");
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="narbar-link">
      <router-link
        class="link-active"
        active-class="links"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        class="link-active"
        active-class="links"
        :to="{ name: 'About' }"
        >About</router-link
      >
      <router-link
        class="link-active"
        active-class="links"
        :to="{ name: 'Services' }"
        >Services</router-link
      >
      <router-link
        class="link-active"
        active-class="links"
        :to="{ name: 'How' }"
        >How it Works</router-link
      >
      <button @click="contactBtn" class="button-click">Contact Us!!</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #14213d;
  padding: 1em;
}

.narbar-link {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.narbar-link .link-active {
  color: white;
  text-decoration: none;
}

.links {
  background-color: #1b508d;
  padding: 5.9px;
  border-radius: 8px;
  transition: ease 0.5s;
  text-decoration: dashed;
}

.button-click {
  padding: 5px;
  background-color: #14213d;
  border: none;
  color: white;
  transition: ease-in 0.3s;
  cursor: pointer;
}

.button-click:hover {
  color: rgb(85, 85, 180);
}
</style>
