// @flow

import React from 'react'
import { ScrollView, Text, View, ListView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Kohana } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Metrics, Colors } from '../Themes'

import AlertMessage from '../Components/AlertMessage'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FullButton from '../Components/FullButton';

import RoundedButton from '../Components/RoundedButton';
import { Images, Fonts } from '../Themes';

// Styles
import styles from './Styles/BuscaPlanosStyle'
import { planos } from './planos';

var g_searchTerm = '';

class EscolheLimiteValor extends React.Component {

  render () {
    return (
      <ScrollView style={styles.container}>
          <View style={[{padding: 12, paddingTop: 55}, { backgroundColor: Colors.azulAns }]}>
            <Kohana
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'Valor máximo do Plano'}
              iconClass={FontAwesomeIcon}
              iconName={'dollar'}
              iconColor={'#ddd'}
              iconColor={'#f4d29a'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onChangeText={(text) => (g_searchTerm = text)}
            />

          </View>

          <View style={styles.section} >
            <Text style={[styles.sectionText, Fonts.style.h6]} >
              25 planos encontrados
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.escolheFaixaEtaria}>
            Prosseguir
          </RoundedButton>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EscolheLimiteValor)

