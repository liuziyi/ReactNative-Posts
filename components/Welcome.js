import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Button } from 'native-base';

class Welcome extends Component {
	
	static navigationOptions = {
		header: null
	}

	render(){
		return(
			<Container style={styles.container}>
				<Text>Welcome</Text>
				<Button rounded bordered block dark
					style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
					onPress={() => this.props.navigation.navigate('Main')}
				>
					<Text>Enter</Text>
				</Button>
			</Container>
		)
	}
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
});