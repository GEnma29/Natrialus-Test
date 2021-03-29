import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text,FlatList, View, Image, Pressable,} from 'react-native';
import Nutrialus_Logo from './assets/Nutrialus_Logo.png'
const Apiurl = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com/'

export default function App() {
  const [name,setName]= useState('Enmanuel');
  const [email,setEmail]= useState('Enmanuel@Nutrialus.com');
  const [phone,setPhone]= useState('58 4290567')
  const [nutritionist,setNutritionist]= useState('Nutrialus')
  const [imagen,setImagen]= useState('http://placeimg.com/100/100')
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(Apiurl)
    .then((response) =>  response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
  }, [])
  return (
    <View style={styles.Layout}>
    <View style={styles.headercontainer} >
      <Image
        style={styles.Logo}
        source={Nutrialus_Logo}>
      </Image>
      <Text style={styles.Title}>
      NuTrialus Test
      </Text>
    </View>
    <View style={styles.main} >
      <View style={styles.CardContainer}>
      <View style={styles.card} >
       <Image
        style={styles.image}
        source={{uri: imagen }}>
      </Image>
      </View>
      <View style={styles.card}>
       <View style={styles.cardTitle}>
         <Text style={styles.TextName}>{name}</Text>
       </View>
        <View style={styles.cardTitle}>
          <Text style={styles.TextEmail}>{email}</Text>
        </View>
        <View style={styles.cardText2}>
          <Text style={styles.TextNumber}>{phone}</Text>
        </View>
        <View style={styles.cardText2}>
          <Text style={styles.TextNutritionist}>{nutritionist}</Text>
        </View>
      </View>
      </View>
      <View style={styles.containerButton}>
        <Pressable style={styles.Button} onPress={()=>{
           fetch(Apiurl)
           .then((response) =>  response.json())
           .then((json) => setData(json))
           .catch((error) => console.error(error))
          let randomImang = Math.floor(Math.random() * ((100+10) - 10) + 10);
          setName(data.name)
          setEmail(data.email)
          setPhone(data.phone)
          setNutritionist(data.nutritionist)
          setImagen(`http://placeimg.com/100/${randomImang}`)
        }}>
        <Text  style={styles.ButtonText} >Click aquí !!</Text>
        </Pressable>
        </View>
        </View>
        <View style={styles.footer} >
          <Text style={styles.footerText} >Realizado Por Enmanuel Alfonzo</Text>
          <Text style={styles.footerText} >Github: GEnma29</Text>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  Layout:{
    flex:1,
    width: "100%",
    height: "100%",
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headercontainer:{
    flex:1,
    alignItems: 'center',
    marginTop: 50,
    flexDirection: "row",
  },
  header:{
    flex: 2,
  },
  Logo:{
    width: 120,
    height: 120,
  },
  Title:{
    alignSelf: "center",
    marginTop: 35,
    padding: 7,
    fontSize: 24,
    color: 'black',
  },
  main:{
    flex:1,
    width: "100%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    marginTop: 10,
    flex: 1,

  },
  footerText:{
    marginTop: 30,
    alignItems: "center",
    textAlign: 'center'
  },
  containerButton:{
    flex:1,
    height: "20%",
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    alignSelf: "center",
    textAlign: 'center',
    marginTop: 5,
    padding: 10,
    backgroundColor: "#ffdf00",
    borderWidth: 4,
    borderColor: "#fce903",
    borderRadius: 6,
  },
  ButtonText:{
    alignSelf: "center",
    fontSize: 18,
    color: 'black',
  },
  CardContainer:{
    flex:2,
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
    height: "40%",
    borderWidth: 4,
    borderColor: "#ffdf00",
    borderRadius: 6,

  },
  card:{
    flex:1,
    margin: 5,
    width:"50%",
    height:"80%",
  },
  cardTitle:{
    flex: 3,
    margin:5,
  },
  cardText2:{
    flex: 1,
    margin:5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  TextName:{
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  TextEmail:{
    fontSize: 12,
    color: 'black',
    textAlign: 'center'
  },
  TextNumber:{
    fontSize: 12,
    color: 'black',
    textAlign: 'center'
  },
  TextNutritionist:{
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
  },
  image: {
    alignSelf: "center",
    marginTop: 10,
    borderRadius:100,
    width: 95,
    height: 95,
    padding: 5,
  }
});
