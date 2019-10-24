<template>
  <div class="navbar">
    <nav class="nav-extented indigo accent-2">
      <a href="#" class="brand-logo">
        <img src="@/assets/rahul-jain.png" height="24" width="24" alt="rahul" />
        Rahul Jain
      </a>
      <div class="nav-content right">
        <router-link to="/">
          <span class="nav-title">
            <i class="material-icons left">home</i>Home
          </span>
        </router-link>
        <router-link to="/list">
          <span class="nav-title">Our Products</span>
        </router-link>
        <router-link to="/cart">
          <span class="nav-title">
            Shopping Cart
            <i class="material-icons right">shopping_cart</i>
          </span>
        </router-link>
        <router-link to="/about">
          <span class="nav-title">About</span>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style scoped>
.brand-logo img {
  border-radius: 50%;
  margin-left: 20px;
}
.nav-title {
  padding: 2px 20px 0 0;
  font-size: 1.2em;
}
.nav-title:hover {
  color: tomato;
}
</style>