const undoRedo = require('./index')
test('get functionality', ()=> {
    const obj = {'x': 5, 'y': 94}
    let unRe = undoRedo(obj)
    expect(unRe.get('x')).toBe( 5 )
})
test('set functionality', ()=> {
    const obj = {}
    let unRe = undoRedo(obj)
    unRe.set('x',6)
    expect(unRe.get('x')).toBe( 6 )
})
test('delete functionality', ()=> {
    const obj = {'x': 5}
    let unRe = undoRedo(obj)
    unRe.del('x')
    expect(unRe.get('x')).toBe( undefined )
})
test('basic undo functionality', ()=> {
    const obj = {'x': 1, 'y': 2}
    let unRe = undoRedo(obj)
    unRe.set('y', 3)
    expect(unRe.get('y')).toBe( 3 )
    unRe.undo()
    expect(unRe.get('y')).toBe( 2)
})
test('basic redo functionality', ()=> {
    const obj = {'x': 1, 'y': 2}
    let unRe = undoRedo(obj)
    unRe.set('y', 3)
    expect(unRe.get('y')).toBe( 3 )
    unRe.undo()
    expect(unRe.get('y')).toBe( 2)
    unRe.redo()
    expect(unRe.get('y')).toBe( 3)
})