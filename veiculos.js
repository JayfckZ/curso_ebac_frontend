function Veiculo(marca, modelo){
    this.marca = marca
    this.modelo = modelo

    this.acelerar = function(){
        console.log(`O veículo ${this.marca} ${this.modelo} está acelerando.`)
    }

    this.freiar = function(){
        console.log(`O veículo ${this.marca} ${this.modelo} está freiando.`)
    }
}

function Carro(marca, modelo, numPortas){
    this.numPortas = numPortas

    this.abrirPortas = function(){
        console.log(`Abrindo as ${numPortas} portas de ${this.marca} ${this.modelo}.`)
    }
    Veiculo.call(this, marca, modelo)
}

function Moto(marca, modelo, cilindradas){
    this.cilindradas = cilindradas

    Veiculo.call(this, marca, modelo)

    this.ligarMoto = function(){
        console.log(`Ligando a ${this.marca} ${this.modelo} com ${cilindradas} cilindradas.`)
    }
}

const carro1 = new Carro("Toyota", "Corolla", 4)
const carro2 = new Carro("Ford", "Ka", 2)
const moto1 = new Moto('Honda', 'CBR600RR', 600)
const moto2 = new Moto('Yamaha', 'YZF-R1', 1000)

carro1.acelerar()
carro2.abrirPortas()
moto1.ligarMoto()
moto2.freiar()