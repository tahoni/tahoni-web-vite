import {ReactElement} from 'react'
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {MaskOverlay} from "./components/common/overlay/overlay.tsx";
import {Loader} from "./components/common/loader/loader.tsx";
import {Layout} from "./layout/layout.tsx";
import {HomePage} from "./pages/home-page.tsx";
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
