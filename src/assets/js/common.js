// VUE Prototype Common Function vue原型公共函数
let VPCF = function () {
	if (!(this instanceof VPCF)) {
		return new VPCF;
	}
}

VPCF.prototype = {
	isRequired(type) {
		throw new Error(type + '未填写')
	},
	// 解构赋值函数默认值
	foo(args = this.isRequired('id')) {
		console.log(args);
	}

}

let vpcf = new VPCF();
export default vpcf;
