// VUE Prototype Common Function vue原型公共函数
let VPCF = function () {
	if (!(this instanceof VPCF)) {
		return new VPCF;
	}
}

VPCF.prototype = {
	isRequired(type) {
		// throw new Error(type + '未填写')
	},
	// 解构赋值函数默认值
	foo(args = this.isRequired('id')) {
		console.log(123)
	},
	// 路由懒加载
	lazyRouter(url) {
		if (url !== 'dashboard') {
			return () => import(`@/views/${url}.vue`)
		} else {
			return () => import(`@/components/${url}.vue`)
		}
	},
	// 生成路由链接结构
	createRoute(routers,data){
		data.forEach((item)=>{
			let menu = Object.assign({},item)
			menu.component = this.lazyRouter(menu.component)
			if(item.children){
				menu.children = []
				this.createRoute(menu.children,item.children)
			}
			routers.push(menu)
		})
	}

}

let vpcf = new VPCF();
export default vpcf;
