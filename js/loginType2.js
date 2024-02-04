const adminBtn = document.getElementById('adminBtn');
const librarianBtn = document.getElementById('librarianBtn');
const fieldHeader = document.getElementById('fieldHeader');
const form = document.getElementById('loginForm');

adminBtn.addEventListener('click', () => {
    // librarian btn
    if (librarianBtn.classList.contains('activeTab')) {
        librarianBtn.classList.remove('activeTab');
    }
    if (!librarianBtn.classList.contains('inactiveTab')) {
        librarianBtn.classList.add('inactiveTab');
    }

    // admin btn
    if (!adminBtn.classList.contains('activeTab')) {
        adminBtn.classList.add('activeTab');
    }
    if (adminBtn.classList.contains('inactiveTab')) {
        adminBtn.classList.remove('inactiveTab');
    }

    // change headers
    fieldHeader.textContent = "የአስተዳዳሪ መግቢያ";
    // reset form
    form.reset();
})

librarianBtn.addEventListener('click', () => {
    // admin btn
    if (adminBtn.classList.contains('activeTab')) {
        adminBtn.classList.remove('activeTab');
    }
    if (!adminBtn.classList.contains('inactiveTab')) {
        adminBtn.classList.add('inactiveTab');
    }

    // librarian btn
    if (!librarianBtn.classList.contains('activeTab')) {
        librarianBtn.classList.add('activeTab');
    }
    if (librarianBtn.classList.contains('inactiveTab')) {
        librarianBtn.classList.remove('inactiveTab');
    }

    // change headers
    fieldHeader.textContent = "የቤተመጽሐፍት ባለሙያ መግቢያ";
    // reset form
    form.reset();
})