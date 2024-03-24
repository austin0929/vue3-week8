<template>
  <div class="container">
    <div class="bg-primary fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light container px-3 px-0">
      <router-link to="/" class="navbar-brand text-light fw-bold">DavidShoes</router-link>
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/about" class="nav-item nav-link me-4 text-light navBarHover"
            >關於我們</router-link
          >
          <router-link to="/products" class="nav-item nav-link me-4 text-light navBarHover"
            >產品列表</router-link
          >
          <a href="#" class="nav-item nav-link me-4" @click.prevent
            ><i
              class="bi bi-cart3 position-relative text-light navBarHover"
              @click.prevent="openCartModal"
            >
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                v-if="!carts.length == 0"
              >
                {{ carts.length }}
                <span class="visually-hidden">unread messages</span>
              </span></i
            ></a
          >
        </div>
      </div>
    </nav>
  </div>
  </div>
  <!-- routerView渲染位置 -->
  <router-view></router-view>

  <div class="bg-dark py-5">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <router-link class="text-white h4" to="/">DavidShoes</router-link>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3" @click.prevent
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3" @click.prevent
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3" @click.prevent
              ><i class="bi bi-line"></i
            ></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <!-- <p class="mb-0">後台登入</p> -->
          <router-link to="/login" class="mb-0 text-light navBarHover">後台登入</router-link>
          <p class="mb-0">02-4512-4787</p>
          <p class="mb-0">DavidShoes@mail.com</p>
        </div>
        <p class="mb-0">© 2024 DavidShoes All Rights Reserved.</p>
      </div>
    </div>
  </div>
  <CartModal ref="cartModal"></CartModal>
</template>

<script>
import CartModal from "@/components/CartModal.vue";
import { mapState } from "pinia";
import cartStore from "@/stores/cartStore";
export default {
  components: {
    CartModal,
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    openCartModal() {
      const openModal = this.$refs.cartModal;
      openModal.showModal();
    },
  },
};
</script>

<style>
  .navBarHover:hover{
     color: #cfd8dc !important;
  }
</style>