import React from "react";

const BasicTable = ({ children }) => {
    const iterateOverChildren = (children) => {
      return React.Children.map(children, (child,index) => {
        // equal to (if (child == null || typeof child == 'string'))
        console.log(child)
        if (!React.isValidElement(child)) return child;
  
        // return React.cloneElement(child, {
        //   ...child.props,
        //   // you can alse read child original className by child.props.className
        //   className: child.type == 'th' ? 'th' : '',
        //   children: iterateOverChildren(child.props.children)})
      })
    };
  
    return (
      <div className="table-responsive">
        <div className="w-full bg-transparent">
          {iterateOverChildren(children)}
        </div>
      </div>
    );
  };
  
 export default function CustomAccordians() {
    return (
        <BasicTable>
          <p>jfohsahjs</p>
          <p>jfohsahjs</p>
        </BasicTable>
    );
  }