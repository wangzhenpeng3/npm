
module.exports = {
    "stories": [
        "./stories/**/*.stories.*"
    ],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        {
            name: '@storybook/addon-docs',
            options: {
                sourceLoaderOptions: {
                    parser: 'typescript',
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-controls',
        '@storybook/addon-storyshots',
    ],
    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        }
    }
}
