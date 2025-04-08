//write your code here
let pronouns = ["the", "our"];
let adjetives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io", ".cl"];

pronouns.forEach((pronoun) => {
  adjetives.forEach((adj) => {
    nouns.forEach((subj) => {
      extentions.forEach((ext) => {
        let domain = pronoun + adj + subj + ext;
        console.log(domain);
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
