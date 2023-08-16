import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode; //TS2339: Property 'children' does not exist on type 'ChildProps'.
}

/* Using like this, typescript cannot understand that it's React component. Child.displayName  NOT exist*/
export const Child = ({ color, onClick} : ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>;
};


/* This is react component,. ChildAsFC.displayName exists  FC is FunctionComponent*/
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick}) => {
  return <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>;
};

