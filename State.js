import AsyncStorage from '@react-native-async-storage/async-storage';

export const isOnboardingCompleted = async () => {
  const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
    
  console.log("onboarding completed: " + onboardingCompleted);
  return onboardingCompleted === 'true';
};

export const setUserInfo = async (firstName, email) => {
  try {
    await AsyncStorage.setItem('firstName', firstName);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('onboardingCompleted', 'true');

    console.log(`Stored firstName: ${firstName}`);
    console.log(`Stored email: ${email}`);
    console.log('Onboarding completed status set to true');
  } catch (error) {
    console.error(error);
  }
};

export const getProfileInfo = async () => {
  try {
    const image = await AsyncStorage.getItem('image') || '';
    const firstName = await AsyncStorage.getItem('firstName') || '';
    const lastName = await AsyncStorage.getItem('lastName') || '';
    const email = await AsyncStorage.getItem('email') || '';
    const phoneNumber = await AsyncStorage.getItem('phoneNumber') || '';
    const notifyOrderStatus = await AsyncStorage.getItem('notifyOrderStatus') === 'true';
    const notifyPasswordChanges = await AsyncStorage.getItem('notifyPasswordChanges') === 'true';
    const notifySpecialOffers = await AsyncStorage.getItem('notifySpecialOffers') === 'true';
    const notifyNewsletter = await AsyncStorage.getItem('notifyNewsletter') === 'true';

    console.log(`Retrieved image: ${image}`);
    console.log(`Retrieved firstName: ${firstName}`);
    console.log(`Retrieved lastName: ${lastName}`);
    console.log(`Retrieved email: ${email}`);
    console.log(`Retrieved phoneNumber: ${phoneNumber}`);
