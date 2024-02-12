import React from "react" ;


const ListItems = ({ onChange, onDelete, value}) => {
return (

<div classname="Container-item">
    <input value={value} onChange={onChange} className="Field-item"/>
    <button onClick={onDelete}>Deletar</button>

</div>

);
};

export default ListItems;
