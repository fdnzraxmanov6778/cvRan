<template>
  <div class="projectMain">
    <div>
      <a href="">
        <img src="../assets/image/pc.jpg" alt="" />
        <br />
        <h1>rogTech</h1>
      </a>
    </div>
    <div>
      <a href="https://fdnzraxmanov6778.github.io/ranBuild/">
        <img src="../assets/image/build.jpg" alt="" />
        <br />
        <h1>ranBuild</h1>
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
a > img {
  width: 200px;
  height: 110px;
  filter: grayscale(10);
}
a > img:hover {
  filter: none;
}
.projectMain > div {
  border: 2px solid #d6d4d4;
  width: fit-content;
  background: #d6d4d4;
}
.projectMain {
  width: fit-content;
  margin: 50px;
  display: flex;
  gap: 15px;
  /* border: 2px solid black; */
}
a {
  text-decoration: none;
}
a > h1 {
  color: #333333;
  font-size: 1.5rem;
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  a > img {
    width: 200px;
    height: 110px;
    filter: grayscale(10);
  }
  a > img:hover {
    filter: none;
  }
  .projectMain > div {
    border: 2px solid #d6d4d4;
    width: fit-content;
    background: #d6d4d4;
    margin: 40px 0;
  }
  .projectMain {
    width: fit-content;
    margin: 50px auto;
    display: block;
    gap: 15px;
    /* border: 2px solid black; */
  }
  a {
    text-decoration: none;
  }
  a > h1 {
    color: #333333;
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
