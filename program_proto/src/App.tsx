import Diagram from "./components/Diagram"
import DiagramOptions from "./components/DiagramOption"

export default function App() {

  return (
    <>
      <div className="h-screen bg-black">
        <Diagram />
        <DiagramOptions />
      </div>
    </>
  )
}

