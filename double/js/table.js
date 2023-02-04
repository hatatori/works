// <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>


function trocaImagemCoroa(arr){
  arr.map(e=>{
    if(e.img == 0) e.img = "imgs/crown_diamond.svg"
    if(e.img == 1) e.img = "imgs/crown_platium.svg"
    if(e.img == 2) e.img = "imgs/crown_gold.svg"
  })
  return arr
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
  {img:2, name:"Victoria",	value:238, choice: 2},
  {img:0, name:"Martina",	value:121, choice: 1},
  {img:0, name:"Lucia",	value:5, choice: 1},
  {img:1, name:"Ximena",	value:499, choice: 0},
  {img:0, name:"Sara",	value:437, choice: 1},
  {img:2, name:"Samantha",	value:242, choice: 1},
  {img:0, name:"Maria",	value:479, choice: 1},
  {img:2, name:"Emma",	value:92, choice: 1},
  {img:1, name:"Catalina",	value:422, choice: 2},
  {img:1, name:"Julieta",	value:88, choice: 2},
  {img:1, name:"Mía",	value:441, choice: 0},
  {img:1, name:"Antonella",	value:270, choice: 2},
  {img:0, name:"Renata",	value:307, choice: 0},
  {img:2, name:"Emilia",	value:294, choice: 2},
  {img:2, name:"Natalia",	value:211, choice: 0},
  {img:0, name:"Zoe",	value:343, choice: 2},
  {img:2, name:"Nicole",	value:440, choice: 1},
  {img:0, name:"Paula",	value:437, choice: 0},
  {img:2, name:"Amanda",	value:294, choice: 0},
  {img:1, name:"María",	value:270, choice: 0},
  {img:2, name:"Emily",	value:335, choice: 2},
  {img:0, name:"Antonia",	value:342, choice: 1},
  {img:2, name:"Alejandra",	value:481, choice: 2},
  {img:2, name:"Juana",	value:37, choice: 0},
  {img:1, name:"Andrea",	value:403, choice: 2},
  {img:0, name:"Manuela",	value:285, choice: 2},
  {img:2, name:"Ana",	value:166, choice: 1},
  {img:2, name:"Guadalupe",	value:179, choice: 1},
  {img:2, name:"Agustina",	value:65, choice: 0},
  {img:1, name:"Elena",	value:384, choice: 2},
  {img:0, name:"María",	value:16, choice: 1},
  {img:0, name:"Bianca",	value:262, choice: 1},
  {img:0, name:"Ariana",	value:208, choice: 1},
  {img:2, name:"Ivanna",	value:295, choice: 1},
  {img:0, name:"Abril",	value:287, choice: 0},
  {img:0, name:"Florencia",	value:198, choice: 1},
  {img:1, name:"Carolina",	value:97, choice: 1},
  {img:0, name:"Maite",	value:371, choice: 0},
  {img:1, name:"Rafaela",	value:415, choice: 2},
  {img:2, name:"Regina",	value:93, choice: 1},
  {img:2, name:"Adriana",	value:228, choice: 1},
  {img:0, name:"Michelle",	value:399, choice: 2},
  {img:2, name:"Alma",	value:408, choice: 1},
  {img:2, name:"Violeta",	value:283, choice: 0},
  {img:0, name:"Salomé",	value:258, choice: 1},
  {img:1, name:"Abigail",	value:474, choice: 2},
  {img:2, name:"Juliana",	value:425, choice: 0},
  {img:0, name:"Valery",	value:201, choice: 1},
  {img:0, name:"Isabel",	value:470, choice: 1},
  {img:0, name:"Montserrat",	value:343, choice: 1},
  {img:1, name:"Allison",	value:43, choice: 0},
  {img:1, name:"Jazmín",	value:64, choice: 0},
  {img:1, name:"Julia",	value:17, choice: 0},
  {img:2, name:"Lola",	value:162, choice: 1},
  {img:1, name:"Luna",	value:423, choice: 1},
  {img:1, name:"Ana",	value:105, choice: 2},
  {img:0, name:"Delfina",	value:394, choice: 2},
  {img:0, name:"Alessandra",	value:176, choice: 2},
  {img:2, name:"Ashley",	value:401, choice: 2},
  {img:0, name:"Olivia",	value:21, choice: 2},
  {img:0, name:"Constanza",	value:196, choice: 2},
  {img:2, name:"Paulina",	value:378, choice: 1},
  {img:0, name:"Rebeca",	value:327, choice: 2},
  {img:2, name:"Carla",	value:443, choice: 0},
  {img:2, name:"María",	value:19, choice: 2},
  {img:1, name:"Micaela",	value:292, choice: 2},
  {img:0, name:"Fabiana",	value:130, choice: 2},
  {img:2, name:"Miranda",	value:8, choice: 2},
  {img:2, name:"Josefina",	value:492, choice: 2},
  {img:2, name:"Laura",	value:62, choice: 2},
  {img:2, name:"Alexa",	value:289, choice: 0},
  {img:2, name:"María",	value:279, choice: 0},
  {img:2, name:"Luana",	value:18, choice: 0},
  {img:0, name:"Fátima",	value:41, choice: 1},
  {img:2, name:"Sara",	value:295, choice: 2},
  {img:0, name:"Isidora",	value:98, choice: 2},
  {img:2, name:"Malena",	value:475, choice: 1},
  {img:2, name:"Romina",	value:382, choice: 1},
  {img:0, name:"Ana",	value:158, choice: 1},
  {img:0, name:"Mariangel",	value:471, choice: 0},
  {img:1, name:"Amelia",	value:26, choice: 2},
  {img:0, name:"Elizabeth",	value:237, choice: 2},
  {img:2, name:"Aitana",	value:183, choice: 2},
  {img:1, name:"Ariadna",	value:282, choice: 0},
  {img:2, name:"María",	value:347, choice: 1},
  {img:1, name:"Irene",	value:238, choice: 2},
  {img:2, name:"Silvana",	value:417, choice: 2},
  {img:0, name:"Clara",	value:243, choice: 2},
  {img:1, name:"Magdalena",	value:119, choice: 0},
  {img:1, name:"Sophie",	value:333, choice: 1},
  {img:2, name:"Josefa",	value:125, choice: 0},
  {img:2, name:"Santiago",	value:410, choice: 0},
  {img:1, name:"Sebastián",	value:444, choice: 1},
  {img:1, name:"Matías",	value:489, choice: 2},
  {img:1, name:"Mateo",	value:52, choice: 2},
  {img:1, name:"Nicolás",	value:326, choice: 0},
  {img:0, name:"Alejandro",	value:121, choice: 1},
  {img:0, name:"Diego",	value:429, choice: 0},
  {img:2, name:"Samuel",	value:498, choice: 2},
  {img:1, name:"Benjamín",	value:435, choice: 0},
  {img:1, name:"Daniel",	value:427, choice: 1},
  {img:2, name:"Joaquín",	value:382, choice: 0},
  {img:2, name:"Lucas",	value:286, choice: 1},
  {img:2, name:"Tomas",	value:349, choice: 1},
  {img:1, name:"Gabriel",	value:428, choice: 0},
  {img:1, name:"Martín",	value:223, choice: 2},
  {img:0, name:"David",	value:420, choice: 2},
  {img:1, name:"Emiliano",	value:157, choice: 2},
  {img:1, name:"Jerónimo",	value:189, choice: 0},
  {img:1, name:"Emmanuel",	value:56, choice: 2},
  {img:0, name:"Agustín",	value:181, choice: 1},
  {img:0, name:"Juan",	value:122, choice: 1},
  {img:0, name:"Juan",	value:283, choice: 1},
  {img:1, name:"Andrés",	value:463, choice: 0},
  {img:0, name:"Thiago",	value:332, choice: 0},
  {img:2, name:"Leonardo",	value:303, choice: 2},
  {img:1, name:"Felipe",	value:1, choice: 2},
  {img:1, name:"Ángel",	value:350, choice: 1},
  {img:0, name:"Maximiliano",	value:317, choice: 1},
  {img:1, name:"Christopher",	value:225, choice: 1},
  {img:1, name:"Juan",	value:164, choice: 2},
  {img:2, name:"Adrián",	value:339, choice: 2},
  {img:1, name:"Pablo",	value:177, choice: 1},
  {img:0, name:"Miguel",	value:210, choice: 2},
  {img:0, name:"Rodrigo",	value:301, choice: 0},
  {img:2, name:"Alexander",	value:291, choice: 1},
  {img:2, name:"Ignacio",	value:383, choice: 0},
  {img:0, name:"Emilio",	value:147, choice: 1},
  {img:0, name:"Dylan",	value:427, choice: 0},
  {img:1, name:"Bruno",	value:129, choice: 0},
  {img:1, name:"Carlos",	value:69, choice: 0},
  {img:0, name:"Vicente",	value:88, choice: 0},
  {img:2, name:"Valentino",	value:214, choice: 1},
  {img:0, name:"Santino",	value:369, choice: 2},
  {img:1, name:"Julián",	value:232, choice: 1},
  {img:1, name:"Juan",	value:423, choice: 2},
  {img:0, name:"Aarón",	value:48, choice: 0},
  {img:2, name:"Lautaro",	value:254, choice: 1},
  {img:1, name:"Axel",	value:423, choice: 2},
  {img:0, name:"Fernando",	value:157, choice: 0},
  {img:1, name:"Ian",	value:147, choice: 1},
  {img:2, name:"Christian",	value:126, choice: 1},
  {img:1, name:"Javier",	value:66, choice: 2},
  {img:0, name:"Manuel",	value:143, choice: 1},
  {img:2, name:"Luciano",	value:459, choice: 0},
  {img:1, name:"Francisco",	value:167, choice: 0},
  {img:0, name:"Juan",	value:171, choice: 0},
  {img:1, name:"Iker",	value:112, choice: 1},
  {img:0, name:"Facundo",	value:302, choice: 2},
  {img:0, name:"Rafael",	value:424, choice: 1},
  {img:2, name:"Alex",	value:162, choice: 2},
  {img:1, name:"Franco",	value:200, choice: 1},
  {img:2, name:"Antonio",	value:69, choice: 2},
  {img:0, name:"Luis",	value:66, choice: 0},
  {img:0, name:"Isaac",	value:317, choice: 2},
  {img:0, name:"Máximo",	value:152, choice: 0},
  {img:0, name:"Pedro",	value:44, choice: 1},
  {img:0, name:"Ricardo",	value:259, choice: 2},
  {img:2, name:"Sergio",	value:117, choice: 0},
  {img:0, name:"Eduardo",	value:154, choice: 2},
  {img:0, name:"Bautista",	value:439, choice: 2},
  {img:0, name:"Miguel",	value:90, choice: 1},
  {img:2, name:"Cristóbal",	value:245, choice: 2},
  {img:2, name:"Kevin",	value:206, choice: 0},
  {img:0, name:"Jorge",	value:340, choice: 1},
  {img:0, name:"Alonso",	value:162, choice: 0},
  {img:1, name:"Anthony",	value:198, choice: 0},
  {img:0, name:"Simón",	value:305, choice: 1},
  {img:2, name:"Juan",	value:89, choice: 2},
  {img:0, name:"Joshua",	value:218, choice: 2},
  {img:1, name:"Diego",	value:65, choice: 1},
  {img:2, name:"Juan",	value:148, choice: 1},
  {img:1, name:"Mario",	value:210, choice: 0},
  {img:1, name:"Alan",	value:148, choice: 1},
  {img:1, name:"Josué",	value:75, choice: 0},
  {img:2, name:"Gael",	value:137, choice: 0},
  {img:1, name:"Hugo",	value:439, choice: 1},
  {img:1, name:"Matthew",	value:382, choice: 2},
  {img:0, name:"Ivan",	value:55, choice: 1},
  {img:1, name:"Damián",	value:155, choice: 0},
  {img:0, name:"Lorenzo",	value:386, choice: 1},
  {img:0, name:"Juan",	value:57, choice: 1},
  {img:1, name:"Esteban",	value:145, choice: 2},
  {img:2, name:"Álvaro",	value:401, choice: 2},
  {img:0, name:"Valentín",	value:384, choice: 2},
  {img:2, name:"Dante",	value:442, choice: 1},
  {img:0, name:"Jacobo",	value:385, choice: 0},
  {img:1, name:"Jesús",	value:293, choice: 1},
  {img:0, name:"Camilo",	value:318, choice: 1},
  {img:0, name:"Juan",	value:355, choice: 1},
  {img:2, name:"Elías",	value:577, choice: 0},
];

