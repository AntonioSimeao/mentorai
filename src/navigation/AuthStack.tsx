import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyEmail from '../screens/auth/VerifyEmail';
import Signup from '../screens/auth/Signup';

export type AuthStackParamList = {
  SignUp: undefined;
  VerifyEmail: { email: string };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    </Stack.Navigator>
  );
}
