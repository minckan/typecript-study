{
    // Array
    const fruits: string[] = ['tomato', 'banana']
    const scores: Array<number> = [1, 2, 3]
    function printArray(fruits: readonly string[]) { }
    

    // Tuple -> interface, type alias, class로 대체해서 사용할것.
    // 서로다른 타입을 가질수 있는 배열(x) 권장하지 않음.
    let student: [string, number]
    student = ['name', 123]
    student[0]
    student[1]
    const [name, age] = student

    
}