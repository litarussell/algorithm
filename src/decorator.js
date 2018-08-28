function mixins(...list) {
    return function(target) {
        Object.assign(target.prototype, ...list)
    }
}
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, ...arguments);
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}

const Foo = {
    foo() { console.log('foo') }
};

const a = {
    a() {console.log('a')}
}

@mixins(Foo, a)
export default class Test {
    constructor(num) {
        this.num = num;
    }
    @readonly
    @log
    test(a) {
        console.log('测试1');
    }
}