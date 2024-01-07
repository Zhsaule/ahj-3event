export default function createOutput() {
  const output = document.createElement('div');
  output.classList = 'output';

  const resultDiv = document.createElement('div');
  resultDiv.textContent = 'Успех: ';
  output.appendChild(resultDiv);

  const result = document.createElement('span');
  result.className = 'success';
  result.textContent = 0;
  resultDiv.appendChild(result);

  const attemptDiv = document.createElement('div');
  attemptDiv.textContent = 'Попытки: ';
  output.appendChild(attemptDiv);

  const attempt = document.createElement('span');
  attempt.className = 'attempt';
  attempt.textContent = 0;
  attemptDiv.appendChild(attempt);

  document.body.appendChild(output);
  return { result, attempt };
}
