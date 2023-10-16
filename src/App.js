import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './appRouter/AppRouter';
import OfferForm from './pageElements/offerForm/OfferForm';

function App() {
  const [show, setShow] = useState(false)
  const yourState = useSelector((state) => state.OfferReducer.makingOffer);
  useEffect(() => {
    // Код, який виконується при зміні стану стору (yourState)
    // Наприклад, виклик функції або оновлення компонента
    document.addEventListener("touchmove", function (event) {
      event.preventDefault();
      event.stopPropagation()
    });
    yourState ? setShow(true) : setShow(false)
  }, [yourState]); // Передайте залежність вашого ефекту, яка відслідковує ваш стан

  return (
    <Router>
      <div className="App">
        {show ? <OfferForm /> : null}
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;