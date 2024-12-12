import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';

export interface RootStackParamList {
  AppRoot: NavigatorScreenParams<AppStackParamList>;
}

export type AppStackParamList = {
  dashboardTab: NavigatorScreenParams<DashboardBottomTabParamList>;
  onboarding: undefined;
};

export type DashboardBottomTabParamList = {
  dashboard: undefined;
};

export type IDashboardTabNavigation =
  NavigationProp<DashboardBottomTabParamList>;

export type IAppUseNavigation = NavigationProp<AppStackParamList>;
