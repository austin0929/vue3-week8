<template>
    <VueLoading :active="isLoading"></VueLoading>
  <div class="text-end my-4">
    <button
      type="button"
      class="btn btn-primary btn-lg"
      @click.prevent="openCouponModal(true)"
    >
      新增優惠券
    </button>
  </div>
  <table class="table mt-4 table-striped">
    <thead>
      <tr>
        <th width="100"></th>
        <th width="300">名稱</th>
        <th width="150">折扣百分比</th>
        <th width="150">到期日</th>
        <th width="100">是否啟用</th>
        <th width="80">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td><a href="#"  @click.prevent="delCoupon(coupon)"><i class="bi bi-x h3 text-danger"></i></a></td>
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.percent }}</td>
        <td class="text-right">{{ $filters.date(coupon.due_date) }}</td>
        <td>
          <div
              class="bg-success text-center tableStatusActive"
              v-if="coupon.is_enabled"
            >
              <span>啟用</span>
            </div>
            <div class="bg-warning text-center tableStatusInactive" v-else>
              <span>未啟用</span>
            </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click.prevent="openCouponModal(false, coupon)"
            >
              編輯
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal
    ref="cpModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"
  ></CouponModal>
</template>

<script>
import CouponModal from "@/components/CouponModal.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  components: {
    CouponModal,
  },
  data() {
    return {
      tempCoupon: {},
      coupons: [],
      due_date: "",
      isNewCoupon: false,
      isLoading: false
    };
  },
  methods: {
    getCoupon() {
      this.isLoading = true
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons`;
      this.$http.get(api).then((res) => {
        this.coupons = res.data.coupons;
        this.isLoading = false
      });
    },
    openCouponModal(isNewCoupon, coupon) {
      if (isNewCoupon) {
        // 無法清空tempCoupon會報錯 給他預設日期
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...coupon };
      }
      this.isNewCoupon = isNewCoupon;
      const openCpModal = this.$refs.cpModal;
      openCpModal.showModal();
    },
    updateCoupon(coupon) {
      this.tempCoupon = coupon;
      let httpMethods = "post";
      let api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`;
      if (!this.isNewCoupon) {
        api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`;
        httpMethods = "put";
      }
      this.$http[httpMethods](api, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            const closeCpModal = this.$refs.cpModal;
            closeCpModal.hideModal();
            this.getCoupon();
          }
        })
        .catch((err) => {
          this.$swal("更新失敗", "請檢查更新資訊", "error");
        });
    },
    delCoupon(coupon) {
      const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCoupon();
          }
        })
        .catch((err) => {
          this.$swal("刪除失敗", "請檢查coupon內容", "error");
        });
    },
  },
  mounted() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.getCoupon();
  },
};
</script>