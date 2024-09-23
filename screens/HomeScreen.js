import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebaseConfig';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await auth.signOut();
    navigation.navigate('Login'); // Đăng xuất và chuyển về màn hình đăng nhập
  };

  return (
    <View>
      <Text>Chào mừng bạn đến HomeScreen!</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
}
