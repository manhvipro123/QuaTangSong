import { colors } from '@/constants/tokens'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

interface CustomSearchBarProps {
	placeholder: string
	onChangeText: (text: string) => void
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ placeholder, onChangeText }) => {
	const [search, setSearch] = useState('')

	const handleSearchChange = (text: string) => {
		setSearch(text)
		onChangeText(text)
	}

	return (
		<View style={styles.container}>
			<Searchbar
				placeholder={placeholder}
				onChangeText={handleSearchChange}
				value={search}
				style={styles.searchBar}
				inputStyle={styles.input}
				iconColor={colors.primary} // Customize icon color
				placeholderTextColor={colors.primary} // Customize placeholder text color
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 80,
		marginHorizontal: 22,
	},
	searchBar: {
		borderRadius: 10, // Customize border radius
		elevation: 2, // Customize shadow/elevation
		backgroundColor: 'rgba(47, 47, 47, 0.5)', // Customize background color
	},
	input: {
		fontSize: 16, // Customize input text size
		color: '#fc3c44', // Customize input text color
	},
})

export default CustomSearchBar
