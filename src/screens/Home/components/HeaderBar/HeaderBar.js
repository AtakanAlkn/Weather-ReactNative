import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, Switch} from 'react-native';
import {GlobalContext} from '../../../../context/GlobalState';
import styles from './HeaderBarStyle';
import Icon from 'react-native-vector-icons/EvilIcons';
import CustomModal from './CustomModal';
import LottieView from 'lottie-react-native';

const HeaderBar = props => {
  const {onVisible, setOnVisible, dark, setDark} = useContext(GlobalContext);
  const [animation, setAnimation] = useState(false);
  const onModal = () => {
    setOnVisible(true);
  };
  const onTheme = () => {
    setDark(!dark);
    setAnimation(!animation);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="location" size={27} color={'white'} />
        <TouchableOpacity onPress={onModal}>
          {props.city ? (
            <Text style={styles.text}>{props.city}</Text>
          ) : (
            <Text style={styles.text}>Konum Giriniz</Text>
          )}
        </TouchableOpacity>
        <Icon name="chevron-down" size={27} color={'white'} />
        <Switch onValueChange={onTheme} value={animation} />
      </View>

      <Modal
        visible={onVisible}
        onRequestClose={() => setOnVisible(false)}
        animationType="slide"
        transparent={true}>
        <CustomModal />
      </Modal>
    </View>
  );
};

export default HeaderBar;
