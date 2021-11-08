module.exports = {
	lintOnSave: false,
	publicPath: '/',
	devServer: {
		open: true
	},
	chainWebpack: config => {
	  config.resolve.alias.set('vue', '@vue/compat')
  
	  config.module
		.rule('vue')
		.use('vue-loader')
		.tap(options => {
		  return {
			...options,
			compilerOptions: {
			  compatConfig: {
				MODE: 2
			  }
			}
		  }
		})
		
	},
	runtimeCompiler: true,

  	configureWebpack: {
    	resolve: {
      		alias: {
        	'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
       		'balm-ui-css': 'balm-ui/dist/balm-ui.css'
      		}
    	}
  	}
}
  