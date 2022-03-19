{
    /* 
        추상화와 캡슐화의 차이
        캡슐화 :  클래스를 만들때 외부에서 마음대로 사용하지 못하도록 데이터를 보호하는 역할
        추상화 : 클래스를 간편하게 쓰기 위해서 어떻게 꾸며야 하는지 공통점을 찾고 불필요한 세부 사항은 제거해서 클래스를 간단하게 만드는 단계.
    */
    
    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean
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

    const machin = new CoffeeMachine(23)
    const latteeMachine = new CaffeeLatteMachin(23, 'ssssss')
    const coffee = latteeMachine.makeCoffee(1)
    console.log(coffee);
    console.log(latteeMachine.serialNumber);
    
    

}