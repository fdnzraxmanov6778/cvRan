<template>
  <div class="all">
    <div class="container">
      <main class="main">
        <div class="header">
          <div class="page1">
            <img src="../assets/image/me1.jpg" alt="" />
          </div>
          <div class="page2">
            <h2>Hello I'm</h2>
            <h1>Abdurakhim Rakhmanov</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
        <div class="center">
          <ul>
            <li>
              <router-link :class="isActive('/about') ? 'active' : ''" class="router" to="/about"
                ><h1>about</h1></router-link
              >
            </li>
            <li>
              <router-link
                :class="isActive('/education') ? 'active' : ''"
                class="router"
                to="/education"
                ><h1>education</h1></router-link
              >
            </li>
            <li>
              <router-link :class="isActive('/skills') ? 'active' : ''" class="router" to="/skills"
                ><h1>skills</h1></router-link
              >
            </li>
            <li>
              <router-link
                :class="isActive('/contact') ? 'active' : ''"
                class="router"
                to="/contact"
                ><h1>contact</h1></router-link
              >
            </li>
            <li>
              <router-link
                :class="isActive('/project') ? 'active' : ''"
                class="router"
                to="/project"
                ><h1>project</h1></router-link
              >
            </li>
          </ul>
          <div class="components">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
    <div class="container2">
      <div class="clock">
        <h3>{{ month }}</h3>
        <h1>{{ hours }} : {{ minutes }} : {{ seconds }}</h1>
        <h3>{{ year }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      year: '',
      month: ''
    }
  },
  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000) // Har bir soniyada vaqt yangilanadi
  },
  methods: {
    updateTime() {
      const currentTime = new Date()
      this.hours = this.formatTime(currentTime.getHours())
      this.minutes = this.formatTime(currentTime.getMinutes())
      this.seconds = this.formatTime(currentTime.getSeconds())
      this.year = currentTime.getFullYear()
      this.month = this.formatMonth(currentTime.getMonth())
    },
    formatTime(time) {
      return time < 10 ? '0' + time : time
    },
    formatMonth(monthIndex) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return months[monthIndex]
    },
    isActive(route) {
      return this.$route.path === route
    }
  }
}
</script>

<style scoped>
.all {
  display: flex;
  width: fit-content;
  gap: 30px;
}
.container2 {
}
.clock {
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.clock h1 {
  font-size: 3em;
  font-weight: 700;
}
.clock h3 {
  font-size: 1.5em;
  color: #555;
  font-weight: 700;
}
.container {
  width: 700px;
  background: #ffffff;
  box-shadow: 0 0 70px -5px black;
}
.header {
  width: 600px;
  height: 250px;
  border-bottom: 2px solid #ada9a9;
  display: flex;
  margin: 0 auto;
}
.page1 {
  width: fit-content;
  height: fit-content;
  margin: 40px 10px;
}
.page2 {
  width: fit-content;
  height: fit-content;
  margin: 50px 10px;
}
.page1 > img {
  width: 150px;
  border-radius: 5%;
  height: fit-content;
  align-content: center;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 4px black);
}
h1,
h2 {
  text-shadow: 0 0 2px black;
}
.center {
  text-align: center;
}

.center > ul {
  display: flex;
  gap: 30px;
  margin: 30px auto;
  width: fit-content;
  padding: 0;
}
.center > ul > li {
  list-style: none;
  transition: all 0.1s linear;
}
.center > ul > li:hover {
  color: #847a86;
}
.router:hover {
  color: #847a86;
}
.router {
  text-decoration: none;
  color: #4a4a4a;
  font-weight: 600;
}
.active {
  border-bottom: 2px solid #333;
}
router-view {
  margin-top: 20px;
}
.components {
  border-top: 2px solid #ada9a9;
  width: 600px;
  height: 500px;
  margin: 0 auto;
}
.center > ul > li {
  list-style: none;
  transition: all 0.3s linear;
  position: relative;
}

.center > ul > li:hover .router {
  color: #847a86;
}

.router {
  text-decoration: none;
  color: #4a4a4a;
  font-weight: 600;
  position: relative;
}

.router::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  left: 50%;
  bottom: -5px;
  background-color: #847a86;
  border-bottom: 2px dashed #847a86;
  transition: all 0.3s ease-out;
}

.center > ul > li:hover .router::after {
  width: 100%;
  left: 0;
}

@media screen and (max-width: 1024px) {
  .all {
    display: block;
    /* margin: 100px; */
    height: fit-content;
  }
  .container {
    width: 700px;
    font-size: 15px;
    position: relative;
    top: 700px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
  }
  .container2 {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .all {
    display: block;
    margin-top: 150px;
  }
  .container {
    width: 500px;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
  }
  .page1 {
    width: fit-content;
    height: fit-content;
    margin: 40px 20px;
  }
  .container2,
  .clock {
    display: none;
  }

  h1,
  h2 {
    text-shadow: 0 0 2px black;
    width: 300px;
  }
  .center {
    text-align: center;
  }
  .center > ul {
    display: block;
  }

  .header {
    width: 400px;
  }
  .components {
    width: 400px;
  }
}
@media screen and (max-width: 500px) {
  .all {
    position: relative;
    top: 100%;
  }
}
@media screen and (max-width: 1500px) {
  .all {
    display: block;
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translate(-45%, -25%);
  }
  .container2 {
    position: relative;
    top: 400px;
    right: 50px;
  }
  .clock {
    color: #555;
  }
}
@media screen and (max-width: 900px) {
}
</style>
