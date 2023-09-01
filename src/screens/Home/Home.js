import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {GlobalContext} from '../../context/GlobalState';
import {apiKeys} from '../../assets/apiKeys/ApiKeys';
import theme from '../../assets/theme/theme';
import WeatherIcon from '../../assets/images/WeatherIcon';
import styles from './HomeStyle';
import HeaderBar from './components/HeaderBar/HeaderBar';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const Home = () => {
  const {
    city,
    setCity,
    temp,
    setTemp,
    description,
    setDescription,
    min,
    setMin,
    max,
    setMax,
    speed,
    setSpeed,
    pressure,
    setPressure,
    feels,
    setFeels,
    humidity,
    setHumudity,
    dark,
    setDark,
  } = useContext(GlobalContext);
  const [iconUrl, setIconUrl] = useState();
  const [animation, setAnimation] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey1 = apiKeys.apiKey1;
        const cityName = city;
        const limit = 1;
        const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey1}`;
        const response = await axios.get(geoApiUrl);
        const apiKey2 = apiKeys.apiKey2;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey2}`;
        setAnimation(false);
        setError(false);
        const data = response.data;
        fetchWeather(weatherApiUrl);
      } catch (error) {
        setAnimation(true);
        setTimeout(() => {
          setAnimation(false);
          setError(true);
        }, 2000);
      }
    };

    fetchData();
  }, [city]);

  const fetchWeather = async weatherApiUrl => {
    try {
      const response = await axios.get(weatherApiUrl);
      const icon = response.data.weather[0].icon;
      setIconUrl(WeatherIcon[icon]);
      setTemp(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description.toUpperCase());
      setMax(Math.round(response.data.main.temp_max));
      setMin(Math.round(response.data.main.temp_min));
      setSpeed(response.data.wind.speed);
      setPressure(response.data.main.pressure);
      setFeels(response.data.main.feels_like);
      setHumudity(response.data.main.humidity);
      setAnimation(false);
      setError(false);
    } catch (error) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
        setError(true);
      }, 2000);
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: dark ? theme.primaryColor2 : theme.primaryColor,
      }}>
      <StatusBar
        backgroundColor={dark ? theme.primaryColor2 : theme.primaryColor}
      />
      <HeaderBar city={city} />
      {animation ? (
        <LottieView
          source={require('../../assets/lottie/animation3.json')}
          autoPlay
        />
      ) : (
        <View style={{flex: 1}}>
          {error ? (
            <LottieView
              source={require('../../assets/lottie/animation4.json')}
              autoPlay
            />
          ) : (
            <View>
              <View style={styles.innerContainer}>
                <Image source={iconUrl} style={styles.image} />
              </View>
              <View style={{marginBottom: 30, alignItems: 'center'}}>
                <Text style={styles.mainText}>{temp}°C</Text>
                <Text style={styles.text2}>{description}</Text>
                <Text style={styles.text2}>
                  Maks: {max}°C Min: {min}°C
                </Text>
              </View>
              <View
                style={{
                  ...styles.innerContainer2,
                  backgroundColor: dark
                    ? theme.secondaryColor2
                    : theme.secondaryColor,
                }}>
                <View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Hissedilen</Text>
                    <Text style={styles.text2}>{feels}</Text>
                  </View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Nem</Text>
                    <Text style={styles.text2}>{humidity}%</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Basınç</Text>
                    <Text style={styles.text2}>{pressure}mbar</Text>
                  </View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Rügar Hızı</Text>
                    <Text style={styles.text2}>{speed} m/s</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Home;
