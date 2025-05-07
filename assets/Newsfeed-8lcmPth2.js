import{j as e}from"./mui-kgfXqY5-.js";import{G as i,M as t}from"./index-BOp5Btt2.js";import"./index-DrK8TTK4.js";import{p as l,q as r,r as n,s as o,t as m,u as c,k as a,l as s}from"./index-BG8UABrE.js";import"./react-BtP0CW_r.js";import"./iconBase-EsnWqB14.js";const d="/blog/assets/HeaderBanner-B35mONWm.png";function x(){return e.jsxs("div",{className:"social-header",children:[e.jsx("style",{children:`
          .social-header {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: #eee;
            margin-bottom: calc(4rem + 160px); /* Increased to account for profile-overlay */
          }

          /* Medium screens (tablets) */
          @media (max-width: 992px) {
            .social-header {
              height: 250px;
              margin-bottom: calc(3rem + 140px); /* Adjusted for smaller overlay */
            }
          }

          /* Small screens (phones) */
          @media (max-width: 576px) {
            .social-header {
              height: 200px;
              margin-bottom: calc(3rem + 130px); /* Adjusted for smaller overlay */
            }
          }

          .header-banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 0.5;
          }

          .profile-overlay {
            position: absolute;
            bottom: -190px;
            left: 15px;
            display: flex;
            flex-direction: column;
            align-items: start;
            z-index: 100;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            border: 4px solid #fff;
            border-radius: 50%;
            object-fit: cover;
            background-color: #fff;
          }

          /* Medium screens (tablets) */
          @media (max-width: 992px) {
            .profile-image {
              width: 140px;
              height: 140px;
            }
            .profile-overlay {
              bottom: -140px; /* Adjusted for tablets */
            }
          }

          /* Small screens (phones) */
          @media (max-width: 576px) {
            .profile-image {
              width: 115px;
              height: 115px;
            }
            .profile-overlay {
              bottom: -170px; /* Adjusted for phones */
            }
              
          .profile-info h2 {
            font-weight: 800;
            font-size: 1.5rem;  
          }

          
          .profile-info p {
            font-weight: 500;
            font-size: .9rem;  
          }

          }

 
          .profile-info h2 {
            font-weight: 800;
          }

          .profile-info p {
            font-weight: 500;
          }
        `}),e.jsx("img",{src:d,alt:"Header Background",className:"header-banner"}),e.jsxs("div",{className:"profile-overlay",children:[e.jsx("img",{src:i,alt:"Profile",className:"profile-image"}),e.jsxs("div",{className:"profile-info",children:[e.jsxs("h2",{className:"mb-0",children:["Jocelyn Doe"," ",e.jsx("span",{children:e.jsx(t,{style:{color:"#0d6efd",fontSize:"1.2rem"}})})]}),e.jsx("p",{className:"text-muted",children:"@username"}),e.jsxs("p",{className:"text-muted my-1",children:[e.jsx("i",{className:"bi-calendar-check",style:{fontSize:".85rem"}})," Joined April 2001"]}),e.jsxs("p",{className:"text-muted",children:[e.jsx("span",{className:"text-black fw-bold",style:{marginRight:"5px"},children:"123"}),e.jsx("span",{style:{marginRight:"10px"},children:"Followers"}),e.jsx("span",{className:"text-black fw-bold",children:"321"}),e.jsx("span",{style:{marginLeft:"5px"},children:"Following"})]})]})]})]})}const h=()=>e.jsxs("div",{children:[e.jsx("style",{children:`
    .nav-scroll-wrapper {
      max-width: 100vw;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    .nav-scroll-wrapper::-webkit-scrollbar {
      height: 3px;
    }

    .nav-scroll-wrapper::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    .nav-tabs {
      flex-wrap: nowrap;
    }

    
  .nav-tabs .nav-link {
        white-space: nowrap;
      flex-shrink: 0;
    border: none;
    border-bottom: 3px solid transparent;
    color: #333;
    font-weight: 500;
  }
  
  .nav-tabs .nav-link.active {
    border-bottom: 3px solid  #0d6efd; /* Bootstrap primary color */
    color: #0d6efd;
  }

    .nav-tabs .nav-link {
      margin-right: 1rem;
      font-size: 1rem;
    }

    /* Medium screens (≤768px) */
    @media (max-width: 768px) {
      .nav-tabs .nav-link {
        margin-right: 0.25rem;
        font-size: 0.9rem;
      }
    }

    /* Small screens (≤576px) */
    @media (max-width: 576px) {
      .nav-tabs .nav-link {
        margin-right: 0rem;
        font-size: 0.8rem;
      }
    }
  `}),e.jsx("nav",{className:"nav-scroll-wrapper",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("ul",{className:"nav nav-tabs mb-0",style:{borderBottom:"none"},children:[e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link active",children:"Home"})}),e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",children:"Explore"})}),e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",children:"Following"})}),e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",children:"For You"})}),e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",children:"Profile"})}),e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",children:"Messages"})})]})})})]});function f(){return e.jsxs("div",{className:"newsfeed-scroll",children:[e.jsx(x,{}),e.jsx(h,{}),e.jsx("div",{className:"container",children:e.jsx("hr",{className:"mt-4 shadow"})}),e.jsxs("div",{className:" my-4",children:[e.jsxs("div",{className:"w3-card w3-white w3-round w3-margin px-3 py-1",children:[e.jsxs("div",{className:"d-flex align-items-start my-3 ",children:[e.jsx("img",{src:i,alt:"Avatar 2",className:"profile-img-small"}),e.jsx("div",{className:"border rounded mt-2",style:{width:"100%"},children:e.jsx("textarea",{className:"form-control w3-border w3-round",rows:"2",placeholder:"What's on your mind?",style:{resize:"none",fontVariant:"primary"}})})]}),e.jsxs("div",{className:"d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between align-items-md-center my-2",children:[e.jsxs("div",{className:"d-flex flex-wrap align-items-center ms-0 ms-md-5 mb-2 mb-md-0",children:[e.jsx("div",{className:"toolbar-btn me-2",title:"Upload Image","aria-label":"Upload image",children:e.jsx(l,{})}),e.jsx("div",{className:"toolbar-btn me-2",title:"Upload Video","aria-label":"Upload video",children:e.jsx(r,{})}),e.jsx("span",{className:"toolbar-btn-transparent me-2",title:"Underline","aria-label":"Underline",children:e.jsx(n,{})}),e.jsx("div",{className:"toolbar-btn-transparent me-2",title:"Bold text","aria-label":"Bold text",children:e.jsx(o,{})}),e.jsx("div",{className:"toolbar-btn-transparent me-2",title:"Italicize","aria-label":"Italicize",children:e.jsx(m,{})})]}),e.jsx("div",{className:'align-items-center ms-0 ms-md-5 mb-2 mb-md-0">',children:e.jsx("div",{className:"post-btn me-2",title:"Italicize","aria-label":"Italicize",children:e.jsx(c,{})})})]})]}),e.jsx("div",{className:"w3-card w3-white w3-round w3-margin",children:e.jsxs("div",{className:"w3-margin",children:[e.jsx("br",{}),e.jsx("img",{src:"https://i.pravatar.cc/150?img=2",alt:"Avatar 2",className:"profile-img-small"}),e.jsx("span",{style:{fontSize:"1.25rem"},children:"John Doe"}),e.jsx("span",{className:"w3-right w3-opacity",children:"1 min"}),e.jsx("br",{}),e.jsx("hr",{className:"w3-clear"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsxs("div",{className:"w3-row-padding",style:{margin:"0 -16px"},children:[e.jsx("div",{className:"w3-half",children:e.jsx("img",{src:"https://picsum.photos/id/1015/600/400",alt:"Northern Lights",style:{width:"100%"},className:"w3-margin-bottom"})}),e.jsx("div",{className:"w3-half",children:e.jsx("img",{src:"https://picsum.photos/id/1016/600/400",style:{width:"100%"},alt:"Nature",className:"w3-margin-bottom"})})]}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d1 w3-margin-bottom",children:[e.jsx(a,{})," Like"]}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d2 w3-margin-bottom",children:[e.jsx(s,{})," Comment"]})]})}),e.jsx("div",{className:"w3-card w3-white w3-round w3-margin",children:e.jsxs("div",{className:"w3-margin",children:[e.jsx("br",{}),e.jsx("img",{src:"https://i.pravatar.cc/150?img=3",alt:"Avatar 2",className:"profile-img-small"}),e.jsx("span",{style:{fontSize:"1.25rem"},children:"John Doe"}),e.jsx("span",{className:"w3-right w3-opacity",children:"1 min"}),e.jsx("br",{}),e.jsx("hr",{className:"w3-clear"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d1 w3-margin-bottom",children:[e.jsx(a,{})," Like"]}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d2 w3-margin-bottom",children:[e.jsx(s,{})," Comment"]})]})}),e.jsx("div",{className:"w3-card w3-white w3-round w3-margin",children:e.jsxs("div",{className:"w3-margin",children:[e.jsx("br",{}),e.jsx("img",{src:"https://i.pravatar.cc/150?img=6",alt:"Avatar 6",className:"profile-img-small"}),e.jsx("span",{style:{fontSize:"1.25rem"},children:"John Doe"}),e.jsx("span",{className:"w3-right w3-opacity",children:"32 min"}),e.jsx("br",{}),e.jsx("hr",{className:"w3-clear"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("img",{src:"https://picsum.photos/id/1016/600/400",alt:"Nature",style:{width:"100%"},className:"w3-margin-bottom"}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d1 w3-margin-bottom",children:[e.jsx(a,{})," Like"]}),e.jsxs("button",{type:"button",className:"w3-button w3-theme-d2 w3-margin-bottom",children:[e.jsx(s,{})," Comment"]})]})})]})]})}export{f as default};
