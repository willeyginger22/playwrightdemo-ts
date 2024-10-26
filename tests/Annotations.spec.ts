import {expect, test} from '@playwright/test'

//Try skip and only tags

test('Test1',async ({page})=>{
    console.log('Inside Test 1')
})

test.skip('Test2',async ({page})=>{
    console.log('Inside Test 2')
})

//skip this test based on condition
//browserName fixture will give an info on which browser u r executing the test
test('Test3',async ({page,browserName})=>{
    if(browserName==='chromium'){
        test.skip()
    }
    console.log('Inside Test 3')
})

//fixme - almost similar to skip, skip the test only when the block has 
//bugs to be fixed until it has to be skipped
test('Test4',async ({page})=>{
    test.fixme()
    console.log('Inside Test 4')
})

//fail-Kind of negative test- expecting the test to be failed then the test will be passed
test('Test5',async ({page})=>{
    test.fail() //expectation
    console.log('Inside Test 5')
    expect(1).toBe(2) //actual
    //if both exp and act are same, the test will be passed
})

//Failing based on condition
test('Test6',async ({page,browserName})=>{
    if(browserName==='chromium'){
        test.fail() //expectation
    }
    console.log('Inside Test 6')
    expect(1).toBe(2) //actual
})

//By default every test take 30 seconds, what if it is taking more than that- it will fail
test('Test7',async ({page})=>{
    test.slow() // It will slow the waiting time -> timeout*3 e.g 30 -> 30*3=90
    // test.setTimeout(6000) //this will also do same as slow but fixed timeout
    await page.goto('https://demoblaze.com/index.html')
    console.log('Inside Test 7')
})


