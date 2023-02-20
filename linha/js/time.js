let time = {
    d1: new Date(),
    d2: new Date(),
    d3: new Date(),
    fact: 1.01,
    dif(){
      return (this.d3.getTime() - this.d2.getTime())/1000
    },
    calc(){
      this.val = 1.01 * this.dif()
      return this.val
    }
  }

export default time