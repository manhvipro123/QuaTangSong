import CustomSearchBar from '@/components/CustomSearchBar'
import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useFavorites } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { Platform, ScrollView, View } from 'react-native'

const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const handleSearchTextChange = (text: string) => {
		console.log(text)
		// Additional logic here
	}

	const favoritesTracks = useFavorites().favorites

	const filteredFavoritesTracks = useMemo(() => {
		if (!search) return favoritesTracks

		return favoritesTracks.filter(trackTitleFilter(search))
	}, [search, favoritesTracks])

	return (
		<View style={defaultStyles.container}>
			{Platform.OS === 'android' && (
				<CustomSearchBar placeholder="Find in favorites" onChangeText={handleSearchTextChange} />
			)}
			<ScrollView
				style={{ paddingHorizontal: screenPadding.horizontal }}
				contentInsetAdjustmentBehavior="automatic"
			>
				<TracksList
					id={generateTracksListId('favorites', search)}
					scrollEnabled={false}
					tracks={filteredFavoritesTracks}
				/>
			</ScrollView>
		</View>
	)
}

export default FavoritesScreen
