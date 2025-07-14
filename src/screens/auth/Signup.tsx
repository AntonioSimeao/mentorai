import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import {styles} from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Input from '../../components/Inputs';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';


type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export default function Signup({navigation}: Props) {

  const handleNext = () =>{
    navigation.navigate("VerifyEmail",{email: "teste@teste.com"})
  }

  const [step, setStep] = useState(1);
 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="user-graduate" style={styles.icon} />
        <Text style={styles.title}>CRIE SUA CONTA</Text>
      </View>
      {step === 1 && (
      <ScrollView contentContainerStyle={styles.form}>
          <Input icon="user" placeholder="Nome completo" />
          <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
          <Input icon="calendar" placeholder="Data de nascimento (DD/MM/AAAA)" />
          <Input icon="lock" placeholder="Senha" secureTextEntry />
          <Input icon="lock" placeholder="Confirmar senha" secureTextEntry />
          <Pressable style={styles.button} onPress={() => handleNext()}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
