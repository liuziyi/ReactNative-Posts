import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Feed from './Feed';
import Settings from './Settings';

class Main extends Component {
	
	static navigationOptions = {
		header: null
	}
	
	render(){
		return(
			<MainTabNavigator/>
		)
	}
}

export default Main;

const MainTabNavigator = TabNavigator({
	Feed: {
		screen: Feed
	},
	Settings: {
		screen: Settings
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
});