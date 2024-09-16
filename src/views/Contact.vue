<template>
  <div class="contactMain">
    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
      <div class="icon" id="icon1">
        <img src="../assets/icons/mail.svg" alt="mail" />
        <span class="icon-name">Mail</span>
      </div>
    </a>
    <a href="https://t.me/raxmanov">
      <div class="icon" id="icon2">
        <img src="../assets/icons/tg.svg" alt="telegram" />
        <span class="icon-name">Telegram</span>
      </div>
    </a>
    <a href="https://www.instagram.com/raxmonov_ran">
      <div class="icon" id="icon3">
        <img src="../assets/icons/insta.svg" alt="instagram" />
        <span class="icon-name">Instagram</span>
      </div>
    </a>
    <a href="https://discord.com/invite/fdnzraxmanov_06472">
      <div class="icon" id="icon4">
        <img src="../assets/icons/discord.svg" alt="discord" />
        <span class="icon-name">Discord</span>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/abdurakhim-rakhmanov-687779327/">
      <div class="icon" id="icon5">
        <img src="../assets/icons/linkedin.svg" alt="linkedin" />
        <span class="icon-name">LinkedIn</span>
      </div>
    </a>
    <a href="https://github.com/fdnzraxmanov6778">
      <div class="icon" id="icon6">
        <img src="../assets/icons/gitHub.svg" alt="github" />
        <span class="icon-name">GitHub</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    hover() {}
  }
}
</script>
<style scoped>
.contactMain {
  display: flex;
  gap: 15px;
  width: fit-content;
  margin: 50px auto;
}

.contactMain .icon {
  padding: 15px 20px;
  background: #d6d4d4;
  text-align: center;
  position: relative;
}

.contactMain .icon img {
  width: 50px;
  height: 60px;
}

.icon-name {
  position: absolute;
  bottom: -35px; /* Pastda joylashadi */
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: black;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.icon:hover .icon-name {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 768px) {
  .contactMain {
    display: grid;
    grid-template-columns: 200px 200px;
    gap: 15px;
    width: fit-content;
    margin: 50px auto;
  }

  .contactMain .icon {
    padding: 15px 20px;
    background: #d6d4d4;
    text-align: center;
    position: relative;
  }

  .contactMain .icon img {
    width: 50px;
    height: 60px;
  }

  .icon-name {
    position: absolute;
    bottom: -35px; /* Pastda joylashadi */
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: black;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .icon:hover .icon-name {
    opacity: 1;
    visibility: visible;
  }
}
</style>
