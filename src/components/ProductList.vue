<template>
  <div class="container">
    <h3>Our Products</h3>
    <div class="row">
      <div class="col col-cell">
        <div class="card blue-grey darken-1 m5" v-for="p in getProducts" :key="p.id">
          <div class="card-content white-text">
            <img class="product-image" :src="getImagePath(p)" alt />
            <span class="left">{{p.name}}</span>
            <span class="right">
              <strong>${{p.price}}</strong>
            </span>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn red">
              <i class="material-icons left">add</i>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  computed: {
    getProducts() {
      return this.$store.state.products;
    }
  },
  methods: {
    getImagePath(product) {
      return require(`../assets/img/${product.images[0]}`);
    }
  }
};
// https://medium.com/@magyarn/building-an-online-store-with-vue-cli-part-2-e62bec4603d
</script>
<style scoped>
.col-cell {
  display: flex;
  justify-content: space-evenly;
}
.card {
  margin-right: 5rem;
}
.card-content {
  width: 320px;
  text-align: center;
}
.card-action {
  text-align: center;
}
.product-image {
  height: 280px;
  width: 280px;
}
</style>

