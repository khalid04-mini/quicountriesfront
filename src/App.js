import Difficulty from "./UI/Difficulty";
// import Game from "./UI/Game";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./UI/Home/Home";
import Game from "./UI/Game/Game";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/difficulty' element={<Difficulty/>} />
          <Route exact path='/game' element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
