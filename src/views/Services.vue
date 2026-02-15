<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="service-header">
    <div class="text-header">
      <h1>Services</h1>
      <p>Professional Plumbing <b>Solution</b></p>
    </div>
    <img src="/public/images/Tao-part2.jpg" />
  </div>

  <!--Section-->

  <section class="section-area">
    <img src="/public/images/Bababe.jpg" />
    <div class="text-section-area">
      <h1>
        Reliable Plumbing Services for Your Home <br />
        or Business
      </h1>
      <p>
        At Plumbang, we offer a comprehensive and manage your home or <br />
        business. We offer cheap but exellent Plumbing services to meet the
        <br />
        need of your Houses or Businesses. Our licensed Plumbers are equiped
        <br />
        to handle everything.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Header */
.service-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column-reverse;
  padding: 1.6em;
}

.service-header img {
  width: 350px;
  padding: 20px;
  border-radius: 25px;
}

.text-header p {
  font-size: 20px;
}

.text-header h1 {
  font-size: 45px;
}

.text-header {
  text-align: justify;
}

@media (min-width: 768px) {
  .service-header {
    flex-direction: row;
  }
  .service-header img {
    width: 500px;
  }
}

/* Section */

.section-area {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.section-area img {
  width: 350px;
  padding: 1em;
  border-radius: 25px;
}

.text-section-area {
  text-align: left;
  padding: 1em;
}

@media (min-width: 768px) {
  .section-area {
    flex-direction: row;
  }
  .section-area img {
    width: 400px;
    padding: 1em;
    border-radius: 25px;
  }
  .text-section-area{
    text-align: justify;
  }
}
</style>
