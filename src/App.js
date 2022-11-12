import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventList } from "./components/EventList";

function App() {
  return (
    <>
      <EventList events={[{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"},{title:"Evenimentul magic"},{title:"Banchet an3"}]}/>
      
    </>
  );
}

export default App;
