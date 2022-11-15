import {Header} from '../components/Header'
import Calendar from '../components/Calendar'
import '../assets/styles/HomePage.scss'
import {EventList} from '../components/EventList'


const HomePage = () => {

    return (
        <div id="HomePage" className="h-100">
            <Header/>
            <div className="calendar-wrapper">
                <Calendar/>
                <div style={{display: "flex", flexDirection:"column"}}>
                    <EventList events={[{id: "1363", name: "ahfbejr", date: new Date()}]}
                               />

                </div>
            </div>
        </div>
    )
}

export default HomePage