import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
	<View style={styles.viewStyle}>
		<Text style={styles.title}>{props.headerText}</Text>
	</View>
);

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default Header;
