import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { 
  Box,
  Stack,
  Button,
  TextField,
  Typography
  } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {

  // State for search input and exercises rendered.
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    // Custom hooks to fetch exercise and body part data.
    const {
      data: exerciseData,
      isLoading: exercisesLoading,
      refetchData
    } = useFetch('exercises', '/exercises')
    
      const {
        data: bodyPartsData,
        isLoading: bodyPartsIsLoading,
        refetchData: refetchBodyPartsData
      } = useFetch('filters', '/exercises/bodyPartList')

    // Event handler for search button
    const handleSearch = () => {
        console.log(data)
        refetchData()
        
        const searchedExercises = data.filter(exercise => {
            exercise.bodyPart.includes(search) || 
            exercise.name.includes(search) ||
            exercise.target.includes(search) ||
            exercise.equipment.includes(search) 
        })

        setSearch('')
        setExercises(searchedExercises)
      }

      useEffect(() =>{
        if (bodyPartsData) {
          setSelectedBodyPart(bodyPartsData[0]);
        }
      }, [bodyPartsData])

      useEffect(() =>{
        refetchBodyPartsData();
      }, [])
    
  // JSX return 
  return (
    <Stack
    alignItems="center"
    justifyContent="center"
    mt="37px"
    p="20px"
    >
      <Typography 
      textTransform="capitalize"
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }}
      mb="50px" textAlign="center"
      >
        Awesome exercises you <br />
         should know
      </Typography >
      <Box position="relative" mb="72px">
        <TextField 
          sx={{
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'}, 
            width: {lg: '800px', xs: '100%'}, 
          }}
          height="76px" 
          value={search}
          onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search exercises"
          type="text"
        />
        
        <Button onClick={handleSearch} className='search-btn' 
        sx={{
            backgroundColor: '#FF2625',
            color: '#fff', 
            textTransform: 'none', 
            width: { lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'}, 
            height: "56px", 
            position: 'absolute',
            right: 0
        }}
        >
          Search 
        </Button>

      </Box>
      <Box sx={{
        position: 'relative', 
        width: '100%',
        p: '20px'
      }}>
        { bodyPartsData && <HorizontalScrollbar 
        data={bodyPartsData}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart} 
        />}
      </Box>
    </Stack>
  )
}

export default SearchExercises