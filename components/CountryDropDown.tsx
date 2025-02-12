import { View, Text, Pressable, ScrollView } from 'react-native';
import { ChevronRight } from '@/components/Icons/ChevronRight'; // Use your custom icon
import { useState } from 'react';
import { country } from '@/utils/Data';
import { appStyles } from '@/utils/appStyles';
import CustomText from '@/components/CustomText';
import { colors } from '@/utils/colors';
import { isiPad } from '@/utils/CommonFun';

interface CountryDropDownProps {
  selectedCountry: any;
  setSelectedCountry: (country: any) => void;
}

const CountryDropDown = ({
  selectedCountry,
  setSelectedCountry,
}: CountryDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country: any) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <View className='bg-surface-light dark:bg-surface-dark rounded-xl'>
      <Pressable
        onPress={toggleDropdown}
        className='flex-row items-center justify-between p-4'
      >
        <Text className='font-clashregular text-lg text-primary-light dark:text-primary-dark'>
          {selectedCountry ? selectedCountry.name : 'Select Country'}
        </Text>
        <ChevronRight className={isOpen ? 'rotate-90' : ''} />
      </Pressable>

      {isOpen && (
        <View className='border-t border-border-light dark:border-border-dark'>
          <ScrollView className='max-h-60'>
            {country.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handleSelect(item)}
                className='p-4 flex-row items-center'
              >
                <Text className='text-primary-light dark:text-primary-dark ml-2'>
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CountryDropDown;
