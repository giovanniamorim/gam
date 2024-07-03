"use strict";(self.webpackChunkgam=self.webpackChunkgam||[]).push([[313],{7313:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var i=s(5043),n=s(3946),o=s(869),t=s(1384),r=s(5328),d=s(2166),c=(s(971),s(579));const l=()=>{const[e,a]=(0,i.useState)({}),[s,l]=(0,i.useState)(!1),[m,u]=(0,i.useState)(0),p=(0,d.wA)(),[x,h]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=localStorage.getItem("checkedItems");e&&a(JSON.parse(e));const s=localStorage.getItem("selectedPercentage");s&&u(parseFloat(s))}),[]);const b=e=>{const s=e.target.name,i=e.target.checked;a((e=>{const a={...e,[s]:i};return localStorage.setItem("checkedItems",JSON.stringify(a)),a}))};return(0,i.useEffect)((()=>{const a=Object.values(e).filter((e=>e)).length/11*100;u(a.toFixed(1)),p({type:"SET_SELECTED_PERCENTAGE",payload:a.toFixed(1)}),localStorage.setItem("selectedPercentage",a.toFixed(1)),l(100===a)}),[e,p]),(0,c.jsx)(n.sK,{children:(0,c.jsxs)(n.UF,{xs:12,children:[(0,c.jsx)(n.E$,{className:"mb-4",children:(0,c.jsxs)(n.W6,{children:[(0,c.jsx)("h4",{children:"Viabilidades T\xe9cnicas"}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{children:(0,c.jsxs)(o.A,{variant:"success",children:["Percentual de op\xe7\xf5es selecionadas: ",localStorage.getItem("selectedPercentage")||"0.0","%"]})}),(0,c.jsx)("p",{children:"O Estudo de Viabilidade, no contexto das diretrizes para ado\xe7\xe3o de Micro-Frontends (GAM), \xe9 uma fase estrat\xe9gica e sequencial que busca analisar as viabilidades gerenciais e t\xe9cnicas antes de decidir pela implementa\xe7\xe3o da arquitetura de Micro-Frontends. Essa abordagem visa garantir uma transi\xe7\xe3o suave e bem-sucedida para essa arquitetura inovadora. A imagem abaixo demostra o fluxo de atividades do Estudo de Viabilidade."})]})}),(0,c.jsx)(n.E$,{className:"mb-4",children:(0,c.jsx)(n.W6,{children:(0,c.jsx)("section",{children:(0,c.jsxs)(t.A,{defaultActiveKey:"compatibility",id:"technical-feasibilities-tabs",className:"mb-3",children:[(0,c.jsxs)(r.A,{eventKey:"compatibility",title:"Compatibilidade Tecnol\xf3gica",children:[(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("em",{children:"Objetivo:"})," Garantir que a arquitetura de Micro-Frontends seja compat\xedvel com as tecnologias existentes na infraestrutura da empresa, minimizando conflitos e promovendo uma transi\xe7\xe3o suave."]}),(0,c.jsx)("li",{children:(0,c.jsx)("em",{children:"Recomenda\xe7\xf5es:"})}),(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsx)("div",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Avalia\xe7\xe3o da Infraestrutura Atual",checked:e["Avalia\xe7\xe3o da Infraestrutura Atual"]||!1,onChange:b}),"Avalia\xe7\xe3o da Infraestrutura Atual: Realizar uma an\xe1lise detalhada da infraestrutura tecnol\xf3gica existente, identificando as tecnologias, frameworks e bibliotecas em uso."]})}),(0,c.jsx)("div",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Identifica\xe7\xe3o de Conflitos Potenciais",checked:e["Identifica\xe7\xe3o de Conflitos Potenciais"]||!1,onChange:b}),"Identifica\xe7\xe3o de Conflitos Potenciais: Identificar poss\xedveis conflitos entre as tecnologias utilizadas atualmente e aquelas associadas \xe0 arquitetura de Micro-Frontends."]})}),(0,c.jsx)("div",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Padroniza\xe7\xe3o de Tecnologias",checked:e["Padroniza\xe7\xe3o de Tecnologias"]||!1,onChange:b}),"Padroniza\xe7\xe3o de Tecnologias: Considerar a padroniza\xe7\xe3o de tecnologias que s\xe3o comuns tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends para facilitar a integra\xe7\xe3o."]})}),(0,c.jsx)("div",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Testes de Compatibilidade",checked:e["Testes de Compatibilidade"]||!1,onChange:b}),"Testes de Compatibilidade: Implementar testes espec\xedficos usando o projeto piloto para verificar a compatibilidade entre os componentes de Micro-Frontends e a infraestrutura existente."]})})]})]}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"blue-box",children:[(0,c.jsx)("strong",{children:"Exemplo Pr\xe1tico:"})," Suponha que a empresa utilize o Angular como framework principal em seus sistemas existentes. Ao iniciar a ado\xe7\xe3o de Micro-Frontends, a equipe de an\xe1lise de compatibilidade avalia a vers\xe3o espec\xedfica do Angular em uso e confirma sua compatibilidade com os requisitos do Micro-Frontend. Al\xe9m disso, ao identificar a necessidade de uma biblioteca de gerenciamento de estado, a equipe opta por padronizar o uso do Redux, que \xe9 amplamente aceito tanto na infraestrutura atual quanto na arquitetura de Micro-Frontends. Durante o projeto piloto, s\xe3o conduzidos testes espec\xedficos para verificar a interoperabilidade entre os Micro-Frontends e os servi\xe7os legados, garantindo uma transi\xe7\xe3o suave e minimizando conflitos."]})})]}),(0,c.jsxs)(r.A,{eventKey:"integration",title:"Desafios de Integra\xe7\xe3o",children:[(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("em",{children:"Objetivo:"})," Identificar e abordar proativamente os desafios de integra\xe7\xe3o que possam surgir durante a ado\xe7\xe3o da arquitetura de Micro-Frontends."]}),(0,c.jsx)("li",{children:(0,c.jsx)("em",{children:"Recomenda\xe7\xf5es:"})}),(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Mapeamento de Interfaces",checked:e["Mapeamento de Interfaces"]||!1,onChange:b}),"Mapeamento de Interfaces: Realizar um mapeamento claro das interfaces entre os Micro-Frontends e outros componentes do sistema."]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Defini\xe7\xe3o de Contratos",checked:e["Defini\xe7\xe3o de Contratos"]||!1,onChange:b}),"Defini\xe7\xe3o de Contratos: Estabelecer contratos claros e documentados entre os Micro-Frontends e os servi\xe7os backend, garantindo consist\xeancia nas intera\xe7\xf5es."]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Monitoramento Cont\xednuo",checked:e["Monitoramento Cont\xednuo"]||!1,onChange:b}),"Monitoramento Cont\xednuo: Implemente mecanismos de monitoramento cont\xednuo para identificar e resolver rapidamente problemas de integra\xe7\xe3o."]})})]})]}),(0,c.jsxs)("div",{className:"blue-box",children:[(0,c.jsx)("strong",{children:"Exemplo Pr\xe1tico:"})," Durante a implementa\xe7\xe3o de Micro-Frontends, um desafio de integra\xe7\xe3o foi identificado na comunica\xe7\xe3o entre um Micro-Frontend espec\xedfico e um servi\xe7o backend essencial. Utilizando o mapeamento de interfaces previamente documentado, a equipe consegue rapidamente diagnosticar o problema e atualizar o contrato de API. O monitoramento cont\xednuo alerta a equipe sobre a anomalia, permitindo uma interven\xe7\xe3o r\xe1pida e minimizando o impacto nos usu\xe1rios finais."]})]}),(0,c.jsxs)(r.A,{eventKey:"functional-complexities",title:"Complexidades Funcionais",children:[(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("em",{children:"Objetivo:"})," Entender e mitigar as complexidades funcionais associadas \xe0 arquitetura de Micro-Frontends, garantindo a entrega de funcionalidades de forma eficiente."]}),(0,c.jsx)("li",{children:(0,c.jsx)("em",{children:"Recomenda\xe7\xf5es:"})}),(0,c.jsxs)("ul",{className:"no-bullets",children:[(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"An\xe1lise de Requisitos",checked:e["An\xe1lise de Requisitos"]||!1,onChange:b}),"An\xe1lise de Requisitos: Realizar uma an\xe1lise aprofundada dos requisitos funcionais da aplica\xe7\xe3o, identificando poss\xedveis complexidades."]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Design Modular",checked:e["Design Modular"]||!1,onChange:b}),"Design Modular: Adote um design modular para os Micro-Frontends, dividindo a aplica\xe7\xe3o em componentes independentes para facilitar o gerenciamento das complexidades."]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Testes Unit\xe1rios e de Integra\xe7\xe3o",checked:e["Testes Unit\xe1rios e de Integra\xe7\xe3o"]||!1,onChange:b}),"Testes Unit\xe1rios e de Integra\xe7\xe3o: Implementar testes unit\xe1rios e de integra\xe7\xe3o para validar a funcionalidade dos Micro-Frontends individualmente e em conjunto."]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("label",{className:"ml-2",children:[(0,c.jsx)("input",{className:"input-label",type:"checkbox",name:"Documenta\xe7\xe3o Clara",checked:e["Documenta\xe7\xe3o Clara"]||!1,onChange:b}),"Documenta\xe7\xe3o Clara: Mantenha uma documenta\xe7\xe3o clara e abrangente que descreva as intera\xe7\xf5es funcionais entre os Micro-Frontends e outros componentes."]})})]})]}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"blue-box",children:[(0,c.jsx)("strong",{children:"Exemplo Pr\xe1tico:"})," Durante a an\xe1lise de requisitos foi identificado um requisito funcional complexo relacionado \xe0 gest\xe3o de permiss\xf5es de usu\xe1rios em diferentes Micro-Frontends. Ao adotar um design modular, a equipe decide criar um Micro-Frontend dedicado exclusivamente \xe0 gest\xe3o de permiss\xf5es. Testes unit\xe1rios e de integra\xe7\xe3o s\xe3o implementados para garantir que essa funcionalidade se integre sem problemas aos demais Micro-Frontends. A documenta\xe7\xe3o clara detalha os fluxos de intera\xe7\xe3o, simplificando a compreens\xe3o da complexidade funcional pela equipe."]})})]})]})})})})]})})}},971:()=>{}}]);
//# sourceMappingURL=313.326a93c2.chunk.js.map