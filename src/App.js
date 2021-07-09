
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  const onDelete = (todo) =>{
    console.log("I am onDelete", todo);
  }
  let todos = [
    {
      No: 1,
      title: "Commit the work to git",
      desc: "You have to commit the work done till night to git repo."
    },
    {
      No: 2,
      title: "Gym",
      desc: "You have a work-out session at gym at 17:00 Hr"
    },
    {
      No: 3,
      title: "Cleaning",
      desc: "Make sure to clean the room before mom comes at home."
    }
  ]
  return (
    <>
      <Header title="Sid's-Todo" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
