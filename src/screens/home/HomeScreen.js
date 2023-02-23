import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Container from '../../components/container';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';


export default function HomeScreen({navigation}) {
    return (
        <Container>
            <View className="mb-4">
                <Input
                    placeholder="input icon left"
                    leftIcon="search"
                />
            </View>
            <View className="mb-4">
                <Input
                    placeholder="input icon right"
                    rightIcon="menu"
                />
            </View>
            <View className="mb-4">
                <Input
                    label="input with label"
                    placeholder="input with label"
                />
            </View>
            <View className="mb-4">
                <Input
                    label="input with label & error message"
                    placeholder="input with label & error message"
                    errorMessage="Error Message"
                />
            </View>
            <View className="mb-4">
                <Select 
                    label=""
                    placeholder="select" 
                    errorMessage=""
                    options={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' },
                    ]} 
                    onSelectItem={(item) => {
                        console.log(item);
                    }}
                    onChangeValue={(value) => console.log(value)}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
            </View>
        </Container>
    );
}

