<template>
  <div class="header_container">
    <div class="navigation">
      <ul class="menu" :class="{ 'show-menu': isShowMenu }">
        <li v-for="navItem in navItems" :key="navItem.id">
          <router-link :to="navItem.link">{{ navItem.page }}</router-link>
        </li>
      </ul>
    </div>
  </div>

  <div class="tt_container" @click="isShowMenu = !isShowMenu" v-if="isMobile">
    <div class="tt"></div>
    <div class="tt"></div>
    <div class="tt"></div>
  </div>
</template>

<script>
export default {
  name: "myNavbar",
  data() {
    return {
      navItems: [
        { page: "Ana Səhifə", link: "/Ana Səhifə" },
        { page: "Katalog", link: "/Katalog" },
        { page: "Galereya", link: "/Galereya" },
        { page: "Haqqımızda", link: "/Haqqımızda" },
        { page: "Əlaqə", link: "/Əlaqə" },
      ],
      isShowMenu: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>

<style scoped>
.tt_container {
  display: none;
  cursor: pointer;
  z-index: 999;
}

.tt {
  width: 30px;
  margin: 8px;
  height: 4px;
  background: #222;
}

.header_container {
  width: 100%;
  height: 10vh;
   top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  background-color: aliceblue;
}

.header_container .navigation .menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 10px;
 
}

.header_container .navigation .menu li {
  display: flex;
  margin: 10px 10px;
}

.header_container .navigation .menu li a {
  padding: 5px;
  color: #222;
  transition: 0.1s;
}

.header_container .navigation .menu li a:hover {
  background: #222;
  color: #fff;
}

.header_container .navigation .menu li {
  display: flex;
  margin: 0 70px;
}
@media (max-width: 768px) {
  .tt_container {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .header_container .navigation .menu {
    display: none;
    flex-direction: column;
    background-color: #222;

    width: 100%;
    height: 100vh;
  }

  .show-menu {
    display: flex !important;
  }
}
</style>
