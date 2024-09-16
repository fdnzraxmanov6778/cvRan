<template>
  <div class="educationMain">
    <div>
      <h2>1</h2>
      <br />
      <h1>Tashkent University of Information Technologies : Computer Engineering</h1>
    </div>
    <div>
      <h2>2</h2>
      <br />
      <h1>Sirius : Maths and physic</h1>
    </div>
    <div>
      <h2>3</h2>
      <br />
      <h1>ProUnity : IT school</h1>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.educationMain > div {
  display: flex;
  gap: 10px;
  text-transform: capitalize;
  text-align: start;
  align-items: center;
  margin: 20px 20px;
}
.educationMain {
  margin: 60px auto;
}
h1 {
  font-weight: 400;
  margin: 0;
  font-size: 1.5rem;
  background: #e1dfdf;
  padding: 10px 40px;
}
h2 {
  font-weight: 700;
  font-size: 2rem;
}
</style>
