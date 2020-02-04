import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Search from './search';
import ForecastDetail from './forecastDetail';

export default class Main extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      forestData: {
        main: {
          temp: ''
        }
      },
      appid: 'b311fe07c3d6118690b29312a9b3110c'
    };
  }
  
  setForestData(){
    
  }

  callApi(city){
    const that  = this;
    const url   = 'http://api.openweathermap.org/data/2.5/weather';
    console.log('url => ', url);
    axios.get(url, {
      params: {
        q: city,
        appid: this.state.appid
      }
    })
    .then((response) => {
      // handle success
      console.log(response);
      if(response.status === 200){
        this.setState({ forestData: response.data }, () => {
          console.log('forestData => ', this.state.forestData);
        });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    axios.get(url);

    
  }

  render() {
    return (
      <View>
        <Search callApi={(city) => this.callApi(city)} />
        <ForecastDetail forestData={this.state.forestData} />
      </View>
    );
  }
}