import { ArraySample } from "./Components/ArraySample";
import { ChildCompo } from "./Components/ChildCompo";
import { FunctionSample } from "./Components/FunctionSample";
import { MultiType } from "./Components/MultiType";
import { MyComponent } from "./Components/MyComponent";
import { OneOfSample } from "./Components/OneOfSample";
import { Student } from "./Components/Student";

function App() {
  // const items =[
  //   {id:1, name:"item1"},
  //   {id:2, name:"item2"},
  //   {id:3, name:"item3"},
  //   {id:4, name:"item4"}
  // ]
    const handelClick = ()=>{
      alert("Button Clicked");
    };
  return (
    <>
      {/* <div> Ahmath Nafees </div>
     <MyComponent/> */}
     {/* <Student name="Nafees" age={25} ismarried ={false}/>
     <Student name="Ahmath" age={25} ismarried ={false}/>
     <Student name="Prince" age={25} ismarried ={false}/>
     <Student/>

     <ChildCompo>
        <p>This is paragraph 1</p>
        <p>This is paragraph 2</p>
        <p>This is paragraph 3</p>
     </ChildCompo> */}
     {/* <ArraySample items={items}/>
     <OneOfSample color="Green" />
     
     <MultiType value="String"/>
     <MultiType value={42}/>
     <MultiType value={true}/> */}
     <h1>Parent Component</h1>
      <FunctionSample handelClick={handelClick} />
    </>
  );
}
export default App;
