module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ja'],
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};
