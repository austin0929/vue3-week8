<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container mt-7 noto-sans">
    <div class="row justify-content-center mt-6">
      <div class="col-md-10">
        <div class="row align-items-center">
          <div class="col-md-7">
            <img :src="imgState" class="img-fluid" />
            <div class="my-3 row">
              <img
                v-for="img in product.imagesUrl"
                :key="img"
                :src="img"
                @click="imgState = img"
                class="img-fluid object-fit-cover imgSize col-4" style="height: 80px"
              />
            </div>
          </div>

          <div class="col-md-5">
            <h2 class="fw-bold h1 mb-3">{{ product.title }}</h2>
            <p class="mb-3">
              {{ product.description }}
            </p>
            <p class="mb-0 text-muted text-end">
              <del>NT${{ product.origin_price }}</del>
            </p>
            <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
            <div class="row align-items-center">
              <div class="col-6">
                <div class="input-group my-3 rounded">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon1"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                  <div>
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      v-model.number="selectNumber"
                    />
                  </div>
                  <div>
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <a
                  href="./checkout.html"
                  class="text-nowrap btn btn-dark w-100 py-2 btn-primary-hover"
                  @click.prevent="detailAddCart(product, selectNumber)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="border-primary border rounded p-3">
          <p>
            商品配送工作時間：<br />
            ※
            本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意。<br />
            ※
            商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起，<br />
            因商品數量有限，需要時間做調度作業，敬請見諒。<br />
            ※ 若有特別需求，請於下訂單時備註說明，以利出貨作業。
          </p>
        </div>
        <div class="row my-5">
          <div class="col-md-4">
            <h2 class="mb-3">商品規格</h2>
            <ul style="list-style: none" class="px-0">
              <li>
                <p>款式：{{ product.title }}</p>
              </li>
              <li>
                <p>分類: {{ product.category }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import cartStore from "@/stores/cartStore";
import { mapActions } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      product: {},
      productId: "",
      selectNumber: 1,
      isLoading: false,
      imgState: "",
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
    getProduct() {
      this.isLoading = true;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.productId}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.product = res.data.product;
            this.imgState = res.data.product.imagesUrl;
          }
        })
        .catch((err) => {
          return;
        });
    },
    detailAddCart(product) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      const addDetailProduct = {
        product_id: product.id,
        qty: this.selectNumber,
      };
      this.$http.post(api, { data: addDetailProduct }).then((res) => {
        if (res.data.success) {
          toast("成功加入購物車", {
            theme: "auto",
            type: "success",
            autoClose: 1500,
            dangerouslyHTMLString: true,
          });
          this.selectNumber = 1;
          this.getCart();
        }
      }).catch((err) => {
        this.$swal("讀取失敗", "無法渲染畫面", "error");
      })
    },
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProduct();
  },
};
</script>