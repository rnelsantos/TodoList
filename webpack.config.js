const path = require('path') // for use  of  path functions
const HtmlWebpackPlugin = require('html-webpack-plugin')        // for use  of  source template index html to dist output


module.exports  = {
    mode: 'development',                                        //set development mode
    entry:{  
      bundles:  path.resolve(__dirname, 'src/index.js')          //  ex: 'bundles' for name of webpack output // set soruce folder
    },
    output: {                                                           
        path: path.resolve(__dirname, 'dist'),                   // set output folder
        filename: '[name][contenthash].js',
        clean: true,                                            // to delete previous  webpack bundles output in output  folder    
        assetModuleFilename: '[name][ext]',                     // to make assetloader output retain name instead of hash  rename
                        
    },
    devtool:"source-map",                                       //  set source  mapper for debugging output js using input js, (creates js.map file)
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')            // to open development server, to preview webpack output. (user vsCODE  debug tool as an alternative)
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
        
    },
    module: {                                                   // decalraed modules for use for webpack built in modules and additional modules
        rules: [
            {
                test:/\.css$/i,                                 // styles loader for import  of css/sass  in input JS,  bundles into webpack output
                use: ['style-loader' , 'css-loader'],
            },
            { 
                test: /\.js$/,                                  //babel module for backward compatability for older browsers  compiler
                exclude: /node_modules/,                        //npm i -D babel-loader @babel/core @babel/preset-env        
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env'],
                    },
                },
            },    
            {                                                       //asset loader, built in web pack but  needs to be  declared in config.
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              }, 
        ]
    },

    plugins: [                                                  //additional  plug-ins                      
        new HtmlWebpackPlugin({                                 // for hmtl template , webpack output
            title: 'Todo',
            filename:'index.html',
            template:'src/template.html',
            cache: false,
        }),
    ]

}