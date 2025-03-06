import { Navbar } from "./components/Navbar"
import { NumbersScreen } from "./components/NumbersScreen"


//TODO: Agregar nueva funcionalidad de quitar los numeros repetidos

function App() {
  return (
    <main className="">
      <Navbar />
      
      <div className="flex justify-evenly items-center">
        <NumbersScreen />
      </div>
    </main>
  )
}

export default App
