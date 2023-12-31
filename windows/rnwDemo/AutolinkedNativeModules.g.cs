﻿// AutolinkedNativeModules.g.cs contents generated by "react-native autolink-windows"

using System.Collections.Generic;

// Namespaces from react-native-linear-gradient
using BVLinearGradient;

// Namespaces from react-native-linear-gradient-latest
using BVLinearGradient;

// Namespaces from react-native-screens
using RNScreens;

// Namespaces from react-native-svg
using RNSVG;

// Namespaces from react-native-webview
using ReactNativeWebView;

namespace Microsoft.ReactNative.Managed
{
    internal static class AutolinkedNativeModules
    {
        internal static void RegisterAutolinkedNativeModulePackages(IList<IReactPackageProvider> packageProviders)
        { 
            // IReactPackageProviders from react-native-linear-gradient
            packageProviders.Add(new BVLinearGradient.ReactPackageProvider());
            // IReactPackageProviders from react-native-linear-gradient-latest
            packageProviders.Add(new BVLinearGradient.ReactPackageProvider());
            // IReactPackageProviders from react-native-screens
            packageProviders.Add(new RNScreens.ReactPackageProvider());
            // IReactPackageProviders from react-native-svg
            packageProviders.Add(new RNSVG.ReactPackageProvider());
            // IReactPackageProviders from react-native-webview
            packageProviders.Add(new ReactNativeWebView.ReactPackageProvider());
        }
    }
}
