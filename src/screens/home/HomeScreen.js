import React, {useState,useRef} from 'react';
import { Text, View,Pressable } from 'react-native';
import Container from '../../components/container';
import { Formik } from 'formik';
import * as Yup from "yup";
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import MyCheckbox from '../../components/form/MyCheckbox';
import moment from 'moment';
import Btnsubmit from '../../components/btn/BtnSubmit';
import Calendar from '../../components/calendar/Calendar';




export default function HomeScreen({navigation}) {
    const refRBSheet = useRef();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const Schema = Yup.object().shape({
        startDate: Yup.string().required("Please Choose Date"),
    });

    return (
        <Container>
            <Formik
                validationSchema={Schema}
                initialValues={{ 
                    startDate:'',
                    endDate:''
                }}
                onSubmit={(values,actions)=>{
                    console.log(values);
                }}
            >
            {({ handleChange,handleSubmit,values,errors,touched,setFieldValue}) => (
            <>
                <View className="my-4">
                    <>
                        <View 
                            className="mb-0">
                            <Input
                                label="Start Date - End Date"
                                value={`${startDate ? moment(startDate).format('DD/MM/YYYY') : 'DD/MM/YYYY'} - ${endDate ? moment(endDate).format('DD/MM/YYYY')  : 'DD/MM/YYYY'}`}
                                editable={false}
                                rightIcon="calendar-today"
                                onPress={() => refRBSheet.current.open()}
                                errorMessage={errors.startDate && touched.startDate ? errors.startDate : null}
                            />
                        </View>
                        <Calendar 
                            allowRangeSelection={true}
                            openCalendar={refRBSheet}
                            onChange={(start, end) => {
                                setStartDate(start);
                                setEndDate(end);
                                setFieldValue('startDate', start ? moment(start).format('YYYY/MM/DD') : '');
                                setFieldValue('endDate', end ? moment(end).format('YYYY/MM/DD') : '');
                            }} 
                            startDate={startDate} 
                            endDate={endDate} 
                            resetDate={() => {
                                setStartDate(null),
                                setEndDate(null)
                                setFieldValue('startDate', null);
                                setFieldValue('endDate', null);
                            }}
                        />
                    </>
                </View>
                <View className="">
                    <Btnsubmit
                        title="Submit"
                        onPress={handleSubmit}
                    />
                </View>
            </>
            )}
            </Formik>
        </Container>
    );
}

