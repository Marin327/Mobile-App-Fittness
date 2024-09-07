import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler'; // Добавете това в началото

// Импортиране на всички екрани и компоненти
import Achievements from './src/components/Achievements';
import DailyGoals from './src/components/DailyGoals';
import DietPlan from './src/components/DietPlan';
import ExerciseCard from './src/components/ExerciseCard';
import Header from './src/components/Header';
import MealTracker from './src/components/MealTracker';
import Notifications from './src/components/Notifications';
import ProgressTracker from './src/components/ProgressTracker';
import Settings from './src/components/Settings';
import Statistics from './src/components/Statistics';
import WorkoutDetail from './src/components/WorkoutDetail';
import WorkoutTimer from './src/components/WorkoutTimer';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import WorkoutListScreen from './src/screens/WorkoutListScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerTitle: props => <Header /> }}
                />
                <Drawer.Screen
                    name="Workout List"
                    component={WorkoutListScreen}
                    options={{ title: 'Workout List' }}
                />
                <Drawer.Screen
                    name="Workout Detail"
                    component={WorkoutDetail}
                    options={{ title: 'Workout Detail' }}
                />
                <Drawer.Screen
                    name="Progress Tracker"
                    component={ProgressTracker}
                    options={{ title: 'Progress Tracker' }}
                />
                <Drawer.Screen
                    name="Workout Timer"
                    component={WorkoutTimer}
                    options={{ title: 'Workout Timer' }}
                />
                <Drawer.Screen
                    name="Daily Goals"
                    component={DailyGoals}
                    options={{ title: 'Daily Goals' }}
                />
                <Drawer.Screen
                    name="Meal Tracker"
                    component={MealTracker}
                    options={{ title: 'Meal Tracker' }}
                />
                <Drawer.Screen
                    name="Achievements"
                    component={Achievements}
                    options={{ title: 'Achievements' }}
                />
                <Drawer.Screen
                    name="Diet Plan"
                    component={DietPlan}
                    options={{ title: 'Diet Plan' }}
                />
                <Drawer.Screen
                    name="Exercise Card"
                    component={ExerciseCard}
                    options={{ title: 'Exercise' }}
                />
                <Drawer.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}
                />
                <Drawer.Screen
                    name="Settings"
                    component={Settings}
                    options={{ title: 'Settings' }}
                />
                <Drawer.Screen
                    name="Statistics"
                    component={Statistics}
                    options={{ title: 'Statistics' }}
                />
                <Drawer.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{ title: 'Notifications' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;