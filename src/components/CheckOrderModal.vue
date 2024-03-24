<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ localDate }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.is_paid">{{ payDate }}</span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong class="text-success" v-if="order.is_paid"
                        >已付款</strong
                      >
                      <span class="text-muted" v-else>尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ order.total }}</td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="product in order.products" :key="product.id">
                    <th>{{ product.product.title }}</th>
                    <td class="text-end">{{ product.qty }}</td>
                    <td>{{ product.product.unit }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click.prevent="hideModal()">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  props: ["order"],
  data() {
    return {
      modal: null,
      tempOrder: {},
      localDate: "",
      payDate: "",
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  watch: {
    order() {
      this.tempOrder = this.order;
      const getDate = this.tempOrder.create_at;
      const date = new Date(getDate * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      this.localDate = `${year}/${month}/${day}`;

      const pay = this.order.paid_date
      const PayDate = new Date(pay * 1000);
      const payDateYear = PayDate.getFullYear();
      const payDateMonth = PayDate.getMonth() + 1;
      const payDateDay = PayDate.getDate();
      this.payDate = `${payDateYear}/${payDateMonth}/${payDateDay}`;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.orderModal);
  },
};
</script>