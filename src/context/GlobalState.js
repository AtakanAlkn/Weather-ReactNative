import {createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [city, setCity] = useState('Istanbul');
  const [dark, setDark] = useState(false);
  const [onVisible, setOnVisible] = useState(false);
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [speed, setSpeed] = useState();
  const [pressure, setPressure] = useState();
  const [feels, setFeels] = useState();
  const [humidity, setHumudity] = useState();
  const [customData, setCustomData] = useState();

  return (
    <GlobalContext.Provider
      value={{
        city,
        setCity,
        dark,
        setDark,
        onVisible,
        setOnVisible,
        temp,
        setTemp,
        description,
        setDescription,
        max,
        setMax,
        min,
        setMin,
        speed,
        setSpeed,
        pressure,
        setPressure,
        feels,
        setFeels,
        humidity,
        setHumudity,
        customData,
        setCustomData,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
