import React, { useState,useEffect } from "react";
import "./App.css";
import NewTask from "./components/newTask";
import ListItems from "./components/listItems";
import Header from "./components/Header";
import Container from "./components/Container";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";



const App = () => {
 
const [pagina,setPagina]=useState(0)

useEffect(

  ()=>{
const url=window.location.href
const res=url.split('?')
setPagina(res[1])

  }
)

const LinksPaginas=(p)=>{
if(p==1){
window.open('http://localhost:3000?1' , 'self')
}else if(p==2){
window.open('http://localhost:3000?2' , 'self')


}

}





const retornarPagina=()=>{}
if(pagina==1){
  return<Pagina1/>
}else if(Pagina2==2){
  return <Pagina2/>
}else{
return <div> 
        <button on onClick={()=>LinksPaginas(1)}>Página 1</button>
        <button onClick={()=>LinksPaginas(2)}>Página 2 </button>
  </div>
}
return(
  <>
{retornarPagina()}

  </>
)


  const [tasks, setTasks] = useState([]);


const addNewTask = (task) => {
  const itenscopy = Array.from(tasks);
  itenscopy.push({ id:tasks.length,value: task});
  setTasks(itenscopy);
};

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

const deleteTask = (index) => {
const itensCopy = Array.from(tasks);
itensCopy.splice(index, 1);
setTasks(itensCopy);

};

return ( 

  <><Header />   

  <Container> 
   

<h2>Os melhores livros você encontra aqui</h2>

<p> Memórias póstumas de Brás Cubas-Machado de Assis</p>     
<button type="submit"> Excluir </button>

<p>O tempo e o vento - Érico Veríssimo </p>
<button type="submit"> Excluir </button>

<p>Morangos Mofados - Caio Fernando de Abreu </p>
<button type="submit"> Excluir </button>


  </Container>
    
  <div className="App">
    <div className="App-header">
      <NewTask onSubmit={addNewTask} />
      {tasks.map(({ id, value }, index) => (

        <ListItems
          Key={id}
          value={value}
          onDelete={() => deleteTask(index)}
          onChange={(event) => updateTask(event, index)} />

      ))}
    </div>
    <div className="Array-preview">
      <pre>{JSON.stringify(tasks, null, 4)} </pre>
    </div>
  </div>
</>

);
};

export default App; 
