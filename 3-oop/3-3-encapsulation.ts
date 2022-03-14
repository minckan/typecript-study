{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean
    }

    // public
    // private 
    // protected :외부에서는 접근할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근가능 하다. 
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT :number = 7 // class level
        private coffeeBeans: number = 0 // instance level 

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        makeCoffee(shots:number):CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(32)
    maker.fillCoffeeBeans(50)

    console.log(maker);
    
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4

        get age(): number {
           return this.internalAge
        }
        set age(num: number) {
            if (num < 0) {

            }
            this.internalAge = num
        }

        constructor(private firstName: string, private lastName: string) {
           
        }
    }

    const user = new User('Minju', 'Kang')
    console.log(user.fullName); // Minju Kang
    console.log(user.fullName); // get 전에는 Minju Kang / 후에는 Lee Kang
    
}