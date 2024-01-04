import { FormCorrect } from "./components/form-correct"
import { FormIncorrect } from "./components/form-incorrect"

function App() {
  return (
    <>
      <div className='container max-w-xl mx-auto my-20'>
        <div className="grid grid-cols-1 gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-3 text-red-500">
              Incorrect behavior
            </h1>
            <p className="mb-3">
              Submit is triggered by pressing the Enter key to confirm the conversion to Kanji by IME during Japanese input.
            </p>
            <FormIncorrect />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-3 text-teal-500">
              Expected behavior.
            </h1>
            <p className="mb-3">
              Submit is not triggered by pressing the Enter key to confirm the conversion to Kanji by IME during Japanese input.
            </p>
            <FormCorrect />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
