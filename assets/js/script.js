new Vue({
  el: '#app',

  data: {
    message: 'testMessage',

    lifePoints: {
      1: 8000,
      2: 8000
    },

    lifeInput: 0,

    player1: 'Player1',
    player2: 'Player2',

    numbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '00',
      '000',
    ]
  },

  computed: {

  },

  methods: {
    resetLifePoints () {
      this.lifePoints[1] = 8000
      this.lifePoints[2] = 8000
    },

    increaseLife (playerId) {
      this.lifePoints[playerId] = this.lifePoints[playerId] + parseInt(this.lifeInput)
      this.lifeInput = 0
    },
    decreaseLife (playerId) {
      this.lifePoints[playerId] = this.lifePoints[playerId] - parseInt(this.lifeInput)
      this.lifeInput = 0
    },

    inputNumber (number) {
      if(this.lifeInput == 0) {
        this.lifeInput = ''
      }
      this.lifeInput = this.lifeInput + number
    }
  }
})
