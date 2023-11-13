import {
  encode
} from 'gpt-tokenizer'

const text = "Hello world!"

const tokens = encode(text)

console.log(tokens)