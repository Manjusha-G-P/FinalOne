exports.config = {
    framework: 'jasmine',  
    directConnect:true, 
    specs: ['spec.js'], 
    onPrepare() { 
          require('ts-node').register({ 
          project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });
    } 
}
