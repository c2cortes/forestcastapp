import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';

import { styles } from './Styles'

export default class Search extends Component {

    state = {
      searchWord: 'Madrid'
    }
  
    constructor(){
      super()
    }
  
    componentDidMount(){
  
    }
  
    handleSend = () => {
    }
  
    render() {
  
      return (
        <View style={styles.searchFormContainer}>
            <TextInput
                style={styles.searchInput}
                value={this.state.searchWord}
                placeholder="Type the city"
                onChangeText={(text) => this.setState({searchWord:text})}
            />
            <Button
                title="Search" 
                style={styles.searchFormButton}
                onPress={() => this.props.callApi(this.state.searchWord)}
            >
            </Button>
        </View>
      )
    }
  }
  
  const customstyles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingTop: 20,
    },
    consulta_academias_label:{
      color: 'white',
      fontSize: 18,
      marginTop: 10,
      fontFamily: 'Heiti SC',
    },
    cont_beneficios:{
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
    p_title: {
      color: '#FFF',
      fontSize: 12,
      fontFamily: 'Heiti SC',
    },
    p_content: {
      color: '#FFFFFF',
      fontSize: 10,
      fontFamily: 'Heiti SC',
      textAlign: 'justify',
      height: 100
    },
    cont_logo:{
      marginTop: 100,
      flexDirection: 'column',
      alignItems: 'center'
    },
    logo: {
      width: 200,
      height: 80,
  
    }
  });
  