import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../firebaseConfig';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setMessage('Đăng ký thành công!');
      navigation.navigate('Login'); // Chuyển về màn hình Login sau khi đăng ký thành công
    } catch (error) {
      setMessage(`Lỗi: ${error.message}`);
    }
  };

  return (
    <View>
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: 10 }} 
      />
      <TextInput 
        placeholder="Mật khẩu" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        style={{ marginBottom: 10 }} 
      />
      <Button title="ĐĂNG KÝ" onPress={handleSignup} />
      {message && <Text>{message}</Text>}
    </View>
  );
}
