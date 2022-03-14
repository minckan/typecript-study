{
    /* 
        Type Assertions (x) 100프로 장담할 때.
    */
    
    function jsStrFunc():any {
        return 5
    }

    const result = jsStrFunc()
    console.log((result as string).length);

    function findNumbers(): number[] | undefined {
        return undefined
    }

    const numbers = findNumbers()!
    numbers.push(2) 
}