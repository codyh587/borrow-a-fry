# Atrum Virtual ID
### An app for making the UCI Atrium login process faster and easier.

<br />
<p align="center">
    <img src="assets/logo.png" alt="Logo" width="160" height="160">
    <br />
    <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native"">
    <br />
    <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" alt="Expo"">
</p>

## About the Project

Atrium Virtual ID is a mobile application built with React Native and Expo. The goal is to simplify the time-consuming login process for Atrium Campus Connect at UCI—although this application might work on other campuses, this application aims to simulate the Virtual ID Atrium Campus Connect interface on Android. To that end, the iOS interface is currently not supported, although iOS users can use the application if they wish.

This repository comes in the form of a React Native project bootstrapped with `create-expo-app`. You can read about it [here](https://docs.expo.dev/tutorial/create-your-first-app/). To create the application, this project provides the resources for you to clone and build the app to use locally on your own device. This project shall not be published on any public app store or distributor.

To build this project, you will need to install [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/) and make an account on [Expo](https://expo.dev/). Expo is an open-source platform for making universal native apps for Android, iOS, and the web using JavaScript and React. For Android users, it will also eliminate the necessity of downloading Android Studio or an Android SDK.

The following instructions will take you through configuring the Expo app and building your mobile application. Since the project is already written, there is no need to use Expo's development servers, Expo Go, or other features for Expo development. However, if you'd like to modify the source code, you can read about development in Expo [here](https://docs.expo.dev/overview/). **Note that the instructions are written for Android users:** for iOS users, you will still be able to build your app and access it through Expo's dashboard, but you will need navigate the process on your own. Currently, the Expo build profile is set for Expo's iOS simulator, which you can read about [here](https://docs.expo.dev/build-reference/simulators). If you don't want a simulator build, you may want to edit the [EAS configuration file](eas.json) at `build.production.ios.simiulator`.

<br>

## Build the Application
Make sure you clone the repository and initialize your terminal within the working directory.

1. Run `npm install`
2. Insert your images `id_front.jpg` and `id_back.jpg` into `id_photos/`. ([Check the folder on how to acquire your images](id_photos/).)
3. This project uses a platform called Expo to simplify the development process. You will need to make an account at https://expo.dev/ to build this app. Expo's free plan offers 30 free builds (15 for iOS) per month.
4. Run `npm install -g eas-cli` to install EAS (Expo Application Services) on your local machine.
5. Run `eas login` and login to your Expo account.
6. Run `eas build:configure` to begin configuring your EAS project. You will receive the following prompts:
```console
$ Would you like to automatically create an EAS project for @YourExpoUsername/atrium-virtual-id? >> Y  # If you have an existing Expo project with the same name, this will place builds there instead
$ Would you like us to run 'git init' in path/to/repository/atrium-virtual-id/ for you? >> Y
$ Commit message: >> Initial commit
$ Which platforms would you like to configure for EAS Build? >> All
```
7. Your [Expo dashboard](https://expo.dev) should now list `atrium-virtual-id` under your Projects.
8. Run `eas build --platform android` to build an Android APK or `eas build --platform ios` to build an IOS simulator build.
```console
$ Generate a new Android Keystore? >> Y  # ANDROID ONLY. Read about Expo handling app credentials at https://docs.expo.dev/app-signing/local-credentials/
```
9. Expo will now be initialized to start building your app. You can view your build's progress on your Expo dashboard. This process will take around 10 minutes. Once the build is finished, you will receive a link to the build on your Expo dashboard.
```console
$ Install and run the Android build on an emulator? >> N  # ANDROID ONLY. Use if you're using an Android emulator for development purposes.
```
10. **ANDROID ONLY**: Once your build finishes, navigate to the build on your Expo dashboard using your Android phone. Go under "Build artifact" and select "Install." This will install the APK file. Once the file is finished downloading, run the APK file and press "Install." Your device may indicate a security warning; ignore these warnings to install the app. Your app is ready to use!

<br>

## My ID Looks Wrong?
If you find that your ID card is displayed too large or you'd like to modify its appearance, you can modify the React Native code at [src/IdScreen.js](src/IdScreen.js). Specifically, you may want to modify the Image components' style props on lines [76-84](src/IdScreen.js#L76-L84) and [103-111](src/IdScreen.js#L103-L111). Styles in React Native are modeled after CSS. Read the [Expo docs](https://docs.expo.dev/) to learn about Expo development. For reference, you can check the `package.json` for commands to start the Expo development server. Happy coding!
