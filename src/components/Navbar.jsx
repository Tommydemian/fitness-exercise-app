import React from 'react'
import styles from './navbar.module.css'

import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction='row'
    justifyContent='space-around' sx={{gap:{ sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none', px:"20px" }}
    >
        <Link to='/'>
        <img src={Logo} alt="logo" className={styles.img} />
        </Link>
        <Stack 
          direction="row"
          gap="40px"
          alignItems='flex-end'
          fontSize='1.5rem'
        >
            <Link className={styles['home-link']}  to="/">Home</Link>
            <a href="#exercises" className={styles['exercise-link']}>
                Exercises
            </a>
        </Stack>
    </Stack>


  )
}

export default Navbar