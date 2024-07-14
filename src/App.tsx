import {ReactElement} from 'react'
import {Route, Routes} from "react-router";
import {MaskOverlay} from "@tahoni/tahoni-lib-react/dist";
import {Loader} from "@tahoni/tahoni-lib-react/dist";
import {Breakpoints} from "./layout/Breakpoints";
import {Layout} from "./layout";
import {HomePage} from "./pages/home";
import './App.scss'

function App(): ReactElement {
  return (
      <div id="app" className="app">
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="*" element={<HomePage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
          <MaskOverlay mask={false}/>
          <Loader isLoading={false}/>
      </div>
  )
}

export default App;
