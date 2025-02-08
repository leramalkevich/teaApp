import{a as z}from"./chunk-UKDRGXFQ.js";import{a as T}from"./chunk-H2IJPMTS.js";import{A as E,B as N,C as B,D as A,E as f,F as a,G as g,J as R,K as v,L,M as x,N as H,P as w,T as Q,V as M,W as S,Y as C,e as b,g as h,l as D,m as _,n as c,o as u,p as l,q as y,r as s,s as d,u as n,v as r,w as p,wa as V,z as I}from"./chunk-SHQWFIFR.js";var K=e=>["/catalogue",e];function W(e,i){e&1&&p(0,"div")}function X(e,i){if(e&1&&(n(0,"div",6),p(1,"img",7),r()),e&2){let t=I();c(),E("src",t.product.image,_)}}function Y(e,i){e&1&&(n(0,"div",6),p(1,"img",8),r())}var O=class e{product;addToCardEvent=new D;constructor(){this.product={id:0,image:"",price:0,title:"",description:""}}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["cardComponent"]],inputs:{product:"product"},outputs:{addToCardEvent:"addToCardEvent"},standalone:!1,decls:10,vars:8,consts:[["productImageBlock",""],["defaultImageBlock",""],[1,"col","product-item","border","rounded-1","mb-4"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"product-title","mt-3","mb-4","text-center","mx-2","fw-bold","fs-5",3,"title"],["type","button",1,"btn","btn-primary","mb-4","mx-auto","d-flex","justify-content-center",3,"routerLink"],[1,"product-image"],[3,"src"],["src","assets/images/logo.png","alt","Logo"]],template:function(t,o){if(t&1&&(n(0,"div",2),s(1,W,1,0,"div",3)(2,X,2,1,"ng-template",null,0,v)(4,Y,2,0,"ng-template",null,1,v),n(6,"h5",4),a(7),r(),n(8,"a",5),a(9,"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"),r()()),t&2){let m=f(3),q=f(5);c(),d("ngIf",o.product.image)("ngIfThen",m)("ngIfElse",q),c(5),d("title",o.product.title),c(),g(o.product.title),c(),d("routerLink",R(6,K,o.product.id))}},dependencies:[x,S],styles:[".product-item[_ngcontent-%COMP%]{max-width:320px}.product-image[_ngcontent-%COMP%]{text-decoration:none;max-width:320px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.product-text[_ngcontent-%COMP%]{max-width:320px}"]})};var it=["title"];function ot(e,i){if(e&1&&p(0,"cardComponent",7),e&2){let t=i.$implicit;d("product",t)}}function nt(e,i){e&1&&(n(0,"div",8),p(1,"div",9),r())}var j=class e{constructor(i,t,o,m){this.http=i;this.router=t;this.productService=o;this.productRequest=m}title;products=[];loading=!1;ngOnInit(){this.loading=!0,this.productRequest.getProducts().pipe(b(()=>{this.loading=!1})).subscribe({next:i=>{this.products=i},error:i=>{console.log(i),this.router.navigate(["/"])}})}ngAfterViewInit(){this.productService.subject.subscribe(i=>{i&&i!==""?this.productRequest.searchProducts(i.toString()).pipe(b(()=>{this.loading=!1})).subscribe(t=>{let o=t.map(m=>m.title);o&&o[0]!==void 0?(this.title.nativeElement.innerText='\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 "'+i+'"',this.products=t):(this.products=[],this.title.nativeElement.innerText="\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!")}):this.productRequest.getProducts().pipe(b(()=>{this.loading=!1,this.title.nativeElement.innerText="\u041D\u0430\u0448\u0438 \u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438"})).subscribe({next:t=>{this.products=t},error:t=>{console.log(t),this.router.navigate(["/"])}})})}static \u0275fac=function(t){return new(t||e)(u(w),u(M),u(z),u(T))};static \u0275cmp=l({type:e,selectors:[["product-cards"]],viewQuery:function(t,o){if(t&1&&N(it,5),t&2){let m;B(m=A())&&(o.title=m.first)}},standalone:!1,decls:8,vars:2,consts:[["title",""],[1,"products","text-black"],[1,"container"],[1,"my-sm-5","fw-bold","fs-2","text-center"],[1,"product-items","d-flex","flex-row","justify-content-sm-center","justify-content-lg-between","align-items-sm-center","pb-5","flex-wrap","mb-5"],[3,"product",4,"ngFor","ngForOf"],["class","loader-bg d-flex justify-content-center align-items-center w-100 h-100 position-fixed top-0 bg-black bg-opacity-50",4,"ngIf"],[3,"product"],[1,"loader-bg","d-flex","justify-content-center","align-items-center","w-100","h-100","position-fixed","top-0","bg-black","bg-opacity-50"],["role","status",1,"spinner-border","text-primary","loader"]],template:function(t,o){t&1&&(n(0,"section",1)(1,"div",2)(2,"h3",3,0),a(4,"\u041D\u0430\u0448\u0438 \u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438"),r(),n(5,"div",4),s(6,ot,1,1,"cardComponent",5),r(),s(7,nt,2,0,"div",6),r()()),t&2&&(c(6),d("ngForOf",o.products),c(),d("ngIf",o.loading))},dependencies:[L,x,O],styles:["product-cards[_ngcontent-%COMP%]{flex:1 0 auto}.loader-bg[_ngcontent-%COMP%]{left:0}.loader[_ngcontent-%COMP%]{width:150px;height:150px;padding:8px;aspect-ratio:1;border-radius:50%;border:15px solid #0d6efd;border-top:15px solid #0d6efd;--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:_ngcontent-%COMP%_spin 1s infinite linear}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})};var rt=e=>({product:e});function ct(e,i){e&1&&p(0,"div")}function at(e,i){if(e&1&&(n(0,"div",15),p(1,"img",16),r()),e&2){let t=I();c(),E("src",t.product.image,_)}}function dt(e,i){e&1&&(n(0,"div",17),p(1,"img",18),r())}var F=class e{constructor(i,t,o,m){this.http=i;this.activatedRoute=t;this.router=o;this.productRequest=m;this.product={id:0,image:"",price:0,title:"",description:""}}product;ngOnInit(){this.activatedRoute.params.subscribe(i=>{i.id&&this.productRequest.getProduct(+i.id).subscribe({next:t=>{this.product=t},error:()=>{this.router.navigate(["/"])}})})}static \u0275fac=function(t){return new(t||e)(u(w),u(Q),u(M),u(T))};static \u0275cmp=l({type:e,selectors:[["product-page"]],standalone:!1,decls:25,vars:10,consts:[["productImageBlock",""],["defaultImageBlock",""],["elem",""],[1,"products"],[1,"container"],[1,"product-title","mt-3","mb-3","text-center","mx-4","fw-bold","fs-3"],[1,"product-item","border","rounded-1","mb-5","mx-auto"],[1,"product-title","mt-4","mb-4","text-center","mx-4","fw-bold","fs-5",3,"title"],[1,"d-flex","flex-column","flex-lg-row","justify-content-lg-center","align-items-lg-center","mb-3"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"product-text","mx-4","mb-4"],[1,"mx-4","mb-3"],[1,"fs-5"],[1,"product-action"],["routerLink","/order",1,"btn","btn","btn-primary","mx-4","mb-4",3,"queryParams"],[1,"product-image","mx-auto"],[3,"src"],[1,"product-image"],["src","assets/images/logo.png","alt","Logo"]],template:function(t,o){if(t&1&&(n(0,"section",3)(1,"div",4)(2,"h2",5),a(3,"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0447\u0430\u044F"),r(),n(4,"div",6)(5,"h5",7),a(6),r(),n(7,"div",8),s(8,ct,1,0,"div",9)(9,at,2,1,"ng-template",null,0,v)(11,dt,2,0,"ng-template",null,1,v),n(13,"div")(14,"p",10),a(15),r(),n(16,"div",11),a(17,"\u0426\u0435\u043D\u0430: "),n(18,"span",12),a(19),r(),a(20," \u0440\u0443\u0431."),r(),n(21,"div",13,2)(23,"a",14),a(24,"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"),r()()()()()()()),t&2){let m=f(10),q=f(12);c(5),d("title",o.product.title),c(),g(o.product.title),c(2),d("ngIf",o.product.image)("ngIfThen",m)("ngIfElse",q),c(7),g(o.product.description),c(4),g(o.product.price),c(4),d("queryParams",R(8,rt,o.product.title))}},dependencies:[x,S],styles:[".product-image[_ngcontent-%COMP%]{text-decoration:none;max-width:500px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.product-text[_ngcontent-%COMP%]{max-width:650px}@media screen and (max-width: 575px){.product-item[_ngcontent-%COMP%]{width:100%}}"]})};var pt=[{path:"",component:j},{path:":id",component:F}],P=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=h({imports:[C.forChild(pt),C]})};var J=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=h({imports:[H,V,C,P,P]})};export{J as ProductsModule};
