let VPCF = function() {
    if (!(this instanceof VPCF)) {
        return new VPCF;
    }
}

VPCF.prototype = {
    isRequired() {
        throw new Error('参数未填写')
    },
    // 解构赋值函数默认值
    foo(args = this.isRequired()) {
        console.log(args);
    }

}

let vpcf = new VPCF();
export default vpcf;
