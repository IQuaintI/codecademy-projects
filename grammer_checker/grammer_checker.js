//Story declaration
let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

//Story .split() declaration
let storyWords = story.split(" ");

//Count declaration
let count = 0;

//unnecessaryWord declaration
let unnecessaryWord = "literally";

//misspelledWord declaration
let misspelledWord = "beautifull";

//badWord declaration
let badWord = "freaking";

//forEach() declaration
storyWords.forEach(function (word) {
  count++;
});

//filter() declaration
storyWords = storyWords.filter(function (word) {
  if (word !== unnecessaryWord) {
    return true;
  }
});

//map() declaration
storyWords = storyWords.map(function (word) {
  if (word == misspelledWord) {
    return (misspelledWord = "beautiful");
  } else {
    return word;
  }
});

//findIndex() declaration
let badWordIndex = storyWords.findIndex(function (word) {
  if (word === badWord) {
    return true;
  }
});

storyWords[78] = "really";

//every() declaration
let lengthCheck = storyWords.every(function (word) {
  if (word.length < 10) {
    return true;
  } else {
    return false;
  }
});

//Find and replace the longer word
let longWord = storyWords.findIndex(function (word) {
  if (word.length > 10) {
    return true;
  }
});

storyWords[111] = "epic";

console.log(longWord);
console.log(lengthCheck);
console.log(storyWords.join(" "));
//Story .join() declaration
//console.log(storyWords.join(" "));
