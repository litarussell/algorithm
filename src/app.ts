import test from './test'

(function (test_arr: any) {
  test_arr.forEach((fn: any) => {
    console.log(`------------------------------ ${fn.name} ------------------------------`)
    fn.test()
    console.log('')
  });
})(test)