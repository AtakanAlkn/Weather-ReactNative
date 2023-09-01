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
  const {city, dark} = useContext(GlobalContext);
  const [weatherData, setWeatherData] = useState(null);
  const [animation, setAnimation] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey2 = apiKeys.apiKey2;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey2}`;
        const response = await axios.get(weatherApiUrl);
        setWeatherData(response.data);
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

    fetchWeather();
  }, [city]);

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
                <Image
                  source={WeatherIcon[weatherData.weather[0].icon]}
                  style={styles.image}
                />
              </View>
              <View style={{marginBottom: 30, alignItems: 'center'}}>
                <Text style={styles.mainText}>
                  {Math.round(weatherData.main.temp)}°C
                </Text>
                <Text style={styles.text2}>
                  {weatherData.weather[0].description.toUpperCase()}
                </Text>
                <Text style={styles.text2}>
                  Maks: {Math.round(weatherData.main.temp_max)}°C Min:{' '}
                  {Math.round(weatherData.main.temp_min)}°C
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
                    <Text style={styles.text2}>
                      {Math.round(weatherData.main.feels_like)}
                    </Text>
                  </View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Nem</Text>
                    <Text style={styles.text2}>
                      {weatherData.main.humidity}%
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Basınç</Text>
                    <Text style={styles.text2}>
                      {weatherData.main.pressure}mbar
                    </Text>
                  </View>
                  <View style={styles.c1}>
                    <Text style={styles.text3}>Rüzgar Hızı</Text>
                    <Text style={styles.text2}>
                      {weatherData.wind.speed} m/s
                    </Text>
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
