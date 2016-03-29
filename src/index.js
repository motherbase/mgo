import http from 'http'

// yes i know using regex with html is _NOT_A_GOOD_IDEA_
// forgiveness please
const FILTER_TABLE = /\<table\>(.*)\<\/table\>/ig
const FILTER_SPAN_LIST = /\<span.*?\>(.*?)\<\/span\>/ig
const FILTER_SPANS = /\<span class=\"(.*?)(st[0-9])?\"\>(.*)\<\/span\>/i

// states
// st0: everything good
// st1: down
// st2: yellow.. which means?

class MGO {
  static get(cb) {
    http.get({
      hostname: 'www.konami.jp',
      port: 80,
      path: '/mgs5/tpp/server_status/index.php?l=e&s=o'
    }, (res) => {
      let body = ''
      res.on('data', (chunk) => body += chunk).on('end', () => {
        body = body.replace(/\n|\t/ig, '')
        let table = (body.match(FILTER_TABLE) || [])[0]
        let spanList = table.match(FILTER_SPAN_LIST) || []
        let results = spanList.map((s) => {
          let res = s.match(FILTER_SPANS)
          return {
            system_alias: res[1].trim(),
            state: res[2] || 'disabled',
            system_name: res[3].replace('&reg;', '')
          }
        })
        cb(null, results)
      })
    })
  }
}

export default MGO
module.exports = MGO
