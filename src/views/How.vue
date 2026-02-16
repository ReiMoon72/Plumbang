<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="flex-area">
    <div class="text-area">
      <h1>How it's working</h1>
      <p>
        In this section we talk about how this works and how an you order to us
      </p>
    </div>
    <div class="explanation">
      <h1>Fill Up the Form</h1>
      <p>
        First is to Fill out the form that provided in this website. Make sure
        <br />
        the Emmail have a '@' to be valid.
      </p>
      <h1>Receipt</h1>
      <p>
        After submitting the form, you will receive in the bottom of the page of
        <br />
        order. Make sure that all the fill up form is correct and accurate.
      </p>
      <h1>Wait for the Plumber</h1>
      <p>
        After that Wait for a few days or the exact date of your order to arrive
        <br />
        and fix the problem you're facing.
      </p>
    </div>
  </section>
</template>

<style scoped>
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: justify;
  padding: 20px;
}

.explanation {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  gap: 10px;
}

@media (min-width: 768px) {
  .explanation{
    flex-direction: column;
  }

  .text-area {
    flex-direction: column;
  }
}
</style>
