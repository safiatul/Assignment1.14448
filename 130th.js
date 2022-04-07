let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');