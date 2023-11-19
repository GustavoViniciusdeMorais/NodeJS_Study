import * as tf from '@tensorflow/tfjs';

const max_len = 10;
const alpha_len = 27;
var model = tf.sequential();
model.add(tf.layers.lstm({
  units:alpha_len*2,
  inputShape:[max_len,alpha_len],
  dropout:0.2,
  recurrentDropout:0.2,
  useBias: true,
  returnSequences:true,
  activation:"relu"
}))
model.add(tf.layers.timeDistributed({
   layer: tf.layers.dense({
    units: alpha_len,
    activation:"softmax"
  })
}));

console.log(model.summary());