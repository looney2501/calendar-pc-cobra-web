import { Header } from "../components/Header";
import Calendar from "../components/Calendar";
import "../assets/styles/HomePage.scss";
import { EventList } from "../components/EventList";

const HomePage = () => {
  return (
    <div id="HomePage" className="h-100">
      <Header />
      <div className="calendar-wrapper">
        <Calendar />
        <div className="event-list-wrapper">
          <EventList events={[{name: "default",
              date: new Date().toLocaleString(),
              description: "deafult"}]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
