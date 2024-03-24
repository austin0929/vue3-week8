<template>
  <div
    class="modal fade noto-sans"
    id="cartModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="cartModal"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>產品名稱</span>
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
            <div class="col">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>產品</th>
                    <th>單價</th>
                    <th width="100">數量</th>
                    <th class="text-end">價格</th>
                  </tr>
                </thead>
                <tbody style="line-height: 50px">
                  <tr v-for="cart in carts" :key="cart.id">
                    <td>
                      <a href="#" @click.prevent="deleteCart(cart)"><i class="bi bi-trash text-danger"></i></a>
                    </td>
                    <td>
                      <div class="d-flex">
                        <img
                          class="object-fit-cover d-none d-lg-inline-block me-3"
                          height="50"
                          width="100"
                          alt=""
                          :src="cart.product.imageUrl"
                        />
                        <h2 class="cartRwdText h6" style="line-height: 50px">
                          {{ cart.product.title }}
                        </h2>
                      </div>
                    </td>
                    <td class="cartRwdText">
                      NT$ {{ cart.product.origin_price }}
                    </td>
                    <td>
                      <input type="number"  v-model.number="cart.qty"
                        class="form-control mt-2"
                        @change.prevent="updateQty(cart.qty, cart)">
                    </td>
                    <td class="text-end cartRwdText">
                      NT$ {{ cart.product.price }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-end">
              <p class="fw-normal cartRwdText">小計: NT$ {{ total }}</p>
              <p class="text-info fw-bold cartRwdText">
                總計: NT$ {{ final_total }}
              </p>
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
          <button
            type="button"
            class="btn btn-primary btn-primary-hover border-0"
            @click.prevent="startPay"
          >
            結帳去
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Modal from "bootstrap/js/dist/modal";
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cartStore";

export default {
  data() {
    return {
      modal: null,
    };
  },
  computed: {
    ...mapState(cartStore, ["carts", "final_total", "total"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart","deleteCart","updateQty"]),
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    startPay() {
      this.hideModal();
      this.$router.push("/cart");
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.cartModal);
    this.getCart();
  },
};
</script>

<style>
@media (max-width: 768px) {
  .cartRwdText {
    font-size: 0.65rem;
  }
}
</style>