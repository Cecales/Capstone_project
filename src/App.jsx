
import styles from "./App.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopicDetails } from './pages/TopicDetails';
import { LandingPage } from './pages/LandingPage';
import { ProfessorGrid } from "./components/ProfessorGrid";
import { LoginButton } from "./Login"
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <Link to="/">
      <div className="App">
      {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
      </Link>
      <header className="App-header">
        <Link to="/topics">
          <h1 className={styles.title}>Topics</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/topics/:topicId"><ProfessorGrid /></Route>
          <Route exact path="/topics/professor/:professorId"><TopicDetails /></Route>
          <Route path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
