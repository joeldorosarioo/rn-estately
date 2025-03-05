import React from 'react';

import {
	FlatList, Image, SafeAreaView, Text, TouchableOpacity, View
} from 'react-native';

import { router } from 'expo-router';

import Search from '@/components/search';
import icons from '@/constants/icons';
import images from '@/constants/images';
import Filters from '@/components/filters';

import { Card, FeaturedCard } from '@/components/cards';
import { cards, featuredCards } from '@/constants/data';

export default function Index () {
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
							<View className="flex flex-row">
								<Image source={images.avatar} className="size-12 rounded-full" />

								<View className="flex flex-col items-start ml-2 justify-center">
									<Text className="text-xs font-rubik text-black-100">Good Morning</Text>
									<Text className="text-base font-rubik-medium text-black-300">Joel</Text>
								</View>
							</View>

							<Image source={icons.bell} className="size-6" />
						</View>

						<Search />

						<View className="my-5">
							<View className="flex flex-row items-center justify-between">
								<Text className="text-xl font-rubik-bold text-black-300">Featured</Text>

								<TouchableOpacity>
									<Text className="text-base font-rubik-bold text-primary-300">See all</Text>
								</TouchableOpacity>
							</View>
						</View>

						<FlatList
							data={featuredCards}
							keyExtractor={(item) => item.id.toString()}
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerClassName="flex gap-5 mt-5"

							renderItem={({ item }) => (
								<FeaturedCard item={item} onPress={() => handleCardPress(item.id.toString())} />
							)}
						/>

						<View className="mt-5">
							<View className="flex flex-row items-center justify-between">
								<Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>

								<TouchableOpacity>
									<Text className="text-base font-rubik-bold text-primary-300">See all</Text>
								</TouchableOpacity>
							</View>

							<Filters />
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
