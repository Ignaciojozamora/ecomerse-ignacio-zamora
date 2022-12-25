import "./itemlistcontainer.css"

const ItemListContainer = (props) => {
    const greeting = props.greeting
    return (
        
        <div className="itemlistcontainer">{greeting}</div>
);
};

export default ItemListContainer;