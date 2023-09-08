import{r as o,j as e,A as m,m as p}from"./index-7feaa052.js";import{F as b,a as j}from"./index.esm-baa4633e.js";import{T as v}from"./Transact-a12c0ca8.js";const x=(n,a)=>{const i=s=>{s.target.getAttribute("class")=="rotate"||s.target.getAttribute("class")=="checkedCat"||s.target.getAttribute("class")=="roles_category"||s.target.getAttribute("class")=="checkedArrow"||s.target.getAttribute("class")=="checkedJob"||s.target.getAttribute("class")=="roles_job"||n.current&&!n.current.contains(s.target)&&a()};o.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}))},N=()=>{const[n,a]=o.useState({category:!1,job:!1}),[i,s]=o.useState({category:"All Category",job:"All Job Types"}),f=t=>{const r=t.target,c=(r==null?void 0:r.textContent)||void 0;t.stopPropagation(),c&&s(l=>({...l,category:c})),a(l=>({...l,category:!1}))},g=t=>{t.stopPropagation(),s(r=>({...r,job:t.target.textContent})),a(r=>({...r,job:!1}))},d=o.useRef(null),h=o.useRef(null);x(d,()=>{n.category&&a(t=>({...t,category:!t.category}))}),x(h,()=>{n.job&&a(t=>({...t,job:!t.job}))});const u=o.useRef(null),y=()=>{var t;(t=u.current)==null||t.scrollIntoView({behavior:"smooth"})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"career_hero",children:[e.jsx("h2",{children:"Take a leap and Let Us Make a difference Together"}),e.jsx("p",{children:"At straitPay, We believe in Africa and we believe that there is a lot of potential on the African continent."}),e.jsxs("button",{onClick:y,children:["See Open Positions",e.jsx(b,{})]})]}),e.jsxs("div",{className:"who",children:[e.jsxs("div",{className:"who_text",children:[e.jsx("h2",{children:"Who Are We?"}),e.jsx("p",{children:"We are a UK-based Fin-tech company with a mission to make spending and investing in Africa much easier and more convenient for anyone living outside of Africa. straitpay was founded to encourage financial prosperity and boost Africa's economic growth in all fields. At the heart of our business is offering a way for our customers to pay bills, buy airtime, invest, and interact with Africa in their preferred local currency from the comfort of their location."}),e.jsx("h4",{children:"JOIN US ON THIS THRILLING ADVENTURE"})]}),e.jsx("div",{className:"who_img",children:e.jsx("img",{src:"./data/career/who.png",alt:""})})]}),e.jsxs("div",{className:"life",children:[e.jsx("h2",{children:"Life at straitPay"}),e.jsx("p",{children:"We're a fast-paced, ever-changing environment where employees are encouraged to question everything around them and focus on producing genuine value rather than their job title. We define success in terms of business effect, self-motivation, positive energy, and flexibility. We are continuously evolving, and we require our people to adapt swiftly to those changes. We are ambitious, daring, and driven by a strong sense of urgency."}),e.jsx("p",{children:"We are not restricted to a specific location. As a result, we are a 100% remote company, and our employees can work from anywhere. Simply put, work is wherever you are."})]}),e.jsxs("div",{className:"perk",children:[e.jsx("h2",{children:"Perks & Benefits"}),e.jsxs("div",{className:"perk_items",children:[e.jsx("h4",{children:"Competitive Salary"}),e.jsx("h4",{children:"Flexible Work Environment"}),e.jsx("h4",{children:"Health Insurance"}),e.jsx("h4",{children:"Career Development"}),e.jsx("h4",{children:"A chance to do impactful work and make a difference on the continent"})]})]}),e.jsxs("div",{className:"roles",ref:u,children:[e.jsx("div",{className:"roles_title",children:e.jsx("h2",{children:"Check Out The Open Roles"})}),e.jsxs("div",{className:"roles_selects",children:[e.jsxs("label",{htmlFor:"",className:"roles_category",onClick:()=>{a(t=>({...t,category:!t.category}))},children:[e.jsx("p",{className:"checkedCat",children:i.category}),e.jsx(j,{className:n.category?"rotate":"checkedArrow"}),n.category&&e.jsx(m,{children:e.jsxs(p.ul,{initial:{y:50},animate:{y:0},exit:{y:50},className:"roles_category_dropdown",onClick:f,ref:d,children:[e.jsx("li",{children:"All Category"}),e.jsx("li",{children:"Support"}),e.jsx("li",{children:"Product"}),e.jsx("li",{children:"Operation"}),e.jsx("li",{children:"Engineering"})]})})]}),e.jsxs("label",{htmlFor:"",className:"roles_job",onClick:()=>{a(t=>({...t,job:!t.job}))},children:[e.jsx("p",{className:"checkedJob",children:i.job}),e.jsx(j,{className:n.job?"rotate":"checkedArrow"}),n.job&&e.jsx(m,{children:e.jsxs(p.ul,{initial:{y:50},animate:{y:0},exit:{y:50},className:"roles_job_dropdown",onClick:g,ref:h,children:[e.jsx("li",{children:"All Job Types"}),e.jsx("li",{children:"Customer support specialist, Technical support"}),e.jsx("li",{children:"Product manager, Product intern"}),e.jsx("li",{children:"Operations Specialist, Accountant"}),e.jsx("li",{children:"Full stack developer, Data analyst"})]})})]})]}),e.jsx("div",{className:"roles_items",children:e.jsx("h2",{children:"No open roles at the moment."})})]}),e.jsx(v,{})]})})};export{N as default};