import {Routes, Route} from "react-router-dom"
import { Footer } from "./atvReact/Footer"
import { Header } from "./atvReact/Header"
import { SectionHome } from "./atvReact/SectionHome"
import { SectionMis } from "./atvReact/SectionMis"
import { SectionProd } from "./atvReact/SectionProd"
import { SectionCont } from "./atvReact/SectionCont"
import { SectionHistory } from "./atvReact/SectionHistory"

function App() {
  return (
    <div>
      <Header 
/>
      <Routes>
        <Route path='/' element={<SectionHome />}>
        </Route>
        <Route path='/SectionHome' element={<SectionHome titulo='Teste'/>}>
        </Route>
        <Route path='/SectionMis' element={<SectionMis titulo='Missão'/>}>
        </Route>
        <Route path='/SectionProd' element={<SectionProd titulo='Produtos'/>}>
        </Route>
        <Route path='/SectionHistory' element={<SectionHistory titulo='Historia'/>}>
        </Route>
        <Route path='/SectionCont' element={<SectionCont titulo='Contato'/>}>
        </Route>
      </Routes>
 <Footer />
    </div>
  )
}

export default App
