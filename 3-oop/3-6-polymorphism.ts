{

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots:number):CoffeeCup
    }



    // public
    // private 
    // protected :외부에서는 접근할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근가능 하다. 
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT :number = 7 // class level
        private coffeeBeans: number = 0 // instance level 

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        clean() {
            console.log('cleaning the machine')
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
        }
        private preheat():void {
            console.log('heating up ...');
            
        }

        private extract(shots:number) {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.preheat()
            return this.extract(shots)
        }
    }

    class CaffeeLatteMachin extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans)
        }
        private steamMilk(): void {
            console.log('steaming some milk...');  
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            this.steamMilk()
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }


    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeeLatteMachin(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeeLatteMachin(16, '1'),
        new SweetCoffeeMaker(16)
    ]
    
    machines.forEach(machine => {
        console.log('--------------------');
        machine.makeCoffee(1)
    })
}