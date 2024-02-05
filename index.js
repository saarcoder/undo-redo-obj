const undoRedo = obj=> {
    let old = [], changed = [], toRedo = []
	return {
        get: key=> obj[key],
		set: (key,value)=> {
            old.push([key,obj[key]])
            obj[key] = value
            changed.push([key,obj[key]])
            toRedo = []
        },
		del: key=> {
            old.push([key,obj[key]])
            delete obj[key]
            changed.push([key,obj[key]])
            toRedo = []
        },
		undo: ()=> {
            try {
                if(old.length === 0) throw 'Nothing has changed'
                else {                    
                    toRedo.unshift([old[old.length-1][0],obj[old[old.length-1][0]]])
                    if(old[old.length-1][1] !== undefined) obj[old[old.length-1][0]] = old[old.length - 1][1]
                    else delete obj[old[old.length-1][0]]
                    old.splice(old.length-1, 1)
                    return obj
                }
            } catch(err) { return err }
        },
		redo: ()=> {
            try {
                if(toRedo.length === 0) throw 'Nothing to redo'
                else {
                    if(toRedo[0][1] !== undefined) {
                        obj[toRedo[0][0]] = toRedo[0][1]
                        toRedo.splice(0,1)
                    }
                    else delete obj[toRedo[0][0]]
                    if(changed) {
                        changed.splice(changed.length-1,1)                     
                        old.push([changed[changed.length-1][0],changed[changed.length-1][1]])  
                    } return obj
                }
            } catch(err) { return err }
    } } }

    module.exports = undoRedo