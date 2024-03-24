<template>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        opacity: 0.4;
        z-index: -1;
      "
    ></div>
    <div class="container d-flex flex-column noto-sans" style="min-height: 100vh">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <i
            class="bi bi-check-circle text-success"
            style="font-size: 64px"
          ></i>
          <h2 class="fw-bold my-3">感謝您的購買</h2>
          <p class="text-muted mb-3 h5">
            優秀的產品品質是我們的責任，<br />希望能帶給更多顧客的良好體驗。
          </p>
          <router-link
            to="/"
            class="btn btn-dark rounded mt-3 btn-lg btn-primary-hover border-0"
            >回首頁</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>