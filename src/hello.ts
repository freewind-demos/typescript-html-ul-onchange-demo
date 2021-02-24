const ul = document.querySelector<HTMLUListElement>('#main');

ul!.addEventListener('change', (event) => {
  const input = event.target as HTMLInputElement
  console.log('### event', input.value);
})
