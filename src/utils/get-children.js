'use strict';

var Children = require('react').Children;
var path = require('ramda').path;

var MainButton = require('../main-button');

function getChildren(children){
  var buttons = {
    main: null,
    child: []
  };

  Children.forEach(children, function(child){
    if(path(['type'], child) === MainButton || path(['type', 'displayName'], child) === 'MainButton'){
      buttons.main = child;
      return;
    }
    buttons.child.push(child);
  });

  return buttons;
}

module.exports = getChildren;
