import { Routes, Route } from 'react-router-dom';
import { Home, Cart, Profile } from '../pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      <Route path="/profile" element={ <Profile/> }/>
    </Routes>
  );
}

export default App;
