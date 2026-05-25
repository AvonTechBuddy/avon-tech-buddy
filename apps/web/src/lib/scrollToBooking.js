export function scrollToBooking(e) {
  if (e) e.preventDefault();
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', '#booking');
}
