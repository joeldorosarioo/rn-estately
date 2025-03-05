import { View, Text, Image } from 'react-native';

import images from '@/constants/images';
import icons from '@/constants/icons';

const Comment = () => {
	return (
		<View className="flex flex-col items-start">
			<View className="flex flex-row items-center">
				<Image source={images.avatar} className="size-14 rounded-full" />
				<Text className="text-base text-black-300 text-start font-rubik-bold ml-3">Joel Oliveira</Text>
			</View>

			<Text className="text-black-200 text-base font-rubik mt-2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>

			<View className="flex flex-row items-center w-full justify-between mt-4">
				<View className="flex flex-row items-center">
					<Image source={icons.heart} className="size-5" tintColor={"#0061FF"} />
					<Text className="text-black-300 text-sm font-rubik-medium ml-2">120</Text>
				</View>

				<Text className="text-black-100 text-sm font-rubik">
					{new Date().toDateString()}
				</Text>
			</View>
		</View>
	);
};

export default Comment;
