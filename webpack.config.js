module.exports = {

    output: {
        filename: 'observer.js',
        globalObject: 'this',
        library: {
            name: 'observer',
            type: 'umd2'
        }
    },

    devServer: {
        static: 'dist',
        port: 49050
    },

    devtool: 'source-map'

}