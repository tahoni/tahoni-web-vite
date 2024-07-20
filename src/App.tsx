import {ReactElement} from 'react'
import {Route, Routes} from "react-router";
import {MaskOverlay} from "@tahoni/tahoni-lib-react/dist";
import {Loader} from "@tahoni/tahoni-lib-react/dist";
import {Breakpoints} from "./layout/Breakpoints/Breakpoints.tsx";
import {Layout} from "./layout/Layout.tsx";
import {HomePage} from "./pages/home/HomePage.tsx";
import './App.scss'

function App(): ReactElement {
  return (
      <>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="*" element={<HomePage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
          <MaskOverlay mask={false}/>
          <Loader isLoading={false}/>
      </>
  )
}

export default App;
