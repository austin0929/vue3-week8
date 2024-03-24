import{P as w}from"./PaginationCp-Cu91aatK.js";import{M as x}from"./modal-Bu24DjMo.js";import{_ as U,o as i,c as n,b as t,d as r,v as a,F as y,r as M,h as V,I as $,w as b,e as g,i as f,g as A,t as v}from"./index-BOfdHV1z.js";const C={props:["product"],data(){return{modal:null,tempProduct:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},addProduct(){this.$emit("update-product",this.tempProduct)}},watch:{product(){this.tempProduct=this.product}},mounted(){this.modal=new x(this.$refs.productModal)}},L={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},I=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},S={class:"row"},D={class:"col-sm-4"},R={class:"mb-2"},B={class:"mb-3"},F=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),H=["src"],O={key:0},z=["src"],j=["onUpdate:modelValue"],q=t("div",null,null,-1),G={class:"col-sm-8"},J={class:"mb-3"},K=t("label",{for:"title",class:"form-label"},"標題",-1),Q={class:"row"},W={class:"mb-3 col-md-6"},X=t("label",{for:"category",class:"form-label"},"分類",-1),Y={class:"mb-3 col-md-6"},Z=t("label",{for:"price",class:"form-label"},"單位",-1),tt={class:"row"},ot={class:"mb-3 col-md-6"},et=t("label",{for:"origin_price",class:"form-label"},"原價",-1),st={class:"mb-3 col-md-6"},lt=t("label",{for:"price",class:"form-label"},"售價",-1),dt=t("hr",null,null,-1),it={class:"mb-3"},nt=t("label",{for:"description",class:"form-label"},"產品描述",-1),rt={class:"mb-3"},ct=t("label",{for:"content",class:"form-label"},"說明內容",-1),at={class:"mb-3"},ut={class:"form-check"},pt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),mt={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _t(d,o,l,p,e,u){return i(),n("div",L,[t("div",T,[t("div",E,[I,t("div",N,[t("div",S,[t("div",D,[t("div",R,[t("div",B,[F,r(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s)},null,512),[[a,e.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,H)]),Array.isArray(e.tempProduct.imagesUrl)?(i(),n("div",O,[(i(!0),n(y,null,M(e.tempProduct.imagesUrl,(s,m)=>(i(),n("div",{key:s},[t("img",{src:s,alt:"",class:"img-fluid"},null,8,z),r(t("input",{type:"text","onUpdate:modelValue":P=>e.tempProduct.imagesUrl[m]=P,class:"form-control"},null,8,j),[[a,e.tempProduct.imagesUrl[m]]])]))),128)),e.tempProduct.imagesUrl.length===0||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?(i(),n("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(i(),n("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):V("",!0),q]),t("div",G,[t("div",J,[K,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s)},null,512),[[a,e.tempProduct.title]])]),t("div",Q,[t("div",W,[X,r(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s)},null,512),[[a,e.tempProduct.category]])]),t("div",Y,[Z,r(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s)},null,512),[[a,e.tempProduct.unit]])])]),t("div",tt,[t("div",ot,[et,r(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s)},null,512),[[a,e.tempProduct.origin_price]])]),t("div",st,[lt,r(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s)},null,512),[[a,e.tempProduct.price]])])]),dt,t("div",it,[nt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s)},`\r
                `,512),[[a,e.tempProduct.description]])]),t("div",rt,[ct,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s)},`\r
                `,512),[[a,e.tempProduct.content]])]),t("div",at,[t("div",ut,[r(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s)},null,512),[[$,e.tempProduct.is_enabled]]),pt])])])])]),t("div",mt,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=b((...s)=>u.addProduct&&u.addProduct(...s),["prevent"]))}," 確認 ")])])])],512)}const bt=U(C,[["render",_t]]);var Pt={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david777",BASE_URL:"/vue3-week8",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:h,VITE_APP_PATH:_}=Pt,gt={components:{Pagination:w,ProductModal:bt},data(){return{tempProduct:{},products:[],pagination:{},isNewProdcut:!1,isLoading:!1}},methods:{getProducts(d=1){this.isLoading=!0;const o=`${h}/api/${_}/admin/products?page=${d}`;this.$http.get(o).then(l=>{l.data.success&&(this.products=l.data.products,this.pagination=l.data.pagination,this.isLoading=!1)}).catch(l=>{this.$swal("失敗","無法渲染畫面","error")})},openModal(d,o){d?this.tempProduct={}:this.tempProduct={...o},this.isNewProdcut=d,Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.$refs.productModal.showModal()},updateProduct(d){this.tempProduct=d;let o=`${h}/api/${_}/admin/product`,l="post";this.isNewProdcut||(o=`${h}/api/${_}/admin/product/${d.id}`,l="put"),this.$http[l](o,{data:this.tempProduct}).then(p=>{p.data.success&&(console.log(p),this.tempProduct={},this.$refs.productModal.hideModal(),this.getProducts())}).catch(p=>{this.$swal("新增產品失敗","請重新確認產品規格","error")})},delProduct(d){const o=`${h}/api/${_}/admin/product/${d}`;this.$http.delete(o).then(l=>{l.data.success&&this.getProducts()}).catch(l=>{console.log(l)})}},mounted(){const d=document.cookie.replace(/(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=d,this.getProducts()}},ft={class:"container"},vt={class:"text-end my-4"},yt={class:"table table-striped productTable"},Ut=t("thead",null,[t("tr",null,[t("th",{width:"10"}),t("th",{width:"10"}),t("th",null,"產品名稱"),t("th",null,"原價"),t("th",null,"售價"),t("th",{width:"150"},"狀態"),t("th",{width:"100"},"編輯")])],-1),Mt={class:"pt-3"},kt=["onClick"],wt=t("i",{class:"bi bi-x h3 text-danger"},null,-1),xt=[wt],Vt=t("td",null,null,-1),$t=["src"],At={key:0,class:"bg-success text-center tableStatusActive"},Ct=t("span",null,"啟用",-1),Lt=[Ct],Tt={key:1,class:"bg-warning text-center tableStatusInactive"},Et=t("span",null,"未啟用",-1),It=[Et],Nt=["onClick"];function St(d,o,l,p,e,u){const s=f("VueLoading"),m=f("Pagination"),P=f("ProductModal");return i(),n(y,null,[t("div",ft,[g(s,{active:e.isLoading},null,8,["active"]),t("div",vt,[t("button",{class:"btn btn-lg btn-primary",onClick:o[0]||(o[0]=b(c=>u.openModal(!0),["prevent"]))}," 新增產品 ")]),t("table",yt,[Ut,t("tbody",null,[(i(!0),n(y,null,M(e.products,c=>(i(),n("tr",{key:c.id},[t("td",Mt,[t("a",{href:"#",onClick:b(k=>u.delProduct(c.id),["prevent"])},xt,8,kt)]),Vt,t("td",null,[t("img",{alt:"",class:"",width:"80",height:"60",src:c.imageUrl},null,8,$t),A(" "+v(c.title),1)]),t("td",null,v(c.origin_price),1),t("td",null,v(c.price),1),t("td",null,[c.is_enabled?(i(),n("div",At,Lt)):(i(),n("div",Tt,It))]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:b(k=>u.openModal(!1,c),["prevent"])}," 編輯 ",8,Nt)])]))),128))])])]),g(m,{pages:e.pagination,onUpdatePage:u.getProducts},null,8,["pages","onUpdatePage"]),g(P,{ref:"productModal",product:e.tempProduct,onUpdateProduct:u.updateProduct},null,8,["product","onUpdateProduct"])],64)}const Ft=U(gt,[["render",St]]);export{Ft as default};
