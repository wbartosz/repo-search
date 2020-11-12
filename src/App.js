import Header from './components/Header';
import Page from './components/Page';
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

            <Route
              path="/search/:keyword"
              exact
              render={(props) => (
                <Page title={props.match.params.keyword}>
                  <ResultsPage {...props} />
                </Page>
              )}
            />

            <Route
              path="/repos/:owner/:repo"
              exact
              render={(props) => (
                <Page title={props.match.params.repo}>
                  <DetailsPage {...props} />
                </Page>
              )}
            />

            <Route render={() => (
              <Page title="Page not found">
                <h1>Page not found</h1>
              </Page>
            )} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
