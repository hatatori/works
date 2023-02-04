import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

function xxx(){
    setTimeout(()=>{
        div_historico.scrollLeft = 10000
    },10)
}

let lista = [
    {img:1, name:"Sofia",	value:197, choice: 2},
    {img:0, name:"Isabella",	value:95, choice: 1},
    {img:2, name:"Camila",	value:123, choice: 0},
    {img:2, name:"Valentina",	value:306, choice: 1},
    {img:0, name:"Valeria",	value:257, choice: 1},
    {img:0, name:"Mariana",	value:331, choice: 1},
    {img:2, name:"Luciana",	value:451, choice: 2},
    {img:1, name:"Daniela",	value:441, choice: 1},
    {img:0, name:"Gabriela",	value:259, choice: 1},
]

let table = createApp({
    data() {
        return {
            message: 'x!',
            historico: [],
        }
    },
    methods:{
        setHistoric(n){
            this.historico = n
        },
        addHistoric(n){
            this.historico.push(n)
            xxx()
        }
    }
}).mount('#app')


// setInterval(()=>{
//     let r = (Math.random()*100)|0
//     table.addHistoric(r)
// },1000)


export default table