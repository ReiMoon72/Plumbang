<script></script>

<template>
  <!--About us-->

  <div class="about-us">
    <h2>About Us</h2>
    <p>Your Trusted Plumbing Services in Alabang</p>
  </div>

  <!--Background-->

  <section>
    <div class="info">
      <img src="/public/images/tao-removebg-preview.png" />
      <div class="text-info">
        <h2>About Plumbang</h2>
        <p>
          Plumbang has been on the plumbing business since 1990's. Plumbang have <br>
          provided a high quality plumbing Service to the hole community since <br>
          36 years. On our start the team have only 5 licensed and have a <br>
          experience about Plumbing. Now we have 30 Expert and currently 15 on <br>
          training. And this show how in last 36 years the Plumbang have been <br>
          through a lot. Those 36 years we provide a reliable, efficient, and <br>
          affortable Plumbing Solution on your houses.   <br>
          <p> ✅ Trusted ✅ Professional ✅ Reliable</p>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  flex-direction: column;
  text-align: center;
}

.about-us h2 {
  font-size: 35px;
}

.about-us p {
  font-size: 20px;
}

.info img{
    width: 350px;
}

.info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    flex-direction: column;
}

.text-info p {
    font-size: 18px;
    text-align: left;
    padding: 5px;
}

.text-info h2 {
    font-size: 40px;
    text-align: center;
}

@media (min-width: 768px) {
    .info{
        flex-direction: row;
    }
    .text-info h2{
        text-align: center;
    }
    .info img{
        width: 395px;
    }
}
</style>
