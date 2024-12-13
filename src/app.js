//write your code here
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io", ".cl"];

pronoun.forEach((pronombre) => {
  adj.forEach((adjetivo) => {
    noun.forEach((sujeto) => {
      ext.forEach((extension) => {
        let dominio = pronombre + adjetivo + sujeto + extension;
        console.log(dominio);
      });
    });
  });
});

// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com
