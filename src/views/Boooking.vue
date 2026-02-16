<script>

export default {
  data() {
    return {
      fullname: "",
      phoneNumber: "",
      emial: "",
      date: "",
      barangay: "",
      services: "",
      probelm: "",
      time: "",
      receipt: false,
      orderArea: true,
      serviceMap: {
        EP: { name: "Emergency Plumbing", price: 1500 },
        LR: { name: "Leak Repair", price: 500 },
        DC: { name: "Drain Cleaning", price: 700 },
        WHR: { name: "Water Heater Repair", price: 1200 },
        PI: { name: "Pipe Installation", price: 2000 }
      },
    };
  },
  computed: {
    selectedService() {
      const key = (this.services || "").trim();
      return this.serviceMap[key] || { name: this.services || "", price: 0 };
    }
  },
  methods: {
    checkBtn() {
      if (
        this.fullname === "" &&
        this.phoneNumber === "" &&
        this.date === "" &&
        this.barangay === "" &&
        this.services === "" &&
        this.probelm === "" &&
        this.time === ""
      ) {
        alert("Please Input Something");
      } else if ((!this.emial.includes("@"))) {
        alert("Please Include a @ in your Email");
      } else {
        console.log("This is Valid");
      } 
      this.receipt = true;

    },
    submitBtn() {
      this.submitBtn = console.log("Your Order has been places");

      this.emial = "";
      this.fullname = "";
      this.phoneNumber = "";
      this.date = "";
      this.barangay = "";
      this.services = "";
      this.probelm = "";
      this.time = "";

      this.receipt = false;

    },
  },
};
</script>

<template>
  <header>
    <div class="header-area">
      <h1>Book a Plumbing Services</h1>
      <p>Fill out the Form Below To order our services</p>
    </div>

    <!--Form Area-->
    <div class="form-section" v-show="orderArea">
      <form @submit.prevent class="form-area">
        <label>Full name: </label>
        <input type="text" v-model="fullname" />
        <label>Phone Number</label>
        <input type="number" v-model="phoneNumber" />
        <label>Email Adress</label>
        <input type="email" v-model="emial" />
        <label>Select a date</label>
        <input type="date" v-model="date" />
        <label>Select your Barangay</label>
        <select v-model="barangay">
          <option value="">Barangay in Muntinlupa</option>
          <option value="ala">Alabang</option>
          <option value="sucat">Sucat</option>
          <option value="bul">Buli</option>
          <option value="bay">Bayanan</option>
          <option value="put">Putatan</option>
          <option value="tun">Tunasan</option>
          <option value="pob">Poblacion</option>
          <option value="cup">Cupang</option>
          <option value="AA">Ayala Alabang</option>
        </select>
        <label>Select Service</label>
        <select v-model="services">
          <option value="">Services</option>
          <option value="EP">Emergency Plumbing</option>
          <option value="LR">Leak Reapair</option>
          <option value="DC">Drain Cleaning</option>
          <option value="WHR">Water Heater Reapir</option>
          <option value="PI">Pipe Instollation</option>
        </select>
        <label>Describe the Problem</label>
        <input type="text" v-model="probelm" />
        <label>Select a Time</label>
        <input type="input" v-model="time" />
        <button class="checkBtn" @click="checkBtn">Check Out</button>
      </form>
    </div>
  </header>

  <!--Receipt-->

  <div class="receipt-background" v-show="receipt">
    <div class="receipt">
      <p>Name: {{ fullname }}</p>
      <p>Phone Number: {{ phoneNumber }}</p>
      <p>Email Adress: {{ emial }}</p>
      <p>Date: {{ date }}</p>
      <p>Barangay: {{ barangay }}</p>
      <p>Service: {{ selectedService.name }}</p>
      <p>Price: {{ selectedService.price }}p</p>
      <p>Problem: {{ probelm }}</p>
      <p>Time: {{ time }}</p>
      <button class="Submit" @click="submitBtn">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.header-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 13px;
}

.form-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.form-section {
  background-color: #d6cece;
  padding: 10px;
  width: 300px;
  margin: auto;
  color: black;
  border: solid black 1px;
}

.form-area input {
  padding: 5px;
  width: 300px;
  text-align: center;
}

.form-area select {
  padding: 5px;
  width: 300px;
  text-align: center;
}

.checkBtn {
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 20px;
}

/* Receipt */

.receipt-background {
  margin-top: 1em;
  background-color: #181d25;
  color: white;
  padding: 1em;
}

.receipt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 9px;
}

.Submit {
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .form-section {
    background-color: #d6cece;
    padding: 10px;
    width: 500px;
    margin: auto;
    color: black;
  }
}
</style>