lista = trocaImagemCoroa(lista)

let lista_a = lista
let lista_b = lista
let lista_c = lista

// table.add()

const { createApp } = Vue

let table = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      lista: [],
      lista_a: [],
      lista_b: [],
      lista_c: [],
      lista_a_total: 0,
      lista_b_total: 0,
      lista_c_total: 0
    }
  },
  methods:{
    setLista(arr){
      function trocaImagemCoroa(arr){
        arr.map(e=>{
          if(e.img == 0) e.img = "imgs/crown_diamond.svg"
          if(e.img == 1) e.img = "imgs/crown_platium.svg"
          if(e.img == 2) e.img = "imgs/crown_gold.svg"
        })
        return arr
      }
      arr = trocaImagemCoroa(arr)
      this.lista = arr
      this.lista_a = this.lista.filter(e=>e.choice == 0)
      this.lista_b = this.lista.filter(e=>e.choice == 1)
      this.lista_c = this.lista.filter(e=>e.choice == 2)
      this.lista_a_quantity = this.lista.filter(e=>e.choice == 0).length
      this.lista_b_quantity = this.lista.filter(e=>e.choice == 1).length
      this.lista_c_quantity = this.lista.filter(e=>e.choice == 2).length

      this.lista_a_total = this.lista.filter(e=> e.choice == 0).length > 0 ? this.lista.filter(e=> e.choice == 0).map(e=>e.value).reduce((a,b)=>a+=b) : 0 
      this.lista_b_total = this.lista.filter(e=> e.choice == 1).length > 0 ? this.lista.filter(e=> e.choice == 1).map(e=>e.value).reduce((a,b)=>a+=b) : 0 
      this.lista_c_total = this.lista.filter(e=> e.choice == 2).length > 0 ? this.lista.filter(e=> e.choice == 2).map(e=>e.value).reduce((a,b)=>a+=b) : 0 

    }
  }
}).mount('#app')

// table.setLista(lista)

// id="tabela_1"

export default table;
