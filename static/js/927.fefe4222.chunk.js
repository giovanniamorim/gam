"use strict";(self.webpackChunkgam=self.webpackChunkgam||[]).push([[927],{3927:(e,n,i)=>{i.r(n),i.d(n,{default:()=>d});var t=i(3946),s=i(5043),o=i(9456),a=i(869),c=i(1384),l=i(5328),r=(i(971),i(579));const d=()=>{const[e,n]=(0,s.useState)({}),[i,d]=(0,s.useState)(!1),[m,h]=(0,s.useState)(0),[u,p]=(0,s.useState)(""),[g,x]=(0,s.useState)(""),[b,j]=(0,s.useState)(!1),[f,v]=(0,s.useState)(!1),y=(0,o.wA)();(0,s.useEffect)((()=>{const e=localStorage.getItem("integrationDecisions");e&&n(JSON.parse(e));const i=localStorage.getItem("integrationPercentage");i&&h(parseFloat(i))}),[]);const S=e=>{const i=e.target.name,t=e.target.checked;n((e=>{const n={...e,[i]:t};return localStorage.setItem("integrationDecisions",JSON.stringify(n)),n}))};return(0,s.useEffect)((()=>{const n=(()=>{let e=8;return"Horizontal"===u?e+=2:"Vertical"===u&&(e+=1),"Client-Side"===g?e+=4:"Server-Side"===g?e+=2:"Edge-Side"===g&&(e+=3),e})();if(null===localStorage.getItem("integrationDecisions"))console.log("esta vazio");else{console.log("nao esta vazio");let e=localStorage.getItem("integrationDecisions").includes('Effective Coordination":true')||localStorage.getItem("integrationDecisions").includes('Rigorous Governance":true');console.log("isHorizontal: ",e);let n=localStorage.getItem("integrationDecisions").includes('Responsibility by Domain":true');console.log("isVertical: ",n),e&&n&&console.log("isHorizontal && isVertical")}const i=Object.values(e).filter((e=>e)).length/n*100;n>0&&(h(i.toFixed(1)),y({type:"SET_INTEGATION_PERCENTAGE",payload:i.toFixed(1)}),localStorage.setItem("integrationPercentage",i.toFixed(1))),d(100===i)}),[e,y,u,g]),(0,r.jsx)(t.sK,{children:(0,r.jsxs)(t.UF,{xs:12,children:[(0,r.jsx)(t.E$,{className:"mb-4",children:(0,r.jsxs)(t.W6,{children:[(0,r.jsx)("h4",{children:"Integration Decisions"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{children:[m<=100?(0,r.jsxs)(a.A,{variant:"success",children:["Percentage of selected options: ",localStorage.getItem("integrationPercentage")||"0.0","%"]}):null,m>100?(0,r.jsx)(a.A,{variant:"danger",children:"The total percentage of selected options exceeds 100%. Please review your selections Define and Composition."}):null]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Integration Decisions play a key role in the Practical Implementation phase of GAM. In this context, choices related to Key Decisions include defining Composition, Routing, and Communication strategies. As for Orientation, it includes the decision between Vertical Division or Horizontal Division. Regarding composition and routing, it includes deciding on client-side, edge-side, or server-side. Each decision in this category directly impacts the application structure, influencing development and deployment independence, module organization logic, and the choice of specific architectural patterns."})]})}),(0,r.jsx)(t.E$,{className:"mb-4",children:(0,r.jsx)(t.W6,{children:(0,r.jsx)("section",{children:(0,r.jsxs)(c.A,{defaultActiveKey:"define",id:"integration-decisions-tabs",className:"mb-3",children:[(0,r.jsxs)(l.A,{eventKey:"define",title:"Define",children:[(0,r.jsx)("p",{children:"Choose the Orientation. Identify and define the micro-frontend from the point of view of its division. We can choose to have multiple micro-frontends in the same view (Horizontal Division) or have only one micro-frontend per view (Vertical Division)."}),(0,r.jsxs)("select",{id:"define-options",value:u,onChange:e=>{const n=e.target.value;p(n),j(!0)},children:[(0,r.jsx)("option",{value:"",children:"Select an option..."}),(0,r.jsx)("option",{value:"Horizontal",children:"Horizontal"}),(0,r.jsx)("option",{value:"Vertical",children:"Vertical"})]}),(0,r.jsx)("div",{children:b&&(0,r.jsxs)("div",{children:["Horizontal"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the orientation of multiple micro-frontends in the same view"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Effective Coordination",checked:e["Effective Coordination"]||!1,onChange:S}),"Effective Coordination: Given the presence of multiple micro-frontends in the same view, it is essential to establish effective channels of communication and coordination between teams to ensure cohesion in the user experience."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Rigorous Governance",checked:e["Rigorous Governance"]||!1,onChange:S}),"Rigorous Governance: Due to the flexibility offered by this approach, it is crucial to implement rigorous governance to prevent uncontrolled proliferation of micro-frontends. Establish clear guidelines to ensure consistency and quality."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In the Horizontal Orientation approach, we have as an example the e-commerce scenario, where different teams are responsible for distinct components such as the navigation bar, shopping cart, and displayed products. Each team can develop and evolve their micro-frontend independently, facilitating coordination between them."]})]}),"Vertical"===u&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the orientation of only one micro-frontend per view"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsx)("ul",{className:"no-bullets",children:(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Responsibility by Domain",checked:e["Responsibility by Domain"]||!1,onChange:S}),"Responsibility by Domain: By adopting vertical division, each team is responsible for a specific business domain. It is recommended to apply Domain-Driven Design (DDD) principles to ensure an architecture aligned with business requirements."]})})}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"Each team would be in charge of a specific domain, such as authentication, ensuring that all aspects related to that domain are encapsulated. For example, one team can handle the entire authentication process, from login to security, providing a holistic view of the domain."]})]})]})})]}),(0,r.jsxs)(l.A,{eventKey:"composition",title:"Composition",children:[(0,r.jsx)("p",{children:"Choose the composition strategy for Micro-frontends, covering Client-Side, Server-Side, or Edge-Side *"}),(0,r.jsxs)("select",{id:"composition-options",value:g,onChange:e=>{const n=e.target.value;x(n),v(!0)},children:[(0,r.jsx)("option",{value:"",children:"Select an option..."}),(0,r.jsx)("option",{value:"Client-Side",children:"Client-Side"}),(0,r.jsx)("option",{value:"Server-Side",children:"Server-Side"}),(0,r.jsx)("option",{value:"Edge-Side",children:"Edge-Side"})]}),f&&(0,r.jsxs)("div",{children:["Client-Side"===g&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the strategy for Client-Side Composition"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Component-Based Architecture",checked:e["Component-Based Architecture"]||!1,onChange:S}),"Component-Based Architecture: Utilize a modular approach where each micro-frontend is a self-contained component, promoting reusability and maintainability."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Dynamic Loading",checked:e["Dynamic Loading"]||!1,onChange:S}),"Dynamic Loading: Implement dynamic loading mechanisms to load micro-frontends on demand, optimizing performance and user experience."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Loose Coupling",checked:e["Loose Coupling"]||!1,onChange:S}),"Loose Coupling: Ensure loose coupling between micro-frontends to enable independent development, testing, and deployment."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"State Management",checked:e["State Management"]||!1,onChange:S}),"State Management: Define clear strategies for state management to maintain consistency and synchronization between micro-frontends."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example:"})," In the context of Client-Side Composition, consider an e-commerce platform where the shopping cart, product catalog, and user profile are separate micro-frontends loaded dynamically based on user interaction, ensuring a responsive and modular architecture."]})]}),"Server-Side"===g&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the strategy for Server-Side Composition"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Server-Side Includes (SSI)",checked:e["Server-Side Includes (SSI)"]||!1,onChange:S}),"Server-Side Includes (SSI): Utilize SSI to include server-side processed content in the response, optimizing server load and enhancing performance."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Template-Based Composition",checked:e["Template-Based Composition"]||!1,onChange:S}),"Template-Based Composition: Implement template-based composition where server-side templates are used to assemble micro-frontends into a cohesive page structure."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example:"})," In a Server-Side Composition scenario, consider a content management system where server-side templates dynamically assemble micro-frontends such as headers, navigation bars, and content sections based on user requests, ensuring server-side flexibility and control."]})]}),"Edge-Side"===g&&(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Define the strategy for Edge-Side Composition"]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendation:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Content Delivery Network (CDN)",checked:e["Content Delivery Network (CDN)"]||!1,onChange:S}),"Content Delivery Network (CDN): Leverage CDN to cache and deliver micro-frontends from edge servers closer to the user, reducing latency and improving performance."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Edge Computing",checked:e["Edge Computing"]||!1,onChange:S}),"Edge Computing: Utilize edge computing capabilities to process and deliver micro-frontends closer to the user, enhancing responsiveness and reducing dependency on centralized servers."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Global Load Balancing",checked:e["Global Load Balancing"]||!1,onChange:S}),"Global Load Balancing: Implement global load balancing strategies to distribute micro-frontends across edge locations based on user demand and traffic patterns, ensuring optimal performance and availability."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example:"})," In the context of Edge-Side Composition, consider a global e-commerce platform where micro-frontends are cached and delivered from edge servers located worldwide, ensuring fast and reliable access to product catalogs, promotional banners, and checkout processes, enhancing global scalability and user experience."]})]})]})]}),(0,r.jsx)(l.A,{eventKey:"route",title:"Route",children:(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Ensure a cohesive and agile user experience aligned with the chosen composition strategy (origin, edge-side, or client-side). This involves correctly routing page requests to the appropriate micro-frontends, considering the specific characteristics of the project."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendations:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Server-Side Routing",checked:e["Server-Side Routing"]||!1,onChange:S}),"Server-Side Routing: Consider using application servers like Nginx to handle efficient routing and load distribution."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Edge-Side Routing",checked:e["Edge-Side Routing"]||!1,onChange:S}),"Edge-Side Routing: Adopt CDNs like Cloudflare or Akamai that support Edge Side Includes (ESI) to compose micro-frontends at the edge."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Client-Side Routing",checked:e["Client-Side Routing"]||!1,onChange:S}),"Client-Side Routing: Use client-side routing libraries like React Router or Vue Router for efficient navigation between micro-frontends. If opting for a SPA application shell, frameworks like Angular or React can handle internal routing between micro-frontends."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"In an e-commerce application with micro-frontends covering different functionalities such as product catalog, shopping cart, and payment area, if the chosen strategy is client-side routing, the goal would be to dynamically load these micro-frontends based on user actions. Using React as the client-side framework, React Router could be implemented to manage transitions between micro-frontends. Webpack can be used to package and optimize the micro-frontends before loading in the browser, ensuring an efficient user experience."]})]})}),(0,r.jsx)(l.A,{eventKey:"communication",title:"Communication",children:(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("em",{children:"Objective:"})," Ensure consistent interaction between different components, even when they are distributed across multiple teams or parts of the application."]}),(0,r.jsx)("li",{children:(0,r.jsx)("em",{children:"Recommendations:"})}),(0,r.jsxs)("ul",{className:"no-bullets",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Event Emitter",checked:e["Event Emitter"]||!1,onChange:S}),"Event Emitter: Implement an Event Emitter or native JavaScript event functionality to enable asynchronous communication between micro-frontends."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Custom Events",checked:e["Custom Events"]||!1,onChange:S}),"Custom Events: Adopt custom events like CustomEvent to notify other micro-frontends about specific events."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"EventBus Injection",checked:e["EventBus Injection"]||!1,onChange:S}),"EventBus Injection: Consider injecting an EventBus in the micro-frontends container to facilitate global communication."]})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Local Storage",checked:e["Local Storage"]||!1,onChange:S}),"Local Storage: Use local storage to share persistent data between micro-frontends."]})}),(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:"ml-2"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:"ml-2",children:[(0,r.jsx)("input",{className:"input-label",type:"checkbox",name:"Query Strings",checked:e["Query Strings"]||!1,onChange:S}),"Query Strings: Explore passing data via query strings for specific cases, such as product identification or page information."]})})]}),(0,r.jsxs)("div",{className:"blue-box-2",children:[(0,r.jsx)("strong",{children:"Practical Example: "}),"A micro-frontend responsible for the authentication process needs to notify another micro-frontend about the successful completion of authentication, providing an access token. In this case, the use of custom events would be appropriate. The authentication micro-frontend dispatches a custom event, like 'userAuthenticated', with details containing the token. Other interested micro-frontends can adopt listening to this event and act accordingly, ensuring efficient and decoupled communication between components. The EventBus injected in the micro-frontends container would facilitate this global communication."]})]})})]})})})})]})})}}}]);
//# sourceMappingURL=927.fefe4222.chunk.js.map