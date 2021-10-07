import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";
import PageHead from "./components/PageHead/PageHead";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  name: 'RickAndMorty',
  version: '1.0' 
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact"></Route>
          <Route path="/character/:id">
            <CharacterDetail />
          </Route>
          <Route path="/characters/:page">
            <PageHead title="Welcome to My App" />
            <CharacterList />
          </Route>
          <Route path="/" exact render={() => <Redirect to="/characters/1" />} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
