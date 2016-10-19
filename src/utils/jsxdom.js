/* Implementation of templating syntax for jsx.
 *
 * To support tag nesting syntax:
 *   examples:
 *     <p>
 *       <div></div>
 *       <span><span/>
 *     </p>
 *
 *    1. Recursively call processChildren which the 'children' parameter is an instance of 2-dimensional array.
 *       The above example is an array of [[div], [span]] as the children of <p> tag.
 *
 * To support {this.children} syntax:
 *    1. In processChildren, detect the type of this.children which is an instance of HTMLCollection.
 *    2. Note that HTMLCollection is a list of HTMLElement extends from Object.
 *
 * To support {this.childNodes} syntax:
 *    1. In processChildren, detect the type of this.childNodes which is an instance of NodeList.
 *    2. Note that NodeList is a list of Node extends from Object.
 *
 */


function processChildren(ele, children) {
  if (children.constructor === Array) {
    for(var i = 0; i < children.length; i++) {
      processChildren(ele, children[i]);
    }
  } else if (children.constructor === String) {
    ele.appendChild(document.createTextNode(children));
  } else if (children && children.nodeName) {
    ele.appendChild(children);
  } else {
    console.error('Ignore jsx type: ', children, typeof children);
  }
}

export function jsxdom(tag, attributes, ...children) {
  let ele = tag.nodeName ? tag : document.createElement(tag);
  if (children && children.length) ele.innerHTML = '';
  // set attr
  for (var attrName in attributes) {
    if(attrName === 'onclick') {
      ele.addEventListener('click', attributes[attrName]);
    } else {
      ele.setAttribute(attrName, attributes[attrName]);
    }
  }
  // set children
  processChildren(ele, children);
  return ele;
}

window.jsxdom = jsxdom;
window['jsxdom'] = jsxdom;
