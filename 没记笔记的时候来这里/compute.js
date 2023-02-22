; (function () {

  var Compute = function ({ x, y }) {
    [this.x, this.y] = [x, y]
  }

  Compute.prototype = {
    plus: function () {
      return this.x + this.y
    },
    minus: function () {
      return this.x - this.y
    },
    mul: function () {
      return this.x * this.y
    },
    div: function () {
      return this.x / this.y
    }
  }

  window.Compute = Compute

})()