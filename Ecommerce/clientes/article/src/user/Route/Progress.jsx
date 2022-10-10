import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './progress.css'

const Progress = () => {

    return (
        <div>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" className='prog'>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </div>
    )
}

export default Progress