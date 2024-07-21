import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import DarkMode from './components/DarkMode/DarkMode';
import '../src/index.css';
import '../src/components/DarkMode/DarkMode.css';

function App() {
  const [active, setActive] = useState(1);
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled className="App" darkMode={darkMode}>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: ${props => props.darkMode ? '#121212' : '#f5f5f5'}; /* Dark and light mode backgrounds */
  color: ${props => props.darkMode ? '#e0e0e0' : '#000000'}; /* Text color for dark and light modes */
  position: relative;

  main {
    flex: 1;
    background: ${props => props.darkMode ? 'rgba(30, 30, 30, 0.78)' : 'rgba(252, 246, 249, 0.78)'};
    border: 3px solid ${props => props.darkMode ? '#333' : '#FFFFFF'};
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
