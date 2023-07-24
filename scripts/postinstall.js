
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const updateTargetMinVersion = (
    modulePath,
    projectName,
    usevcx = false,
    updateBuildTools = false,
    updateUAPV10 = false,
) => {
    const projFilePath = path.join(
        __dirname,
        '..',
        'node_modules',
        modulePath,
        `${projectName}.${usevcx ? 'vcxproj' : 'csproj'}`,
    );

    fs.readFile(projFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading csproj file:', err);
            return;
        }

        let updatedData = data
            .replace(
                usevcx
                    ? /<WindowsTargetPlatformMinVersion>.*?<\/WindowsTargetPlatformMinVersion>/g
                    : /<TargetPlatformMinVersion>.*?<\/TargetPlatformMinVersion>/g,
                `${usevcx
                    ? '<WindowsTargetPlatformMinVersion>10.0.17763.0</WindowsTargetPlatformMinVersion>'
                    : '<TargetPlatformMinVersion>10.0.17763.0</TargetPlatformMinVersion>'
                }`,
            )
            .replace(
                usevcx
                    ? /<WindowsTargetPlatformMinVersion Condition=".*?<\/WindowsTargetPlatformMinVersion>/g
                    : /<TargetPlatformMinVersion Condition=".*?<\/TargetPlatformMinVersion>/g,
                `${usevcx
                    ? '<WindowsTargetPlatformMinVersion>10.0.17763.0</WindowsTargetPlatformMinVersion>'
                    : '<TargetPlatformMinVersion>10.0.17763.0</TargetPlatformMinVersion>'
                }`,
            );

        if (updateBuildTools) {
            updatedData = updatedData
                .replace(
                    /<PlatformToolset>.*?<\/PlatformToolset>/g,
                    '<PlatformToolset>v143</PlatformToolset>',
                )
                .replace(/<PlatformToolset Condition=".*?<\/PlatformToolset>/g, '');
        }
        if (updateUAPV10) {
            xml2js.parseString(updatedData, (parseErr, result) => {
                if (parseErr) {
                    console.error(`Error parsing XML: ${projectFile}`);
                    return;
                }

                const propertyGroups = result['Project']['PropertyGroup'];
                let targetFrameworkUpdated = false;
                const targetFramework = 'UAP,Version=v10.0';

                for (const propertyGroup of propertyGroups) {
                    if (propertyGroup['TargetFramework']) {
                        propertyGroup['TargetFramework'][0] = targetFramework;
                        targetFrameworkUpdated = true;
                        break;
                    }
                }

                if (!targetFrameworkUpdated) {
                    // Add TargetFramework property to the first PropertyGroup
                    propertyGroups[0]['TargetFramework'] = [targetFramework];
                }

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
                fs.writeFile(projFilePath, xml, 'utf8', err => {
                    if (err) {
                        console.error(`Error writing ${projectName} file:`, err);
                        return;
                    }

                    console.log(`Successfully updated build tools for ${projectName}`);
                });
            });
        } else {
            fs.writeFile(projFilePath, updatedData, 'utf8', err => {
                if (err) {
                    console.error(`Error writing ${projectName} file:`, err);
                    return;
                }

                console.log(`Successfully updated build tools for ${projectName}`);
            });
        }
    });
};

const updateWinUI2xVersion = (modulePath, moduleName) => {
    const fullPropsPath = path.join(
        __dirname,
        '..',
        'node_modules',
        modulePath,
        'ExperimentalFeatures.props',
    );
    const fullPackagesConfigPath = path.join(
        __dirname,
        '..',
        'node_modules',
        modulePath,
        moduleName,
        'packages.config',
    );

    fs.readFile(fullPropsPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading props file:', err);
            return;
        }

        let updatedData = data.replace(
            /<WinUI2xVersion>.*?<\/WinUI2xVersion>/g,
            '<WinUI2xVersion>2.8.0</WinUI2xVersion>',
        );
        fs.writeFile(fullPropsPath, updatedData, 'utf8', err => {
            if (err) {
                console.error(`Error writing ${fullPropsPath} file:`, err);
                return;
            }

            console.log(`Successfully set WinUI 2x Version for ${fullPropsPath}`);
        });
    });

    let configData = `<?xml version="1.0" encoding="utf-8"?>
    <packages>
      <package id="Microsoft.UI.Xaml" version="2.8.0" targetFramework="native" />
      <package id="Microsoft.Web.WebView2" version="1.0.1264.42" targetFramework="native" />
      <package id="Microsoft.Windows.CppWinRT" version="2.0.200316.3" targetFramework="native" />
    </packages>
  `;
    fs.writeFile(fullPackagesConfigPath, configData, 'utf8', err => {
        if (err) {
            console.error(`Error writing ${fullPackagesConfigPath} file:`, err);
            return;
        }

        console.log(`Successfully set packages for ${fullPackagesConfigPath}`);
    });
};

//----- RUN -----//

updateWinUI2xVersion('react-native-webview/windows', 'ReactNativeWebView');

updateTargetMinVersion('react-native-windows/Microsoft.ReactNative.Managed', 'Microsoft.ReactNative.Managed');
updateTargetMinVersion('react-native-windows/Microsoft.ReactNative', 'Microsoft.ReactNative', true);
updateTargetMinVersion('react-native-webview/windows/ReactNativeWebView', 'ReactNativeWebView', true);