import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoute } from "./routes/Route"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
