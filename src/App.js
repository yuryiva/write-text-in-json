import React, { useContext } from "react";
import Input from "./components/input";
import Card from "./components/card";
import { MyContext } from "./context/ContextProvider";


// /#\w+/g
function App() {
  const context = useContext(MyContext);

  

  fetch('data.json')
.then(response=>response.json)
.then(data=>console.log(data))

  const onChangeHandler = (event) => {
    context.setState({
      ...context.state,
      value: event.target.value,
    });
  };

  const onClickHandler = () => {
    let copyOfNotes = [...context.state.notes];
    copyOfNotes.push(context.state.value);
    context.setState({
      ...context.state,
      notes: copyOfNotes,
      value: "",
    });
  };

  const renderItems = () => {
    setTimeout(
      (context.state.notes.map((element, index) => {
        <Card key={index} text={element} />;
      }),
      1000)
    );
    console.log("1000");
  };

  return (
    <div>
      ADD-A-TAG-APP
      <Input onChange={onChangeHandler} />
      <Card />
      <button onClick={() => onClickHandler()}>ADD</button>
      {context.state.notes.length > 0 ? (
        renderItems()
      ) : (
        <h2>Please add a tag</h2>
      )}
      {/* {
  context.state.notes.length >0 ?
   
   
   console.log('yes')
   : console.log('no',context.state.notes)
} */}
    </div>
  );
}



export default App;
