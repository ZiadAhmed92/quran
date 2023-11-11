import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <div className='footer '>
   <Link to="profile"><Typography sx={{fontSize:"1.5em",":hover":{color:"red"}}}>للتواصل معى</Typography></Link>

    </div>
  )
}

export default Footer