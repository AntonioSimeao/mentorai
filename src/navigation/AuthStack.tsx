import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyEmail from '../screens/auth/VerifyEmail';
import Signup from '../screens/auth/Signup';
import SelectArea from '../screens/auth/SelectArea';

export type AuthStackParamList = {
  SignUp: undefined;
  VerifyEmail: { email: string };
  SelectArea: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="SelectArea" component={SelectArea} />
    </Stack.Navigator>
  );
}
