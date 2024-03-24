<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container mt-7 noto-sans">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-around mb-4">
          <span class="border border-primary h4 px-lg-6 px-3 py-4"
            >訂單資料</span
          >
          <span class="border h4 px-lg-6 px-3 py-4 bg-primary text-light"
            >付款確認</span
          >
          <span class="border h4 px-lg-6 px-3 py-4 bg-primary text-light"
            >完成訂單</span
          >
        </div>
        <div class="row mb-5">
          <div class="col-md-8">
            <h2 class="h4 mb-3">訂單資訊</h2>
            <VForm ref="form" v-slot="{ errors }" @submit="sendOrder">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <VField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="請輸入 Email"
                  rules="required|email"
                  :class="{ 'is-invalid': errors['email'] }"
                  v-model="form.user.email"
                ></VField>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <VField
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  placeholder="請輸入姓名"
                  rules="required"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  v-model="form.user.name"
                ></VField>
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <VField
                  id="tel"
                  name="tel"
                  type="text"
                  class="form-control"
                  placeholder="請輸入電話"
                  :rules="isPhone"
                  :class="{ 'is-invalid': errors['tel'] }"
                  v-model="form.user.tel"
                ></VField>
                <ErrorMessage
                  name="tel"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <VField
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  placeholder="請輸入地址"
                  rules="required"
                  :class="{ 'is-invalid': errors['地址'] }"
                  v-model="form.user.address"
                ></VField>
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <VField
                  id="message"
                  class="form-control"
                  name="message"
                  cols="30"
                  rows="10"
                  as="textarea"
                  v-model="form.message"
                ></VField>
              </div>
              <div class="text-end">
                <button
                  type="submit"
                  class="btn btn-primary btn-primary-hover border-0"
                  :disabled="isFormEmpty"
                >
                  送出訂單
                </button>
              </div>
            </VForm>
          </div>
          <div class="col-md-4 mt-4 mt-md-0">
            <div class="d-flex justify-content-between">
              <h2 class="h4">購物車清單</h2>
              <button
                class="btn btn-outline-danger"
                type="button"
                @click.prevent="delAllCart"
              >
                清空購物車
              </button>
            </div>
            <hr />
            <div
              class="d-flex justify-content-between mb-1"
              v-for="cart in carts"
              :key="cart.id"
            >
              <span>{{ cart.product.title }}</span>
              <span>NT$ {{ cart.product.price }}</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between mb-1">
              <span>小計</span>
              <span>NT$ {{ total }}</span>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <span class="text-info fw-bold h5">總計</span>
              <span class="text-info fw-bold h6">NT$ {{ final_total }}</span>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="couponCode"
              />
              <button
                class="btn btn-primary btn-primary-hover border-0"
                type="button"
                id="button-addon2"
                @click.prevent="useCoupon"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "@/stores/cartStore";
import { mapActions, mapState } from "pinia";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      form: {
        user: {
          email: "",
          name: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      couponCode: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["carts", "final_total", "total"]),
    isFormEmpty() {
      return Object.values(this.form).some((value) => value === "");
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    useCoupon() {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`;
      const code = {
        code: this.couponCode,
      };
      this.$http
        .post(api, { data: code })
        .then((res) => {
          if (res.data.success) {
            this.couponCode = res.data.code;
            console.log(res.data);
            this.$swal("成功", "優惠券已加入", "success");
            this.getCart();
          }
        })
        .catch((err) => {
          console.log(err);
          this.$swal("失敗", "優惠券已使用", "error");
        });
    },
    delAllCart() {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.$swal("刪除成功", "購物車已清空", "success");
            this.getCart();
          }
        })
        .catch((err) => {
          this.$swal("刪除失敗", "購物車無資料", "error");
        });
    },
    sendOrder() {
      this.isLoading = true;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`;
      this.$http
        .post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            const getOrderId = res.data.orderId;
            this.isLoading = false;
            this.getCart();
            this.$refs.form.resetForm();
            this.$router.push(`/checkout/${getOrderId}`);
          }
        })
        .catch((err) => {
          this.$swal("建立訂單失敗", "請檢查表單資訊", "error");
        });
    },
  },
};
</script>