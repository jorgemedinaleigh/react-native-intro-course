import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useUser } from "../../hooks/useUser"

export default function AuthLayout() {

  const { user } = useUser()

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  )
}