var util2 = require('../lib/util2');
var myutil = require('../lib/myutil');
var Propable = require('./propable');
var StageElement = require('./element');

var textProps = [
  'text',
  'font',
  'color',
  'textOverflow',
  'textAlign',
  'updateTimeUnits',
];

var defaults = {
  backgroundColor: 'clear',
  borderColor: 'clear',
  borderWidth: 1,
  color: 'white',
  font: 'gothic-24',
};

var Text = function(elementDef) {
  StageElement.call(this, myutil.shadow(defaults, elementDef || {}));
  this.state.type = StageElement.TextType;
};

util2.inherit(Text, StageElement);

Propable.makeAccessors(textProps, Text.prototype);

module.exports = Text;
