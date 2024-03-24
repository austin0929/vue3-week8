<template>
  <table class="table table-striped mt-4">
    <VueLoading :active="isLoading"></VueLoading>
    <thead>
      <tr>
        <th></th>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th width="150">應付金額</th>
        <th width="">是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="orders">
        <tr v-for="order in orders" :key="order.id">
          <td class="pt-1">
            <a href="#"
              ><i
                class="bi bi-x h3 text-danger"
                @click.prevent="delOrder(order.id)"
              ></i
            ></a>
          </td>
          <td>{{ localDate }}</td>
          <td>
            <span>{{ order.user.email }}</span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">
                {{ product.product.title }} {{ product.qty }} /
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ order.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click.prevent="CheckModal(order)"
              >
                檢視
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Pagination :pages="pagination" @update-page="getOrders"></Pagination>
  <CheckOrderModal ref="checkModal" :order="tempOrder"></CheckOrderModal>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Pagination from "@/components/PaginationCp.vue";
import CheckOrderModal from "@/components/CheckOrderModal.vue";
export default {
  components: {
    Pagination,
    CheckOrderModal,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      localDate: "",
      tempOrder: {},
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        this.getDate();
        this.isLoading = false;
      });
    },
    getDate() {
      this.orders.forEach((item) => {
        if (this.orders) {
          const date = new Date(item.create_at * 1000);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          this.localDate = `${year}/${month}/${day}`;
        }
      });
    },
    delOrder(orderId) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${orderId}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrders();
          }
        })
        .catch((err) => {
          this.$swal("刪除失敗", "無訂單資料", "error");
        });
    },
    updatePaid(order) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`;
      const paidDate = new Date();
      const paidDateCurrentTime = Math.floor(paidDate.getTime() / 1000);
      const formattedTime = paidDateCurrentTime.toString();
      const changeNum = parseInt(formattedTime)
      const paid = {
        is_paid: order.is_paid,
        paid_date: changeNum
      };
      this.$http.put(api, { data: paid }).then((res) => {
        this.getOrders();
      }).catch((err) => {
        this.$swal("更新失敗", "請重新檢查資訊", "error");
      })
    },
    CheckModal(order) {
      this.tempOrder = { ...order };
      const checkOrderModal = this.$refs.checkModal;
      checkOrderModal.showModal();
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

