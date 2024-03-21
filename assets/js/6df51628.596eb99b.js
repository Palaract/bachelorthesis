"use strict";(self.webpackChunkbachelor_docs=self.webpackChunkbachelor_docs||[]).push([[658],{7077:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(5893),r=i(1151);const t={sidebar_label:"LinApprox API",title:"approximation"},o=void 0,a={id:"approximation",title:"approximation",description:"LinearApproximator Objects",source:"@site/docs/approximation.md",sourceDirName:".",slug:"/approximation",permalink:"/approximation",draft:!1,unlisted:!1,editUrl:"https://github.com/Palaract/bachelorthesis/tree/main/docs/docs/approximation.md",tags:[],version:"current",frontMatter:{sidebar_label:"LinApprox API",title:"approximation"},sidebar:"tutorialSidebar",previous:{title:"Bayesian Optimisation",permalink:"/linear-approximation/methods/bayesian_optimization"}},l={},c=[{value:"LinearApproximator Objects",id:"linearapproximator-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"update_piecewise_approximation",id:"update_piecewise_approximation",level:4},{value:"compute_error",id:"compute_error",level:4},{value:"compute_approximation",id:"compute_approximation",level:4},{value:"get_approximated_function",id:"get_approximated_function",level:4},{value:"apply_pwl_to_model",id:"apply_pwl_to_model",level:4}];function d(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"linearapproximator-objects",children:"LinearApproximator Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class LinearApproximator()\n"})}),"\n",(0,s.jsx)(n.p,{children:"A class for creating a linear piecewise approximation of a function within a given domain."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start"})," ",(0,s.jsx)(n.em,{children:"float"})," - The start of the domain on the x-axis."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end"})," ",(0,s.jsx)(n.em,{children:"float"})," - The end of the domain on the x-axis."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num_points"})," ",(0,s.jsx)(n.em,{children:"int"})," - The number of points in the domain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"function"})," ",(0,s.jsx)(n.em,{children:"callable"})," - The function to approximate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"function_params"})," ",(0,s.jsx)(n.em,{children:"dict"})," - Parameters of the function to approximate"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_segments"})," ",(0,s.jsx)(n.em,{children:"int"})," - The maximum number of line segments for the piecewise approximation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"threshold"})," ",(0,s.jsx)(n.em,{children:"float"})," - The error threshold for the approximation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"suppress_warnings"})," ",(0,s.jsx)(n.em,{children:"bool"})," - If True, suppresses NumPy polynomial fit warnings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"piecewise_func"})," ",(0,s.jsx)(n.em,{children:"list"})," - Stores the slope and intercept of each line segment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"segments"})," ",(0,s.jsx)(n.em,{children:"list"})," - List of tuples representing the start and end points of each segment."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(start: float,\n             end: float,\n             num_points: int,\n             function: Callable,\n             function_params: dict[str, Any] = {},\n             max_segments: int = 500,\n             threshold: float = 0.01,\n             suppress_warnings: bool = True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Initializes the LinearApproximator with domain, function, and approximation parameters."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"start"})," ",(0,s.jsx)(n.em,{children:"float"})," - The start of the domain on the x-axis."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"end"})," ",(0,s.jsx)(n.em,{children:"float"})," - The end of the domain on the x-axis."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"num_points"})," ",(0,s.jsx)(n.em,{children:"int"})," - The number of points to be used for generating the domain within the specified range."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function"})," ",(0,s.jsx)(n.em,{children:"FunctionType or callable"})," - The function to approximate. Can be a predefined function specified by\nthe FunctionType enum from functions.py or a custom callable function. If a FunctionType enum value is\nprovided, the corresponding predefined function is used. If a callable is provided, it is used directly."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function_params"})," ",(0,s.jsx)(n.em,{children:"dict, optional"})," - Parameters to be passed to the function. This should be a dictionary where\nkeys are the names of the parameters and values are their corresponding values. This is especially useful\nfor predefined functions that require specific parameters. Defaults to an empty dictionary."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max_segments"})," ",(0,s.jsx)(n.em,{children:"int, optional"})," - The maximum number of line segments for the piecewise approximation. Defaults to 500."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"threshold"})," ",(0,s.jsx)(n.em,{children:"float, optional"})," - The error threshold for the approximation. Defaults to 0.01."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"suppress_warnings"})," ",(0,s.jsx)(n.em,{children:"bool, optional"})," - If True, suppresses NumPy polynomial fit warnings. Defaults to True."]}),"\n",(0,s.jsx)(n.p,{children:"The initializer first maps the provided function argument to the corresponding function, either from a set of predefined\nfunctions or a user-defined function. It then generates a domain of x-values (S) using np.linspace and computes the\ncorresponding y-values (y_base) using the provided function and parameters."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"update_piecewise_approximation",children:"update_piecewise_approximation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def update_piecewise_approximation(n_segments)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Updates the piecewise linear approximation with a given number of segments."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n_segments"})," ",(0,s.jsx)(n.em,{children:"int"})," - Number of segments to use in the piecewise approximation."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"np.ndarray"})," - Array of y-values approximated by the piecewise linear function."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["This function makes ",(0,s.jsx)(n.code,{children:"piecewise_func"})," and ",(0,s.jsx)(n.code,{children:"segments"})," available in the approximator"]}),"\n",(0,s.jsx)(n.h4,{id:"compute_error",children:"compute_error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def compute_error(approx_values)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Computes the error of the piecewise linear approximation."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"approx_values"})," ",(0,s.jsx)(n.em,{children:"np.ndarray"})," - The approximated y-values of the piecewise linear function."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"float"})," - The calculated error of the approximation."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"compute_approximation",children:"compute_approximation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def compute_approximation()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Computes the linear piecewise approximation within the specified error threshold and segment limit."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"approximator = LinearApproximator(S, y_base, max_segments, threshold)\napproximator.compute_approximation()\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will compute the approximation and update the class attributes accordingly."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"This method iteratively increases the number of segments until the error threshold is met\nor the maximum number of segments is reached. It uses a binary search approach to find\nthe optimal number of segments within these constraints."}),"\n",(0,s.jsx)(n.h4,{id:"get_approximated_function",children:"get_approximated_function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_approximated_function() -> list[tuple[float, float, float, float]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generates a set of constraints for each segment of the piecewise linear approximation."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["list of tuples: Each tuple contains the definition of one segment or rather linear function.\nThe returned tuples are built like ",(0,s.jsx)(n.code,{children:"(start, end, slope, intercept)"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"apply_pwl_to_model",children:"apply_pwl_to_model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def apply_pwl_to_model(model: Model, xvar: gp.Var,\n                       yvar: gp.Var) -> tuple[Model, gp.Constr]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Applies the piecewise linear approximation to a Gurobi optimization model using the addGenConstrPWL method."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model"})," ",(0,s.jsx)(n.em,{children:"gp.Model"})," - The Gurobi model to which a piecewise linear constraint  will be added."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"xvar"})," ",(0,s.jsx)(n.em,{children:"gp.Var"})," - The Gurobi model variable that represents the x-axis in the piecewise linear approximation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"yvar"})," ",(0,s.jsx)(n.em,{children:"gp.Var"})," - The Gurobi model variable that represents the y-axis in the piecewise linear approximation."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model"})," ",(0,s.jsx)(n.em,{children:"gp.Model"})," - The Gurobi model but with added piecewise linear constraint."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);