import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';
import { styles } from './Styles'

export default class ForecastDetail extends Component {
  
    constructor(props){
      super(props)
    }
  
    render() {
        const   forestData  = this.props && this.props.forestData,
                main        = forestData && forestData.main,
                temp        = main && main.temp,
                pressure    = main && main.pressure,
                humidity    = main && main.humidity,
                temp_max    = main && main.temp_max,
                temp_min    = main && main.temp_min,
                coord       = forestData && forestData.coord,
                lon         = coord.lon,
                lat         = coord.lat;
  
      return (
        <View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Temp:</Text>
                <Text style={styles.sectionDescription}>
                    {temp}
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Pressure:</Text>
                <Text style={styles.sectionDescription}>
                    {pressure}
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Humidity:</Text>
                <Text style={styles.sectionDescription}>
                    {humidity}
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Max temperature:</Text>
                <Text style={styles.sectionDescription}>
                    {temp_max}
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Min temperature:</Text>
                <Text style={styles.sectionDescription}>
                    {temp_min}
                </Text>
            </View>

            <View>
                <MapView
                    region={{
                        latitude: lat,
                        longitude: lon,
                        latitudeDelta: lon,
                        longitudeDelta: lat,
                    }}
                    zoomControlEnabled={true}
                    >
                </MapView>
            </View>
            
        </View>
      )
    }
}
  
  