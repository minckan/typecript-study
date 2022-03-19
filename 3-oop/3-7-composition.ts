{

    // Favor Composition over inheritance
    // Composition : 구성 요소들, 구성 / 필요한 것들을 모아서 조립해 나가는 모양


    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots:number):CoffeeCup
    }

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

    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    // 설탕 제조기
    class CandySugar {
        private getSugar() {
            console.log('getting some sugar from jar...');
            return true
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar()
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }
    class CaffeeLatteMachin extends CoffeeMachine{
        constructor(
            beans: number,
            public readonly serialNumber: string,
            private milkFother: CheapMilkSteamer
        ) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.milkFother.makeMilk(coffee)
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans: number, private sugar: CandySugar) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.sugar.addSugar(coffee)
        }
    }


    class SweetCaffeeLatteMachine extends CoffeeMachine{
        constructor(
            private beans: number,
            private sugar: CandySugar,
            private milk: CheapMilkSteamer
        ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded)
        }
    }


    const cheapMilkSteamer = new CheapMilkSteamer()
    const candySugar = new CandySugar()
    const sweetMachine = new SweetCoffeeMaker(12, candySugar)
    const latteeMachine = new CaffeeLatteMachin(12, 'sss', cheapMilkSteamer)
    const sweetLatteMachine = new SweetCaffeeLatteMachine(12, candySugar, cheapMilkSteamer)

    
}