### Getting started
Basically you can't link react-native-svg-icons, because they will be in conflict with native-base, that is using the same fonts.
* `npm i`
* `react-native link native-base`
* `sed -i '' '/DevelopmentTeam = V9WTTPBFK9/d;/DEVELOPMENT_TEAM/d;/ProvisioningStyle = Automatic/d' ./node_modules/react-native/React/React.xcodeproj/project.pbxproj`
* `react-native run-ios`