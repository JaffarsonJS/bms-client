import React, { useEffect, useState } from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { CloudMoon, PhoneCall } from "lucide-react";

const WeatherCard = () => {
  const [condition, setCondition] = useState("Loading...");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?lat=11.0168&lon=76.9558&units=metric&appid=e87f8c915158d86745b59797d8a73543"
        );
        const data = await response.json();

        if (isMounted && data?.list?.length > 0) {
          setWeatherData(data?.list[0]?.main?.temp_min);
          setCondition(data?.list[0]?.weather[0]?.description);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box sx={{ border: "none", outline: "none" }}>
      <div className="flex justify-between">
        <CardContent
          className="bg-[#737afa] text-white w-44 h-52 flex justify-around items-center flex-col border-none outline-none rounded-xl"
          sx={{ border: "none", outline: "none" }}
        >
          <CloudMoon strokeWidth={1.1} size={80} />
          <Typography variant="h4">{weatherData && weatherData}°C</Typography>
          <Typography textTransform={"capitalize"}>
            {condition && condition}
          </Typography>
        </CardContent>

        <a href="tel:">
          <CardContent
            className="bg-[#f98787] text-white w-44 h-52 flex justify-around items-center flex-col border-none outline-none rounded-xl"
            sx={{ border: "none", outline: "none" }}
          >
            <PhoneCall strokeWidth={1.1} size={70} />
            <Typography textAlign={"center"}>
              Important <br /> matters
            </Typography>
          </CardContent>
        </a>
      </div>
    </Box>
  );
};

export default WeatherCard;
