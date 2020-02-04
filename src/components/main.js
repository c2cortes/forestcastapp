import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Search from './search';
import ForecastDetail from './forecastDetail';
import CitiesHistory from './citiesHistory';

export default class Main extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      forestData: {
        main: {
          temp: ''
        }
      },
      citiesHistory: [],
      appid: 'b311fe07c3d6118690b29312a9b3110c'
    };
  }
  
  addCityToHistory(city){
    const citiesHistory = this.state.citiesHistory;

    const exists = citiesHistory.find(function(element){
      return element;
    })
    
    if(exists === undefined) {
      citiesHistory.push(city);
      console.log('doesnt exists => ', exists);
    }

    this.setState({ citiesHistory });
  }

  callApi(city){
    const that  = this;
    const url   = 'http://api.openweathermap.org/data/2.5/weather';
    
    axios.get(url, {
      params: {
        q: city,
        appid: this.state.appid
      }
    })
    .then((response) => {
      if(response.status === 200){
        this.setState({ forecastDetailVisible: true, forestData: response.data }, () => {
          this.addCityToHistory(city);
        });
      }
    });
    axios.get(url);
  }

  render() {
    return (
      <View>
        <Search callApi={(city) => this.callApi(city)} />
        <CitiesHistory citiesHistory={ this.state.citiesHistory } onPressCity={ (city) => this.callApi(city) } />
        { this.state.forecastDetailVisible ? <ForecastDetail forestData={this.state.forestData} /> : null }
      </View>
    );
  }
}