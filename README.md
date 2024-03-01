1. Run `npm install`
2. Insert your images `id_front.jpg` and `id_back.jpg` into `/id_photos/` (check folder for more details)
3. This project uses a platform called Expo to simplify the development process. You will need to make an account at https://expo.dev to build this app. You can find the documentation on how to build an Expo project here: https://docs.expo.dev/build/setup/#a-react-native-android-andor-ios-project. Expo's free plan offers 30 free builds (15 for iOS) per month.
4. Run `npm install -g eas-cli` to install EAS (Expo Application Services) globally (on your entire machine).
5. Run `eas login` and login to your Expo account.
6. Run `eas build:configure` to begin creating your EAS project.
    > Would you like to automatically create an EAS project for @Yourexpousername/atrium-virtual=id? >> Y (If you have already created a project in Expo under the same name, this will ask to upload build files in that existing project.)
    > Would you like us to run 'git init' in C:\Users\evers\Documents\VS Code\buildatr for you? >> Y
    > Commit message: >> Initial commit (This message can be edited)
    > Which platforms would you like to configure for EAS Build? >> All (or your choice of platform)
7. Your Expo dashboard at https://expo.dev should now list `atrium-virtual-id` under your Projects.
8. Run `eas build --platform android` to build an Android APK or `eas build --platform ios` to build an IOS simulator build.
    > Generate a new Android Keystore? >> Y (To learn more about how Expo creates app credentials, head to https://docs.expo.dev/app-signing/local-credentials)
9. Running the above command will initialize Expo to start building your app. You can view your build's progress on your Expo dashboard. Example: `Android internal distribution build` `iOS simulator build`. This process will take around 10 minutes. Once the build is finished, you will receive a link to the build on your Expo dashboard.
> Android: > Install and run the Android build on an emulator? >> (n) (Use if you're running an Android emulator for development purposes)
10. Android: Once your build finishes, navigate to the build on your Expo dashboard using your Android phone. On your phone, go under "Build artifact" and select "Install." This will install the APK file. Once your file is finished downloading, run the .apk file and press "Install." Your device may indicate a security warning; ignore these warnings and install the app anyway. Now your app is finished!

