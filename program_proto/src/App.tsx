import Diagram from "./components/Diagram";
import DiagramOptions from "./components/DiagramOption";
import Relations from "./components/Relations";

export default function App() {

  return (
    <>
      <div className="h-screen bg-black">
        <Diagram />
        <Relations />
        <DiagramOptions />
      </div>
    </>
  )
}

