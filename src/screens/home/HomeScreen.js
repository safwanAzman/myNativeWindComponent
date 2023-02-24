import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Container from '../../components/container';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import Checkbox from 'expo-checkbox';


export default function HomeScreen({navigation}) {
    const [isChecked, setChecked] = useState(false);
    return (
        <Container>
            {/* <View className="my-4">
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
            </View> */}
        </Container>
    );
}

