{
    /* 
        Enum 
        : 타입스크립트에서는 가능한한 사용하지 않는게 좋음.
        : 타입이 정확하게 보장되지 않음.
        : 다만, 다른 모바일 클라이언트와 소통해야 할때는 
        다른 모바일 클라이언트에서는 유니온 타입을 설명할 방법이 없기 때문에 이넘타입을 사용해서
        소통하는 것이 좋다.
    */
    
    // JS
    const MAX_NUM = 6
    const MAX_STUDENTS_PER_CLASS = 10
    const MONDAY = 0
    const TUESDAY = 1
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1 })
    
    const daysOfToday = DAYS_ENUM.MONDAY

    // TS 
    // enum Days {
    //     Monday, // 0
    //     Tuesday, // 1
    //     Wednesday // 2
    // }

    // enum Days {
    //     Monday = 'm',
    //     Tuesday = 't',
    //     Wednesday = 'w'
    // }

    type Days = 'Monday' | 'tuesday' | 'wednesday'
    let daysOfWeek: Days = 'Monday'
    console.log(daysOfWeek);
}