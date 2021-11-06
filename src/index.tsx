import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./navigation";
import { StatusBar } from "react-native";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AppNavigation />
    </QueryClientProvider>
  </NavigationContainer>
);

export default App;
