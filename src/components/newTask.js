import React, {useState} from "react";

const NewTask = ({ onSubmit}) => {
const [newItem, setNewItem] = useState("");

const setNewTask = ({ target}) => {
setNewItem(target.value);

};

const submit = (event) => {
event.preventDefault();
onSubmit(newItem);


};

