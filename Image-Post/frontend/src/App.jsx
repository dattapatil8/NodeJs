import React from 'react'
import {BrowserRouter,Route,Routes} from'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/feed-section' element={<Feed/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
