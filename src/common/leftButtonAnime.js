const leftButtonAnime = {
  data:{
    isTurn:false,
    isPull:false,
  },
  methods: {
    turnToggle(){
      this.isTurn = true
      setTimeout(() => {
        this.isTurn = false
      }, 500);
    },
    getLeftMenu(){
      this.isPull = true
      this.$store.state.time++
      console.log(this.$store.state.time);
      console.log(this.isPull);
      setTimeout(() => {
        this.isPull = false
      }, 3000);
    }
  }
}
export default leftButtonAnime