import {Header} from './components/Header.jsx'
import {Home} from './pages/Home.jsx'
import {Menu} from './pages/Menu.jsx'
import {Order} from './pages/Order.jsx'
import {OrderComplete} from "./pages/OrderComplete.jsx";
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default', minHeight: '100vh',
      }}>
      <Header/>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/order/OrderComplete" element={<OrderComplete/>}/>
        </Routes>
      </Box>
    </Box>
  )
}

export default App