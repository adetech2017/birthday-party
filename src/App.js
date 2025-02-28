import React from 'react';
import Header from './components/Header/Header';
import Countdown from './components/Countdown/Countdown';
import EventDetails from './components/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';




function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Countdown />
      <EventDetails />
      <Footer />
    </div>
  );
}

export default App;