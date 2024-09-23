import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { auth } from '../firebaseConfig'; // Import Firebase auth

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigation.navigate('Home'); // Chuyển hướng đến màn hình Home
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
      <Button title="ĐĂNG NHẬP" onPress={handleLogin} />
      {message && <Text>{message}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'blue', marginTop: 10 }}>
          Chưa có tài khoản? Đăng ký ngay!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
