import events from "./js/events.js";
import stats from "./js/stats.js";
import cards from "./js/cards.js";
import config from "./js/config.js";
import loading from "./js/loading.js";
import table from "./js/table.js";
import historic from "./js/historic.js";
import communication from "./js/communication.js";
import message from "./js/message.js";
import setColors from "./js/colors.js";


// {
//   "id": "b2ab7d06-a794-46af-9eff-9f5939cf500a",
//   "color": 1,
//   "amount": 67,
//   "winAmount": 80,
//   "status": "loss",
//   "user": {
//       "id": "12f01357-1147-4b39-9b1c-f0f124fd2ff9",
//       "username": "Mitchell_Medhurst",
//       "name": "Wilfred Walker"
//   }
// }


config.init({
  name: "Amanda",
  crown: 1,
  wallet: 1000,
  time: 500,
  list: [1, 2],
  betValue: 10,
  buttonChoice: 1
})

loading.end = () =>{
  // quando o tempo chega ao fim
  // console.log('ok')
  // communication.loading_end()
  
  

  // cards.choice(parseInt(Math.random() * 10 + 1));
  // cards.choice(5);
  // stats.hud_off();
  // stats.setGameOver(false);
}

cards.end = () => {

  cards.status = 'stop'

  // >> quando o card chega no fim
  // console.log('fim do card')
  // table.tablewin((cards.choice_number|0)%3)
    table.tablewinnumber(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)


  // console.log(cards.choice_number)

  // table.tablewin((cards.choice_number|0)%3)
  // table.table()

  // stats.hud_on();
  historic.add(cards.choice_number);
  // if (stats.gameover == false && btn_apostar.innerHTML == "Apostou") {
  //   if(stats.choice == 1 && cards.choice_number == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 14);
  //   if(stats.choice == 0 && cards.choice_number != 0 && cards.choice_number % 2 == 0) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
  //   if(stats.choice == 2 && cards.choice_number != 0 && cards.choice_number % 2 == 1) stats.setWallet(stats.wallet + stats.betValue + stats.betValue * 2);
  // }

  // stats.reset();
  stats.setGameOver(true);

  if(loading.time <= 0){
    if(cards.choice_number%2==0) table.tablewin(0)
    if(cards.choice_number%2!=0) table.tablewin(2)
    if(cards.choice_number%2==0) table.tablewin(1)
  }

  message.normal("Aguarde")

  // setTimeout(()=>{
  //   cards.restart()
  // },5000)

}

// cards.restart = () => {
  // communication.renew()
  // table.tablenormal()
  // loading.setTime(500)
// }

// table.tablewin((cards.choice_number|0)%3)
// table.tablewin(0)
// table.tablewin(1)
// table.tablewin(2)

