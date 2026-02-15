<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    bookBtn() {
      this.$router.push("/booking");
    },
    serviceBtn() {
      this.$router.push("/services");
    },
  },
};
</script>

<template>
  <!--Hero Area-->

  <section>
    <div class="hero-area">
      <img
        class="image-picture"
        src="/public/images/Plumbing-image-hero.jpg"
        alt=""
      />
      <div class="text-area">
        <h2>
          Fash & Reliable <br />
          Plumbing Services
        </h2>
        <p>
          Certified and Trusted Plumbing <br />
          Services in Alabang
        </p>
        <div class="button-service">
          <button class="book" @click="bookBtn">BOOK NOW!!</button>
          <button class="services" @click="serviceBtn">VIEW SERVICE</button>
        </div>
      </div>
    </div>
  </section>

  <!--Services-->

  <h1>Our Plumbing Services</h1>

  <div class="offers">
    <div class="leak">
      <h2>Leak Reapair</h2>
      <p>
        Quick Repair in Leak <br />
        and Drips
      </p>
      <router-link :to="{ name: 'Services' }" active-class="linkks"
        >Learn More</router-link
      >
    </div>
    <div class="drain">
      <h2>Drain Cleaning</h2>
      <p>
        Cloddge Drain Will Clean <br />
        as fast as Max Verstappen
      </p>
      <router-link :to="{ name: 'Services' }" active-class="linkks"
        >Learn More</router-link
      >
    </div>
    <div class="water-heater">
      <h2>Water Heater Reapir</h2>
      <p>
        Expert Water Heater <br />
        Solution
      </p>
      <router-link :to="{ name: 'Services' }" active-class="linkks"
        >Learn More</router-link
      >
    </div>
    <div class="emergency">
      <h2>Emergency Plumbing</h2>
      <p>
        24/7 Urgent Plumbing <br />
        Help
      </p>
      <router-link :to="{ name: 'Services' }" active-class="linkks"
        >Learn More</router-link
      >
    </div>
  </div>

  <!--How It Works-->

  <h1>How It Works</h1>

  <div class="works">
    <div class="choose">
      <h2>🔧 Choose Our Service</h2>
    </div>
     <div class="choose">
      <h2>📅 Pick Time & Date</h2>
    </div>
    <div class="choose">
      <h2>📝 Confirm Booking</h2>
    </div>
    <div class="choose">
      <h2>👨 Plumber Arrives</h2>
    </div>  
  </div>
</template>

<style scoped>
/* Hero Area CSS */
.hero-area {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 1em;
}

.image-picture {
  width: 300px;
  padding: 20px;
}

.text-area {
  padding: 10px;
  text-align: left;
}

.text-area h2 {
  font-size: 40px;
}

.button-service {
  padding: 1px;
}

.button-service .book {
  background-color: #7c83bc;
  color: white;
  padding: 13px;
  border: none;
  margin-right: 5px;
}

.button-service .services {
  background-color: #323c4b;
  color: white;
  padding: 13px;
  border: none;
}

.book:hover {
  background-color: #575b80;
}

.book:active {
  background-color: #45475a;
}

.services:hover {
  background-color: #242b35;
}

.services:active {
  background-color: #2c2f33;
}

@media (min-width: 768px) {
  .hero-area {
    flex-direction: row-reverse;
  }

  .image-picture {
    width: 400px;
  }
}

/* Services Area */

h1 {
  text-align: center;
  padding: 13px;
}

.leak {
  background-color: #e6e7ed;
  padding: 12px;
  width: 193px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.drain {
  background-color: #e6e7ed;
  padding: 10px;
  width: 230px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.water-heater {
  background-color: #e6e7ed;
  padding: 10px;
  width: 193px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.emergency {
  background-color: #e6e7ed;
  padding: 10px;
  width: 193px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.offers {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 768px) {
  .offers{
    flex-direction: row;
  }
}

/* How it Works */ 

.choose{
  background-color: #b8b8b8;
  margin-bottom: 10px;
  width: 260px;
  text-align: center;
  padding: 4px;
}

.works{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

}

@media (min-width: 768px) {
  .works{
    flex-direction: row;
  }
}
</style>
