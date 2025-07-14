import { View, TextInput, TextInputProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './styles';

interface Props extends TextInputProps {
  icon: keyof typeof Feather.glyphMap;
}

export default function Input({ icon, ...rest }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconBox}>
        <Feather name={icon} size={18} style={styles.icon} />
      </View>

      <TextInput
        {...rest}
        style={styles.control}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}
