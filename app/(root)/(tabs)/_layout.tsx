import { Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

import icons from '@/constants/icons';

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
	<View className="flex-1 mt-3 flex flex-col items-center">
		<Image source={icon} tintColor={focused ? '#0061FF' : '#666876'} resizeMode="contain" className="size-6" />

		<Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>
			{title}
		</Text>
	</View>
);

const TabsLayout = () => {
	return (
		<Tabs screenOptions={{
			tabBarShowLabel: false,
			tabBarStyle: {
				backgroundColor: 'white',
				position: 'absolute',
				borderTopColor: '#0061FF1A',
				borderTopWidth: 1,
				minHeight: 70,
			}
		}}>
			<Tabs.Screen name="index" options={{
				title: 'Home',
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon title='Home' focused={focused} icon={icons.home} />
				)
			}} />

			<Tabs.Screen name="explore" options={{
				title: 'Explore',
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon title='Explore' focused={focused} icon={icons.search} />
				)
			}} />

			<Tabs.Screen name="profile" options={{
				title: 'Profile',
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon title='Profile' focused={focused} icon={icons.person} />
				)
			}} />
		</Tabs>
	);
}

export default TabsLayout
