"use strict";(self.webpackChunkbachelor_docs=self.webpackChunkbachelor_docs||[]).push([[8211],{9134:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=a(5893),l=a(1151);const i={title:"Principles of FBA",sidebar_label:"Principles",sidebar_position:3},t="Principles of FBA",c={id:"flux-balance-analysis/principles",title:"Principles of FBA",description:"FBA is built on foundational principles that enable it to model metabolic networks effectively. Understanding these principles is key to applying FBA in various biological contexts.",source:"@site/docs/flux-balance-analysis/principles.md",sourceDirName:"flux-balance-analysis",slug:"/flux-balance-analysis/principles",permalink:"/flux-balance-analysis/principles",draft:!1,unlisted:!1,editUrl:"https://github.com/Palaract/bachelorthesis/tree/main/docs/docs/flux-balance-analysis/principles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Principles of FBA",sidebar_label:"Principles",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Importance",permalink:"/flux-balance-analysis/importance"},next:{title:"Mathematical Framework",permalink:"/flux-balance-analysis/framework"}},m={},r=[{value:"Basic Concepts and Key Terms",id:"basic-concepts-and-key-terms",level:2},{value:"Understanding the Role of Stoichiometry",id:"understanding-the-role-of-stoichiometry",level:2}];function h(s){const e={annotation:"annotation",h1:"h1",h2:"h2",li:"li",math:"math",mermaid:"mermaid",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"principles-of-fba",children:"Principles of FBA"}),"\n",(0,n.jsx)(e.p,{children:"FBA is built on foundational principles that enable it to model metabolic networks effectively. Understanding these principles is key to applying FBA in various biological contexts."}),"\n",(0,n.jsx)(e.h2,{id:"basic-concepts-and-key-terms",children:"Basic Concepts and Key Terms"}),"\n",(0,n.jsx)(e.p,{children:"FBA revolves around a few critical concepts:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Metabolic Network"}),": A network representing all the metabolic reactions occurring in a cell."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Flux"}),": The rate at which metabolites are processed in a reaction."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Steady-State Assumption"}),": The principle that, in a metabolic network, the concentrations of intermediate metabolites remain constant over time."]}),"\n"]}),"\n",(0,n.jsx)(e.mermaid,{value:"graph TD\n    A[Substrate] --\x3e|Flux 1| B[Intermediate]\n    B --\x3e|Flux 2| C[Product]\n\n    linkStyle 0 stroke:#ff6347,stroke-width:2px;\n    linkStyle 1 stroke:#ff6347,stroke-width:2px;"}),"\n",(0,n.jsx)(e.p,{children:'This diagram represents a simple metabolic network with a substrate, an intermediate, and a product. The arrows labeled "Flux 1" and "Flux 2" demonstrate the flow of metabolites, illustrating the concept of flux in FBA. The steady-state assumption in FBA is implied by the continuous and balanced flow from the substrate through the intermediate to the product, indicating that the concentration of the intermediate remains constant over time.'}),"\n",(0,n.jsx)(e.h2,{id:"understanding-the-role-of-stoichiometry",children:"Understanding the Role of Stoichiometry"}),"\n",(0,n.jsx)(e.p,{children:"Stoichiometry in FBA refers to the quantitative relationships between reactants and products in metabolic reactions. It is critical in determining the flow of metabolites through the network."}),"\n",(0,n.jsx)(e.p,{children:"Here are some examples of stoichiometric equations:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mtext,{children:"Glucose"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mtext,{children:"NAD"}),(0,n.jsx)(e.mo,{children:"+"})]}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsx)(e.mtext,{children:"Pyruvate"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsx)(e.mtext,{children:"NADH"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{Glucose} + 2\\, \\text{NAD}^+ \\rightarrow 2\\, \\text{Pyruvate} + 2\\, \\text{NADH}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"Glucose"})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8446em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"NAD"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8446em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.1362em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"Pyruvate"})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"NADH"})})]})]})]})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"6"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"CO"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"6"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"H"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mtext,{children:"O"}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"C"}),(0,n.jsx)(e.mn,{children:"6"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"H"}),(0,n.jsx)(e.mn,{children:"12"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"O"}),(0,n.jsx)(e.mn,{children:"6"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"6"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"O"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"6\\, \\text{CO}_2 + 6\\, \\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\, \\text{O}_2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord",children:"6"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"CO"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord",children:"6"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"H"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"O"})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"C"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"6"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"H"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"O"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"6"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord",children:"6"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"O"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"C"}),(0,n.jsx)(e.mn,{children:"6"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"H"}),(0,n.jsx)(e.mn,{children:"12"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"O"}),(0,n.jsx)(e.mn,{children:"6"})]}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"CO"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"CH"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mtext,{children:"CH"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mtext,{children:"OH"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 3\\, \\text{CO}_2 + 3\\, \\text{CH}_3\\text{CH}_2\\text{OH}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"C"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"6"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"H"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"12"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"O"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"6"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"CO"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"CH"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"CH"})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"OH"})})]})]})]})}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"It is not different from the equations one were taught in school, with the difference that stoichiometric equations are balanced in mass. You will see that the same mass is going in as an reactant and coming out as a product."})]})}function x(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},1151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>t});var n=a(7294);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);