module.exports = function reversed (n) {
      let revN = Math.abs(n).toString().split('').reverse().join('');
      return +revN;
}