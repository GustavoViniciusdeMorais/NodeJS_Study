/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs-core';
// Load the model.
use.loadQnA().then(model => {
    // Embed a dictionary of a query and responses. The input to the embed method
    // needs to be in following format:
    // {
    //   queries: string[];
    //   responses: Response[];
    // }
    // queries is an array of question strings
    // responses is an array of following structure:
    // {
    //   response: string;
    //   context?: string;
    // }
    // context is optional, it provides the context string of the answer.
  
    const input = {
      queries: ['How are you feeling today?', 'What is captial of China?'],
      responses: [
        'I\'m not feeling very well.',
        'Beijing is the capital of China.',
        'You have five fingers on your hand.'
      ]
    };
    // var scores = [];
    const embeddings = model.embed(input);
    /*
      * The output of the embed method is an object with two keys:
      * {
      *   queryEmbedding: tf.Tensor;
      *   responseEmbedding: tf.Tensor;
      * }
      * queryEmbedding is a tensor containing embeddings for all queries.
      * responseEmbedding is a tensor containing embeddings for all answers.
      * You can call `arraySync()` to retrieve the values of the tensor.
      * In this example, embed_query[0] is the embedding for the query
      * 'How are you feeling today?'
      * And embed_responses[0] is the embedding for the answer
      * 'I\'m not feeling very well.'
      */
    const scores = tf.matMul(embeddings['queryEmbedding'],
        embeddings['responseEmbedding'], false, true).dataSync();
    console.log('Console log the scores fo the tfjs model are:', scores);
  });
  