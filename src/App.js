import 'bootstrap/dist/css/bootstrap.min.css';
import Loggin from './Loggin';
import Dashbord from './Dashbord';



const code = new URLSearchParams(window.location.search).get('code')

function App() {
 
  return code ? <Dashbord code={code}/> :<Loggin/>
};


export default App;
