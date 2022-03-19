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

        public constructor(
            coffeeBeans: number,
            private sugar: SugerProvider,
            private milk: MilkFrother
        ) {
            this.coffeeBeans = coffeeBeans
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
            const coffee = this.extract(shots)
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded)
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup
    }

    interface SugerProvider {
        addSugar(cup: CoffeeCup): CoffeeCup
    }
    

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
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

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Fancy steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Cold steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup) :CoffeeCup {
            return cup
        }
    }
    class NoSuger implements SugerProvider {
        addSugar(cup: CoffeeCup) :CoffeeCup {
            return cup
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugerProvider {
        private getSugar() {
            console.log('getting some sugar from candy...');
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

    class SugarMixer implements SugerProvider {
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

    //
    const cheapMilkSteamer = new CheapMilkSteamer()
    const fancypMilkSteamer = new FancyMilkSteamer()
    const coldMilkSteamer = new ColdMilkSteamer()
    const noMilk = new NoMilk()

    const candySugar = new CandySugarMixer()
    const sugar = new SugarMixer()
    const noSuger = new NoSuger()

    // 
    const sweetCandyMachine = new CoffeeMachine(12, candySugar, noMilk)
    const sweetMachine = new CoffeeMachine(12, sugar, noMilk)

    const latteeMachine = new CoffeeMachine(12,noSuger, cheapMilkSteamer)
    const coldLatteeMachine = new CoffeeMachine(12, noSuger,coldMilkSteamer)
    const sweetLatteMachine = new CoffeeMachine(12, candySugar, cheapMilkSteamer)


}