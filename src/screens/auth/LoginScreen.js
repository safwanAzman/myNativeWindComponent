import React, {useState} from 'react';
import { View,Text,Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Video } from "expo-av";
import { theme } from '../../theme';
import * as SecureStore from 'expo-secure-store';

import Vid from '../../../assets/vid.mp4';

// component
import Input from '../../components/form/Input';
import Btnsubmit from '../../components/btn/BtnSubmit';

//api call
import { AuthContext } from '../../context/auth/AuthContext';
import { apiLogin } from '../../services/auth';

export default function LoginScreen({navigation}) {
    const { handlingLoading , signIn  } = React.useContext(AuthContext);
    const Schema = Yup.object().shape({
        email: Yup.string().required("Email Required"),
        password: Yup.string().required("Password Required")
    });

    const login = async (data,actions) => {
        try{
            handlingLoading();
            const result = await apiLogin(data);
            await SecureStore.setItemAsync('token',result.data.token);
            handlingLoading();
            signIn(true);
        } catch (e) {
            console.log(e)
            handlingLoading();
            if(e.status === 401){
                alert(e.data.message)
            }
        }
    };

    return (
        <View className="flex-1">
            <KeyboardAwareScrollView  showsVerticalScrollIndicator={false} bounces={false} >
                <Formik
                    validationSchema={Schema}
                    initialValues={{ 
                        email: 'admin@csc.net.my' ,
                        password:'Csc@1234' 
                        // email: '' ,
                        // password:'' 
                    }}
                    onSubmit={(values,actions)=>{
                        login(values,actions);
                    }}
                >
                {({ handleChange,handleSubmit,values,errors,touched}) => (
                <>
                    <View className="mb-20">
                        <View className="">
                            <Video
                                className="w-full h-52 "
                                source={Vid}
                                useNativeControls={false}
                                resizeMode="cover"
                                shouldPlay
                                isLooping
                                volume={0}
                            />
                        </View>
                        <View className="mx-5 mt-5">
                            <View className="space-y-1">
                                <Text className="text-2xl font-bold">Log in</Text>
                                <Text className="text-base text-gray-500 ">
                                    Welcome! Please fill username and password to sign in into your account
                                </Text>
                            </View>
                            <View className="mb-2">
                                <Input
                                    placeholder="Email"
                                    onChangeText={handleChange("email")}
                                    value={values.email}
                                    errorMessage={errors.email && touched.email ? errors.email : null}
                                />
                            </View>
                            <View className="mb-2">
                                <Input
                                    placeholder="Password"
                                    onChangeText={handleChange("password")}
                                    value={values.password}
                                    secureTextEntry={true}
                                    errorMessage={errors.password && touched.password ? errors.password : null}
                                />
                            </View>
                            <View className="py-2 flex-row flex justify-end px-2">
                                <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text className="font-semibold text-sm" style={{color:theme.colors.main}}>
                                        Forgot your password ?
                                    </Text>
                                </Pressable>
                            </View>
                            <View className="mt-4">
                                <Btnsubmit
                                    title="Sign In"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
            <View className="m-auto py-4 flex flex-row space-x-1 items-center bg-gray-100 w-full justify-center">
                <Text className="text-sm">Don't have an Account</Text>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text className="font-semibold text-sm" style={{color:theme.colors.main}}>
                        Register
                    </Text>
                </Pressable>
            </View>
            
        </View>
    );
}

