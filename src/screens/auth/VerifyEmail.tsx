import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import {styles} from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Input from '../../components/Inputs';
import { useEffect, useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';

const CODE_LENGTH = 5;
const RESEND_SECONDS = 60;
type Props = NativeStackScreenProps<AuthStackParamList, 'VerifyEmail'>;
export default function VerifyEmail({navigation}: Props) {

 const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const inputs = useRef<TextInput[]>([]);


  //inicia o timer
  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (digit: string, index: number) => {
    if (!/^\d?$/.test(digit)) return; // aceita só um dígito no input
    const next = [...code];
    next[index] = digit;
    setCode(next);

    // focar o próximo input após o anterior ser preenchido
    if (digit && index < CODE_LENGTH - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleResend = () => {
    // to-do implementar lógica com backend reenvio de código por email
    setCode(Array(CODE_LENGTH).fill(''));
    setTimer(RESEND_SECONDS);
    inputs.current[0].focus();
  };

  const handleConfirm = () => {
    const otp = code.join('');
    console.log('Enviar OTP:', otp);
    navigation.navigate("SelectArea")

    
    // to-do implementar lógica com backend para confirmar código
  };
 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CONFIRMAÇÃO</Text>
      </View>

        <Text style={styles.caption}>
        Um código foi enviado para seu e-mail. Caso não tenha recebido,
        você poderá reenviar em{' '}
        <Text style={styles.timer}>{timer}s</Text>.
      </Text>

            <View style={styles.codeRow}>
        {code.map((d, i) => (
          <TextInput
            key={i}
            ref={(ref) => { inputs.current[i] = ref!; }}
            style={styles.codeBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(t) => handleChange(t, i)}
            value={d}
          />
        ))}
      </View>


      <ScrollView contentContainerStyle={styles.form}>
          <Pressable style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>CONFIRMAR</Text>
          </Pressable>
        </ScrollView>
          <Pressable
        style={[
          styles.resendBtn,
          timer === 0 ? styles.resendEnabled : styles.resendDisabled,
        ]}
        disabled={timer !== 0}
        onPress={handleResend}
      >
        <Text
          style={[
            styles.resendText,
            timer === 0 ? styles.resendTextEnabled : styles.resendTextDisabled,
          ]}
        >
          REENVIAR
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
