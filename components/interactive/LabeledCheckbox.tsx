import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppearanceContext} from '../../App';
import Checkbox from './Checkbox';

type ILabeledCheckboxProps = {
  label: string;
};

export default function LabeledCheckbox({label}: ILabeledCheckboxProps) {
  const appearance = useContext(AppearanceContext);
  const tapAnimation = useRef(new Animated.Value(0)).current;

  const [checked, setChecked] = useState(false);

  const pressInHandler = () => {
    Animated.timing(tapAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const pressHandler = () => {
    setChecked(c => !c);
  };

  const pressOutHandler = () => {
    Animated.timing(tapAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      onPress={pressHandler}>
      <View style={styles.container}>
        <View style={styles.checkboxWrapper}>
          <Checkbox checked={checked} setChecked={setChecked} />
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  checkboxWrapper: {
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginLeft: 4,
  },
});
