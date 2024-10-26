import {test} from '@playwright/test'





test.describe('Test Suite1',()=>{   
    
    test.beforeEach('Before Each',()=>{
        console.log("Before Each")
    })
    
    test.afterEach('After Each',()=>{
        console.log("After Each")
    })
    
    test.afterAll('After all',()=>{
        console.log("After all")
    })
    
    test.beforeAll('Before all',()=>{
        console.log("Before all")
    })
    

    test("Test1",async ()=>{

        console.log("Im inside test 1 ")
    
    })
    
    test("Test2",async ()=>{
    
        console.log("Im inside test 2 ")
    
    })
    
    test("Test3",async ()=>{
    
        console.log("Im inside test 3")
    
    })
    


})


test.describe('Test Suite 2',()=>{    


    test("Test4",async ()=>{

        console.log("Im inside test 4 ")
    
    })
    
    test("Test5",async ()=>{
    
        console.log("Im inside test 5 ")
    
    })
    
    test("Test6",async ()=>{
    
        console.log("Im inside test 6")
    
    })
    
})



 

