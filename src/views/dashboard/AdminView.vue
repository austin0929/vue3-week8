<template>
  <div class="ps-2">
    <div class="row vh-100">
      <ul class="col-2 bg-primary text-light my-0">
        <h1 class="fw-bold h2 my-4">後台管理面板</h1>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/adminproducts" class="list-group-item h3"
            >產品列表</router-link
          >
        </li>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/order" class="list-group-item h3"
            >訂單資料</router-link
          >
        </li>
        <li class="list-group-item h3 mb-3">
          <router-link to="/admin/coupon" class="list-group-item h3"
            >優惠券</router-link
          >
        </li>
        <li>
          <button
            type="button"
            class="list-group-item h3"
            @click.prevent="logOut"
          >
            登出
          </button>
        </li>
      </ul>
      <div class="col-8 offset-md-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;
export default {
  methods: {
    logOut() {
      const api = `${VITE_APP_URL}/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
           document.cookie = "vuetoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          this.$router.push("/index");
        }
      });
    },
  },
  mounted() {
    const api = `${VITE_APP_URL}/api/user/check`;
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.$http
      .post(api)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        this.$router.push("/");
      }).catch((err) => {
        this.$swal("登出失敗", "請檢察登入資訊", "error");
      })
  },
};
</script>