import React from 'react';

import {
	FlatList, Image, SafeAreaView, Text, TouchableOpacity, View
} from 'react-native';

import { router } from 'expo-router';

import Search from '@/components/search';
import icons from '@/constants/icons';
import Filters from '@/components/filters';

import { Card } from '@/components/cards';
import { cards } from '@/constants/data';

export default function Explore () {
	const handleCardPress = (id: string) => router.push(`/properties/${id}`);

	return (
		<SafeAreaView className="h-full bg-white">
			<FlatList
				data={cards}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()}
				contentContainerClassName="pb-32"
				columnWrapperClassName="flex gap-5 px-5"
				showsVerticalScrollIndicator={false}

				renderItem={({ item }) => (
					<Card item={item} onPress={() => handleCardPress(item.id.toString())} />
				)}

				ListHeaderComponent={() => (
					<View className="px-5">
						<View className="flex flex-row items-center justify-between mt-5">
							<TouchableOpacity onPress={() => router.back()} className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">
								<Image source={icons.backArrow} className="size-5" />
							</TouchableOpacity>

							<Text className="text-base mr-2 text-center font-rubik-medium text-black-300">Search for Your Ideal Home</Text>
							<Image source={icons.bell} className="w-6 h-6" />
						</View>

						<Search />

						<View className="mt-5">
							<Filters />

							<Text className="text-xl font-rubik-bold text-black-300 mt-5">
								Found 10 Properties
							</Text>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
