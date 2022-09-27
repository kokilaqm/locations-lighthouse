// ** React Imports
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// ** Amplify Imports
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

// ** Local File Imports
import Locations from './pages/locations/locationtable'
import ReactGA from 'react-ga'

Amplify.configure(awsExports)

ReactGA.initialize('333993215', { gaOptions: { siteSpeedSampleRate: 100 } })

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Navigation />*/}
        <Routes>
          <Route path="/" element={<Locations />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
