<template>
  <div class="skillsMain">
    <div>
      <img src="../assets/icons/html.svg" alt="" /> <br />
      <h1>HTML5</h1>
    </div>
    <div>
      <img src="../assets/icons/css.svg" alt="" /> <br />
      <h1>CSS3</h1>
    </div>
    <div>
      <img src="../assets/icons/js.svg" alt="" /> <br />
      <h1>JS</h1>
    </div>
    <div>
      <img src="../assets/icons/vue.svg" alt="" /> <br />
      <h1>VUE</h1>
    </div>
    <div>
      <img src="../assets/icons/gitHub.svg" alt="" /> <br />
      <h1>GITHUB</h1>
    </div>
    <div>
      <img src="../assets/icons/figma.svg" alt="" /> <br />
      <h1>FIGMA</h1>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.skillsMain > div > img {
  width: 100px;
  height: 100px;
}
.skillsMain {
  margin: 50px auto;
  width: fit-content;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  row-gap: 30px;
  gap: 10px;
  position: relative;
  right: 10px;
}
.skillsMain > div {
  /* border: 2px solid black; */
  padding: 20px 10px;
  background: #e1dfdf;
}

@media screen and (max-width: 768px) {
  .skillsMain > div > img {
    width: 40px;
    height: 40px;
  }
  .skillsMain {
    width: fit-content;
    display: grid;
    grid-template-columns: 3fr 2fr 3fr;
    row-gap: 40px;
    gap: 10px;
    margin: 50px auto;
  }
  .skillsMain > div {
    /* border: 2px solid black; */
    padding: 20px 10px;
    background: #e1dfdf;
  }
}
@media screen and (max-width: 1600px) {
  .skillsMain > div > img {
    width: 80px;
    height: 80px;
  }
  .skillsMain {
    width: fit-content;
    row-gap: 40px;
    gap: 10px;
    margin: 50px auto;
  }
  .skillsMain > div {
    /* border: 2px solid black; */
    padding: 20px 10px;
    background: #e1dfdf;
  }
}
@media screen and (max-width: 600px) {
  .skillsMain {
    display: grid;
    grid-template-columns: 4fr 2fr 4fr;
  }
}
</style>