let listafake = [
  {
      "id": "b2ab7d06-a794-46af-9eff-9f5939cf500a",
      "color": 1,
      "amount": 67,
      "winAmount": 80,
      "status": "loss",
      "user": {
          "id": "12f01357-1147-4b39-9b1c-f0f124fd2ff9",
          "username": "Mitchell_Medhurst",
          "name": "Wilfred Walker"
      }
  },
  {
      "id": "47dbd38a-1f07-4f39-bd03-1b16fd73f300",
      "color": 3,
      "amount": 54,
      "winAmount": 44,
      "status": "win",
      "user": {
          "id": "f775e27f-b744-44c4-a09f-bd5dcd3b829b",
          "username": "Jannie99",
          "name": "Aubrey Grimes"
      }
  },
  {
      "id": "f0438b35-de04-4414-9024-b06182b69324",
      "color": 1,
      "amount": 95,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "14446a8d-acca-4920-890b-7d669bb90656",
          "username": "Jules33",
          "name": "Charlotte Casper"
      }
  },
  {
      "id": "6efce078-2099-43b7-897c-3d9290adb545",
      "color": 2,
      "amount": 10,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "a86084de-30c5-4ed7-91b8-39c3dea80019",
          "username": "Odell1",
          "name": "Crystal Bechtelar"
      }
  },
  {
      "id": "79a75fd1-24e4-4f1a-b6bf-eca52e666ea0",
      "color": 3,
      "amount": 63,
      "winAmount": 74,
      "status": "win",
      "user": {
          "id": "67b24396-5e5f-4aca-8c19-ac6f24bb1a97",
          "username": "Shany_Vandervort94",
          "name": "Beatrice Powlowski"
      }
  },
  {
      "id": "99323b11-75a9-43ec-be66-8e5fdc33f4f0",
      "color": 2,
      "amount": 83,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "f6f745cf-fd17-4121-8a27-6930c1f63215",
          "username": "Tressie_Bernier",
          "name": "Mrs. Holly Runolfsson"
      }
  },
  {
      "id": "d4e1e608-06ba-4e89-abf5-7f217d0e8b07",
      "color": 2,
      "amount": 50,
      "winAmount": 43,
      "status": "win",
      "user": {
          "id": "3ba4924b-4c8c-44f8-a5ac-31deb159157a",
          "username": "Jeramy99",
          "name": "Carolyn Strosin"
      }
  },
  {
      "id": "45dddfe5-3cbb-48b5-a149-8c88065b3c3f",
      "color": 1,
      "amount": 94,
      "winAmount": 12,
      "status": "loss",
      "user": {
          "id": "fc6450e8-63e4-492a-a90b-9b95929162d0",
          "username": "Arne.Cremin30",
          "name": "Rosie Stanton"
      }
  },
  {
      "id": "9152a786-7683-41e8-8c95-93a2ee68b894",
      "color": 1,
      "amount": 28,
      "winAmount": 38,
      "status": "win",
      "user": {
          "id": "fed956cd-afda-4e26-8717-f03798918c2e",
          "username": "Afton.Mraz",
          "name": "Ms. Angel Kohler"
      }
  },
  {
      "id": "02a90be4-6aff-4b5b-a0e5-71366ae12109",
      "color": 1,
      "amount": 97,
      "winAmount": 82,
      "status": "loss",
      "user": {
          "id": "042d0617-cf71-4716-a88d-58443cf72865",
          "username": "Augustus.Rempel3",
          "name": "Audrey Stokes"
      }
  },
  {
      "id": "aa459c53-225c-447d-a56f-3cb4175f39d4",
      "color": 3,
      "amount": 32,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "1faebfe5-582b-497f-af77-843c539d283d",
          "username": "Halie_Trantow62",
          "name": "Tami Fritsch"
      }
  },
  {
      "id": "b72972d4-b6a9-4b34-b100-c5cda9e4d99e",
      "color": 1,
      "amount": 21,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "e9552b26-f185-4e76-bfd9-9541b051e333",
          "username": "Shanny98",
          "name": "Irvin Klocko"
      }
  },
  {
      "id": "9833a9c6-2d59-4c1a-817b-121b1f15e27d",
      "color": 1,
      "amount": 21,
      "winAmount": 19,
      "status": "loss",
      "user": {
          "id": "70ba0ddc-e26d-42a9-8978-1f1be2b05918",
          "username": "Dave67",
          "name": "Gina Koelpin"
      }
  },
  {
      "id": "63b719ae-839f-42f7-ab15-ea5796b85af1",
      "color": 1,
      "amount": 62,
      "winAmount": 37,
      "status": "win",
      "user": {
          "id": "09ee1794-e1d5-4044-9834-ece4baa08743",
          "username": "Andrew77",
          "name": "Nicholas Bernier"
      }
  },
  {
      "id": "981b3088-59a9-4b81-91c4-1cb8975ad5c5",
      "color": 1,
      "amount": 51,
      "winAmount": 33,
      "status": "loss",
      "user": {
          "id": "2a636c7a-0466-411e-b0d3-f3119750c14b",
          "username": "Camila64",
          "name": "Leigh Bailey"
      }
  },
  {
      "id": "330dc18e-da73-4f64-ad7a-d08eea600671",
      "color": 1,
      "amount": 12,
      "winAmount": 46,
      "status": "loss",
      "user": {
          "id": "94b61d73-fd76-4434-958b-907416e82d3d",
          "username": "Dayna23",
          "name": "Felipe VonRueden"
      }
  },
  {
      "id": "2bb76069-5be7-4e28-856a-3517effacdf5",
      "color": 3,
      "amount": 24,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "5099b38f-78c2-4f56-b7d6-a4d0e12ec561",
          "username": "Arvel.Waters98",
          "name": "Janet Little"
      }
  },
  {
      "id": "1c52ca97-d63d-4ab9-858e-bd522eddcf74",
      "color": 2,
      "amount": 11,
      "winAmount": 52,
      "status": "loss",
      "user": {
          "id": "d3e72f80-df92-4073-b63e-d3e0e69a821a",
          "username": "Erika_Mitchell",
          "name": "Gail Flatley"
      }
  },
  {
      "id": "88d6502b-b356-4079-beb1-9338ee7ac020",
      "color": 3,
      "amount": 30,
      "winAmount": 69,
      "status": "loss",
      "user": {
          "id": "35dd30de-4ba0-4eb2-8cd4-64ee623018cf",
          "username": "Fausto_Predovic4",
          "name": "Terry Maggio"
      }
  },
  {
      "id": "4a1a1754-8532-4fde-81ab-f48885fa57ca",
      "color": 3,
      "amount": 46,
      "winAmount": 34,
      "status": "win",
      "user": {
          "id": "5160469b-4ee6-4ded-bec4-13050a819a8d",
          "username": "Ciara82",
          "name": "Joseph Zboncak"
      }
  },
  {
      "id": "af83c459-1b81-46b1-8900-6bff98574ab0",
      "color": 2,
      "amount": 52,
      "winAmount": 70,
      "status": "loss",
      "user": {
          "id": "60513c1b-3d24-43dc-8066-488a51611bf9",
          "username": "Arne.Sawayn1",
          "name": "Angie Sanford"
      }
  },
  {
      "id": "ea556228-86dd-420c-9dc2-4438bf042937",
      "color": 1,
      "amount": 97,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "a07085e5-c3b2-4062-ba03-b692641b7cdd",
          "username": "Daisha85",
          "name": "Andy Carroll"
      }
  },
  {
      "id": "8d65506a-70d6-41fe-8467-9291f9ad38a9",
      "color": 2,
      "amount": 36,
      "winAmount": 23,
      "status": "win",
      "user": {
          "id": "350a621a-403a-4899-a712-8045994df509",
          "username": "Ellen_Mohr3",
          "name": "Joshua Okuneva"
      }
  },
  {
      "id": "7e26387a-1974-4bec-914d-3fe2dca702cb",
      "color": 2,
      "amount": 68,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "29ed6bf8-957a-45ba-9429-3d8e5580ec5f",
          "username": "Amir.OConnell28",
          "name": "Morris Dickinson"
      }
  },
  {
      "id": "6b9ab8b6-e15b-44d0-83c7-dae23b53a261",
      "color": 1,
      "amount": 15,
      "winAmount": 60,
      "status": "loss",
      "user": {
          "id": "32515a2f-da4a-4928-ad5e-574c0637dd36",
          "username": "Mae_Pagac33",
          "name": "Franklin Brown"
      }
  },
  {
      "id": "5c67e756-9484-45cd-9309-29989436f369",
      "color": 2,
      "amount": 30,
      "winAmount": 17,
      "status": "loss",
      "user": {
          "id": "39a2c77e-29eb-437d-8221-9fa902e5e358",
          "username": "Ike_Cummerata",
          "name": "Phil Glover V"
      }
  },
  {
      "id": "41aaf75e-cd06-4a96-bf04-34053534388c",
      "color": 1,
      "amount": 47,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "94b5edcb-43a9-499f-9a47-630839ac3308",
          "username": "Willie.Armstrong93",
          "name": "Mr. Noah D'Amore"
      }
  },
  {
      "id": "414ead2e-13b0-4a0d-8463-b792fedeb017",
      "color": 1,
      "amount": 81,
      "winAmount": 85,
      "status": "win",
      "user": {
          "id": "6fc31de0-33bb-4ddb-bccb-21a94ed3a853",
          "username": "Dwight_Luettgen69",
          "name": "Cynthia Hagenes"
      }
  },
  {
      "id": "c99e186f-9a34-4c49-adc3-5ecc87cda6a6",
      "color": 1,
      "amount": 35,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "9e3ff625-c96b-4501-b944-0ee3de9730de",
          "username": "Andreanne74",
          "name": "Lynda Mayer"
      }
  },
  {
      "id": "163b8f3b-0a40-4aa9-bdfc-de66cd0501a3",
      "color": 1,
      "amount": 59,
      "winAmount": 10,
      "status": "loss",
      "user": {
          "id": "6b85ee64-3ae6-4b18-be61-8b6c14d3f887",
          "username": "Alverta_Carter20",
          "name": "Tracy Gibson PhD"
      }
  },
  {
      "id": "1885ddd2-1f7c-4396-ac11-df72c3ff1dc6",
      "color": 1,
      "amount": 93,
      "winAmount": 72,
      "status": "win",
      "user": {
          "id": "9885e0dd-9831-434e-a965-f80dddb541c9",
          "username": "Javonte60",
          "name": "Emanuel Blanda"
      }
  },
  {
      "id": "ba736983-8984-4eb6-b8ad-c6a6b8802c38",
      "color": 2,
      "amount": 35,
      "winAmount": 83,
      "status": "win",
      "user": {
          "id": "3658fb40-791c-40a7-a6cd-87e05459a90a",
          "username": "King.Champlin75",
          "name": "Marta Marks"
      }
  },
  {
      "id": "c8be0582-ebaa-41b7-b57a-86a1dd442df6",
      "color": 3,
      "amount": 27,
      "winAmount": 32,
      "status": "win",
      "user": {
          "id": "0b54045e-2eb6-4ede-9119-922885de2642",
          "username": "Jakayla26",
          "name": "Randy Rohan"
      }
  },
  {
      "id": "a9ccd51c-b733-4849-ade6-375d1031db1e",
      "color": 3,
      "amount": 44,
      "winAmount": 84,
      "status": "win",
      "user": {
          "id": "5dc8cf05-7aa3-40b9-a221-6867c36bf421",
          "username": "Alfonso29",
          "name": "Vicky Reichert MD"
      }
  },
  {
      "id": "999bc7e1-73f2-4b22-9a24-f0ceed74a1eb",
      "color": 3,
      "amount": 47,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "11e4aee6-fa13-4924-ab7b-387812a83e6d",
          "username": "Derrick44",
          "name": "Jan Reynolds"
      }
  },
  {
      "id": "45dfb8df-49bd-4888-b526-b54adb76898f",
      "color": 2,
      "amount": 50,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "2cdb8d44-d0bb-42a0-985f-07cd6fc4d54f",
          "username": "Casper.Huels",
          "name": "Darnell Kub"
      }
  },
  {
      "id": "4adf930e-65af-4bf2-8365-d78bea7020dd",
      "color": 2,
      "amount": 97,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "77070654-d160-44e1-b409-18585ddd4a6f",
          "username": "Maya_Bernier",
          "name": "Miss Felix Wiegand"
      }
  },
  {
      "id": "ecc75b94-241e-4bb9-b626-5941d6912722",
      "color": 1,
      "amount": 80,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "9d41db2f-6179-4857-b658-45139f5f097e",
          "username": "Wyatt_Langosh51",
          "name": "Gordon Klein"
      }
  },
  {
      "id": "66b9383d-cb34-4f22-af57-d4c38dbc38f9",
      "color": 1,
      "amount": 44,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "efd9dd58-4065-4198-bd13-b686eb05b885",
          "username": "Eduardo_Koss55",
          "name": "Kristopher Bechtelar"
      }
  },
  {
      "id": "9ee34681-ee40-442e-aabe-e14abc3417d4",
      "color": 2,
      "amount": 16,
      "winAmount": 45,
      "status": "loss",
      "user": {
          "id": "09091f9d-8d88-4b28-b677-562085ca8185",
          "username": "Wilburn.Hickle28",
          "name": "Sheryl McGlynn"
      }
  },
  {
      "id": "1e737d98-4266-4bf2-a2b4-41cb5f673dd2",
      "color": 3,
      "amount": 35,
      "winAmount": 88,
      "status": "loss",
      "user": {
          "id": "1c857851-166c-419d-aee5-9a3819579f79",
          "username": "Julius_Balistreri55",
          "name": "Johnny Streich PhD"
      }
  },
  {
      "id": "31fb535e-2904-4058-b7e9-55660e531427",
      "color": 3,
      "amount": 76,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "3a142c44-e3ea-4f64-8935-128cd6bf9554",
          "username": "Filomena.Zulauf",
          "name": "Francis Tillman"
      }
  },
  {
      "id": "b2fe4e12-a985-4f77-8e51-51164279d944",
      "color": 3,
      "amount": 44,
      "winAmount": 24,
      "status": "win",
      "user": {
          "id": "d9efa8d8-1416-4e03-85cd-b3ec3b31c91d",
          "username": "Tressa_Kutch68",
          "name": "Brandy Torphy"
      }
  },
  {
      "id": "4b9f5458-5a4c-4bda-8331-1d06ea1f6b27",
      "color": 2,
      "amount": 31,
      "winAmount": 89,
      "status": "win",
      "user": {
          "id": "59175048-ec96-40f4-9a18-72bd7a145dcc",
          "username": "Obie84",
          "name": "Leticia Hoeger"
      }
  },
  {
      "id": "3eb4fbcf-2b1c-4aa4-86a4-d8e06a717d3e",
      "color": 3,
      "amount": 93,
      "winAmount": 33,
      "status": "loss",
      "user": {
          "id": "ca4e97c7-d716-4d70-a351-6063a16455e3",
          "username": "Jakob51",
          "name": "Sonia Mosciski DDS"
      }
  },
  {
      "id": "0c155bd1-3208-4112-a7d3-063c21cdc30a",
      "color": 3,
      "amount": 78,
      "winAmount": 46,
      "status": "win",
      "user": {
          "id": "f696624d-ce77-4fcb-a4db-0717c8274486",
          "username": "Hallie_McDermott",
          "name": "Ashley Ondricka"
      }
  },
  {
      "id": "c6e69d7a-03dd-474e-9c63-29d306cd91d3",
      "color": 1,
      "amount": 75,
      "winAmount": 99,
      "status": "win",
      "user": {
          "id": "2ca57ab6-d4a0-41c3-b66a-a12b489c49f6",
          "username": "Yolanda43",
          "name": "Candice Yost"
      }
  },
  {
      "id": "25fdf5ce-da78-42a2-8f41-8ff029e0df97",
      "color": 2,
      "amount": 35,
      "winAmount": 23,
      "status": "loss",
      "user": {
          "id": "0284a8a2-6861-48ea-b1d1-5032ce6d9195",
          "username": "Amina.Raynor9",
          "name": "Darin Ortiz"
      }
  },
  {
      "id": "67ef807e-031d-43ed-9951-e3025c14cb0b",
      "color": 2,
      "amount": 50,
      "winAmount": 26,
      "status": "win",
      "user": {
          "id": "54f6162a-e77e-4352-86a2-dc5e63b3235f",
          "username": "Milo.Rogahn65",
          "name": "Ethel Ward"
      }
  },
  {
      "id": "41385b91-a4ce-43f1-bb69-2517942a541c",
      "color": 1,
      "amount": 50,
      "winAmount": 74,
      "status": "loss",
      "user": {
          "id": "fab23702-58da-4528-b5d9-b3c16f12f9d7",
          "username": "Alexis.Considine",
          "name": "Michele Schamberger"
      }
  },
  {
      "id": "a008886a-83ff-411d-a818-93d7302e7f42",
      "color": 2,
      "amount": 80,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "f72cbc41-5f04-424f-a811-5f8cf1477670",
          "username": "Maia_Lehner8",
          "name": "Sherri Schulist"
      }
  },
  {
      "id": "7d190147-9d35-4fd5-a566-6e0691ec0edf",
      "color": 1,
      "amount": 40,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "72b7fc7b-017d-460f-81e0-e1d6cc789596",
          "username": "Estel_Goodwin",
          "name": "Mandy Turcotte"
      }
  },
  {
      "id": "463ee311-2d01-4b8e-b897-8e8a343e6ea9",
      "color": 1,
      "amount": 44,
      "winAmount": 18,
      "status": "loss",
      "user": {
          "id": "bb3c969e-0409-44f2-8ca4-4edd21f82b56",
          "username": "Esmeralda.Rosenbaum24",
          "name": "Darin McDermott"
      }
  },
  {
      "id": "19436e98-0276-450d-8178-9bdee5874fcf",
      "color": 1,
      "amount": 37,
      "winAmount": 76,
      "status": "loss",
      "user": {
          "id": "da41c0b8-d7f7-4ef2-862b-e64c427ca48d",
          "username": "Florine74",
          "name": "Blake Towne"
      }
  },
  {
      "id": "96e6e4b9-f79d-484d-9964-6a76b5bbb7c0",
      "color": 2,
      "amount": 89,
      "winAmount": 78,
      "status": "loss",
      "user": {
          "id": "fcf7c528-8151-4240-9c5b-4d095d93dedc",
          "username": "Hyman_Erdman",
          "name": "Claude Douglas"
      }
  },
  {
      "id": "c21e11b7-72b6-4bf5-9980-d95fef166704",
      "color": 1,
      "amount": 17,
      "winAmount": 63,
      "status": "win",
      "user": {
          "id": "16c40a27-29d9-4048-b47d-c132decf9969",
          "username": "Kyle.Bernhard",
          "name": "Maggie Bosco"
      }
  },
  {
      "id": "3612e54d-abed-4f93-bc91-5646049df3c2",
      "color": 2,
      "amount": 47,
      "winAmount": 15,
      "status": "loss",
      "user": {
          "id": "bcd7600d-9b83-49db-9ea8-292501c76c97",
          "username": "Keith.Schulist",
          "name": "Brandy Witting"
      }
  },
  {
      "id": "c1b7913c-1ed9-4bad-b6b8-d2399c97d9d6",
      "color": 1,
      "amount": 59,
      "winAmount": 89,
      "status": "loss",
      "user": {
          "id": "ab96c88a-3938-44b1-8182-b17a0280a594",
          "username": "Jarvis.Glover17",
          "name": "Miss Robert Toy DDS"
      }
  },
  {
      "id": "176d078f-0ae3-4ae3-aed7-f8e492e224fa",
      "color": 2,
      "amount": 50,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "fbb20b87-c7b7-4b08-9e6e-94e9e5cc0545",
          "username": "Santiago41",
          "name": "Mrs. Jonathan Jast"
      }
  },
  {
      "id": "7d10785c-4182-4b4c-8b61-8394ef35003a",
      "color": 3,
      "amount": 11,
      "winAmount": 63,
      "status": "win",
      "user": {
          "id": "9a000e06-3f06-47f1-befb-a0585dd194af",
          "username": "Kory9",
          "name": "Gerald Aufderhar"
      }
  },
  {
      "id": "4da3c8da-785f-469a-9a09-b83884a8b40a",
      "color": 3,
      "amount": 31,
      "winAmount": 84,
      "status": "loss",
      "user": {
          "id": "34f81038-a117-4d69-afe3-93e20a6a3cbe",
          "username": "Rhiannon_Haley",
          "name": "Ebony Rice"
      }
  },
  {
      "id": "9238abd9-8210-4fba-a40b-cb09ac80f123",
      "color": 1,
      "amount": 43,
      "winAmount": 52,
      "status": "win",
      "user": {
          "id": "7e589616-44c6-4c31-beba-a857c89b7d70",
          "username": "Merle_Barton",
          "name": "Miss Israel Kerluke"
      }
  },
  {
      "id": "c19988d2-f4fb-4661-aacb-ffabc91950c3",
      "color": 2,
      "amount": 25,
      "winAmount": 75,
      "status": "loss",
      "user": {
          "id": "d3de82ff-0ca4-41f2-b409-f9a0a254abb8",
          "username": "Jewel_Macejkovic",
          "name": "Ricardo Klocko II"
      }
  },
  {
      "id": "87c0c5e4-3013-449a-ab3f-79b862387811",
      "color": 3,
      "amount": 86,
      "winAmount": 42,
      "status": "loss",
      "user": {
          "id": "d56f84fd-a56a-407e-8e41-fea626740a2d",
          "username": "Sharon_Dickens0",
          "name": "Leroy Bergstrom"
      }
  },
  {
      "id": "e661b572-e232-4d3d-bdc9-9c1cd7bc2e7e",
      "color": 2,
      "amount": 82,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "2a3a5b13-2e8a-4882-aea8-b5e4c5b9b387",
          "username": "Amanda_Cummings96",
          "name": "Omar Shanahan"
      }
  },
  {
      "id": "8465bef7-9e10-45e6-b2e1-5ed225cbff69",
      "color": 2,
      "amount": 95,
      "winAmount": 82,
      "status": "win",
      "user": {
          "id": "6fb0de1b-9746-4830-8d73-5fb00a02c19a",
          "username": "Julius.Morissette",
          "name": "Madeline Kertzmann PhD"
      }
  },
  {
      "id": "482ee8f5-9bb7-4544-8aeb-13b14f349499",
      "color": 2,
      "amount": 68,
      "winAmount": 47,
      "status": "win",
      "user": {
          "id": "fb5daf97-f624-44f3-9f76-59384e5dc8e4",
          "username": "Cassie28",
          "name": "Felipe Quitzon"
      }
  },
  {
      "id": "afc8b4dc-1644-4827-b7b9-4a54fc4a4931",
      "color": 3,
      "amount": 88,
      "winAmount": 19,
      "status": "win",
      "user": {
          "id": "0bf17a74-aa7f-4c7c-a71d-1386e8daa42a",
          "username": "Elza42",
          "name": "Audrey Hoppe"
      }
  },
  {
      "id": "654dba31-6957-49ae-950e-441775aaf108",
      "color": 1,
      "amount": 22,
      "winAmount": 28,
      "status": "win",
      "user": {
          "id": "ae231456-8273-4876-8195-2e8c8109de47",
          "username": "Claude8",
          "name": "Edmund Grant V"
      }
  },
  {
      "id": "7d7742a5-84e2-4210-ac7b-39f8e360e236",
      "color": 3,
      "amount": 97,
      "winAmount": 90,
      "status": "win",
      "user": {
          "id": "b1bc89b1-1b51-45d2-8952-852f51df8f31",
          "username": "Peter42",
          "name": "Stephanie Erdman"
      }
  },
  {
      "id": "f20e8ec7-696f-4dc7-9572-0a3080b4ec08",
      "color": 3,
      "amount": 93,
      "winAmount": 35,
      "status": "win",
      "user": {
          "id": "4abee9f3-5d22-4bba-b07d-76f653004b7d",
          "username": "Junior.Ledner",
          "name": "Horace Abshire"
      }
  },
  {
      "id": "ff435d35-2232-46a9-b86c-460168aa9fb4",
      "color": 2,
      "amount": 16,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "0c557c3f-94ab-44bf-96ad-a4ad5fbb51a7",
          "username": "Allen76",
          "name": "Santos Hoppe"
      }
  },
  {
      "id": "5714e99f-2fa8-4c14-ad0c-5c4ba6645798",
      "color": 1,
      "amount": 14,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "e679d497-a82c-43df-9308-ac2d09773986",
          "username": "Hans.Streich",
          "name": "Priscilla O'Keefe"
      }
  },
  {
      "id": "3a6b710b-af70-4886-8d5f-8bbf8107fc9b",
      "color": 2,
      "amount": 14,
      "winAmount": 20,
      "status": "loss",
      "user": {
          "id": "66b60a20-74cc-42fa-bf5d-711f311ed2dd",
          "username": "Tyrese.Greenholt89",
          "name": "Wade Upton MD"
      }
  },
  {
      "id": "ae360342-7dd9-4448-9bc6-ed34f1caee28",
      "color": 2,
      "amount": 54,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "74b9a51f-45b2-4264-9b49-52fac8d989b1",
          "username": "Kurt_Runolfsson94",
          "name": "Peggy Rath"
      }
  },
  {
      "id": "f071cbdc-1d9d-42f6-897b-065d9dd26d04",
      "color": 2,
      "amount": 93,
      "winAmount": 68,
      "status": "loss",
      "user": {
          "id": "0b59a3ef-739f-41fb-b56a-dd3bb0d4f586",
          "username": "Karley_Heidenreich",
          "name": "Emily Anderson DVM"
      }
  },
  {
      "id": "4a8f68ad-66aa-454e-99fe-f5f7a07de8d1",
      "color": 3,
      "amount": 73,
      "winAmount": 87,
      "status": "win",
      "user": {
          "id": "74163509-db89-4202-b160-b0888bdd48a8",
          "username": "Duncan_Abbott18",
          "name": "Betsy Macejkovic"
      }
  },
  {
      "id": "e8782dc6-ad50-4548-a142-734cdf71ff50",
      "color": 2,
      "amount": 95,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "a0aa2b4e-bdd9-4477-a17c-a4b21ac04e52",
          "username": "Julian_Stroman45",
          "name": "Kellie Rath"
      }
  },
  {
      "id": "3c13d09e-61b3-448b-9b5c-29771da9d68f",
      "color": 3,
      "amount": 18,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "878c5738-d6ba-4371-a00c-2b60883e7d5a",
          "username": "Nathaniel_Smith55",
          "name": "Mattie Durgan"
      }
  },
  {
      "id": "8a952307-fab0-497c-8520-c9ba56c4001c",
      "color": 2,
      "amount": 90,
      "winAmount": 76,
      "status": "loss",
      "user": {
          "id": "b9521042-705a-4b55-869c-f28a59d32d5d",
          "username": "Arvel.Leuschke66",
          "name": "Tara Mayert"
      }
  },
  {
      "id": "5b33ca5c-3134-4d7c-ab1b-92f567439c58",
      "color": 2,
      "amount": 27,
      "winAmount": 48,
      "status": "loss",
      "user": {
          "id": "8262452f-1c17-4088-9e34-5bb77c80c59f",
          "username": "Darien.Beer83",
          "name": "Darla Hermiston"
      }
  },
  {
      "id": "7740aa48-2550-4d4a-be45-99666547fbbb",
      "color": 3,
      "amount": 83,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "d131544b-77d5-4b3f-856a-b4ba23c53f59",
          "username": "Waldo_Kuvalis",
          "name": "Marty Stokes"
      }
  },
  {
      "id": "86e50409-7d87-4441-9b04-40aec6678f50",
      "color": 2,
      "amount": 64,
      "winAmount": 31,
      "status": "loss",
      "user": {
          "id": "58dcf4be-8992-48ad-ad94-23496727fed3",
          "username": "Claudia3",
          "name": "Carole Boyer"
      }
  },
  {
      "id": "0973662a-8d12-4e0c-8569-d04d48617d61",
      "color": 2,
      "amount": 26,
      "winAmount": 25,
      "status": "win",
      "user": {
          "id": "f2bb4711-4146-4c1f-a00f-c05f2b08e12c",
          "username": "Stan77",
          "name": "Miss Adam Kreiger"
      }
  },
  {
      "id": "406216fb-fa8a-4357-a23b-adc983c29687",
      "color": 2,
      "amount": 76,
      "winAmount": 22,
      "status": "loss",
      "user": {
          "id": "c79d4515-f873-466e-b125-77fdc5bbf4e6",
          "username": "Damaris.Schuster80",
          "name": "Kristin Bosco"
      }
  },
  {
      "id": "b96871f7-1d7b-4e3e-a535-de1980a4e4ae",
      "color": 3,
      "amount": 23,
      "winAmount": 35,
      "status": "win",
      "user": {
          "id": "dabc1dbf-a160-45a5-b953-2e29dc611771",
          "username": "William.Runolfsdottir73",
          "name": "Alberto Cronin"
      }
  },
  {
      "id": "38f1cc77-6781-40c4-8468-fd3ce5a31ca0",
      "color": 3,
      "amount": 42,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "5e4d8958-343e-4595-aba6-0e789e0be559",
          "username": "Mozell_Stark",
          "name": "Billie Luettgen"
      }
  },
  {
      "id": "75c02d19-3edd-4ce0-9805-7cdb1e755595",
      "color": 3,
      "amount": 83,
      "winAmount": 46,
      "status": "win",
      "user": {
          "id": "77a33de8-0728-4e9f-9c2b-845b830c9df4",
          "username": "Nestor.DuBuque",
          "name": "Pablo Blick"
      }
  },
  {
      "id": "0b2deed7-010c-4b20-9453-0f7ef76374d4",
      "color": 2,
      "amount": 14,
      "winAmount": 91,
      "status": "loss",
      "user": {
          "id": "11334f06-9405-4eb8-aaa9-c74d7cc2cbad",
          "username": "Tremaine66",
          "name": "Orville Altenwerth"
      }
  },
  {
      "id": "a6f4c881-7ac8-4da0-a8cc-9a15579a5585",
      "color": 1,
      "amount": 44,
      "winAmount": 10,
      "status": "loss",
      "user": {
          "id": "8084c58d-54ba-4619-b838-0e08e67eb8e4",
          "username": "Hollis_Greenholt",
          "name": "Sylvester Weber"
      }
  },
  {
      "id": "19bf7527-f799-45ec-9dc3-0d5b7c65c440",
      "color": 1,
      "amount": 94,
      "winAmount": 50,
      "status": "win",
      "user": {
          "id": "c14234a1-e1ba-4f60-bf07-fa8a0f988914",
          "username": "Earnestine.Rohan75",
          "name": "Eula Jacobs"
      }
  },
  {
      "id": "367d9a6b-3ff4-4b4f-beea-9beb71968955",
      "color": 2,
      "amount": 41,
      "winAmount": 82,
      "status": "win",
      "user": {
          "id": "c9cb3475-f377-4859-bac3-86ba3bad585e",
          "username": "Ruthe_Douglas",
          "name": "Dexter Collier"
      }
  },
  {
      "id": "2408e2bc-b254-46df-81fe-571132e47096",
      "color": 2,
      "amount": 92,
      "winAmount": 43,
      "status": "win",
      "user": {
          "id": "aa2bfa8d-7cf8-4858-be1a-c58c0ac79b9c",
          "username": "Liam.Kemmer60",
          "name": "Fernando Parker"
      }
  },
  {
      "id": "6c5056b3-ccff-4d2d-8082-bfbac45b4337",
      "color": 2,
      "amount": 41,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "0296393e-032a-4b73-862c-0223f3d36052",
          "username": "Bennett59",
          "name": "Joan Hettinger"
      }
  },
  {
      "id": "90de5a48-989c-4430-8fc6-96c6a1ff34bd",
      "color": 3,
      "amount": 16,
      "winAmount": 40,
      "status": "win",
      "user": {
          "id": "0eaaa2cf-730f-4acd-86b9-1fd1fcfd4b2d",
          "username": "Damion.Pagac",
          "name": "Miss Lana Von"
      }
  },
  {
      "id": "7cf1d303-2039-435e-9162-849a0a918ace",
      "color": 3,
      "amount": 57,
      "winAmount": 19,
      "status": "win",
      "user": {
          "id": "50eb94a4-8e23-4c11-a0ea-9d4b63b5568d",
          "username": "Pete_Wiegand",
          "name": "Stacey Hand"
      }
  },
  {
      "id": "adb2ba4c-56ac-487f-bf52-ead0359918e6",
      "color": 3,
      "amount": 54,
      "winAmount": 38,
      "status": "loss",
      "user": {
          "id": "b7be6364-d5e8-4908-94e1-f1b4cfce5414",
          "username": "Uriel68",
          "name": "Pamela Olson"
      }
  },
  {
      "id": "db5a2d4c-34d3-4c25-a525-4c1d4b42917a",
      "color": 3,
      "amount": 70,
      "winAmount": 17,
      "status": "win",
      "user": {
          "id": "2d26d8da-36d7-408d-85e9-835b2c4b4770",
          "username": "Amelie95",
          "name": "Naomi Effertz PhD"
      }
  },
  {
      "id": "fc033931-80df-438a-96e1-04f2f3e0a3f3",
      "color": 3,
      "amount": 91,
      "winAmount": 28,
      "status": "loss",
      "user": {
          "id": "43ada7ec-9b48-4d3c-b261-0d2eb6f2886e",
          "username": "Annabel_Bogisich",
          "name": "Sonya Heaney"
      }
  },
  {
      "id": "76076a1c-a597-42e1-980a-c6c1d28d6751",
      "color": 1,
      "amount": 28,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "93c27345-27fd-425a-a39d-2a1e6c44fa5e",
          "username": "Thad.Rosenbaum",
          "name": "Jeremiah Considine"
      }
  },
  {
      "id": "10521d4a-d2e8-4cc9-aaa8-193ff158ac4f",
      "color": 1,
      "amount": 83,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "cbdbd400-d8d6-4acd-8cab-19b991098aff",
          "username": "Noemi83",
          "name": "Kelli Dickinson MD"
      }
  },
  {
      "id": "ea0b75d2-0319-4eff-b8ca-b29314bf7cf7",
      "color": 3,
      "amount": 87,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "5f05db79-94a5-415d-9748-cf68ef3da3d5",
          "username": "Luigi.Schowalter52",
          "name": "Judith Larson"
      }
  },
  {
      "id": "90d489f3-3557-44cd-940a-ce6600c97ddd",
      "color": 2,
      "amount": 47,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "9c46fde4-b3cc-428d-b965-1ac7e1731b9a",
          "username": "Kaycee.Oberbrunner",
          "name": "Cameron Leuschke"
      }
  },
  {
      "id": "602b350a-a011-4163-b5f4-e2b19fd5869f",
      "color": 3,
      "amount": 17,
      "winAmount": 37,
      "status": "loss",
      "user": {
          "id": "41387341-6770-4ff8-b9aa-df3047b6b3f9",
          "username": "Alfonso20",
          "name": "Larry Murazik"
      }
  },
  {
      "id": "cc3b3b22-914d-4412-a4fe-aa679c193fc9",
      "color": 3,
      "amount": 89,
      "winAmount": 85,
      "status": "win",
      "user": {
          "id": "50e2c180-5dc6-4bf9-8af4-ae953054c12f",
          "username": "Kaci_Yundt1",
          "name": "Ramon O'Reilly"
      }
  },
  {
      "id": "a39fc75a-c6cd-4f99-b86e-67bb65103a39",
      "color": 1,
      "amount": 22,
      "winAmount": 96,
      "status": "win",
      "user": {
          "id": "7fe2a166-b5f8-42e5-95db-c7cd94270eea",
          "username": "Daren36",
          "name": "Gwen Collier"
      }
  },
  {
      "id": "88bfdaae-3a62-4734-980e-8d7036328cfd",
      "color": 3,
      "amount": 18,
      "winAmount": 11,
      "status": "win",
      "user": {
          "id": "60e85d53-fea1-4b3f-a1b2-53824c0b4265",
          "username": "Lue17",
          "name": "Tami Ortiz"
      }
  },
  {
      "id": "202499a5-adc7-4cc1-9cba-8792cc50b415",
      "color": 1,
      "amount": 74,
      "winAmount": 15,
      "status": "win",
      "user": {
          "id": "55a58aef-d018-4249-9f57-3a6dbd2d6073",
          "username": "Esteban68",
          "name": "Alberta Walker"
      }
  },
  {
      "id": "ca8605f1-6994-496f-badf-a953836cb63d",
      "color": 2,
      "amount": 97,
      "winAmount": 95,
      "status": "win",
      "user": {
          "id": "685a3120-dc6a-4c56-8e43-815253e495fb",
          "username": "Christine.Pfannerstill49",
          "name": "Tracey Olson"
      }
  },
  {
      "id": "6160aa66-c491-4e06-8845-25616ec5b439",
      "color": 1,
      "amount": 62,
      "winAmount": 93,
      "status": "win",
      "user": {
          "id": "27d9c195-3130-4416-bbf3-8995a0be2ca8",
          "username": "Beau_Crona",
          "name": "Joey Krajcik Sr."
      }
  },
  {
      "id": "a6222ce4-06a5-481b-a245-5ff4f1cf8109",
      "color": 3,
      "amount": 90,
      "winAmount": 91,
      "status": "loss",
      "user": {
          "id": "7fa4a5e7-3a4f-4190-87c3-aeb4febad90b",
          "username": "Bartholome_Yundt67",
          "name": "Max Rempel V"
      }
  },
  {
      "id": "fd266e46-04a5-4911-98df-35cd545c4f38",
      "color": 2,
      "amount": 83,
      "winAmount": 24,
      "status": "loss",
      "user": {
          "id": "808eb1a4-076e-4c1f-af07-2124c4c60ece",
          "username": "Marianne43",
          "name": "Gretchen Koelpin"
      }
  },
  {
      "id": "8910a408-e0a8-4c42-92d6-ad5a29bd52d8",
      "color": 2,
      "amount": 83,
      "winAmount": 93,
      "status": "loss",
      "user": {
          "id": "e6f5ed79-e7b4-4bce-814b-adf7ee26a716",
          "username": "Chelsie_Wolf",
          "name": "Derrick Boehm"
      }
  },
  {
      "id": "ed9c4e0e-7c19-4e60-b9a9-ac275dbef658",
      "color": 3,
      "amount": 57,
      "winAmount": 28,
      "status": "loss",
      "user": {
          "id": "9c46c903-efc6-45a5-9123-093fc1730408",
          "username": "Mozelle70",
          "name": "Ernesto Kuphal"
      }
  },
  {
      "id": "6c03103e-f37e-43e4-87cb-174c4ec09e7c",
      "color": 3,
      "amount": 94,
      "winAmount": 76,
      "status": "win",
      "user": {
          "id": "cd762e90-67a7-4c23-aaf7-03b0b1e787fe",
          "username": "Bernardo_Simonis88",
          "name": "Christian Rippin"
      }
  },
  {
      "id": "277bdd9e-3a43-4d15-a181-d9840367f800",
      "color": 1,
      "amount": 51,
      "winAmount": 72,
      "status": "loss",
      "user": {
          "id": "44137c70-8835-4e99-a680-6415ccf92676",
          "username": "Amie.Durgan",
          "name": "Van Emard"
      }
  },
  {
      "id": "5f72c1e0-6d6f-4cde-8abf-46b1f15247be",
      "color": 1,
      "amount": 51,
      "winAmount": 97,
      "status": "win",
      "user": {
          "id": "11f1c59d-9bb6-42e2-bc1a-071933132cc7",
          "username": "Lenora.Gleichner",
          "name": "Sherman Becker"
      }
  },
  {
      "id": "827853fa-238f-4ee2-a750-4e4002805ef4",
      "color": 2,
      "amount": 63,
      "winAmount": 68,
      "status": "win",
      "user": {
          "id": "e9d5a251-3334-460a-ba8c-51ff5a41b1b2",
          "username": "Eda_Cormier41",
          "name": "Wilfred Swaniawski"
      }
  },
  {
      "id": "6e8f6094-3838-4db0-b451-ff53cd91c212",
      "color": 3,
      "amount": 78,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "e94e8da7-933a-4039-825f-f3b549372ed4",
          "username": "Kimberly15",
          "name": "Kathy Schimmel"
      }
  },
  {
      "id": "0ee8f0b2-25a9-4db2-93b0-6afd5d4050a3",
      "color": 3,
      "amount": 67,
      "winAmount": 62,
      "status": "win",
      "user": {
          "id": "705fa4c4-44a1-4a53-b3d0-80e7ac01fb2d",
          "username": "Herta.Monahan42",
          "name": "Kendra Kuhn"
      }
  },
  {
      "id": "885e1c43-c298-4b1f-8be5-0246a6b498c2",
      "color": 3,
      "amount": 60,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "d1e0c706-001a-42a4-b976-bb430b9b642d",
          "username": "Otho_Champlin",
          "name": "Matt Collins"
      }
  },
  {
      "id": "4bfafead-7a70-4c69-8ada-f3abf273b548",
      "color": 1,
      "amount": 91,
      "winAmount": 71,
      "status": "win",
      "user": {
          "id": "06353725-b9da-44c3-ade2-bf39a88b67cf",
          "username": "Terence_Hane",
          "name": "Mr. Clara Rau"
      }
  },
  {
      "id": "001fea71-b972-4a6f-82e8-f599efbbfa61",
      "color": 1,
      "amount": 86,
      "winAmount": 82,
      "status": "loss",
      "user": {
          "id": "d2b1fc37-7a14-4940-8f94-2c4c28101b4d",
          "username": "Rubye_Hermiston",
          "name": "Lance Satterfield Sr."
      }
  },
  {
      "id": "6e2981f6-0ac7-4c31-a5bc-cb5a5d2e5837",
      "color": 3,
      "amount": 54,
      "winAmount": 85,
      "status": "win",
      "user": {
          "id": "7929b1d6-2747-482f-a956-0044511631cc",
          "username": "Zackary_Kassulke73",
          "name": "Mr. Roman Larson V"
      }
  },
  {
      "id": "d10b4f41-ef46-446d-a67b-4e7ddb550b18",
      "color": 3,
      "amount": 30,
      "winAmount": 27,
      "status": "loss",
      "user": {
          "id": "92a9bc1a-def4-4d64-8d56-fd94c86c1b37",
          "username": "Frankie_Reynolds",
          "name": "Jan Daniel DVM"
      }
  },
  {
      "id": "35a18296-36a0-4ec8-9b4f-87b4c3c0dcf5",
      "color": 3,
      "amount": 62,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "862fdd53-c7ca-429a-bb47-7ed3b2f16690",
          "username": "Devan22",
          "name": "Mattie Lemke"
      }
  },
  {
      "id": "4ae417a1-c40c-445f-bb39-c68c42ad3549",
      "color": 2,
      "amount": 46,
      "winAmount": 30,
      "status": "loss",
      "user": {
          "id": "6ee1f5a0-3d09-435d-81a1-4ef6365a64dc",
          "username": "Shany_Reichel27",
          "name": "Ervin Hettinger"
      }
  },
  {
      "id": "ded5265f-b8e1-418a-b84e-0b0aee575d67",
      "color": 1,
      "amount": 90,
      "winAmount": 18,
      "status": "win",
      "user": {
          "id": "423463a6-6851-4b89-b0fc-9a261a1e1ddf",
          "username": "Myrl25",
          "name": "Gregory Sauer"
      }
  },
  {
      "id": "323abbb8-5660-46a2-bd0b-8dff22d12a32",
      "color": 1,
      "amount": 35,
      "winAmount": 40,
      "status": "loss",
      "user": {
          "id": "82e82648-aafa-4d4c-b819-fe835f19cbf0",
          "username": "Candelario_Kuphal42",
          "name": "Ricardo Bednar"
      }
  },
  {
      "id": "cc6a280b-23d7-4cda-bb33-fc2975cf2fb1",
      "color": 3,
      "amount": 47,
      "winAmount": 81,
      "status": "win",
      "user": {
          "id": "c3c23280-fe41-435c-9091-33a68248abcf",
          "username": "Kaela_Zemlak59",
          "name": "Stella Hoppe"
      }
  },
  {
      "id": "6f675810-6287-4b03-a31f-34d16dfa78d7",
      "color": 3,
      "amount": 42,
      "winAmount": 39,
      "status": "loss",
      "user": {
          "id": "792b0912-4c07-4f01-96b1-ead6dec7cba5",
          "username": "Cameron89",
          "name": "Pete Swaniawski"
      }
  },
  {
      "id": "40579044-96df-4dc8-aac0-ed19bf2032f9",
      "color": 1,
      "amount": 10,
      "winAmount": 92,
      "status": "loss",
      "user": {
          "id": "fefddb66-1e29-40fc-a09c-d40f0659a0c8",
          "username": "Oceane.Wuckert8",
          "name": "Sheldon Goldner"
      }
  },
  {
      "id": "5f7ac7ba-ee2b-454a-affd-6a27fecbdd0a",
      "color": 1,
      "amount": 44,
      "winAmount": 21,
      "status": "loss",
      "user": {
          "id": "2a939061-2984-4a09-80f0-c1ef957903cc",
          "username": "Melody15",
          "name": "Paula Macejkovic"
      }
  },
  {
      "id": "093ee7fa-0e33-49a8-8255-c213993284a3",
      "color": 1,
      "amount": 36,
      "winAmount": 66,
      "status": "loss",
      "user": {
          "id": "0e3b0671-619e-49c8-88c1-5a9b2d19f2f7",
          "username": "Flavie.Bode14",
          "name": "Donald Schaefer"
      }
  },
  {
      "id": "868a47b4-5a3d-4bd7-96fb-b655afec2d3e",
      "color": 3,
      "amount": 26,
      "winAmount": 53,
      "status": "win",
      "user": {
          "id": "be0dac0c-7553-410a-a610-f892e44e9d3f",
          "username": "Rory6",
          "name": "Suzanne Turcotte"
      }
  },
  {
      "id": "3a31c4a2-1dab-4f76-bcf8-07877bef73ec",
      "color": 1,
      "amount": 62,
      "winAmount": 18,
      "status": "win",
      "user": {
          "id": "ccc30e81-c103-4247-86a9-a7df6cb5b94f",
          "username": "Brown62",
          "name": "Lowell Pollich"
      }
  },
  {
      "id": "3f126c45-70af-4e58-afd0-e46afd248936",
      "color": 3,
      "amount": 45,
      "winAmount": 16,
      "status": "win",
      "user": {
          "id": "5bf1e3d0-ead8-4073-9a69-104670f863ee",
          "username": "Wilford24",
          "name": "Alice Nader"
      }
  },
  {
      "id": "a5b5c6a7-f20d-4564-a51f-6c4e48960caa",
      "color": 3,
      "amount": 63,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "2ba980cb-a11e-4db2-82e3-d749bfdcfe65",
          "username": "Jakayla_Abshire",
          "name": "Ms. Cedric Orn"
      }
  },
  {
      "id": "0ffa932a-efc5-44c1-bc24-74bf7e192807",
      "color": 2,
      "amount": 25,
      "winAmount": 74,
      "status": "loss",
      "user": {
          "id": "4e8e0c18-8ff1-41a5-8665-14107fcdb5c2",
          "username": "Nelda18",
          "name": "Stacey Bergstrom"
      }
  },
  {
      "id": "c4b0115b-7125-4f82-b75e-61e93374bd38",
      "color": 2,
      "amount": 98,
      "winAmount": 55,
      "status": "win",
      "user": {
          "id": "b7b20768-cf06-47bc-8942-621274c30f5b",
          "username": "Deonte_Turcotte",
          "name": "Pam Boehm I"
      }
  },
  {
      "id": "e2f0f423-f5af-49eb-9cbb-fcd89690746b",
      "color": 1,
      "amount": 24,
      "winAmount": 45,
      "status": "loss",
      "user": {
          "id": "7d4e0017-9401-4664-88c8-aba76cf4c931",
          "username": "Dagmar.Daugherty",
          "name": "Theresa Graham"
      }
  },
  {
      "id": "feb0f2ae-a5f3-4e26-9f06-2f403159dba2",
      "color": 1,
      "amount": 75,
      "winAmount": 37,
      "status": "loss",
      "user": {
          "id": "d4d23ac0-efad-49a7-80e7-9e773357ca18",
          "username": "Bell23",
          "name": "Ed Torphy III"
      }
  },
  {
      "id": "174ea515-a2ea-42e5-a881-944aa9785594",
      "color": 3,
      "amount": 10,
      "winAmount": 71,
      "status": "win",
      "user": {
          "id": "f165b814-37c5-4865-b1d8-dc468fad95af",
          "username": "Abdiel_Little",
          "name": "Beatrice Collier"
      }
  },
  {
      "id": "5ae89b79-9550-4de8-8f2e-cb73a1cec26d",
      "color": 1,
      "amount": 60,
      "winAmount": 76,
      "status": "win",
      "user": {
          "id": "53f4f4a3-d3ae-4c66-8b1a-5cc1cb31d803",
          "username": "Betty_McLaughlin",
          "name": "Brian Ortiz"
      }
  },
  {
      "id": "19f393f8-a473-494f-8439-9f615f12d97d",
      "color": 2,
      "amount": 34,
      "winAmount": 87,
      "status": "loss",
      "user": {
          "id": "c5aaacb7-eafd-486d-938b-201d2e082455",
          "username": "Mariano28",
          "name": "Rudolph Mann"
      }
  },
  {
      "id": "d326a189-a825-489c-a271-7758195529b5",
      "color": 1,
      "amount": 24,
      "winAmount": 97,
      "status": "win",
      "user": {
          "id": "60a2d24b-9f20-4bd3-8bf3-31fc29158784",
          "username": "Eduardo17",
          "name": "Isabel Fadel"
      }
  },
  {
      "id": "720441b0-2a5e-465b-bc20-6d84addda48e",
      "color": 3,
      "amount": 75,
      "winAmount": 72,
      "status": "loss",
      "user": {
          "id": "88c2b641-191d-4b77-b77b-524db9ed0043",
          "username": "Lewis_Johns",
          "name": "Miss Terry Padberg"
      }
  },
  {
      "id": "4ebed435-c426-47d2-bac1-f9319f1b7dca",
      "color": 1,
      "amount": 73,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "0875353e-0d52-4f9c-839f-42733133986f",
          "username": "Donald89",
          "name": "Wanda Carter"
      }
  },
  {
      "id": "c6dfa079-3a04-4f17-860b-53b22eea42a3",
      "color": 2,
      "amount": 44,
      "winAmount": 55,
      "status": "win",
      "user": {
          "id": "8acd38a2-b48f-4f2b-9d65-d9f5bb718e5c",
          "username": "Clemmie45",
          "name": "Ramon McClure PhD"
      }
  },
  {
      "id": "4d1d2310-2a69-493a-b169-73c5ac658e85",
      "color": 3,
      "amount": 48,
      "winAmount": 71,
      "status": "win",
      "user": {
          "id": "beca0868-a35a-4593-8648-83640c66f3da",
          "username": "Cierra25",
          "name": "Enrique Quigley"
      }
  },
  {
      "id": "8801190f-574b-4b95-a2c6-aa7f2c9c4c04",
      "color": 1,
      "amount": 36,
      "winAmount": 12,
      "status": "win",
      "user": {
          "id": "42b565a2-8ecb-4331-b6f9-15eebbee977c",
          "username": "Mauricio68",
          "name": "Willie Kihn"
      }
  },
  {
      "id": "e2565145-d8e2-4959-abd0-760ecbf4308f",
      "color": 1,
      "amount": 12,
      "winAmount": 21,
      "status": "loss",
      "user": {
          "id": "d0489f33-ec39-4191-93f9-fd47532e9508",
          "username": "Allen.Runte",
          "name": "Tyrone Stoltenberg V"
      }
  },
  {
      "id": "c5bcd233-8f45-4686-9bb9-c7f4b2b9472d",
      "color": 3,
      "amount": 15,
      "winAmount": 14,
      "status": "win",
      "user": {
          "id": "ef63e21e-a842-4528-869c-d5ae8f73ae3c",
          "username": "Barbara_Skiles55",
          "name": "Henry Zboncak"
      }
  },
  {
      "id": "e1033ac1-c706-4313-b011-3c6fe3b164a3",
      "color": 1,
      "amount": 52,
      "winAmount": 78,
      "status": "win",
      "user": {
          "id": "4744c0f1-5a65-4adc-8b49-17d578102434",
          "username": "Elda.Huels",
          "name": "Shannon Wilderman"
      }
  },
  {
      "id": "eabed72d-33fe-4657-95f4-e95c957e581a",
      "color": 2,
      "amount": 31,
      "winAmount": 90,
      "status": "win",
      "user": {
          "id": "f5c48bbd-dcda-4ce8-a838-ed00fd92a1d1",
          "username": "Angelo.Ryan15",
          "name": "Armando Gutmann"
      }
  },
  {
      "id": "08ad17ab-f3d7-48a8-b5f5-84f79adf06f6",
      "color": 2,
      "amount": 71,
      "winAmount": 19,
      "status": "loss",
      "user": {
          "id": "534892d4-a334-442f-9ff8-9c93a294338d",
          "username": "Cleveland15",
          "name": "Wilson Hayes"
      }
  },
  {
      "id": "2e38876a-dcf9-46ce-b96b-cee27b880270",
      "color": 1,
      "amount": 61,
      "winAmount": 93,
      "status": "loss",
      "user": {
          "id": "db310f24-5f47-4699-a8fb-d04be615b454",
          "username": "Rhiannon.Schroeder",
          "name": "Leonard Ziemann"
      }
  },
  {
      "id": "f4d997de-b69d-4182-b393-f821b287ab7f",
      "color": 1,
      "amount": 83,
      "winAmount": 31,
      "status": "win",
      "user": {
          "id": "f1f398c4-5e16-4775-8821-c7c3994473ac",
          "username": "Leonie_Schulist",
          "name": "Frederick Spencer"
      }
  },
  {
      "id": "43b19253-adf4-44a9-b861-621880ebe866",
      "color": 1,
      "amount": 14,
      "winAmount": 14,
      "status": "loss",
      "user": {
          "id": "393c54fe-f1b4-46d7-ba97-9ce0b057914a",
          "username": "Jesus_Monahan",
          "name": "Kent Altenwerth"
      }
  },
  {
      "id": "f2526237-f09a-4980-908f-5834575addc7",
      "color": 2,
      "amount": 50,
      "winAmount": 92,
      "status": "loss",
      "user": {
          "id": "9db8a49c-addb-4397-bd74-b9eab22f8404",
          "username": "Timothy_Boehm84",
          "name": "Everett VonRueden"
      }
  },
  {
      "id": "58c4fa42-13ba-4ad4-acd8-03d8b1e41b48",
      "color": 2,
      "amount": 73,
      "winAmount": 41,
      "status": "loss",
      "user": {
          "id": "264a92ae-16e3-4a68-b53e-3874b3fc0c15",
          "username": "Rafaela_Schuppe23",
          "name": "Roman Collins"
      }
  },
  {
      "id": "02cf1790-cc70-4665-9d5a-a80f02dffa81",
      "color": 1,
      "amount": 78,
      "winAmount": 96,
      "status": "win",
      "user": {
          "id": "49a5c5aa-71fb-4271-9a37-387e80a8eef6",
          "username": "Alice_Metz27",
          "name": "Salvador Watsica"
      }
  },
  {
      "id": "01ea221d-75a1-4104-b6c3-bdb6e9ff5765",
      "color": 2,
      "amount": 74,
      "winAmount": 47,
      "status": "loss",
      "user": {
          "id": "26fc40f6-3adc-4929-84a9-e7413fdd3792",
          "username": "Tara.Maggio12",
          "name": "Karl Effertz"
      }
  },
  {
      "id": "cede6cb1-8bb8-4b5e-99ee-648c409d377b",
      "color": 2,
      "amount": 10,
      "winAmount": 48,
      "status": "win",
      "user": {
          "id": "73394fa4-f366-4f9d-a7ba-6c6e519aa667",
          "username": "Markus.Conn",
          "name": "Ms. Emma Jones"
      }
  },
  {
      "id": "5762bd69-edff-4a30-ad6b-34ebbefd3c6d",
      "color": 2,
      "amount": 32,
      "winAmount": 18,
      "status": "loss",
      "user": {
          "id": "a12d276a-ad50-4cb8-b94c-6ea501000af9",
          "username": "Adan_Leffler",
          "name": "Cora Steuber"
      }
  },
  {
      "id": "4c62a7ea-da32-4eac-bc1c-004032dc199d",
      "color": 3,
      "amount": 53,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "9599c352-014d-48ee-9147-2f5115f1dc2e",
          "username": "Tracy.Feest63",
          "name": "Toby Greenfelder"
      }
  },
  {
      "id": "ae7aa5c6-261d-487f-8c58-a75fbd00fde4",
      "color": 3,
      "amount": 64,
      "winAmount": 48,
      "status": "loss",
      "user": {
          "id": "0f4f12d5-3f97-4e26-a7d7-2cd222f08a3a",
          "username": "Maci.Nader0",
          "name": "Ruth Blick"
      }
  },
  {
      "id": "ba10119e-ace8-421f-901d-3192fca47a07",
      "color": 1,
      "amount": 76,
      "winAmount": 59,
      "status": "loss",
      "user": {
          "id": "1c4fa872-a27b-45e0-823d-699999a8c622",
          "username": "Laila.Rosenbaum98",
          "name": "Salvador Collier"
      }
  },
  {
      "id": "860a4c9c-79c9-4a5a-a885-8b2eae7d1cf1",
      "color": 1,
      "amount": 55,
      "winAmount": 79,
      "status": "win",
      "user": {
          "id": "935cef0f-5666-419a-afbe-66a1c0874518",
          "username": "Aniyah.Friesen",
          "name": "Mattie Hayes V"
      }
  },
  {
      "id": "3ae3466d-7860-4ae0-b165-07e061c51c45",
      "color": 1,
      "amount": 29,
      "winAmount": 45,
      "status": "loss",
      "user": {
          "id": "ed6b1943-9589-43cd-8b23-48258fa44d4b",
          "username": "Tracy22",
          "name": "Erin Kozey"
      }
  },
  {
      "id": "f8ae6bed-6265-4cec-a7cd-8e8e8c49dc96",
      "color": 2,
      "amount": 32,
      "winAmount": 77,
      "status": "win",
      "user": {
          "id": "c5f0b80a-10e8-4821-b0bb-dca7939ce1fa",
          "username": "Leda_Abbott",
          "name": "Shane Spinka"
      }
  },
  {
      "id": "84b524bd-921a-4130-a1dd-6f6a4abe85e6",
      "color": 3,
      "amount": 67,
      "winAmount": 84,
      "status": "win",
      "user": {
          "id": "6ee76aa0-b844-42ce-98cc-8d73abaae650",
          "username": "Delia_Streich75",
          "name": "Dale Kunze"
      }
  },
  {
      "id": "32f4210f-2d1d-4cbe-9fb0-287ccab56384",
      "color": 3,
      "amount": 42,
      "winAmount": 40,
      "status": "win",
      "user": {
          "id": "a8e31a42-2394-4304-9182-eb837e624bfa",
          "username": "Alden69",
          "name": "Phillip Stracke"
      }
  },
  {
      "id": "33be9793-924f-446a-9d54-7f048c9ee9e1",
      "color": 1,
      "amount": 99,
      "winAmount": 74,
      "status": "loss",
      "user": {
          "id": "be510bd1-1026-44e8-b276-cb390d51c30a",
          "username": "Cheyenne_Smitham55",
          "name": "Kerry Fahey"
      }
  },
  {
      "id": "37cb5a5c-b21b-44cf-8b87-e199d6fb1fca",
      "color": 2,
      "amount": 82,
      "winAmount": 39,
      "status": "win",
      "user": {
          "id": "c42d78ca-c684-4268-a529-6ebf0dec4442",
          "username": "Brayan98",
          "name": "Gayle Rolfson"
      }
  },
  {
      "id": "5948e428-85a9-4d05-ad65-a490dd549a9e",
      "color": 1,
      "amount": 26,
      "winAmount": 76,
      "status": "loss",
      "user": {
          "id": "6b25b5d7-0d12-45e7-876d-4540d3610a51",
          "username": "Margot66",
          "name": "Miss Dora Littel"
      }
  },
  {
      "id": "537280d5-569f-4f66-b60a-51ea8a43aef5",
      "color": 1,
      "amount": 17,
      "winAmount": 34,
      "status": "win",
      "user": {
          "id": "b3a18152-84e2-454e-893c-7e6bcfef77a8",
          "username": "Xavier14",
          "name": "Hubert Corwin"
      }
  },
  {
      "id": "96873d97-2a84-488a-9c4c-777792c9dfcd",
      "color": 1,
      "amount": 99,
      "winAmount": 15,
      "status": "loss",
      "user": {
          "id": "8afc91ca-472c-4930-8902-6eeb0a4d12b5",
          "username": "Judah_Baumbach23",
          "name": "Kurt McLaughlin"
      }
  },
  {
      "id": "c11ff05b-d997-4cac-a4a1-2b32b3aa0adf",
      "color": 2,
      "amount": 60,
      "winAmount": 93,
      "status": "loss",
      "user": {
          "id": "56a409d8-cc56-4152-bfd3-ad375ae8d81e",
          "username": "Micaela.Hackett43",
          "name": "Wanda Shanahan"
      }
  },
  {
      "id": "d347b6b1-c263-4112-8209-ccbce0c4cfd6",
      "color": 2,
      "amount": 78,
      "winAmount": 89,
      "status": "loss",
      "user": {
          "id": "8b8f00a8-b63d-479b-83fa-e3b5b7a017dd",
          "username": "Vita71",
          "name": "Mrs. Roxanne Balistreri"
      }
  },
  {
      "id": "32e04c07-a9da-48e6-aeba-8281437d7ef5",
      "color": 3,
      "amount": 69,
      "winAmount": 61,
      "status": "win",
      "user": {
          "id": "de5b231a-8b22-45b8-9a4e-ef144461ba3b",
          "username": "Jazmyne.Wuckert98",
          "name": "Leonard Predovic"
      }
  },
  {
      "id": "a2fd4268-8e51-4cc1-bf09-8079b6f9143f",
      "color": 2,
      "amount": 22,
      "winAmount": 70,
      "status": "win",
      "user": {
          "id": "e7c80886-42c3-48c7-97d8-306b0a19242f",
          "username": "Larry96",
          "name": "Doreen Gutkowski"
      }
  },
  {
      "id": "76a97e39-c81c-4155-9493-ccee857a1c21",
      "color": 1,
      "amount": 88,
      "winAmount": 80,
      "status": "win",
      "user": {
          "id": "5301664e-8720-443b-8aeb-6381947834de",
          "username": "Amalia.Harvey",
          "name": "Frances Lind"
      }
  },
  {
      "id": "2ea0cf3e-28a3-457d-b5d7-60ee24f299d6",
      "color": 1,
      "amount": 86,
      "winAmount": 40,
      "status": "loss",
      "user": {
          "id": "a1949da5-726b-443a-b5ab-96cf0aabeb5b",
          "username": "Marie_Davis78",
          "name": "Michael Klein"
      }
  },
  {
      "id": "a04f0fec-1ec9-4557-8d98-59f363350717",
      "color": 3,
      "amount": 25,
      "winAmount": 43,
      "status": "loss",
      "user": {
          "id": "fedbda0c-ad25-431a-9d61-ad551c91340e",
          "username": "Parker_Collins98",
          "name": "Freda Berge"
      }
  },
  {
      "id": "ba21cb33-9227-4cbd-8d7e-f66b4758769a",
      "color": 3,
      "amount": 44,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "b4d844ed-afa5-48fe-a3d5-dbce94bd3f55",
          "username": "Hayley_Mitchell",
          "name": "Johanna Champlin"
      }
  },
  {
      "id": "918b2788-d135-459a-86cf-ec89e82f47b9",
      "color": 1,
      "amount": 10,
      "winAmount": 72,
      "status": "loss",
      "user": {
          "id": "9d7b6467-925c-4d73-8eef-760e3050939a",
          "username": "Justine12",
          "name": "Mable Kunde"
      }
  },
  {
      "id": "1e4b2abe-8fd4-42d5-9c76-252d46579ee4",
      "color": 2,
      "amount": 45,
      "winAmount": 22,
      "status": "win",
      "user": {
          "id": "7e146dd8-0a1f-4036-9826-c8aee318b69e",
          "username": "Gloria.Wiegand",
          "name": "Dana Terry"
      }
  },
  {
      "id": "457b4de4-90bb-4f37-bb78-dcbd1337c913",
      "color": 1,
      "amount": 18,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "919a7ae8-093b-4cbb-84dd-88b510a72cbb",
          "username": "Nico_Strosin15",
          "name": "Bradley Franey"
      }
  },
  {
      "id": "d51e82a5-baf3-4f25-b2dc-a8e5bc78c17b",
      "color": 1,
      "amount": 67,
      "winAmount": 36,
      "status": "win",
      "user": {
          "id": "2e33099b-e193-4924-aee0-36b0b28cb9d8",
          "username": "Sarah_Bode51",
          "name": "Archie Conn"
      }
  },
  {
      "id": "db46c67e-dde4-432c-8fb5-5d12163d4a83",
      "color": 2,
      "amount": 94,
      "winAmount": 82,
      "status": "loss",
      "user": {
          "id": "f31f15cc-0595-46d6-9f11-4c8c4695e04a",
          "username": "Dave_Jacobi",
          "name": "Adrienne Feil"
      }
  },
  {
      "id": "2f116899-4417-453c-806e-e5cce9290887",
      "color": 3,
      "amount": 20,
      "winAmount": 73,
      "status": "loss",
      "user": {
          "id": "13f75154-00d8-41c2-b6cd-3d933917c44b",
          "username": "Drake_Quitzon",
          "name": "Mr. Wade Emmerich"
      }
  },
  {
      "id": "fd5c119e-3811-40d4-b36b-e7af3fb144f4",
      "color": 1,
      "amount": 15,
      "winAmount": 30,
      "status": "win",
      "user": {
          "id": "56d8309e-abdb-4fc9-90c5-04259bbe9535",
          "username": "Monte.Schiller21",
          "name": "Muriel Bednar I"
      }
  },
  {
      "id": "131e7229-58e5-4883-b429-ef6f628c4cc7",
      "color": 3,
      "amount": 34,
      "winAmount": 31,
      "status": "loss",
      "user": {
          "id": "088dbe00-1407-4802-b2ec-955349a5da65",
          "username": "Kole13",
          "name": "Nellie Walsh"
      }
  },
  {
      "id": "aa2a8a37-a180-4dc3-9e4c-56edf656925d",
      "color": 3,
      "amount": 37,
      "winAmount": 49,
      "status": "loss",
      "user": {
          "id": "78df0f09-9525-4149-972a-874fae26dad0",
          "username": "Brigitte51",
          "name": "Oliver Wiegand I"
      }
  },
  {
      "id": "09e83622-ce94-42d1-be7a-d4ff2ae1a0a8",
      "color": 3,
      "amount": 83,
      "winAmount": 36,
      "status": "loss",
      "user": {
          "id": "48c4f4e1-5fa9-4d5f-8025-4d71dd5d8be5",
          "username": "Jermain24",
          "name": "Garrett Larson"
      }
  },
  {
      "id": "59766735-b7cb-4950-b7f1-7e6d7b81a2e6",
      "color": 3,
      "amount": 47,
      "winAmount": 12,
      "status": "loss",
      "user": {
          "id": "06956428-4e10-47cb-b59d-ffce96928351",
          "username": "Zane43",
          "name": "Alonzo Schimmel"
      }
  },
  {
      "id": "c498c0ae-7145-4198-8b47-f7d8ebba0e3f",
      "color": 2,
      "amount": 83,
      "winAmount": 48,
      "status": "loss",
      "user": {
          "id": "1b001648-c185-4069-a6ae-f39a6ca9f219",
          "username": "Kaitlin94",
          "name": "Hope Von"
      }
  },
  {
      "id": "b5922935-6c7b-4f23-9ed7-13bd2b5add0c",
      "color": 3,
      "amount": 93,
      "winAmount": 97,
      "status": "loss",
      "user": {
          "id": "b364ce39-89ed-4e78-9ca0-20051b258a00",
          "username": "Heber.Mante",
          "name": "Cindy Douglas"
      }
  },
  {
      "id": "a59e96e3-6be6-4960-bd3b-f582dd5fba93",
      "color": 3,
      "amount": 88,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "f39fc322-a43b-4cfc-a650-ca1ee4c76f57",
          "username": "Davonte_OKeefe65",
          "name": "Floyd Cronin"
      }
  },
  {
      "id": "cc7818aa-f033-47b4-b8db-0af8eb05529c",
      "color": 2,
      "amount": 39,
      "winAmount": 41,
      "status": "loss",
      "user": {
          "id": "bd7eb4f1-1da0-4a58-8eec-7c7ca8cccae5",
          "username": "Lea13",
          "name": "Julian Heller"
      }
  },
  {
      "id": "3e32d58e-5acd-4744-8dcc-de8584403040",
      "color": 2,
      "amount": 97,
      "winAmount": 84,
      "status": "win",
      "user": {
          "id": "56998f05-ce66-43d9-802d-01270301e1cf",
          "username": "Amir.Rippin",
          "name": "Jimmy Reilly II"
      }
  },
  {
      "id": "3fe70eac-11d5-4e45-be28-0e8d6d8157ea",
      "color": 1,
      "amount": 74,
      "winAmount": 97,
      "status": "loss",
      "user": {
          "id": "9dca8172-7b31-4a6a-9c1e-2ef948586fce",
          "username": "Hunter.Nader",
          "name": "Dustin Cruickshank"
      }
  },
  {
      "id": "0657469a-824f-4573-a3f5-c5f437c03a54",
      "color": 2,
      "amount": 19,
      "winAmount": 20,
      "status": "win",
      "user": {
          "id": "06af35ee-de8d-472e-a3c3-41940fa95939",
          "username": "Maria61",
          "name": "Travis Schneider"
      }
  },
  {
      "id": "a4403a9c-f23a-47d4-9ff5-0b2382cb4b7f",
      "color": 1,
      "amount": 57,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "43852fcc-c386-4df0-93c7-61e95f1ccfbb",
          "username": "Hilario34",
          "name": "Eloise Mayert"
      }
  },
  {
      "id": "c70e8e5d-a5f3-4837-9ddb-e56b702b74ba",
      "color": 3,
      "amount": 64,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "763fc078-ba81-461f-829d-fc0780f4b379",
          "username": "Ashton_Schinner",
          "name": "Mr. Mabel Effertz"
      }
  },
  {
      "id": "947d4f63-6a9e-4b02-b717-1bc23f7166df",
      "color": 2,
      "amount": 66,
      "winAmount": 68,
      "status": "win",
      "user": {
          "id": "e4a01dd0-1319-493d-bc6c-082638a167a1",
          "username": "Gene.Fahey62",
          "name": "Julius Kreiger"
      }
  },
  {
      "id": "4035f55c-5e2e-489b-b7d9-7afecaf18f37",
      "color": 2,
      "amount": 29,
      "winAmount": 57,
      "status": "loss",
      "user": {
          "id": "9ac2c0e6-df5a-4c41-9980-5153c6ec3904",
          "username": "Nathanael96",
          "name": "Delbert Keebler"
      }
  },
  {
      "id": "fcbb89e5-4bcb-49db-ad21-2afcd58e9616",
      "color": 1,
      "amount": 83,
      "winAmount": 66,
      "status": "loss",
      "user": {
          "id": "a2899d09-6555-40dc-90f6-14d60385cd04",
          "username": "Cristal.Carroll71",
          "name": "Mack Smith"
      }
  },
  {
      "id": "516f75a3-1cf2-46d1-8bac-1ce50643c684",
      "color": 3,
      "amount": 80,
      "winAmount": 75,
      "status": "loss",
      "user": {
          "id": "1fd4469a-a79f-4bf5-ba45-6d306a63d6b7",
          "username": "Gavin_Zboncak58",
          "name": "Ervin Kunde"
      }
  },
  {
      "id": "f66907f6-c1af-47ab-9332-4249cce00ea3",
      "color": 2,
      "amount": 75,
      "winAmount": 67,
      "status": "win",
      "user": {
          "id": "5f4fac7a-a774-46f2-b37f-621d2eae6f77",
          "username": "Jarvis.Zboncak90",
          "name": "Mable Koss"
      }
  },
  {
      "id": "f4df69d0-dee2-4261-ad01-05308746022e",
      "color": 3,
      "amount": 71,
      "winAmount": 97,
      "status": "win",
      "user": {
          "id": "fbf8d6ef-60a3-4328-8d3f-8495f52850d3",
          "username": "Evalyn96",
          "name": "Mona Prohaska"
      }
  },
  {
      "id": "7ce9bff1-8257-4d30-8cd9-f17fcf8f6e69",
      "color": 2,
      "amount": 73,
      "winAmount": 51,
      "status": "loss",
      "user": {
          "id": "7f480761-8e3a-49d4-9476-e963d5161197",
          "username": "Elwin.Lubowitz",
          "name": "Ms. Freda Bahringer"
      }
  },
  {
      "id": "ea3cd377-2936-4cc2-8aa3-3f279cc314dc",
      "color": 3,
      "amount": 83,
      "winAmount": 25,
      "status": "win",
      "user": {
          "id": "93c68ec9-a94c-4671-a30c-e66514e46740",
          "username": "Douglas.Hammes",
          "name": "Homer O'Connell"
      }
  },
  {
      "id": "19d4a8cc-354a-408a-8c97-3946d6894e58",
      "color": 1,
      "amount": 28,
      "winAmount": 44,
      "status": "loss",
      "user": {
          "id": "0eedfaad-20c7-4433-aaaf-2f6bb62b4ac4",
          "username": "Corrine_Bechtelar45",
          "name": "Gwen Okuneva IV"
      }
  },
  {
      "id": "6f79178d-2e9c-4b0f-91fa-15fd345e97aa",
      "color": 3,
      "amount": 56,
      "winAmount": 17,
      "status": "win",
      "user": {
          "id": "f0fcb75b-3df2-477e-a12a-81ec15e0e99b",
          "username": "Lonie_Franecki",
          "name": "Myrtle Bechtelar"
      }
  },
  {
      "id": "be86eb97-6194-46e9-8373-e3d94cc4ca55",
      "color": 3,
      "amount": 40,
      "winAmount": 20,
      "status": "win",
      "user": {
          "id": "16ed47c8-a67d-471a-ab92-1d9b8b739090",
          "username": "Shania_Dibbert69",
          "name": "Maggie Jones"
      }
  },
  {
      "id": "3459ee13-5bc2-4d33-9a05-9a0bc21444f8",
      "color": 3,
      "amount": 72,
      "winAmount": 41,
      "status": "loss",
      "user": {
          "id": "6324f448-245f-414c-ba53-8a15c4dc92ea",
          "username": "Durward_Lockman79",
          "name": "Kristina Jacobson"
      }
  },
  {
      "id": "51dfb287-c0d9-49be-94a5-3a48742d0ed1",
      "color": 1,
      "amount": 62,
      "winAmount": 81,
      "status": "win",
      "user": {
          "id": "cd1d71bc-6614-4a3c-b9d3-152aa90d8a5d",
          "username": "Una_Leannon87",
          "name": "Billy Kulas"
      }
  },
  {
      "id": "84a3678a-bf2e-4fe3-ac18-eee9388634cc",
      "color": 2,
      "amount": 50,
      "winAmount": 72,
      "status": "win",
      "user": {
          "id": "62e35ef0-5a87-4983-85d3-7876d71443b0",
          "username": "Remington_Kohler91",
          "name": "Louis Bahringer Jr."
      }
  },
  {
      "id": "396e41da-aa55-487c-befa-544993c07390",
      "color": 3,
      "amount": 25,
      "winAmount": 55,
      "status": "win",
      "user": {
          "id": "13f812f7-acba-4778-9cb3-1a3a0e670096",
          "username": "Jose32",
          "name": "Melvin Kassulke"
      }
  },
  {
      "id": "063b653d-ca3f-4468-a6f0-87223bf057e0",
      "color": 2,
      "amount": 11,
      "winAmount": 14,
      "status": "loss",
      "user": {
          "id": "1f088d84-dbd2-46d2-b281-4b98922d4bc6",
          "username": "Santino53",
          "name": "Becky Schultz IV"
      }
  },
  {
      "id": "2c296685-5b48-4524-8dc3-ade2ff87cb71",
      "color": 3,
      "amount": 42,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "7955f324-5b10-4e6b-b6d9-21ad12c535f0",
          "username": "Elisa0",
          "name": "Sherri Cartwright"
      }
  },
  {
      "id": "4a49dc24-b784-422e-bb4e-c8724c408a7f",
      "color": 3,
      "amount": 33,
      "winAmount": 24,
      "status": "win",
      "user": {
          "id": "8a7955b9-f929-4d0d-b140-71db173eee66",
          "username": "Deshaun90",
          "name": "Lula Hettinger"
      }
  },
  {
      "id": "a8ada990-3441-4738-a573-c866dcfc036e",
      "color": 1,
      "amount": 37,
      "winAmount": 40,
      "status": "loss",
      "user": {
          "id": "a7199a07-48a1-468b-8aa5-7daa35eaf23b",
          "username": "Allie15",
          "name": "Frankie Adams Jr."
      }
  },
  {
      "id": "05435b0b-5301-420e-a3fa-8a95467c6ae9",
      "color": 1,
      "amount": 97,
      "winAmount": 10,
      "status": "win",
      "user": {
          "id": "83443e46-fce5-4368-b5b1-2d5db3f968ef",
          "username": "Hayden81",
          "name": "Bertha Reichel"
      }
  },
  {
      "id": "ab18913d-2ba9-44bb-82c0-03a4da8331f3",
      "color": 2,
      "amount": 68,
      "winAmount": 51,
      "status": "loss",
      "user": {
          "id": "faf12ef7-88d7-41e3-a6ab-7d2e7750c726",
          "username": "Kristy54",
          "name": "Andres Collins II"
      }
  },
  {
      "id": "7dd58aa7-81f4-4126-9e86-3175d7620f9b",
      "color": 1,
      "amount": 74,
      "winAmount": 15,
      "status": "win",
      "user": {
          "id": "9577f298-947d-46f3-b78d-7db21281e329",
          "username": "Lillie27",
          "name": "Wayne Schiller"
      }
  },
  {
      "id": "31ff1966-6e68-41b6-90c5-b21fe84175ed",
      "color": 3,
      "amount": 82,
      "winAmount": 82,
      "status": "win",
      "user": {
          "id": "d1c9e5b9-0613-4d4e-b889-3158532d0b4e",
          "username": "Alfonso_Nader6",
          "name": "Shaun Little"
      }
  },
  {
      "id": "1611bfd2-5569-40dc-9b8d-f05df60d9a0b",
      "color": 1,
      "amount": 63,
      "winAmount": 80,
      "status": "win",
      "user": {
          "id": "236c36f0-cb2d-428e-ba89-a55335e250ec",
          "username": "Tyrique68",
          "name": "Marian Farrell"
      }
  },
  {
      "id": "a630aa59-301c-4ab6-9193-2834b4f78849",
      "color": 3,
      "amount": 26,
      "winAmount": 81,
      "status": "win",
      "user": {
          "id": "88382d37-5438-4edc-8936-6f889a52ea33",
          "username": "Lempi_Cole",
          "name": "Maryann Kassulke"
      }
  },
  {
      "id": "7f73ee9d-281e-42e4-bb99-e14aebdacc72",
      "color": 2,
      "amount": 17,
      "winAmount": 45,
      "status": "win",
      "user": {
          "id": "5ba194f0-cd66-45ae-a861-dac209e13067",
          "username": "Providenci.Kirlin53",
          "name": "Jean Zboncak II"
      }
  },
  {
      "id": "c588c63e-f51f-47a2-a912-fcbf8f39ad4f",
      "color": 3,
      "amount": 56,
      "winAmount": 53,
      "status": "win",
      "user": {
          "id": "5ff34f9f-932c-41ed-b8a1-b2d3a4c5c2c9",
          "username": "Richard.Runolfsson",
          "name": "Kristopher Stehr"
      }
  },
  {
      "id": "b67f19d7-bdc0-4911-805b-3ebb0c107cbb",
      "color": 1,
      "amount": 81,
      "winAmount": 60,
      "status": "loss",
      "user": {
          "id": "457395c5-4bf5-4303-a8d2-07d3c1110bda",
          "username": "Warren_Kris",
          "name": "Miss Denise Carroll"
      }
  },
  {
      "id": "f0fa8f96-a57d-4fb1-9a1a-91b3fdd3f72a",
      "color": 3,
      "amount": 94,
      "winAmount": 41,
      "status": "loss",
      "user": {
          "id": "4dabe877-4310-43a0-bce0-8bfb7fdb7dbf",
          "username": "London.Von28",
          "name": "Gene Buckridge"
      }
  },
  {
      "id": "cb0a34a0-a216-487a-8b1b-ebe17b9fd0ef",
      "color": 2,
      "amount": 98,
      "winAmount": 61,
      "status": "win",
      "user": {
          "id": "33ede7b9-132d-4203-ab0c-86ae0616700a",
          "username": "Leatha.Runolfsdottir",
          "name": "Jeanette Stamm V"
      }
  },
  {
      "id": "56b10d78-bb15-48c5-a269-3bda034f0396",
      "color": 3,
      "amount": 50,
      "winAmount": 92,
      "status": "win",
      "user": {
          "id": "cc152d3c-0a3e-4755-97e3-66489b505137",
          "username": "Ottis79",
          "name": "Betty Nienow"
      }
  },
  {
      "id": "2c198893-4296-488a-abbb-d51e5d5edcdc",
      "color": 1,
      "amount": 10,
      "winAmount": 56,
      "status": "win",
      "user": {
          "id": "a49dbc69-a19f-4a2a-9ad1-195516103bf3",
          "username": "Brian.Tillman",
          "name": "Jesse Kohler DDS"
      }
  },
  {
      "id": "d8d8aeac-0d50-4a3b-8712-ba715e8692ae",
      "color": 2,
      "amount": 24,
      "winAmount": 24,
      "status": "loss",
      "user": {
          "id": "349f386a-31a4-4bcb-b421-1a31143a9966",
          "username": "Otha.Moen",
          "name": "Candace Huels"
      }
  },
  {
      "id": "1fd07c0b-1130-42d5-851c-0f152c86bdc7",
      "color": 1,
      "amount": 38,
      "winAmount": 65,
      "status": "loss",
      "user": {
          "id": "eef7f778-235f-433e-9c06-2f84cadc2ed6",
          "username": "Kenny_Kuhic98",
          "name": "Terry Roberts"
      }
  },
  {
      "id": "58593dea-4f3c-4148-a141-ed0595e4725b",
      "color": 1,
      "amount": 94,
      "winAmount": 14,
      "status": "loss",
      "user": {
          "id": "eb19b1d8-bc1a-4f33-a786-569213c964a7",
          "username": "Jannie.Durgan",
          "name": "Mandy Veum"
      }
  },
  {
      "id": "a07e6c2a-189d-4afb-88c4-9479eb6d3c35",
      "color": 3,
      "amount": 45,
      "winAmount": 10,
      "status": "loss",
      "user": {
          "id": "f225ec06-69a3-4a6d-8c05-643a63384a6d",
          "username": "Alejandra.Stokes",
          "name": "Victoria Cronin"
      }
  },
  {
      "id": "3fa78c5d-8167-4f42-9a42-0c61e204b28f",
      "color": 3,
      "amount": 20,
      "winAmount": 69,
      "status": "loss",
      "user": {
          "id": "b580b21e-0d80-4666-847e-670213ff40de",
          "username": "Chris.Pacocha65",
          "name": "Angie Daugherty"
      }
  },
  {
      "id": "5d0da0d5-a4b6-43fb-af04-e58d03f23da0",
      "color": 1,
      "amount": 84,
      "winAmount": 18,
      "status": "win",
      "user": {
          "id": "94b71687-983f-46fd-a993-0c3b0dad91df",
          "username": "Evie.Tromp78",
          "name": "Kathryn Armstrong"
      }
  },
  {
      "id": "5b3bc291-1fd7-4d35-9b46-05323beb4ef1",
      "color": 2,
      "amount": 35,
      "winAmount": 42,
      "status": "loss",
      "user": {
          "id": "2923186c-bca6-493e-a7c7-ece4942cd066",
          "username": "Rosetta.Dare61",
          "name": "Delbert Johnston"
      }
  },
  {
      "id": "f1bbc0ab-89be-42ef-abde-f469cd870e75",
      "color": 3,
      "amount": 71,
      "winAmount": 19,
      "status": "loss",
      "user": {
          "id": "547f8d3d-390b-48ed-b2f8-4354db68a103",
          "username": "Kavon.Becker98",
          "name": "Simon Klein"
      }
  },
  {
      "id": "e49dd3c0-0d00-4312-9fe8-95a134de8ec3",
      "color": 1,
      "amount": 61,
      "winAmount": 99,
      "status": "win",
      "user": {
          "id": "64f18c51-85ff-4335-811b-bd23c7fe1543",
          "username": "Laverna_Mohr72",
          "name": "Miss Kari Murazik"
      }
  },
  {
      "id": "a682b314-bd03-49ef-b5b6-8b8feafa5478",
      "color": 2,
      "amount": 34,
      "winAmount": 17,
      "status": "loss",
      "user": {
          "id": "e5322385-e733-4623-b168-cb538729db2c",
          "username": "Sydney29",
          "name": "Loren Crona"
      }
  },
  {
      "id": "9fa4887f-f25b-4bb6-8b4f-ad9b4c6e992a",
      "color": 3,
      "amount": 83,
      "winAmount": 59,
      "status": "loss",
      "user": {
          "id": "bc260851-2f17-4b49-806d-e46876ea6114",
          "username": "Selena.White",
          "name": "Marvin Gleason"
      }
  },
  {
      "id": "549ea2f8-d035-464a-9e52-c4b5014c94c0",
      "color": 3,
      "amount": 76,
      "winAmount": 77,
      "status": "win",
      "user": {
          "id": "5b68eb88-4a17-44f9-83ea-6ff0d5e76c03",
          "username": "Trenton_Christiansen",
          "name": "Mrs. Hattie Langworth"
      }
  },
  {
      "id": "25868b59-a9d1-451e-b6c1-6df979ae68a3",
      "color": 2,
      "amount": 62,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "0f7fb623-f50f-4c5c-95d5-97167f1740fd",
          "username": "Candido_Crona59",
          "name": "Jeffery Schmidt"
      }
  },
  {
      "id": "ac3a9b65-7e5f-4c87-aee5-ff68c6a109d1",
      "color": 3,
      "amount": 49,
      "winAmount": 45,
      "status": "loss",
      "user": {
          "id": "2f605c94-dc0d-4e76-934a-7d61d8c496b6",
          "username": "Carmelo59",
          "name": "Anita Ankunding"
      }
  },
  {
      "id": "2054c57b-8dda-4d2f-8f18-37f7ddd9c32c",
      "color": 3,
      "amount": 35,
      "winAmount": 30,
      "status": "win",
      "user": {
          "id": "773f82e0-3cf7-4f09-9bb9-c7abf2558e61",
          "username": "Vincenza.Rolfson32",
          "name": "Edwin VonRueden"
      }
  },
  {
      "id": "9f6d438e-213e-4e47-b8dd-2a4e067f3e77",
      "color": 3,
      "amount": 86,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "6a777e53-085a-4910-a6be-0406d3d5a0a5",
          "username": "Daphnee.Rohan",
          "name": "Calvin Hodkiewicz"
      }
  },
  {
      "id": "72798804-c680-4e10-949e-abab7c26eb18",
      "color": 1,
      "amount": 41,
      "winAmount": 55,
      "status": "loss",
      "user": {
          "id": "860924d8-3e86-43c1-a284-d9a2cebde81b",
          "username": "Hank_Bartoletti",
          "name": "Johnny Kihn"
      }
  },
  {
      "id": "c2fb77d4-1b4c-4cbe-8c70-12a5d404b40b",
      "color": 1,
      "amount": 66,
      "winAmount": 11,
      "status": "win",
      "user": {
          "id": "75515760-f749-48d3-aaaa-6b1f8b4968f8",
          "username": "Johnny99",
          "name": "Ms. Maureen Mitchell"
      }
  },
  {
      "id": "2915354d-dfed-45ed-8523-964fe71e99a9",
      "color": 3,
      "amount": 50,
      "winAmount": 45,
      "status": "win",
      "user": {
          "id": "bceb0359-db60-4341-aa13-1f62a5454914",
          "username": "Leo.Anderson9",
          "name": "Catherine Wolf"
      }
  },
  {
      "id": "5366eaf7-7b2f-430a-bf78-4acd8e682b8b",
      "color": 2,
      "amount": 24,
      "winAmount": 67,
      "status": "loss",
      "user": {
          "id": "8ba70912-6e62-41d8-ab59-ee7566d67470",
          "username": "Ernestine_Kiehn",
          "name": "Marsha Harris PhD"
      }
  },
  {
      "id": "e01ce766-a22c-4030-853c-455cd9e6ba8c",
      "color": 3,
      "amount": 32,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "b036e3d4-caaa-4ed0-af9e-1b3d35a094e4",
          "username": "Adela.White",
          "name": "Rachel McDermott"
      }
  },
  {
      "id": "e6ee4b18-1a06-408c-8905-dbf0e7db3c0b",
      "color": 3,
      "amount": 21,
      "winAmount": 30,
      "status": "loss",
      "user": {
          "id": "046ff4bc-7550-4e6b-a0a2-60b73dd5fea9",
          "username": "Brice43",
          "name": "Miss Michelle Cummerata"
      }
  },
  {
      "id": "0677282f-5c28-4088-9272-f59471a6ba16",
      "color": 3,
      "amount": 99,
      "winAmount": 60,
      "status": "loss",
      "user": {
          "id": "9db955f6-6c26-4b34-baa8-47e6fa0083c5",
          "username": "Bernice53",
          "name": "Kimberly Fritsch"
      }
  },
  {
      "id": "84561bcc-7273-42ca-b07c-98e39ee6b7e0",
      "color": 2,
      "amount": 56,
      "winAmount": 70,
      "status": "loss",
      "user": {
          "id": "d98009b2-ec0a-416d-a296-dd60556ac682",
          "username": "Mackenzie_Douglas",
          "name": "Colin Durgan"
      }
  },
  {
      "id": "a0387209-f892-4e54-b3ea-4b7eacfe3ce4",
      "color": 1,
      "amount": 18,
      "winAmount": 69,
      "status": "loss",
      "user": {
          "id": "f5b7fdee-915d-4670-924f-3bd6e191f39b",
          "username": "Hellen.Little",
          "name": "Carl Balistreri"
      }
  },
  {
      "id": "59fd0c1d-5b3d-4fc8-97ec-d085f716899f",
      "color": 1,
      "amount": 34,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "0437056e-52fc-4f48-a128-82ae8ef2d3bc",
          "username": "Margaret50",
          "name": "Cathy Bartell IV"
      }
  },
  {
      "id": "4fcf224b-14a0-40ae-870c-a42e50424968",
      "color": 1,
      "amount": 75,
      "winAmount": 48,
      "status": "loss",
      "user": {
          "id": "7f7d15ee-fd0e-4552-a76e-9798f6c5ffa1",
          "username": "Webster_Rempel67",
          "name": "Jerry Parker"
      }
  },
  {
      "id": "501161bf-dd2a-49f7-8280-a2a76c25fed7",
      "color": 2,
      "amount": 77,
      "winAmount": 34,
      "status": "win",
      "user": {
          "id": "6ff21347-fb29-4400-9ac7-f2d70490f69a",
          "username": "Alta.Hauck",
          "name": "Amos Nienow"
      }
  },
  {
      "id": "dedcfb54-a615-4b5a-8f35-990e95690444",
      "color": 3,
      "amount": 43,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "0ada7ead-08d8-4f53-a688-703659cdf339",
          "username": "Llewellyn57",
          "name": "Lee Olson"
      }
  },
  {
      "id": "1049a227-21af-45e9-b3a4-b6b714af8289",
      "color": 3,
      "amount": 88,
      "winAmount": 94,
      "status": "win",
      "user": {
          "id": "756c8af1-31bb-42b9-997e-4f36d94b7797",
          "username": "Osborne34",
          "name": "Jean Waters"
      }
  },
  {
      "id": "34ef8b6a-781a-4f9a-b82a-72453f3c238c",
      "color": 1,
      "amount": 95,
      "winAmount": 60,
      "status": "win",
      "user": {
          "id": "987e3745-e774-4561-974d-b03919fad386",
          "username": "Jamal.Kohler",
          "name": "Susan Ritchie PhD"
      }
  },
  {
      "id": "b8a75f27-7d93-42ad-af12-dc9bf99a6923",
      "color": 2,
      "amount": 88,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "71fdb9ed-1bfc-4d89-b050-e5e3ebb24814",
          "username": "Lyla.Boyer",
          "name": "Maggie McDermott Sr."
      }
  },
  {
      "id": "3949b77b-303e-4919-beac-8e0386b319e5",
      "color": 2,
      "amount": 65,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "bc42ae31-e483-4f13-a9c5-a6278e8b636c",
          "username": "Mariah_Swift41",
          "name": "Joann Herzog"
      }
  },
  {
      "id": "6f1aa318-0306-4d22-939f-2fb723b8ce28",
      "color": 2,
      "amount": 83,
      "winAmount": 93,
      "status": "loss",
      "user": {
          "id": "90dab067-5290-4a62-bfa9-ac31859b2e40",
          "username": "Vernon_Tromp96",
          "name": "Jerome Harber"
      }
  },
  {
      "id": "1660109a-88b8-4636-a16b-d00881aed679",
      "color": 1,
      "amount": 67,
      "winAmount": 57,
      "status": "loss",
      "user": {
          "id": "686ffd04-e294-4e7b-a577-b7de500e71fd",
          "username": "Elnora.Macejkovic",
          "name": "Kristin Romaguera"
      }
  },
  {
      "id": "7460ae6e-e8dd-4f55-a099-2872a747d0e1",
      "color": 2,
      "amount": 32,
      "winAmount": 27,
      "status": "win",
      "user": {
          "id": "a47b338e-2afc-4dd9-8406-d24bddd1160d",
          "username": "Dejah.Treutel",
          "name": "Hope Reynolds"
      }
  },
  {
      "id": "a98050bc-0a09-4c13-8035-5e353e724035",
      "color": 1,
      "amount": 88,
      "winAmount": 59,
      "status": "loss",
      "user": {
          "id": "6b222b4f-2879-4707-a991-be018058b9b9",
          "username": "Arianna_Bechtelar",
          "name": "Victoria Schuppe"
      }
  },
  {
      "id": "0280b774-7cc0-4d33-a729-c904c34fd948",
      "color": 1,
      "amount": 67,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "f9ae4858-5bfc-41f7-be96-f19dce4ed20e",
          "username": "Rigoberto.Casper33",
          "name": "Dorothy Schulist"
      }
  },
  {
      "id": "cd479dac-649b-4fb2-a7fb-a6ca99f9c4f6",
      "color": 2,
      "amount": 45,
      "winAmount": 83,
      "status": "win",
      "user": {
          "id": "977358a1-41ae-40de-9506-5698681515b0",
          "username": "Ambrose_Howell21",
          "name": "Yvonne Robel"
      }
  },
  {
      "id": "124eb5d7-fdd3-454b-b597-c5b302cfdbf8",
      "color": 2,
      "amount": 81,
      "winAmount": 96,
      "status": "win",
      "user": {
          "id": "5ed0ec70-de28-4a6c-bfe0-881bc275e5d3",
          "username": "Holden.Ward",
          "name": "Mark Halvorson"
      }
  },
  {
      "id": "506df4c3-ef9f-414e-9069-cacd8b199c7e",
      "color": 2,
      "amount": 48,
      "winAmount": 81,
      "status": "win",
      "user": {
          "id": "ed9bb700-9401-4e26-bc8f-d5120efb50c1",
          "username": "Lavon_Gibson59",
          "name": "Cathy Leffler DDS"
      }
  },
  {
      "id": "35d61557-298c-486b-95c5-446b6764de80",
      "color": 1,
      "amount": 55,
      "winAmount": 31,
      "status": "loss",
      "user": {
          "id": "fa15e73e-73a4-443a-95b8-dae2ceacafe0",
          "username": "Burley44",
          "name": "Cesar Schneider"
      }
  },
  {
      "id": "3f276375-6c55-48d9-ae8c-b016e516c17a",
      "color": 2,
      "amount": 29,
      "winAmount": 43,
      "status": "loss",
      "user": {
          "id": "7a4e838f-191a-4c82-90f0-73e54e5df430",
          "username": "Jayda_Bednar",
          "name": "Mrs. Shirley Rippin"
      }
  },
  {
      "id": "3a94b8f4-f337-4984-85f6-0820fb8745e7",
      "color": 3,
      "amount": 36,
      "winAmount": 97,
      "status": "loss",
      "user": {
          "id": "be99b86b-8b52-4b46-a2df-87fa7ec7a9b0",
          "username": "Madonna.Kertzmann",
          "name": "Madeline Kessler Jr."
      }
  },
  {
      "id": "3dc8a599-36b5-410f-b08d-11cd487dd00f",
      "color": 1,
      "amount": 13,
      "winAmount": 22,
      "status": "loss",
      "user": {
          "id": "77e59db9-478f-475d-acfb-74522cf47b8b",
          "username": "Ophelia97",
          "name": "Guillermo Welch DVM"
      }
  },
  {
      "id": "ffaea86f-6d2b-4ae3-b936-b94948fff562",
      "color": 2,
      "amount": 55,
      "winAmount": 16,
      "status": "win",
      "user": {
          "id": "91377f5c-c17a-46d2-a828-f80f3b70c4be",
          "username": "Jennifer_Jacobi96",
          "name": "Karl Rutherford"
      }
  }
]

