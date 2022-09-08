// --------------------------
// Create observable object
// --------------------------

export function create (object) {

    const changes = [];
    const callbacks = object._callbacks = [];

    function emit () {
        callbacks.forEach(cb => cb());
        changes.length = 0;
    }

    function track (prop) {
        const length = changes.push(prop);
        Promise.resolve().then(() => {
            if (length === changes.length) emit();
        })
    }

    return new Proxy(object, {
        set (target, prop, value) {
            if (target[prop] !== value) {
                target[prop] = value;
                track(prop);
            }
            return true;
        }
    })
}



// --------------------------
// Watch for changes
// --------------------------

export function watch (proxy, callback) {
    proxy._callbacks.push(callback);
}

