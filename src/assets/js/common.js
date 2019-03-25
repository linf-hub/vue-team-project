let VPCF = function() {
    if (!(this instanceof VPCF)) {
        return new VPCF;
    }
}

VPCF.prototype = {
    foo() {
        console.log('hey')
    }
}

let vpcf = new VPCF();
export default vpcf;