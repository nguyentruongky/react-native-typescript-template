## Prerequisites

- XCode installed and set up
  - Opened at least once
  - Accepted license agreement
  - Finished installing components
  - Command line tools linked in Preferences → Locations
- CocoaPods installed with `gem install cocoapods`
- Android Studio installed and set up
  - The currently supported SDK installed with the SDK manager (see `android/build.gradle`, currently version 29)
  - NDK Side-by-side installed with the SDK manager (under SDK tools)
  - A virtual device set up in the AVD manager
  - The following added to your `.zshrc`:
    ```sh
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

[(more detailed instructions here)](https://reactnative.dev/docs/environment-setup)

## Setup

```
yarn install
```

## Running the app

Start either an iOS or Android emulator:

```
yarn ios
yarn android
```

This will open a watcher process in another terminal window, which you can use to reload or open developer tools.
