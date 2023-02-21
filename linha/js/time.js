let time = {
    d1: new Date(),
    d2: new Date(),
    d3: new Date(), //timestamp
    fact: 1,

    dif(){
      return (this.d3 - this.d2.getTime())/10000
    },

    calc(){
      this.val = 1 * this.dif()
      return this.val
    },


  }

export default time


