
const add = (a, b) => {
        if (typeof a === 'number' && typeof b === 'number'){
            return a+b;
        }
        return 'error';
    };

    // // Test #1
    // console.log('App Component');
    // console.log('#1 - should return sum if params are numbers');
    // if(add(2,7) === 9) {
    //     console.log('TEST PASS');
    // } else {
    //     console.log('TEST FAIL');
    // }
    // //TEST #2
    // console.log('#2 - should return error if params are strings');
    // if(add('a', 'b') === 'error'){
    //     console.log('TEST PASS');
    // } else {
    //     console.log('TEST FAIL');
    // }
    // //TEST #3
    // console.log('#3 - should return error if only one params');
    // if(add(1) === 'error'){
    //     console.log('TEST PASS');
    // } else {
    //     console.log('TEST FAIL');
    // }
    // //TEST #4
    // console.log('#4 - should return error if params not exist');
    // if(add(1) === 'error'){
    //     console.log('TEST PASS');
    // } else {
    //     console.log('TEST FAIL');
    // }
    //


export default add;