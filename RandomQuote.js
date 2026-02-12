const bttn = document.getElementById("btn");

const quotes = [
  "Believe you can and you're halfway there.",
  "Stay positive, work hard, make it happen.",
  "Dream big and dare to fail.",
  "Do what you can, with what you have, where you are.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Act as if what you do makes a difference. It does.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Don't wait. The time will never be just right.",
  "Everything you've ever wanted is on the other side of fear.",
  "Little by little, one travels far.",
  "Fall seven times and stand up eight.",
  "What we think, we become.",
  "Happiness depends upon ourselves.",
  "Turn your wounds into wisdom.",
  "Be not afraid of going slowly, be afraid only of standing still.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It always seems impossible until it's done.",
  "The only way to do great work is to love what you do.",
  "You miss 100% of the shots you don't take.",
  "A person who never made a mistake never tried anything new.",
  "If you're going through hell, keep going.",
  "In the middle of difficulty lies opportunity.",
  "Don't limit your challenges, challenge your limits.",
  "Courage is resistance to fear, mastery of fear, not absence of fear.",
  "Start where you are. Use what you have. Do what you can.",
  "Opportunities don't happen, you create them.",
  "Failure is simply the opportunity to begin again, this time more intelligently.",
  "The best revenge is massive success.",
  "Your life is your story. Write well. Edit often.",
  "Discipline is choosing what you want most over what you want now.",
  "Do something today that your future self will thank you for.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "Be so good they can't ignore you.",
  "The secret of getting ahead is getting started.",
  "Don't stop until you're proud.",
  "Climb mountains not so the world can see you, but so you can see the world.",
  "Perseverance is not a long race; it is many short races one after the other.",
  "Focus on the journey, not the destination.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "A goal without a plan is just a wish.",
  "Confidence comes from preparation.",
  "Doubt kills more dreams than failure ever will.",
  "Make each day your masterpiece.",
  "Be stronger than your excuses.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Don't wish for it, work for it.",
  "Mistakes are proof that you are trying.",
  "One day or day one. You decide.",
  "Rise above the storm and you will find the sunshine.",
  "Work hard in silence, let success make the noise."
];

const showQuote = document.getElementById("quote")

bttn.addEventListener("click", ()=>{
    const randomText = Math.floor(Math.random() * quotes.length);
    showQuote.innerText = quotes[randomText];
});