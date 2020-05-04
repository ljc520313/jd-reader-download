module.exports = {
    publicPath: "/jdreader",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:20001/',
                changeOrigin: true
            },
            '/books': {
                target: 'http://localhost:20001',
                changeOrigin: true
            }
        }
    }
};