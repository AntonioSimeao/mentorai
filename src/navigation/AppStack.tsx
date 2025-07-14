import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AreaScreen from '../screens/onboarding/AreaScreen';

export type AppStackParamList = {
  Area: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Area" component={AreaScreen} />
    </Stack.Navigator>
  );
}
