import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setIsLogin(isLogin) {
  await AsyncStorage.setItem("isLogin", isLogin);
}

export async function saveUserData(user: object) {
  await AsyncStorage.setItem("userId", user.id.toString());
  await AsyncStorage.setItem("userName", user.name);
  await AsyncStorage.setItem("userEmail", user.email);
  await AsyncStorage.setItem("userRole", user.role);
}