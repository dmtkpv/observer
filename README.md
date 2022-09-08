# @dmtkpv/observer
Watch an object for changes


## Usage
Install module
```
npm install @dmtkpv/observer
```

Setup watcher

```js
import { create, watch } from '@dmtkpv/observer'

const obj = create({
    // properties
})

watch(obj, () => {
    // callback 
})
```

