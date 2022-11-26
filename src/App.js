import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import New from './pages/New/New'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


console.info(
  `\n%c⚠️ Warning ⚠️%c \n\n\n%cThis is likely not an issue with Dashy, but rather your configuration. If you think it is a bug, please open a ticket on GitHub: https://git.io/JukXk`,
  "color:#ceb73f; background: #f9ca24; font-size:1.5rem; padding:0.15rem; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
  'font-weight: bold; font-size: 1rem;color: #ceb73f;',
  "color: #ceb73f; font-size: 0.75rem; font-family: Tahoma, 'Trebuchet MS', Helvetica;",
);

console.time("concatenation");
let output = "";
for (var i = 1; i <= 1e6; i++) {
  output += i;
}
console.timeEnd("concatenation");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
