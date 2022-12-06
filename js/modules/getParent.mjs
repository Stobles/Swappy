export function getParent(elemSelector, parentSelector) {
  var elem = document.querySelector(elemSelector);
  var parents = document.querySelectorAll(parentSelector);
  
  for (var i = 0; i < parents.length; i++) {
    var parent = parents[i];
    
    if (parent.contains(elem)) {
      return parent;
    }
  }
}