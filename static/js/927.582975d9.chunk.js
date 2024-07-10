"use strict";(self.webpackChunkgam=self.webpackChunkgam||[]).push([[927],{3927:(e,i,n)=>{n.r(i),n.d(i,{default:()=>d});var t=n(3946),s=n(5043),a=n(9456),o=n(869),l=n(1384),c=n(5328),r=(n(971),n(579));const d=()=>{const[e,i]=(0,s.useState)({}),[n,d]=(0,s.useState)(!1),[h,m]=(0,s.useState)(0),[u,p]=(0,s.useState)(""),[g,f]=(0,s.useState)(!1),x=(0,a.wA)();(0,s.useEffect)((()=>{const e=localStorage.getItem("integrationDecisions");e&&i(JSON.parse(e));const n=localStorage.getItem("integrationPercentage");n&&m(parseFloat(n))}),[]);const b=e=>{const i=e.target.value;p(i),f(!0)},v=e=>{const n=e.target.name,t=e.target.checked;i((e=>{const i={...e,[n]:t};return localStorage.setItem("integrationDecisions",JSON.stringify(i)),i}))};return(0,s.useEffect)((()=>{const i=Object.values(e).filter((e=>e)).length/11*100;m(i.toFixed(1)),x({type:"SET_INTEGATION_PERCENTAGE",payload:i.toFixed(1)}),localStorage.setItem("integrationPercentage",i.toFixed(1)),d(100===i)}),[e,x]),(0,r.jsx)(t.sK,{children:(0,r.jsxs)(t.UF,{xs:12,children:[(0,r.jsx)(t.E$,{className:"mb-4",children:(0,r.jsxs)(t.W6,{children:[(0,r.jsx)("h4",{children:"Integration Decisions"}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{children:(0,r.jsxs)(o.A,{variant:"success",children:["Percentage of selected options: ",localStorage.getItem("integrationPercentage")||"0.0","%"]})}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Integration Decisions play a key role in the Practical Implementation phase of GAM. In this context, choices related to Key Decisions include defining Composition, Routing, and Communication strategies. As for Orientation, it includes the decision between Vertical Division or Horizontal Division. Regarding composition and routing, it includes deciding on client-side, edge-side, or server-side. Each decision in this category directly impacts the application structure, influencing development and deployment independence, module organization logic, and the choice of specific architectural patterns."})]})}),(0,r.jsx)(t.E$,{className:"mb-4",children:(0,r.jsx)(t.W6,{children:(0,r.jsx)("section",{children:(0,r.jsxs)(l.A,{defaultActiveKey:"alignment",id:"integration-implementation-tabs",className:"mb-3",children:[(0,r.jsxs)(c.A,{eventKey:"define",title:"Define",children:[(0,r.jsx)("p",{children:"Choose the Orientation. Identify and define the micro-frontend from the point of view of its division. We can choose to have multiple micro-frontends in the same view (Horizontal Division) or have only one micro-frontend per view (Vertical Division)."}),(0,r.jsxs)("select",{id:"define-options",value:u,onChange:b,children:[(0,r.jsx)("option",{value:"",children:"Select an option..."}),(0,r.jsx)("option",{value:"Horizontal",children:"Horizontal"}),(0,r.jsx)("option",{value:"Vertical",children:"Vertical"})]}),(0,r.jsx)("div",{children:g&&(0,r.jsxs)("div",{children:["Horizontal"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the orientation of multiple micro-frontends in the same view"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Effective Coordination",checked:e["Effective Coordination"]||!1,onChange:v}),"Effective Coordination: Given the presence of multiple micro-frontends in the same view, it is essential to establish effective channels of communication and coordination between teams to ensure cohesion in the user experience."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Rigorous Governance",checked:e["Rigorous Governance"]||!1,onChange:v}),"Rigorous Governance: Due to the flexibility offered by this approach, it is crucial to implement rigorous governance to prevent uncontrolled proliferation of micro-frontends. Establish clear guidelines to ensure consistency and quality."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In the Horizontal Orientation approach, we have as an example the e-commerce scenario, where different teams are responsible for distinct components such as the navigation bar, shopping cart, and displayed products. Each team can develop and evolve their micro-frontend independently, facilitating coordination between them."]})]}),"Vertical"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the orientation of only one micro-frontend per view"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsx)("ul",{className:"no-bullets",children:(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Responsibility by Domain",checked:e["Responsibility by Domain"]||!1,onChange:v}),"Responsibility by Domain: By adopting vertical division, each team is responsible for a specific business domain. It is recommended to apply Domain-Driven Design (DDD) principles to ensure an architecture aligned with business requirements."]})})}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"Each team would be in charge of a specific domain, such as authentication, ensuring that all aspects related to that domain are encapsulated. For example, one team can handle the entire authentication process, from login to security, providing a holistic view of the domain."]})]})]})})]}),(0,r.jsxs)(c.A,{eventKey:"composition",title:"Composition",children:[(0,r.jsx)("p",{children:"Choose the composition strategy for Micro-frontends, covering Client-Side, Server-Side, or Edge-Side *"}),(0,r.jsxs)("select",{id:"opcoes",value:u,onChange:b,children:[(0,r.jsx)("option",{value:"",children:"Select an option..."}),(0,r.jsx)("option",{value:"Client-Side",children:"Client-Side"}),(0,r.jsx)("option",{value:"Server-Side",children:"Server-Side"}),(0,r.jsx)("option",{value:"Edge-Side",children:"Edge-Side"})]}),(0,r.jsx)("div",{children:g&&(0,r.jsxs)("div",{children:["Client-Side"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Facilitate the dynamic integration of micro-frontends into the client application shell, allowing different parts of the interface to be loaded efficiently."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Use of Iframes",checked:e["Use of Iframes"]||!1,onChange:v}),"Use of Iframes: Ensure that each micro-frontend has a JavaScript or HTML file defined as an entry point, facilitating dynamic addition to the Document Object Model (DOM) by the application shell."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Single-SPA",checked:e["Single-SPA"]||!1,onChange:v}),"Single-SPA: Enable the composition and delivery of micro-frontends through JavaScript-based integration using Single Page Application (Single-SPA) frameworks like Angular, React, and Vue."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Web Components",checked:e["Web Components"]||!1,onChange:v}),"Web Components: Deliver micro-frontends by creating reusable custom elements with web components."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Client-Side Transclusion",checked:e["Client-Side Transclusion"]||!1,onChange:v}),"Client-Side Transclusion: Evaluate the client-side inclusion technique, using libraries like h-include, to load components late and dynamically."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In an online news application, the goal is to dynamically integrate different modules such as headlines, related articles, and comments, providing a seamless reading experience. To achieve this, each module will be developed as a micro-frontend with a defined entry point, allowing dynamic embedding in the application shell using iframe elements. The use of the Single-SPA framework will facilitate the integration of micro-frontends developed in Angular, React, and Vue. Custom elements like headline-module and comment-module will be created as Web Components, ensuring modularity and reusability."]})]}),"Server-Side"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Assemble the view at the CDN level, optimizing the global delivery of the application through strategies like Edge Side Includes (ESI)."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Use of ESI",checked:e["Use of ESI"]||!1,onChange:v}),"Use of ESI: Consider using Edge Side Includes (ESI) to compose at the edge, leveraging the scaling capabilities offered by CDNs and facilitating view assembly."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Consideration of CDN Variations",checked:e["Consideration of CDN Variations"]||!1,onChange:v}),"Consideration of CDN Variations: Be aware that ESI can be implemented differently by different CDN providers, requiring special considerations in a multi-CDN strategy or migrations between providers."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In a global e-commerce site, the goal is to optimize content delivery by assembling the view at the CDN level. Edge Side Includes (ESI) strategy is adopted to dynamically compose elements like shopping cart, promotions, and recommendations based on the user's location. The use of ESI allows efficient assembly at the network edge, leveraging the scaling capabilities offered by CDNs. Careful implementation will consider variations between CDN providers, ensuring an effective strategy in multi-CDN environments or provider migrations."]})]}),"Edge-Side"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Allow the origin server to compose the view, retrieving different micro-frontends and assembling the final page."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Use Case Analysis",checked:e["Use Case Analysis"]||!1,onChange:v}),"Use Case Analysis: Before opting for server-side composition, perform a thorough analysis of the application's use cases to understand the nature and requirements of the pages to be composed."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Scalability",checked:e.Scalability||!1,onChange:v}),"Scalability: Develop a clear scalability strategy for the servers to handle a large volume of requests, especially when there is page personalization for each user, to avoid downtime for these users."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Cache",checked:e.Cache||!1,onChange:v}),"Cache: Evaluate the cacheability of the page to determine the effectiveness of server-side composition. If the page is highly cacheable, leverage the long-lived time policies offered by CDNs, optimizing performance and content delivery efficiency."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In a customized content management system, where different clients require specific views, the goal is to allow the origin server to compose the view by retrieving personalized micro-frontends and assembling the final page. A detailed analysis of use cases is performed to understand the nature and requirements of the pages to be composed. A scalability strategy is adopted considering page personalization for each user. The cacheability of the page is also evaluated, allowing efficient server-side composition, optimizing performance and content delivery efficiency."]})]})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)(c.A,{eventKey:"route",title:"Route",children:(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Ensure a cohesive and agile user experience aligned with the chosen composition strategy (origin, edge-side, or client-side). This involves correctly routing page requests to the appropriate micro-frontends, considering the specific characteristics of the project."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendations:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Server-Side Routing",checked:e["Server-Side Routing"]||!1,onChange:v}),"Server-Side Routing: Consider using application servers like Nginx to handle efficient routing and load distribution."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Edge-Side Routing",checked:e["Edge-Side Routing"]||!1,onChange:v}),"Edge-Side Routing: Adopt CDNs like Cloudflare or Akamai that support Edge Side Includes (ESI) to compose micro-frontends at the edge."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Client-Side Routing",checked:e["Client-Side Routing"]||!1,onChange:v}),"Client-Side Routing: Use client-side routing libraries like React Router or Vue Router for efficient navigation between micro-frontends. If opting for a SPA application shell, frameworks like Angular or React can handle internal routing between micro-frontends."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In an e-commerce application with micro-frontends covering different functionalities such as product catalog, shopping cart, and payment area, if the chosen strategy is client-side routing, the goal would be to dynamically load these micro-frontends based on user actions. Using React as the client-side framework, React Router could be implemented to manage transitions between micro-frontends. Webpack can be used to package and optimize the micro-frontends before loading in the browser, ensuring an efficient user experience."]})]})}),(0,r.jsx)(c.A,{eventKey:"communication",title:"Communication",children:(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Ensure consistent interaction between different components, even when they are distributed across multiple teams or parts of the application."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendations:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Event Emitter",checked:e["Event Emitter"]||!1,onChange:v}),"Event Emitter: Implement an Event Emitter or native JavaScript event functionality to enable asynchronous communication between micro-frontends."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Custom Events",checked:e["Custom Events"]||!1,onChange:v}),"Custom Events: Adopt custom events like CustomEvent to notify other micro-frontends about specific events."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"EventBus Injection",checked:e["EventBus Injection"]||!1,onChange:v}),"EventBus Injection: Consider injecting an EventBus in the micro-frontends container to facilitate global communication."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Local Storage",checked:e["Local Storage"]||!1,onChange:v}),"Local Storage: Use local storage to share persistent data between micro-frontends."]})}),(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:"ml-2"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Query Strings",checked:e["Query Strings"]||!1,onChange:v}),"Query Strings: Explore passing data via query strings for specific cases, such as product identification or page information."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"A micro-frontend responsible for the authentication process needs to notify another micro-frontend about the successful completion of authentication, providing an access token. In this case, the use of custom events would be appropriate. The authentication micro-frontend dispatches a custom event, like 'userAuthenticated', with details containing the token. Other interested micro-frontends can adopt listening to this event and act accordingly, ensuring efficient and decoupled communication between components. The EventBus injected in the micro-frontends container would facilitate this global communication."]})]})})]})})})})]})})}}}]);
//# sourceMappingURL=927.582975d9.chunk.js.map