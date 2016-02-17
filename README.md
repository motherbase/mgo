# mgo
mgo fetches the status of the mgo servers

# local build
```
npm install .
npm run build
```

# important
i scraped this data from konami's own website, but who knows if the servers are actually up or down. i actually wrote this because the pc version was down for maintenance even after konami's own website status said they were up.

also note at anytime konami can decide to just remove this page and break this module, or they could decide to block your ip. WHO KNOWS, BUT IT'S NOT MY PROBLEM. if they just change the url it's pointed out then feel free to submit an issue or a pr.

# example
```js
'use strict';

import mgo from 'mgo'

mgo.get((err, results) => {
  console.log("JSON RESULTS: ", results)
}
```

# sample json output
```json
[
  {
    "system_alias": "ps4",
    "state": "st0",
    "system_name": "PlayStation4"
  },
  {
    "system_alias": "xone",
    "state": "st0",
    "system_name": "Xbox One"
  },
  {
    "system_alias": "pc",
    "state": "st0",
    "system_name": "Steam(PC)"
  },
  {
    "system_alias": "ps3",
    "state": "st0",
    "system_name": "PlayStation3"
  },
  {
    "system_alias": "x360",
    "state": "st0",
    "system_name": "Xbox 360"
  }
]
```

# license
ISC

# author
Shuan Wang (shuanwang@gmail.com)
