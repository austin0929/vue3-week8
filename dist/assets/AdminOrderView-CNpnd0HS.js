import{P as M}from"./PaginationCp-C5LhyMLt.js";import{M as w}from"./modal-CdBf2gkf.js";import{_ as $,o as l,c as n,b as t,t as o,h as v,F as p,r as k,w as D,e as g,i as b,d as O,I as x}from"./index-CPAp1LdQ.js";const P={props:["order"],data(){return{modal:null,tempOrder:{},localDate:"",payDate:""}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},watch:{order(){this.tempOrder=this.order;const d=this.tempOrder.create_at,s=new Date(d*1e3),e=s.getFullYear(),_=s.getMonth()+1,a=s.getDate();this.localDate=`${e}/${_}/${a}`;const c=this.order.paid_date,r=new Date(c*1e3),u=r.getFullYear(),m=r.getMonth()+1,i=r.getDate();this.payDate=`${u}/${m}/${i}`}},mounted(){this.modal=new w(this.$refs.orderModal)}},C={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},V={class:"modal-dialog modal-xl",role:"document"},L={class:"modal-content border-0"},E=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},A={class:"row"},S={class:"col-md-4"},U=t("h3",null,"用戶資料",-1),I={class:"table"},F={key:0},R=t("th",{style:{width:"100px"}},"姓名",-1),B=t("th",null,"Email",-1),N=t("th",null,"電話",-1),Y=t("th",null,"地址",-1),q={class:"col-md-8"},H=t("h3",null,"訂單細節",-1),j={class:"table"},z=t("th",{style:{width:"100px"}},"訂單編號",-1),G=t("th",null,"下單時間",-1),J=t("th",null,"付款時間",-1),K={key:0},Q={key:1},W=t("th",null,"付款狀態",-1),X={key:0,class:"text-success"},Z={key:1,class:"text-muted"},tt=t("th",null,"總金額",-1),et=t("h3",null,"選購商品",-1),st={class:"table"},ot=t("thead",null,[t("tr")],-1),at={class:"text-end"},lt={class:"modal-footer"},nt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function dt(d,s,e,_,a,c){return l(),n("div",C,[t("div",V,[t("div",L,[E,t("div",T,[t("div",A,[t("div",S,[U,t("table",I,[e.order.user?(l(),n("tbody",F,[t("tr",null,[R,t("td",null,o(e.order.user.name),1)]),t("tr",null,[B,t("td",null,o(e.order.user.email),1)]),t("tr",null,[N,t("td",null,o(e.order.user.tel),1)]),t("tr",null,[Y,t("td",null,o(e.order.user.address),1)])])):v("",!0)])]),t("div",q,[H,t("table",j,[t("tbody",null,[t("tr",null,[z,t("td",null,o(e.order.id),1)]),t("tr",null,[G,t("td",null,o(a.localDate),1)]),t("tr",null,[J,t("td",null,[e.order.is_paid?(l(),n("span",K,o(a.payDate),1)):(l(),n("span",Q,"時間不正確"))])]),t("tr",null,[W,t("td",null,[e.order.is_paid?(l(),n("strong",X,"已付款")):(l(),n("span",Z,"尚未付款"))])]),t("tr",null,[tt,t("td",null,o(e.order.total),1)])])]),et,t("table",st,[ot,t("tbody",null,[(l(!0),n(p,null,k(e.order.products,r=>(l(),n("tr",{key:r.id},[t("th",null,o(r.product.title),1),t("td",at,o(r.qty),1),t("td",null,o(r.product.unit),1)]))),128))])])])])]),t("div",lt,[nt,t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=D(r=>c.hideModal(),["prevent"]))},"確認")])])])],512)}const it=$(P,[["render",dt]]);var rt={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david777",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:y,VITE_APP_PATH:f}=rt,ct={components:{Pagination:M,CheckOrderModal:it},data(){return{orders:[],pagination:{},localDate:"",tempOrder:{},isLoading:!1}},methods:{getOrders(d=1){this.isLoading=!0;const s=`${y}/api/${f}/orders?page=${d}`;this.$http.get(s).then(e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.getDate(),this.isLoading=!1})},getDate(){this.orders.forEach(d=>{if(this.orders){const s=new Date(d.create_at*1e3);let e=s.getFullYear(),_=s.getMonth()+1,a=s.getDate();this.localDate=`${e}/${_}/${a}`}})},delOrder(d){const s=`${y}/api/${f}/admin/order/${d}`;this.$http.delete(s).then(e=>{e.data.success&&this.getOrders()}).catch(e=>{this.$swal("刪除失敗","無訂單資料","error")})},updatePaid(d){const s=`${y}/api/${f}/admin/order/${d.id}`,a=Math.floor(new Date().getTime()/1e3).toString(),c=parseInt(a),r={is_paid:d.is_paid,paid_date:c};this.$http.put(s,{data:r}).then(u=>{this.getOrders()}).catch(u=>{this.$swal("更新失敗","請重新檢查資訊","error")})},CheckModal(d){this.tempOrder={...d},this.$refs.checkModal.showModal()}},mounted(){this.getOrders()}},ht={class:"table table-striped mt-4"},_t=t("thead",null,[t("tr",null,[t("th"),t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",{width:"150"},"應付金額"),t("th",{width:""},"是否付款"),t("th",null,"編輯")])],-1),ut={class:"pt-1"},pt={href:"#"},mt=["onClick"],gt={class:"list-unstyled"},bt={class:"text-right"},yt={class:"form-check form-switch"},ft=["id","onUpdate:modelValue","onChange"],kt=["for"],Dt={key:0},$t={key:1},vt={class:"btn-group"},Mt=["onClick"];function wt(d,s,e,_,a,c){const r=b("VueLoading"),u=b("Pagination"),m=b("CheckOrderModal");return l(),n(p,null,[t("table",ht,[g(r,{active:a.isLoading},null,8,["active"]),_t,t("tbody",null,[a.orders?(l(!0),n(p,{key:0},k(a.orders,i=>(l(),n("tr",{key:i.id},[t("td",ut,[t("a",pt,[t("i",{class:"bi bi-x h3 text-danger",onClick:D(h=>c.delOrder(i.id),["prevent"])},null,8,mt)])]),t("td",null,o(a.localDate),1),t("td",null,[t("span",null,o(i.user.email),1)]),t("td",null,[t("ul",gt,[(l(!0),n(p,null,k(i.products,h=>(l(),n("li",{key:h.id},o(h.product.title)+" "+o(h.qty)+" / "+o(h.product.unit),1))),128))])]),t("td",bt,o(i.total),1),t("td",null,[t("div",yt,[O(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${i.id}`,"onUpdate:modelValue":h=>i.is_paid=h,onChange:h=>c.updatePaid(i)},null,40,ft),[[x,i.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${i.id}`},[i.is_paid?(l(),n("span",Dt,"已付款")):(l(),n("span",$t,"未付款"))],8,kt)])]),t("td",null,[t("div",vt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:D(h=>c.CheckModal(i),["prevent"])}," 檢視 ",8,Mt)])])]))),128)):v("",!0)])]),g(u,{pages:a.pagination,onUpdatePage:c.getOrders},null,8,["pages","onUpdatePage"]),g(m,{ref:"checkModal",order:a.tempOrder},null,8,["order"])],64)}const Ct=$(ct,[["render",wt]]);export{Ct as default};
