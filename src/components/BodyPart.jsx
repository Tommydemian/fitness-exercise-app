import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import gymIcon from '../assets/icons/gym.png'



const BodyPart = ({item, selectedBodyPart, setSelectedBodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={
         {
            borderTop: selectedBodyPart == item ? '4px solid #ff2625': '', 
            backgroundColor: "#fff",
            width: '270px',
            height: '270px',
            cursor: 'pointer', 
            gap: '47px',
            borderBottomLeftRadius: '5px',
        }}
    
    >
        <img src={gymIcon} alt="gym-icon" style={{width: '100px', height: '100px'}} />
        <Typography>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart