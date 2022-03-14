{
    /* 
        type aliases
    */
    
    type Text = string
    const name: Text = 'ellie'
    const address: Text = 'korea'
    type Num = number
    type Student = {
        name: string
        age: number
    }

    const student: Student = {
        name: ' mj',
        age: 12
    }

    /* 
        String Literal Types
    */
    type Name = 'name'
    let minjuName: Name 
    minjuName = 'name'
    type Json = 'json'
    const json: Json = 'json'
    

    type Boal = true
}