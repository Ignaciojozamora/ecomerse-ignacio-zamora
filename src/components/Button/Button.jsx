import "./button.css"


export default function Button(props) {


  return (
    <button style={{ backgroundColor: props.color }} className= "btn">
      {props.text}
    </button>
  );
}


export function ButtonChild(props) {


  return (
    <button 
    onClick={props.onClick}
    className= "btn"
    >
      {props.children}
    </button>
  );
}
