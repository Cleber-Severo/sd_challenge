import Banner from './components/Banner/index'
import './App.scss'
import { Navbar } from './components/Navbar/index.'
import { NewsLetter } from './components/NewsLetter'

function App() {

  return (
    <div className='main-container'>
      <main>
        <Navbar />
        <NewsLetter />
        <Banner />
      </main>
    </div>
  )
}

export default App
