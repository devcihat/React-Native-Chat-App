import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import LoginScreen from "./src/views/LoginScreen"
import ChatScreen from "./src/views/ChatScreen"


const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    Chat:ChatScreen
  },
  {
    headerMode:'none'
  }
)

export default createAppContainer(AppNavigator)

