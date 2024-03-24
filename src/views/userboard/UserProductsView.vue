<template>
<VueLoading :active="isLoading"></VueLoading>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold noto-sans">超越極限</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7 noto-sans">
    <div class="row">
      <div class="col-md-3">
        <div
          class="text-center border border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <ul class="list-group">
              <li class="list-group-item list-group-item-action"
              :class="{'linkActive' : !$route.query.category}"
              >
                <router-link to="/products" class="d-block"
                 :class="{'linkActiveColor' :  !$route.query.category}"
                >全部產品</router-link>
              </li>
              <li
                class="list-group-item list-group-item-action"
                v-for="category in categories"
                :key="category"
                 :class="{'linkActive' : category === $route.query.category}"
              >
                <router-link :to="`/products?category=${category}`" class="d-block h-100"
                  :class="{'linkActiveColor' : category === $route.query.category}"
                >{{
                  category
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <div
              class="card border-0 mb-4 position-relative position-relative"
              style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)"
            >
              <router-link :to="`/productdetail/${product.id}`"
                ><img
                  :src="product.imageUrl"
                  class="card-img-top rounded object-fit-cover;"
                  height="200"
                  alt="..."
                />
                <div class="card-body p-0">
                  <div class="text-center">
                    <h4 class="mb-0 mt-2 h5">
                      <a href="#">{{ product.title }}</a>
                    </h4>
                    <p class="card-text mb-0 mt-2 mb-2">
                      NT$1,080
                      <span class="text-muted"><del>NT$1,200</del></span>
                    </p>
                    <button
                      class="btn btn-primary btn-primary-hover border-0"
                      @click.prevent="addToCart(product)"
                    >
                      加入購物車
                    </button>
                  </div>
                  <p class="text-muted mt-3"></p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Pagination from "@/components/PaginationCp.vue";
import cartStore from "@/stores/cartStore";
import { mapActions } from "pinia";
      
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      categories: ["球鞋", "慢跑鞋", "帆布鞋", "滑板鞋"],
      isLoading: false
    };
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    getProducts(page = 1) {
      this.isLoading = true
      const { category = "" } = this.$route.query;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?category=${category}&page=${page}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          this.$swal("讀取失敗", "無法渲染畫面", "error");
        });
    },
  },
  watch: {
    "$route.query": {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
  .linkActive{
    background-color: #263238;
  }
  .linkActive:hover{
    background-color: #263238;
  }
  .linkActiveColor {
    color: white
  }
</style>