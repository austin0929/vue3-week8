import{M as y}from"./modal-Bu24DjMo.js";import{m as p,a as M,_ as b,o as h,c as _,b as t,F as v,r as k,w as o,t as i,d as C,v as T,e as l,f as c,g as n,h as N,i as m}from"./index-BOfdHV1z.js";import{c as u}from"./cartStore-BqR4YwOw.js";const B={data(){return{modal:null}},computed:{...p(u,["carts","final_total","total"])},methods:{...M(u,["getCart","deleteCart","updateQty"]),showModal(){this.modal.show()},hideModal(){this.modal.hide()},startPay(){this.hideModal(),this.$router.push("/cart")}},mounted(){this.modal=new y(this.$refs.cartModal),this.getCart()}},R={class:"modal fade noto-sans",id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"cartModal"},S={class:"modal-dialog modal-lg",role:"document"},V={class:"modal-content border-0"},D=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"產品名稱")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},j={class:"row"},H={class:"col"},U={class:"table"},q=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品"),t("th",null,"單價"),t("th",{width:"100"},"數量"),t("th",{class:"text-end"},"價格")])],-1),L={style:{"line-height":"50px"}},P=["onClick"],F=t("i",{class:"bi bi-trash text-danger"},null,-1),Q=[F],E={class:"d-flex"},z=["src"],G={class:"cartRwdText h6",style:{"line-height":"50px"}},I={class:"cartRwdText"},J=["onUpdate:modelValue","onChange"],K={class:"text-end cartRwdText"},O={class:"text-end"},W={class:"fw-normal cartRwdText"},X={class:"text-info fw-bold cartRwdText"},Y={class:"modal-footer"},Z=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(a,s,g,f,x,d){return h(),_("div",R,[t("div",S,[t("div",V,[D,t("div",A,[t("div",j,[t("div",H,[t("table",U,[q,t("tbody",L,[(h(!0),_(v,null,k(a.carts,e=>(h(),_("tr",{key:e.id},[t("td",null,[t("a",{href:"#",onClick:o(r=>a.deleteCart(e),["prevent"])},Q,8,P)]),t("td",null,[t("div",E,[t("img",{class:"object-fit-cover d-none d-lg-inline-block me-3",height:"50",width:"100",alt:"",src:e.product.imageUrl},null,8,z),t("h2",G,i(e.product.title),1)])]),t("td",I," NT$ "+i(e.product.origin_price),1),t("td",null,[C(t("input",{type:"number","onUpdate:modelValue":r=>e.qty=r,class:"form-control mt-2",onChange:o(r=>a.updateQty(e.qty,e),["prevent"])},null,40,J),[[T,e.qty,void 0,{number:!0}]])]),t("td",K," NT$ "+i(e.product.price),1)]))),128))])])]),t("div",O,[t("p",W,"小計: NT$ "+i(a.total),1),t("p",X," 總計: NT$ "+i(a.final_total),1)])])]),t("div",Y,[Z,t("button",{type:"button",class:"btn btn-primary btn-primary-hover border-0",onClick:s[0]||(s[0]=o((...e)=>d.startPay&&d.startPay(...e),["prevent"]))}," 結帳去 ")])])])],512)}const et=b(B,[["render",tt]]),st={components:{CartModal:et},computed:{...p(u,["carts"])},methods:{openCartModal(){this.$refs.cartModal.showModal()}}},at={class:"container"},ot={class:"bg-primary fixed-top"},lt={class:"navbar navbar-expand-lg navbar-light container px-3 px-0"},nt=t("button",{class:"navbar-toggler bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),it={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},dt={class:"navbar-nav"},rt={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},ct=t("span",{class:"visually-hidden"},"unread messages",-1),ht={class:"bg-dark py-5"},_t={class:"container"},mt={class:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},ut={class:"d-flex list-unstyled mb-0 h4"},pt=t("i",{class:"bi bi-facebook"},null,-1),bt=[pt],vt=t("i",{class:"bi bi-instagram"},null,-1),gt=[vt],ft=t("i",{class:"bi bi-line"},null,-1),xt=[ft],$t={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},wt={class:"mb-md-0 mb-1"},yt=t("p",{class:"mb-0"},"02-4512-4787",-1),Mt=t("p",{class:"mb-0"},"DavidShoes@mail.com",-1),kt=t("p",{class:"mb-0"},"© 2024 DavidShoes All Rights Reserved.",-1);function Ct(a,s,g,f,x,d){const e=m("router-link"),r=m("router-view"),$=m("CartModal");return h(),_(v,null,[t("div",at,[t("div",ot,[t("nav",lt,[l(e,{to:"/index",class:"navbar-brand text-light fw-bold"},{default:c(()=>[n("DavidShoes")]),_:1}),nt,t("div",it,[t("div",dt,[l(e,{to:"/about",class:"nav-item nav-link me-4 text-light navBarHover"},{default:c(()=>[n("關於我們")]),_:1}),l(e,{to:"/products",class:"nav-item nav-link me-4 text-light navBarHover"},{default:c(()=>[n("產品列表")]),_:1}),t("a",{href:"#",class:"nav-item nav-link me-4",onClick:s[1]||(s[1]=o(()=>{},["prevent"]))},[t("i",{class:"bi bi-cart3 position-relative text-light navBarHover",onClick:s[0]||(s[0]=o((...w)=>d.openCartModal&&d.openCartModal(...w),["prevent"]))},[!a.carts.length==0?(h(),_("span",rt,[n(i(a.carts.length)+" ",1),ct])):N("",!0)])])])])])])]),l(r),t("div",ht,[t("div",_t,[t("div",mt,[l(e,{class:"text-white h4",to:"/index"},{default:c(()=>[n("DavidShoes")]),_:1}),t("ul",ut,[t("li",null,[t("a",{href:"#",class:"text-white mx-3",onClick:s[2]||(s[2]=o(()=>{},["prevent"]))},bt)]),t("li",null,[t("a",{href:"#",class:"text-white mx-3",onClick:s[3]||(s[3]=o(()=>{},["prevent"]))},gt)]),t("li",null,[t("a",{href:"#",class:"text-white ms-3",onClick:s[4]||(s[4]=o(()=>{},["prevent"]))},xt)])])]),t("div",$t,[t("div",wt,[l(e,{to:"/login",class:"mb-0 text-light navBarHover"},{default:c(()=>[n("後台登入")]),_:1}),yt,Mt]),kt])])]),l($,{ref:"cartModal"},null,512)],64)}const Rt=b(st,[["render",Ct]]);export{Rt as default};
