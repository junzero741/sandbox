class Observer {
    constructor () {
        this.list = [];
    }

    registerObserver (target) {
        this.list.push(target);
    }

    unregisterObserver (targetObserver) {
        this.list = this.list.filter(el => el !== targetObserver);
    }

    notifyObservers (content) {
        this.list.forEach(observer => observer.notify(content));
    }

}

const observer = new Observer();

const target1 = { notify: content => console.log('wtf') }
const target2 = { notify: content => console.log('target2 : ' + content) }
const target3 = { notify: content => console.log('target3 : ' + content) }

observer.registerObserver(target1)
observer.registerObserver(target2)
observer.registerObserver(target3)

observer.notifyObservers('hello Observers')
// target1 : hello Observers
// target2 : hello Observers
// target3 : hello Observers

observer.unregisterObserver(target2)

observer.notifyObservers('except target2 in Observers')
// target1 : except target2 in Observers
// target3 : except target2 in Observers