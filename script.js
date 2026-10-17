(() => {
  // Countdown: begins at 120 seconds on each page load.
  let remaining = 120;
  const timer = document.getElementById('timer');
  const tick = () => {
    timer.textContent = String(remaining);
    if (remaining > 0) remaining -= 1;
  };
  tick();
  window.setInterval(() => {
    if (remaining >= 0) {
      timer.textContent = String(remaining);
      remaining -= 1;
    }
  }, 1000);

  const form = document.getElementById('orderForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const lines = [
      'আসসালামু আলাইকুম, আমি ভার্চুয়াল কার্ড অর্ডার করতে চাই।',
      '',
      'নাম: ' + data.get('fullName'),
      'ইমেইল: ' + data.get('email'),
      'ফোন: ' + data.get('phone'),
      'পেমেন্ট পদ্ধতি: ' + data.get('paymentMethod'),
      'Transaction ID: ' + data.get('transactionId'),
      '',
      'দয়া করে অর্ডারের তথ্য যাচাই করে পরবর্তী নির্দেশনা দিন।'
    ];
    const url = 'https://wa.me/8801824318448?text=' + encodeURIComponent(lines.join('\n'));
    status.textContent = 'WhatsApp খুলছে—মেসেজটি যাচাই করে নিজে Send করুন।';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();