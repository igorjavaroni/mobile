import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const Home = () => {
  
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [uf, setSelectedUF] = useState(null);

  const [ufs, setUfs] = useState([{label: 'AC', value: 'AC'}, {label: 'AL', value: 'AL'}, {label: 'AP', value: 'AP'}, {label: 'AM', value: 'AM'}, {label: 'BA', value: 'BA'}, 
    {label: 'CE', value: 'CE'}, {label: 'DF', value: 'DF'}, {label: 'ES', value: 'ES'}, {label: 'GO', value: 'GO'}, {label: 'MA', value: 'MA'}, {label: 'MT', value: 'MT'}, 
    {label: 'MS', value: 'MS'}, {label: 'MG', value: 'MG'}, {label: 'PA', value: 'PA'}, {label: 'PB', value: 'PB'}, {label: 'PR', value: 'PR'}, {label: 'PE', value: 'PE'}, 
    {label: 'PI', value: 'PI'}, {label: 'RJ', value: 'RJ'}, {label: 'RN', value: 'RN'}, {label: 'RS', value: 'RS'}, {label: 'RO', value: 'RO'}, {label: 'RR', value: 'RR'}, 
    {label: 'SC', value: 'SC'}, {label: 'SP', value: 'SP'}, {label: 'SE', value: 'SE'}, {label: 'TO', value: 'TO'}
  ]);

  function handleNavigationToPoints() {
    console.log(uf);
    navigation.navigate("Points", { uf, city });
  }

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!city.trim()) {
      alert('Digite a cidade desejada');
      return false;
    }
    else
      return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ height: 368, width: 274 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          
        <DropDownPicker
          style={styles.input}
          placeholder = 'Selecione uma UF'
          open={open}
          value={uf}
          items={ufs}
          setOpen={setOpen}
          setValue={setSelectedUF}
          setItems={setUfs}        
        /> 

          <TextInput
            style={styles.input}
            placeholder="Digite a Cidade"
            autoCorrect={false}
            value={city}
            onChangeText={setCity}            
          />

          <RectButton style={styles.button} onPress={ () => {
              if(checkTextInput())
              {
                console.log('help-me');
                handleNavigationToPoints() 
              }
            }}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#FFF",
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});