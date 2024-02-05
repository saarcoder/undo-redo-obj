# undo-redo-obj
## Description
Get and set object state, revert changes, undo reverts.

## Usage
Pass your object as argument and save the function call to a variable. Then use the helper methods of the object returned from the function call to change your object's state.

Basic example
```js
const obj = {}
let unRe = undoRedo(obj);
unRe.set('y',6)
unRe.get('y')
unRe.set('y',66)
unRe.get('y')
unRe.undo()
unRe.get('y')
unRe.redo()  
unRe.get('y')
unRe.del('y')
unRe.get('y')
```