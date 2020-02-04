import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { styles } from './Styles'

export default class CitiesHistory extends Component {

    state = {
      searchWord: ''
    }
  
    constructor(){
      super()
    }
  
    componentDidMount(){
  
    }
  
    handleSend = () => {
    }
  
    render() {
        const   citiesHistory  = this.props && this.props.citiesHistory;
  
      return (
        <View>
            { citiesHistory.map((city, index) => {
                return (
                    <TouchableOpacity style={styles.sectionContainer} onPress={ () => this.props.onPressCity(city) } key={ index }>
                        <Text style={styles.sectionTitle}>{city}</Text>
                    </TouchableOpacity>
                )    
            }) }
        </View>
      )
    }
}