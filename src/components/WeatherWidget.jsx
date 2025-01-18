import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = '2d1f453728ca04726b393255448156bc';
            const city = 'Delhi';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await axios.get(url);
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, []);

    if (!weather)
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress />
            </Box>
        );

    return (
        <Card sx={{ mb: 0, boxShadow: 'none', padding: 0 }}>

            {/* lastchild for rewrite default padding */}
  <CardContent
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 0,
      margin: 0,
      '&:last-child': {
        paddingBottom: 0, 
      },
    }}
  >
    <Typography variant="p" sx={{ marginRight: '5px', marginBottom: 0, padding: 0 }}>
      Weather in {weather.name}
    </Typography>
    <Typography variant="p" sx={{ marginRight: '1px', marginBottom: 0, padding: 0 }}>
      {weather.weather[0].description}
    </Typography>
    <Typography variant="h6" sx={{ marginBottom: 0, padding: 0 }}>
      {weather.main.temp}&deg;C
    </Typography>
  </CardContent>
</Card>

      

    );
};

export default WeatherWidget;
