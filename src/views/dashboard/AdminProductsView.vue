<template>
  <div class="container">
    <VueLoading :active="isLoading"></VueLoading>
    <div class="text-end my-4">
      <button class="btn btn-lg btn-primary" @click.prevent="openModal(true)">
        新增產品
      </button>
    </div>
    <table class="table table-striped productTable">
      <thead>
        <tr>
          <th width="10"></th>
          <th width="10"></th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th width="150">狀態</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="pt-3">
            <a href="#" @click.prevent="delProduct(product.id)"
              ><i class="bi bi-x h3 text-danger"></i
            ></a>
          </td>
          <td></td>
          <td>
            <img
              alt=""
              class=""
              width="80"
              height="60"
              :src="product.imageUrl"
            />
            {{ product.title }}
          </td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <div
              class="bg-success text-center tableStatusActive"
              v-if="product.is_enabled"
            >
              <span>啟用</span>
            </div>
            <div class="bg-warning text-center tableStatusInactive" v-else>
              <span>未啟用</span>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click.prevent="openModal(false, product)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Pagination from "@/components/PaginationCp.vue";
import ProductModal from "@/components/ProductModal.vue";

export default {
  components: {
    Pagination,
    ProductModal,
  },
  data() {
    return {
      tempProduct: {},
      products: [],
      pagination: {},
      isNewProdcut: false,
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$swal("失敗", "無法渲染畫面", "error");
        });
    },
    openModal(isNewProdcut, product) {
      if (isNewProdcut) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...product };
      }
      this.isNewProdcut = isNewProdcut;
      if (!Array.isArray(this.tempProduct.imagesUrl)) {
        this.tempProduct.imagesUrl = [];
      }
      const openProductModal = this.$refs.productModal;
      openProductModal.showModal();
    },
    updateProduct(tempProduct) {
      this.tempProduct = tempProduct;
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      let httpMethods = "post";
      if (!this.isNewProdcut) {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${tempProduct.id}`;
        httpMethods = "put";
      }
      this.$http[httpMethods](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.tempProduct = {};
            const closeProductModal = this.$refs.productModal;
            closeProductModal.hideModal();
            this.getProducts();
          }
        })
        .catch((err) => {
          this.$swal("新增產品失敗", "請重新確認產品規格", "error");
        });
    },
    delProduct(productId) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${productId}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getProducts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.getProducts();
  },
};
</script>