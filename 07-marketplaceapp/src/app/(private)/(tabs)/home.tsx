import { Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../shared/store/user-store";

export default function Home() {
  const { logout } = useUserStore();

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={logout}
      >
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
