import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from 'react-redux'
import {store} from'./reducers';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
      <Provider store={store}>
          <App />
      </Provider>
  </ApolloProvider>

);

