import { AuthProvider } from "./app/context/AuthContext";
import RootNavigator from "./routers/RootNavigator ";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
