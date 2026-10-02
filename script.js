document.getElementById('copy-citation').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    status.textContent = 'Copied';
  } catch {
    status.textContent = 'Select the citation below to copy it.';
  }
});
