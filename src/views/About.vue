<template>
  <div class="aboutMain">
    <h1>About Me</h1>
    <p>
      Hello! I'm 19 years old and I’ve decided to try myself in a new role. I’ve learned
      <span class="span">Web development</span> because I enjoy creating miracles from nothing. I
      love learning new things and trying out new features and technologies. I’ve been interested in
      computers since childhood, and now I’m a student at <span class="span">TUIT</span> University.
      Among my interests, I also have a great passion for <span class="span">Cyber Security</span>.
    </p>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.span {
  color: #bdbdbd;
  font-weight: 700;
}
.aboutMain {
  /* border: 2px solid black; */
  width: 600px;
  height: fit-content;
  margin: 40px auto;
}
.aboutMain > p {
  /* color: #33373c; */
  font-size: 1.5rem;
  font-weight: 600;
}
.aboutMain > h1 {
  font-weight: 700;
  margin: 20px 10px;
}
@media screen and (max-width: 1024px) {
  .span {
    color: #bdbdbd;
    font-weight: 700;
  }
  .aboutMain {
    /* border: 2px solid black; */
    width: 600px;
    height: fit-content;
    margin: 40px auto;
  }
  .aboutMain > p {
    /* color: #33373c; */
    font-size: 1.3rem;
    font-weight: 600;
  }
  .aboutMain > h1 {
    font-weight: 700;
    margin: 20px 10px;
  }
}
@media screen and (max-width: 768px) {
  .span {
    color: #bdbdbd;
    font-weight: 700;
  }
  .aboutMain {
    width: 400px;
    margin: 20px auto;
    position: relative;
    bottom: 20px;
  }
  .aboutMain > p {
    /* color: #33373c; */
    font-size: 1rem;
    font-weight: 600;
    width: 400px;
  }
  .aboutMain > h1 {
    font-weight: 700;
    margin: 10px 10px;
    width: 400px;
  }
}
@media screen and (max-width: 1600px) {
  .span {
    color: #bdbdbd;
    font-weight: 700;
  }
  .aboutMain {
    /* border: 2px solid black; */
    width: 600px;
    height: fit-content;
    margin: 40px auto;
  }
  .aboutMain > p {
    /* color: #33373c; */
    font-size: 1.3rem;
    font-weight: 500;
  }
  .aboutMain > h1 {
    font-weight: 700;
    margin: 20px 10px;
  }
}
</style>
