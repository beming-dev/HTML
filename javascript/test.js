class Counter {
    constructor(runIf5Times){
        this.counter = 0;
        this.runIf5Times = runIf5Times;
    }

    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 ==0){
            this.runIf5Times(this.counter);
        }
    }
}

function printSomething(num){
    console.log(`Wow ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();