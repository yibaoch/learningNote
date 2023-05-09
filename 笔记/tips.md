# some useful code 

```javascript
           onCompositionStart={e => {
                e.target.isComposing = true
              }}
              onCompositionEnd={e => {
                if (e.target.isComposing) {
                  console.log(e.target.value)
                  e.target.isComposing = false
                }
              }}
              onChange={e => {
                if (!e.target.isComposing) {
                  console.log(e.target.value)
                }
              }}

```
