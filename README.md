# Bag of words
### A small class that creates a bag of words from any given input corpus.

#### Available methods
* addToBag(string) - adds text to the bag,
* getWord(string) - returns the number of times a word occurs in the bag,
* getBag() - returns the entire bag object,
* getMostFrequentWords() - returns a list of the most frequent words,
* getLeastFrequentWords() - returns a list of the least frequent words.

#### Example usage
```javascript
const config={
  delimiter:" ",
  toLowerCase:true,
  charBlackList:new Set([",",".","[","]","(",")"]),
  wordBlackList:new Set(["a","the"])
};

const b=new bagOfWords("The bag-of-words model is a simplifying representation used in natural language processing and information retrieval (IR). Also known as the vector space model[1]. In this model, a text (such as a sentence or a document) is represented as the bag (multiset) of its words, disregarding grammar and even word order but keeping multiplicity. The bag-of-words model has also been used for computer vision.[2] The bag-of-words model is commonly used in methods of document classification where the (frequency of) occurrence of each word is used as a feature for training a classifier[3]. An early reference to \"bag of words\" in a linguistic context can be found in Zellig Harris's 1954 article on Distributional Structure.[4]",config);

console.log(b.getWord("bag-of-words"));
console.log(b.getMostFrequentWords());
console.log(b.getLeastFrequentWords());
```
Text source: https://en.wikipedia.org/wiki/Bag-of-words_model

The wordBlackList, charBlackList, and toLowerCase parameters in the config object are optional; delimiter is mandatory. wordBlackList and charBlackList must be instances of Set.
