<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-5">
        <h1 class="fw-bold text-center">DavidShoes</h1>
        <span class="h2 text-center d-block fw-normal">管理者登入</span>
        <form @submit.prevent="signIn">
          <input
            type="text"
            class="form-control mb-3"
            placeholder="請輸入信箱"
            v-model="user.username"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="請輸入密碼"
            class="form-control"
            v-model="user.password"
          />
          <div class="text-center mt-3">
            <button class="btn btn btn-outline-primary" type="button">
              回賣場
            </button>
            <button class="btn btn-primary mx-3" type="submit">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      const api = `${VITE_APP_URL}/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `vuetoken=${token}; expires=${new Date(
              expired
            )};`;
            this.$router.push('/admin/adminproducts')
          }
        })
        .catch((err) => {
          this.$swal("無此使用者", "請重新登入", "error");
        });
    },
  },
};
</script>