window.addEventListener("keyup" , e=> {

  if(e.key == "1") table.setLista(listafake)  // preenche a tabela com usuários e apostas
  if(e.key == "2") {
    table.tablewinnumber(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
    // console.log(cards.choice_number)
  }

  // if(e.key == "2") communication.renew() // apagar todos os usuários que apostaram 
  // if(e.key == "3") table.tablewin(0) // insere cor ao vencedor na tabela
  // if(e.key == "4") table.tablenormal() // remove as cores da tabela
  // if(e.key == "5") cards.choice(1) // roda o slide e cai no número escolhido
  if(e.key == "6") loading.resetTime(10) // seta o tempo tempo
  // if(e.key == "7") historic.add(cards.choice_number) // adiciona ao histórico
  
  // if(e.key == "a") table.tablewinnumber(0) // renovar
  // if(e.key == "s") table.tablewinnumber(1) // renovar
  // if(e.key == "d") table.tablewinnumber(2) // renovar

  // if(e.key == "q") communication.renew()
    // if(e.key == "3" || e.key == "2" || e.key == "1") communication.add(fakelist[n++])

  // if(e.key == "'") communication.renew()

  // if(e.key=="1"){
  //   loading.setTime(500)
  // }

  // if(e.key=="9"){
  //   console.log(cards.choice_number)
  //   table.tablewin(cards.choice_number)
  // }

})

// setInterval(()=>{
//   table.tablewin(0)
// },1000/60)

// table.tablewin(0) // branco
// table.tablewin(1) // azul
// table.tablewinnumber(6) // verde

// let x = 7590
// let num_x = cards_in.style.transform.match(/\d+/g)[0]|0
// cards_in.x -> -7300


// cards_in.x = -7300

// window.onresize = () => {
//   let w = div_cards.offsetWidth
//   let w2 = w/2
//   cards_in.style.transform = `translateX(${cards_in.x + w2 + 680 + 80}px)`
// };


