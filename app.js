new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: true,
    turns: []
  },
  methods: {
    startGame:() => {
      this.gameIsRunning = true,
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.turns = []
    },
    attack: () => {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      })
    },
    calculateDamage: (min, max) => {
      return Math.max(Math.floor(Math.random() * max + 1), min);
    }
  }
})