import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {

  return (
        <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path=":user" element={<User />} />
        </Route>
      </Routes>
  )
}

export default App
