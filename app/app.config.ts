import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
    "name": "PC-Visor",
    "slug": "fvs-pc-visor",
    "backgroundColor": "#003e85",
    "primaryColor": "#003e85",
    "privacy": "hidden",
    "userInterfaceStyle": "light",
    "platforms": [
        "ios",
        "android"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "cover",
        "backgroundColor": "#ffffff"
    },
    "notification": {
        "icon": "./assets/notification.png"
    },
    "assetBundlePatterns": [
        "**/*"
    ],
    "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "com.felipevsobral.pcvisor",
        "buildNumber": "1"
    },
    "android": {
        "package": "com.felipevsobral.pcvisor",
        "versionCode": 1,
        "useNextNotificationsApi": true
    },
    "extra": {
        "eas": {
            "projectId": "b85e3345-bd5e-4e87-91fb-f15f3ed30656"
        }
    }
};

export default config;