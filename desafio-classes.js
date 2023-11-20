let hero = {
    name: "Arthur",
    age: "16",
    type: "Necromante"
}
class figth {
    constructor(atack){
        this.atack = atack
    }
    write(){
        console.log(`${hero.type} atacou usando ${this.atack}`)
    }
}

let army = new figth("exercito de mortos-vivos")

army.write()