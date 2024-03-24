<template>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        opacity: 0.4;
        z-index: -1;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2 class="fw-bold mb-3">走出自己的路</h2>
          <p class="text-muted mb-3">
            我們為你帶來最潮流的選擇，讓你的每一步都閃耀自信與個性。穿上夢想，創造無限可能。
          </p>
          <router-link to="/products" class="btn btn-dark rounded-0 mt-3">選購你的鞋子</router-link>
        </div>
      </div>
    </div>
  </div>
</template>