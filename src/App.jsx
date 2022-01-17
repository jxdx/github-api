import './App.css'
import './custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Container } from 'react-bootstrap';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Search } from './components/Search'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <Search />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
