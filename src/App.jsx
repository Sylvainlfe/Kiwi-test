

import NewCard from "./components/NewCard";


function App() {

  return (
    <>
      <NewCard 
      img ="data:image/jpeg;base64,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"
      name="kiwi"
      title="Mes kiwis"/>
    </>
  )
}

export default App
