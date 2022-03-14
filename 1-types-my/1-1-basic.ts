{
    // Javascript
    // let
    // const
    // Primitive : number, string, boolean, bigint, symbol, null, undefined
    // object: function, array

    // number 
    const num: number = -6

    // string 
    const str: string = 'Hello'

    // boolean 
    const boal: boolean = false

    // undefined 
    let name: undefined; // (x)
    let age: number | undefined;

    // null 
    let persons: null ; // (x)
    let person: string | null
    
    function find(): number | undefined {
        return undefined
    }

    // unknown 가능하면 쓰지 않는게 좋다. (x)
    let notsure: unknown = 0
    notsure = 'he'
    notsure = true

    // any 가능하면 쓰지 않는게 좋다. (x)
    let any: any = 0
    any = 'hello'

    // void
    function print() :void {
        console.log('hello')
        return 
    }

    // never (절대 다른 타입을 리턴할 수 없다.)
    function throwError(message:string):never {
        // message -> server(log)
        throw new Error
    }

    // object (x)
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({name: 'ellie'})
    acceptSomeObject({animal: 'ellie'})
}