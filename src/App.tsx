import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import UserDetailProvider from './context/userDetailProvider';

import Header from './components/Header';

function App() {
  const routeList = routes.map(({path,Component}, index) => {
    return (
      <Route key={index} {...{path}} element={<Component />} />
    )
  })

  return (
    <div className="App">
      <Router>
        <Header />
        <UserDetailProvider>
          <Routes>
            {routeList}
          </Routes>
        </UserDetailProvider>
      </Router>
    </div>
  );
}

export default App;
