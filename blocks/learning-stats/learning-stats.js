export default function decorate(block) {
  const rows = [...block.children];

  block.innerHTML = `
    <div class="learning-stats-wrapper">
      ${rows.map(row => {
        const cols = row.querySelectorAll('div');
        return `
          <div class="stat">
            <p class="label">${cols[0]?.textContent}</p>
            <p class="value">${cols[1]?.textContent}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
