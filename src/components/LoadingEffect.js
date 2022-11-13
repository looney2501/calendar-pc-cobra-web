import '../assets/styles/LoadingEffect.scss'
import '../assets/styles/globals.scss'
import { Spinner } from 'react-activity'
import "react-activity/dist/library.css";

const LoadingEffect = ({ message }) => (
  <div className="h-100 d-flex flex-column justify-content-center align-items-center">
    <Spinner color="#34ace0" size={50} speed={1} animating={true} />
    <h6 style={{ color: '#34ace0' }}>
      {message}
    </h6>
  </div>
)

export default LoadingEffect