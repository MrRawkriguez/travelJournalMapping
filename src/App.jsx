import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import Data from "./data"

function App() {

  return (
    <>
      <Header />
      <main className='container'>
        {Data.map(({key, ...entryProps}) => (
          <Entry key={key} {...entryProps} />
        ))}
      </main>
    </>
  )
}

export default App
