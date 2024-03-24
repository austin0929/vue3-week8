<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container mt-7 noto-sans">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-around mb-4">
          <span class="border h4 px-lg-6 px-3 py-4 bg-primary text-light"
            >訂單資料</span
          >
          <span class="border h4 px-lg-6 px-3 py-4 border-primary"
            >付款確認</span
          >
          <span class="border h4 px-lg-6 px-3 py-4 bg-primary text-light"
            >完成訂單</span
          >
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th width="250">產品</th>
                  <th width="200">原價</th>
                  <th width="200">售價</th>
                  <th width="200" class="text-end">數量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>NT$ {{ item.product.origin_price }}</td>
                  <td>NT$ {{ item.product.price }}</td>
                  <td class="text-end">4</td>
                </tr>
              </tbody>
              <tfoot>
                <tr v-for="price in order.products" :key="price">
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">NT$ {{ price.total }}</td>
                </tr>
                <tr>
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">NT$ {{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
            <div>
              <h2 class="h3">訂購人資料</h2>
              <template v-if="order.user">
                <table class="table">
                  <tbody>
                    <tr>
                      <th width="130">姓名</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th width="130">Email</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th width="130">電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th width="130">地址</th>
                      <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                      <th width="130">備註</th>
                      <td>{{ order.message }}</td>
                    </tr>
                    <tr>
                      <th width="130">付款狀態</th>
                      <td class="text-success" v-if="order.is_paid">已付款</td>
                      <td class="text-danger" v-else>未付款</td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-end my-4">
                  <button
                    class="btn btn-primary btn-primary-hover border-0 text-end"
                    @click.prevent="payOrder(order.id)"
                  >
                    確認付款
                  </button>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {},
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      this.isLoading = true;
      const getOrderId = this.$route.params.id;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${getOrderId}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.order = res.data.order;
          }
        })
        .catch((err) => {
          this.$swal("讀取失敗", "無法渲染", "error");
        });
    },
    payOrder(orderId) {
      this.isLoading = true;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${orderId}`;
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getOrder();
            this.$router.push("/checkoutDone");
          }
        })
        .catch((err) => {
          this.$swal("付款失敗", "請確認付款資訊", "error");
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>