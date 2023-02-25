import React, { useState,} from 'react';
import { View } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import CalendarPicker from 'react-native-calendar-picker';
import { theme } from '../../theme';
import BtnGeneral from '../btn/BtnGeneral';

const Calendar = ({ onChange, startDate, endDate ,openCalendar,resetDate ,allowRangeSelection}) => {
    const [selectedStartDate, setSelectedStartDate] = useState(startDate);
    const [selectedEndDate, setSelectedEndDate] = useState(endDate);

const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
    setSelectedEndDate(date);
    onChange(selectedStartDate, date);
    } else {
    setSelectedStartDate(date);
    setSelectedEndDate(null);
    onChange(date, null);
    }
};

return (
    <>
        <RBSheet
            ref={openCalendar}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={Platform.OS === "android" ? 380 : 420}
            openDuration={450}
            customStyles={{
                container: {
                    borderTopLeftRadius:18,
                    borderTopRightRadius:18,
                }
            }}
        >
        <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={allowRangeSelection}
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            selectedDayColor={theme.colors.main}
            selectedDayTextColor="#FFFFFF"
            onDateChange={onDateChange}
        />
        <View className="flex flex-row items-center w-full px-6 mt-2">
            <BtnGeneral
                title="Cancel"
                styleBtn="bg-gray-100  w-1/2 mr-2"
                styleTextBtn="text-black"
                onPress={() => {
                    resetDate();
                    setSelectedStartDate(null)
                    setSelectedEndDate(null)
                    openCalendar.current.close()
                    }
                }
            />
            <BtnGeneral
                title="Confirm"
                styleBtn="bg-gray-900 w-1/2"
                styleTextBtn="text-white"
                onPress={() => {
                    openCalendar.current.close()
                    }
                }
            />
        </View>
        </RBSheet>
    </>
);
};


export default Calendar;
