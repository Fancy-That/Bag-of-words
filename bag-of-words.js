const bagOfWords=function(i,c){this.b={};this.addToBag=(i)=>{if(c.toLowerCase){i=i.toLowerCase();}if(c.charBlackList){i=i.split("").map(v=>c.charBlackList.has(v)?"":v).join("")}i.split(c.delimiter).forEach((w)=>{if(!c.wordBlackList||!c.wordBlackList.has(w)){if(!(w in this.b)){this.b[w]=0;}this.b[w]++}})};this.getWord=w=>w in this.b?this.b[w]:0;this.getBag=()=>this.b;this.getMostFrequentWords=()=>this.frequency(1);this.getLeastFrequentWords=()=>this.frequency(0);this.frequency=(m)=>{let l=[];let h=0;Object.keys(this.b).forEach((w)=>{if(m&&this.b[w]>h||(!m&&this.b[w]<h||!h)){h=this.b[w];l=[w]}else if(this.b[w]==h){l.push(w)}});return l};this.addToBag(i)};

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
