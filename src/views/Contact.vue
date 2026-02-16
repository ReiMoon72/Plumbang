<script>
export default {
  data() {
    return {
        fullname: '',
        email: '',
        messge: '',
    };
  },
  methods: {
    sendBtn(){
        if(this.fullname === "" && this.email === "" && this.messge ===""){
            alert("Put something in the message")
        } if(!this.email.includes('@')){
            alert("Input a '@' in your email to send")
        }else{
            alert("Please put a message")
        }
    }
  }
};
</script>

<template>
  <div class="contact-us">
    <h1>Contact US</h1>
  </div>

  <!--Info-->

  <section class="background">
    <div class="info">
      <div class="information">
        <h2>Our Contact information</h2>
        <p>📞 63 6767676767</p>
        <p>✉️ info@gmail.com</p>
        <p>
          📍 123 Zone 4 Sitio Pag-kakaisa, Sucat <br />
          Muntinlupa City
        </p>
      </div>
      <div class="form-area">
        <h1>Send A Messge</h1>
        <input type="text" v-model="fullname" placeholder="Full name" required/>
        <input type="email" v-model="email" placeholder="Email Address" required/>
        <textarea class="text-area" v-model="messge" placeholder="Message" required></textarea>
        <button @click="sendBtn">Send</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-us {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px 40px;

}

.information{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f6f6f6;
    padding: 1em;
    height: 165px;
    border-radius: 5px;
}

.info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px; 
  flex-direction: column;
}

.form-area {
  display: flex;
  flex-direction: column; 
  gap: 15px; 
  width: 300px;
  max-width: 400px; 
  flex-wrap: wrap;
}

.form-area input, .form-area textarea{
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
}

.form-area button {
    padding: 10px;
    background-color: #4413cc;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.form-area textarea{
    min-height: 80px;
    field-sizing: content;
}

.form-area button:hover{
    background-color: #3e228a;
}

@media (min-width: 768px) {
    .information{
        flex-direction: column;
        height: 170px;
    }
    .info{
        flex-direction: row;
    }
    .form-area{
        flex-direction: column;
    }
}
</style>