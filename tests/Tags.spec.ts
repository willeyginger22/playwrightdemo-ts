import {test} from '@playwright/test'

test('Test1@sanity',async ({page})=>{
    console.log('Inside Test 1')
})

test('Test2@sanity',async ({page})=>{
    console.log('Inside Test 2')
})

test('Test3@regression',async ({page})=>{
    console.log('Inside Test 3')
})

test('Test4@regression',async ({page})=>{
    console.log('Inside Test 4')
})

test('Test5@regression@sanity',async ({page})=>{
    console.log('Inside Test 5')
})




//npx playwright test Tags.spec.ts --project chromium --grep @regression -> will execute all regression 
//npx playwright test Tags.spec.ts --project chromium --grep @sanity -> will execute sanity
//npx playwright test Tags.spec.ts --project chromium --grep @regression@sanity -> will execute sanity and regression
//if u want to execute only sanity not regression combined use below
//npx playwright test Tags.spec.ts --project chromium --grep @sanity --grep-invert @regression
