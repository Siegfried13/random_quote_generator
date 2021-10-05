const quoteList={
  1:{quote:"I love you the more in that I believe you had liked me for my own sake and for nothing else.",author:"John Keats"},
   2:{quote:"But man is not made for defeat. A man can be destroyed but not defeated.",
      author:"Ernest Hemingway"},
   3:{quote:"When you reach the end of your rope, tie a knot in it and hang on.",
      author:"Franklin D. Roosevelt"},
   4:{quote:"There is nothing permanent except change.",
      author:"Heraclitus"},
   5:{quote:"You cannot shake hands with a clenched fist.",
      author:"Indira Gandhi"},
   6:{quote:"Let us sacrifice our today so that our children can have a better tomorrow.",
      author:"A. P. J. Abdul Kalam"},
   7:{quote:"It is better to be feared than loved, if you cannot be both.",
      author:"Niccolo Machiavelli"},
   8:{quote:"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
      author:"Herny James"},
   9:{quote:"Learning never exhausts the mind.",
      author:"Leonardo da Vinci"},
   10:{quote:"There is no charm equal to tenderness of heart. ",
       author:"Jane Austen"},
}

function getRandomQuote()
{
  let quoteObject=quoteList[Math.floor(Math.random()*10)];
 console.log(quoteObject);
  let auth=quoteObject.author;
  let quot=quoteObject.quote;
  console.log(auth);
  console.log(quot);
  document.getElementById("author").innerHTML= auth;
 document.getElementById("text").innerHTML= quot;
}
