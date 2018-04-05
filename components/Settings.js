import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Container, Text, Header, Body, Title } from 'native-base';

class Settings extends Component {
	
	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
			<Icon name="ios-settings" style={{ color: tintColor }}/>
		)
	}

	render(){
		return(
			<Container>
				<Header>
					<Body>
						<Title>Settings</Title>
					</Body>
				</Header>
				<Text>Settings</Text>
			</Container>
		)
	}
}

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
});