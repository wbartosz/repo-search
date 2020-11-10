import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import DetailsPage from './pages/DetailsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="page-content container">
          <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/search/:keyword" exact component={(props) => <ResultsPage {...props} />} />
            <Route path="/repos/:owner/:repo" exact component={(props) => <DetailsPage {...props} />} />
            <Route component={() => <h1>Page not found</h1>} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
