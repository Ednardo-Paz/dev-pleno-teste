export default function initMask() {
  const masks = {
    tel (value) {
      return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?/, '$1')
    },
    email(value) {
      return value
    },
    name(value) {
      return value
    }
  }
document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js

  $input.addEventListener('input', (e) => {
    e.target.value = masks[field](e.target.value)
  }, false)

})

}

