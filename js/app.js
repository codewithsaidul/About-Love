
const loveInfo = [
    "বিশ্বাস করো তোমাদের এই প্রেম জিবনেও টিকবে না তোমাদের এই প্রেমে স্বার্থ ছাড়া আর কিছুই নেই, অতয়েব সময় আছে ব্রেকআপ করে নাও।",
    "আর কত এমন ভাবে লুকিয়ে লুকিয়ে প্রেম করবে এবার বিয়ে করে নাও  তা না হলে প্রেম পাখি উরে যাবে তখন আর কান্নাকাটি  করে কোন  লাভ হবে না  ",
    "তোমাদের কপালে দুঃখ আছে বুঝতে পারছি তারাতারি ব্রেকআপ করো নতুন প্রেমের উদ্দেশে বাহিরে যাও তুমি যাকে ভালোবাসো সে তো একটা প্রতারক তোমার সাথেও প্রেম করে আবার অন্য জায়গায়ও টাংকি মারে সাবধান।",
    "আরে তোমাদের প্রেম তো অনেক সুন্দর আশা করা যায় তোমাদের প্রেম সার্থক হবে এবং তোমরা খুব তারাতারি বিয়েও করবে এখন তোমাদের কাজ হচ্ছে হানিমুনে কোন দেশ যাবে তা চিন্তা করে নাও আর হ্যাঁ আমাকে দাওয়াত দিতে ভুলবে না কিন্তু",
    "তোমরা ভুলেও ১৪ই ফেব্রুয়ারীতে ঘুরতে যাবে না কারন তোমাদের মা-বাবা তোমাদের ফলো করবেযে তোমরা পার্ককে যেয়ে কি আকাম কুকাম করবে তা দেখতে তাই আমি তোমাদের সাবধান করে দিলাম",
    "তোমাদের প্রেমে তো বেশি আবেগ চলে মনে হয় না যে এই প্রেম টিকবে তবুও চেষ্টা চালিয়ে যাও দেখো কি হয় আর হ্যা তোমাদের প্রেম টিকলে অবশ্যই আমাকে জানাবে",
    "তোমরা দুইজন দুইজন কে অনেক ভালোবাসো তোমাদের প্রেম দেখে তোমাদের বন্ধুরা হিংসা করে তোমাদের সহ্য করতে পারে  না সারা জীবন এভাবে থেকো কখনো কেউ কাউকে কষ্ট দিয়ো না",
  ];




const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {


  const boyBtn = document.getElementById("boy-name");
  const girlBtn = document.getElementById("girl-name");
  const display = document.getElementById("display");

  let boyValue = boyBtn.value;
  let girlValue = girlBtn.value;

  if (boyValue.trim() === '' || girlValue.trim() === '') {
     return alert(`I Love You Boo 
Please Type All Name`)
  }

  const randomText = loveInfo[Math.round(Math.random() * loveInfo.length - 1)];

  const result = `${boyValue} এবং  ${girlValue} তোমাদের প্রেম : ${randomText}`;
  display.innerText = result;

  boyBtn.value = '';
  girlBtn.value = '';
});
