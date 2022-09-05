import "./App.css";
import Discussion from "./Container/Discussion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Discussion />
      <ToastContainer/>
    </div>
  );
};

export default App;
