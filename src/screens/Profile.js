import React from 'react';
import { View, Image, Text, FlatList, Animated, ActivityIndicator } from 'react-native';
import moment from 'moment'
import AccelerationItem from '../components/AccelerationItem';

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  "email": "rafael.fuzifaru@gmail.com",
  "first_name": "Rafael",
  "last_name": "Fuzifaru Cianci",
  "phone": "(48) 99660-6666",
  "gender": 1,
  "birthday": "1993-04-27T00:00:00-03:00",
  "linkedin": "https://www.linkedin.com/in/rafaelcianci",
  "github": "http://github.com/rafacianci",
  "address": {
    "Street": "",
    "ZipCode": "",
    "Number": "",
    "ComplementaryAddress": ""
  },
  "language": ["Português - PT", "Inglês - EN", "Japonês - JA"],
  "name": "Rafael Fuzifaru Cianci"
}

export default class Profile extends React.PureComponent {
  state = {
    fadeAnim: new Animated.Value(0),
    carregando: true
  }
  componentDidMount() {

    setTimeout(() => {
      this.setState({ carregando: false })
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 500
      }).start()
    }, 500)
  }

  renderCorpo() {
    return (
      <>
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <Image
            className={'profile-image'}
            style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: profile.picture }} />
          <Text style={{ alignSelf: 'center', marginLeft: 20, fontSize: 20, color: '#7800ff' }}>
            {profile.first_name} {profile.last_name}
          </Text>
        </View>
        <Animated.View
          className={'contact-content'}
          style={{ opacity: this.state.fadeAnim }}
        >
          <View style={{ backgroundColor: '#000', marginHorizontal: 20, marginTop: 20, padding: 20 }}>
            <View style={{}}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Linkedin:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{profile.linkedin}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Github:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{profile.github}</Text>
            </View>
          </View>

          <View style={{ backgroundColor: '#000', marginHorizontal: 20, marginTop: 20, padding: 20 }}>
            <View style={{}}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>E-mail:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{profile.email}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Celular:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{profile.phone}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Data de Nascimento:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{moment(profile.birthday).format('DD/MM/YYYY')}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Sexo:</Text>
              <Text className={'contact-value'} style={{ color: 'white', fontSize: 17 }}>{profile.gender == 1 ? 'Masculino' : 'Feminino'}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text className={'contact-label'} style={{ color: 'white', fontSize: 15 }}>Idiomas:</Text>
              <FlatList
                className={'contact-language'}
                data={profile.language}
                renderItem={AccelerationItem}
                horizontal
              />
            </View>
          </View>
        </Animated.View>
      </>

    )
  }
  render() {

    return (
      <View>
        <Image
          className={'header-image'}
          style={{ width: '60%', height: 100, marginTop: 20, marginLeft: 40, borderBottomWidth: 2, borderColor: 'blue' }} source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }} />
        {
          this.state.carregando ?
            <ActivityIndicator />
            :
            this.renderCorpo()

        }


      </View>
    );
  }
}
