import bf from '../code/match/bf'
import kmp, { next } from '../code/match/kmp'

let group = [
  {
    fn: bf,
    text: 'bf算法'
  },
  {
    fn: kmp,
    text: 'kmp算法'
  }
]

let testSet = [
  { str: 'fagrgwargwgrawvre argwga rafewgfweagrgraqbrwg fbrgvgwragagr abcab fwagrwgrwbfb bgbnhdnsbvafdgbgnyytmru', match: 'abcab', index: 60 },
  { str: 'rarawvfqwerdrqqwerdwerdqwerdawvqwerdfwvqwerdrawvff aabaa afdgbgnyytmru', match: 'aabaa', index: 51 },
  { str: 'rarawvfqwerdrqqwerdwerdqwerdawvqwerdfwvqwerdrawvff abcabc afdgbgnyytmru', match: 'abcabc', index: 51 },
  { str: 'rarawvfqwerdrqqwerdwerdqwerdawvqwerdfwvqwerdrawvff aabcaab afdgbgnyytmru', match: 'aabcaab', index: 51 },
  { str: 'rarawvfqwerdrqqwerdwerdqwerdawvqwerdfwvqwerdrawvff acbcacbc afdgbgnyytmru', match: 'acbcacbc', index: 51 }
]

export default {
  name: '字符串匹配算法测试',
  test () {
    testSet.forEach(data => {
      console.log('----- 匹配字符串 -----', data.str)
      console.log('----- next数组 -----', data.match, next(data.match))
      group.forEach(item => {
        console.log(item.text, item.fn(data.str, data.match))
      })
    })
  }
}

