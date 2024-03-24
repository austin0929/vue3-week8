import { defineStore } from 'pinia'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('cartStore', {
    state: () => ({
        carts: [],
        final_total: 0,
        total: 0,
    }),
    actions: {
        getCart() {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
            axios.get(api).then((res) => {
                if (res.data.success) {
                  this.carts = res.data.data.carts
                  this.final_total = res.data.data.final_total
                  this.total = res.data.data.total
                }
            }).catch((err) => {
                toast("讀取失敗", {
                    "theme": "auto",
                    "type": "error",
                    "autoClose": 1500,
                    "dangerouslyHTMLString": true
                })
            })
        },
        addToCart(product) {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
            const cartData = {
                product_id: product.id,
                qty: 1
            }
            axios.post(api, { data: cartData }).then((res) => {
                if (res.data.success) {
                    toast("成功加入購物車", {
                        "theme": "auto",
                        "type": "success",
                        "autoClose": 1500,
                        "dangerouslyHTMLString": true
                    })
                    this.getCart()
                }
            }).catch((err) => {
                toast("加入購物車失敗", {
                    "theme": "auto",
                    "type": "error",
                    "autoClose": 1500,
                    "dangerouslyHTMLString": true
                })
            })
        },
        deleteCart(cart) {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cart.id}`;
            axios.delete(api).then((res) => {
                if (res.data.success) {
                    this.getCart()
                }
            }).catch((err) => {
                toast("刪除購物車失敗", {
                    "theme": "auto",
                    "type": "error",
                    "autoClose": 1500,
                    "dangerouslyHTMLString": true
                })
            })
        },
        updateQty(qty, cart) {
            const api = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cart.id}`;
            console.log(cart.product.id);
            const updateCart = {
                product_id: cart.product.id,
                qty: qty
            }
            axios.put(api, { data: updateCart }).then((res) => {
                if (res.data.success) {
                    this.getCart()
                }
            }).catch((err) => {
                toast("更新購物車失敗", {
                    "theme": "auto",
                    "type": "error",
                    "autoClose": 1500,
                    "dangerouslyHTMLString": true
                })
            })
        },
    }
})
