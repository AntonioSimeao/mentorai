import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Feather from '@expo/vector-icons/Feather';
import { colors, spacing, font } from '../../theme';

import data from '../../../assets/areas.json';      
import { styles } from './styles';

interface Node {
  code: string;
  name: string;
  children?: Node[];
}

export default function SelectArea() {
  /* estado */
  const [areaCode, setAreaCode] = useState<string>();
  const [subCode, setSubCode] = useState<string>();
  const [interests, setInterests] = useState<string[]>([]);

  /* helpers */
  const areas: Node[] = data;
  const subareas = areas.find(a => a.code === areaCode)?.children ?? [];
  const interestsNodes =
    subareas.find(s => s.code === subCode)?.children ?? [];

  const toggleInterest = (code: string) => {
    setInterests(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ÁREA DE ESTUDO</Text>
      </View>

    <View style={styles.pickerContainer}>
      {/* 1º Picker – área principal */}
      <Text style={styles.label}>Selecione a área principal:</Text>
      <Picker
        selectedValue={areaCode}
        onValueChange={v => {
          setAreaCode(v);
          setSubCode(undefined);
          setInterests([]);
        }}>
        <Picker.Item label="-- escolha --" value={undefined} />
        {areas.map(a => (
          <Picker.Item key={a.code} label={a.name} value={a.code} />
        ))}
      </Picker>

      {/* 2º Picker – subárea */}
      {areaCode && (
        <>
          <Text style={styles.label}>Selecione a subárea:</Text>
          <Picker
            selectedValue={subCode}
            onValueChange={v => {
              setSubCode(v);
              setInterests([]);
            }}>
            <Picker.Item label="-- escolha --" value={undefined} />
            {subareas.map(s => (
              <Picker.Item key={s.code} label={s.name} value={s.code} />
            ))}
          </Picker>
        </>
      )}

      {/* 3º – lista de interesses com checkboxes */}
      {subCode && (
        <>
          <Text style={styles.label}>Áreas de interesse:</Text>
          <FlatList
            data={interestsNodes}
            keyExtractor={i => i.code}
            renderItem={({ item }) => {
              const checked = interests.includes(item.code);
              return (
                <Pressable
                  style={styles.interestRow}
                  onPress={() => toggleInterest(item.code)}>
                  <Feather
                    name={checked ? 'check-square' : 'square'}
                    size={20}
                    color={colors.primary}
                    style={{ marginRight: spacing.sm }}
                  />
                  <Text style={styles.interestText}>{item.name}</Text>
                </Pressable>
              );
            }}
          />
        </>
      )}
      </View>
    </SafeAreaView>
  );
}


