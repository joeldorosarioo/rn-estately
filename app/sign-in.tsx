import {
	Image, ScrollView, Text, View
} from 'react-native';

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '@/constants/icons';
import images from '@/constants/images';

const SignIn = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView contentContainerClassName="h-full">
				<Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

				<View className="px-10">
					<Text className="text-base text-center uppercase font-rubik text-black-200">
						Welcome to Estately
					</Text>

					<Text className="text-3xl font-rubik-bold text-black=300 text-center mt-2">
						Let's get you closer to <Text className="text-primary-300">your ideal Home</Text>
					</Text>

					<Text className="text-lg font-rubik text-black-200 text-center mt-12">Login to Estately with Google</Text>

					<Link href="/" className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
						<View className="flex-1 w-full flex flex-row items-center justify-center gap-3">
							<Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
							<Text className="text-lg font-rubik-medium text-black-300">Continue with Google</Text>
						</View>
					</Link>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default SignIn
