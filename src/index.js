import { pipeline } from '@xenova/transformers';

const longTextInput = document.getElementById('text-input');
const generateButton = document.getElementById('process-text');
const output = document.getElementById('output-div');

const modelCall = async (input) => {
  let generator = await pipeline(
    'summarization', // task
    'Xenova/t5-small' // model
  );

  let output = await generator(input, {
    max_new_tokens: 100,
  });

  console.log('output',output);
  return output;
};

generateButton.addEventListener('click', async () => {
  generateButton.setAttribute("disabled", true);

  const input = longTextInput.value;
  if (typeof input === "string" && input.length > 0) {
    const result = await modelCall(input);
    output.innerHTML = result[0].summary_text;
  }
  generateButton.removeAttribute("disabled");
  output.style.display = 'block';
});

