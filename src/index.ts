import { pipeline } from '@xenova/transformers';

const modelCall = async () => {
  let generator = await pipeline(
    'summarization', // task
    'Xenova/t5-small' // model
  );

  let output = await generator('The pipeline function takes two arguments, the task and the model', {
    max_new_tokens: 100,
  });

  console.log('output',output);
};

modelCall();