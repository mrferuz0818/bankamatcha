// const correctPIN = "1234";
// let balance = 100000;
// let currentAction = "";

// // PIN keypad
// function pressKey(num) {
//     const pinInput = document.getElementById("pin-input");
//     if (pinInput.value.length < 4) {
//         pinInput.value += num;
//     }
// }

// function clearInput() {
//     document.getElementById("pin-input").value = "";
// }

// function deleteKey() {
//     const pinInput = document.getElementById("pin-input");
//     pinInput.value = pinInput.value.slice(0, -1);
// }

// // Login
// function login() {
//     const pinInput = document.getElementById("pin-input").value;
//     const loginMessage = document.getElementById("login-message");

//     if (pinInput === correctPIN) {
//         document.getElementById("login-screen").classList.add("hidden");
//         document.getElementById("main-menu").classList.remove("hidden");
//         document.getElementById("balance").textContent = balance;
//         loginMessage.textContent = "";
//     } else {
//         loginMessage.textContent = "PIN noto‘g‘ri!";
//     }
// }

// // Modal boshqaruvi
// function openModal(action) {
//     currentAction = action;
//     document.getElementById("modal-title").textContent =
//         action === "withdraw" ? "Pul yechish summasini kiriting" : "Pul qo‘shish summasini kiriting";
//     document.getElementById("modal").classList.remove("hidden");
//     document.getElementById("amount-input").value = "";
//     document.getElementById("modal-message").textContent = "";
// }

// function closeModal() {
//     document.getElementById("modal").classList.add("hidden");
// }

// // Amount keypad
// function pressAmountKey(num) {
//     const amountInput = document.getElementById("amount-input");
//     amountInput.value += num;
// }

// function clearAmount() {
//     document.getElementById("amount-input").value = "";
// }

// function deleteAmount() {
//     const amountInput = document.getElementById("amount-input");
//     amountInput.value = amountInput.value.slice(0, -1);
// }

// // Action confirm
// function confirmAction() {
//     const amount = parseInt(document.getElementById("amount-input").value);
//     const modalMessage = document.getElementById("modal-message");

//     if (!isNaN(amount) && amount > 0) {
//         if (currentAction === "withdraw") {
//             if (amount <= balance) {
//                 balance -= amount;
//                 modalMessage.style.color = "green";
//                 modalMessage.textContent = `${amount} so'm yechildi. Qolgan balans: ${balance} so'm`;
//                 document.getElementById("balance").textContent = balance;
//                 setTimeout(closeModal, 1500);
//             } else {
//                 modalMessage.style.color = "red";
//                 modalMessage.textContent = "Balansda yetarli mablag‘ yo‘q!";
//             }
//         } else if (currentAction === "deposit") {
//             balance += amount;
//             modalMessage.style.color = "green";
//             modalMessage.textContent = `${amount} so'm qo‘shildi. Yangi balans: ${balance} so'm`;
//             document.getElementById("balance").textContent = balance;
//             setTimeout(closeModal, 1500);
//         }
//     } else {
//         modalMessage.style.color = "red";
//         modalMessage.textContent = "Iltimos, to‘g‘ri summani kiriting!";
//     }
// }

// // Logout
// function logout() {
//     document.getElementById("main-menu").classList.add("hidden");
//     document.getElementById("login-screen").classList.remove("hidden");
//     document.getElementById("pin-input").value = "";
// }
