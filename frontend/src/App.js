import logo from './images/fo1_logo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TodoList from './components/TodoList';
import CharacterSheet from './components/CharacterSheet';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { logout } from './services/apiService';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Level from './components/Level';
import CreateCharacter from './components/CreateCharacter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true // Debug
    };
  }

  handleLoginSuccess = () => {
    this.setState({ isAuthenticated: true });
  };

  handleLogout = () => {
    // Call API service to logout
    logout().then(() => {
      this.setState({ isAuthenticated: false });
    });
  };

  render() {
    return (
        <Router>
          <NavBar isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout} />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/CharacterSheet" element={ <CharacterSheet />} />
            <Route path="/CharacterSheet/Level" element={ <Level />} />
            <Route path="/CreateCharacter" element={ <CreateCharacter /> }/>
          </Routes>

        </Router>
    )
  }
}

export default App;

/*<Routes>
  <Route path="/login" element={<Login onLoginSuccess={this.handleLoginSuccess} />} />
  <Route path="/" element={
    <ProtectedRoute isAuthenticated={this.state.isAuthenticated}>
      <Home />
    </ProtectedRoute>
  }/>
</Routes>*/