import './App.scss'
import { Navbar } from './components/Navbar/index.'
import { NewsLetter } from './components/NewsLetter'

function App() {

  return (
    <div className='main-container'>
      <main>
        <Navbar />
        <NewsLetter />
      </main>
    </div>
  )
}

export default App
