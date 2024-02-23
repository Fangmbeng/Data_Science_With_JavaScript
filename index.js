const dataForge = require('data-forge'); require('data-forge-fs');
const pandas = require('pandas');
const dataFrame = require('dataframe');
const JSONStream = require('JSONStream');
const file = require('./qb_data.json');
const fs = require('fs');

// Create a DataFrame from the JSON data
const df = new dataForge.DataFrame(file);

/*1 Question
Which player had the highest single game Completion Percentage? */

function getSingleGameCompletion(player){
  let Arr = [];
  for(let i=0; i < player.length ; i++){
  Arr.push(player.at(i).Completions)
  }
  return Math.max(...Arr)
}
console.log('Question 1');
//Prints out result per player
console.log(df.at(0).Player, 'single game completion', getSingleGameCompletion(df.at(0).Games));
console.log(df.at(1).Player, 'single game completion', getSingleGameCompletion(df.at(1).Games));
console.log(df.at(2).Player, 'single game completion', getSingleGameCompletion(df.at(2).Games));
console.log(df.at(3).Player, 'single game completion', getSingleGameCompletion(df.at(3).Games));
console.log(df.at(4).Player, 'single game completion', getSingleGameCompletion(df.at(4).Games), '\n');
console.log('Conclusion player with the highest Single Game Completion ', df.at(0).Player, '\n')

/* Output
QB1 single game completion 36
QB2 single game completion 27
QB3 single game completion 27
QB4 single game completion 25
QB5 single game completion 30

Conclusion player with the highest Single Game Completion QB1
*/

/* Question 2
Which player had the lowest single game Yards Per Attempt? *
*/
function getYardsPerAttempts(player){
  let Arr = [];
  for(let i=0; i < player.length ; i++){
  Arr.push(player.at(i).Yards/player.at(i).Attempts)
  }
  return Math.min(...Arr)
}

console.log('Question 2');
//Prints out result per player
console.log(df.at(0).Player,'Yards per Attempts', getYardsPerAttempts(df.at(0).Games));
console.log(df.at(1).Player,'Yards per Attempts', getYardsPerAttempts(df.at(1).Games));
console.log(df.at(2).Player,'Yards per Attempts', getYardsPerAttempts(df.at(2).Games));
console.log(df.at(3).Player,'Yards per Attempts', getYardsPerAttempts(df.at(3).Games));
console.log(df.at(4).Player,'Yards per Attempts', getYardsPerAttempts(df.at(4).Games), '\n');
console.log('Conclusion player with the Least Yards per Attempts', df.at(0).Player, '\n')

/* Output
QB1 Yards per Attempts 2.6
QB2 Yards per Attempts 5.6571428571428575
QB3 Yards per Attempts 4.586206896551724
QB4 Yards per Attempts 3.3043478260869565
QB5 Yards per Attempts 6.222222222222222

Conclusion QB1
*/

/*Question 3
Which player had the least Passing Yards for the season? */

function getLeastPassingYards(player){
  let Arr = [];
  for(let i=0; i < player.length ; i++){
    Arr.push(player.at(i).Yards)
  };
  return Arr.reduce((x,y)=>x+y, 0)
}

console.log('Question 3');
//Prints out result per player
console.log(df.at(0).Player, "Passing Yards", getLeastPassingYards(df.at(0).Games));
console.log(df.at(1).Player, "Passing Yards", getLeastPassingYards(df.at(1).Games));
console.log(df.at(2).Player, "Passing Yards", getLeastPassingYards(df.at(2).Games));
console.log(df.at(3).Player, "Passing Yards", getLeastPassingYards(df.at(3).Games));
console.log(df.at(4).Player, "Passing Yards", getLeastPassingYards(df.at(4).Games), '\n');
console.log('Conclusion player with the least Passing yards', df.at(3).Player, '\n')

/**Output
QB1 Passing Yards 2836
QB2 Passing Yards 3129
QB3 Passing Yards 3146
QB4 Passing Yards 1823
QB5 Passing Yards 2762

Conclusion player with the least Passing yards QB4
 */

/**Question 4
 *  Which player had the most Touchdowns for the season?
 */

function getTouchDowns(player){
  let Arr = [];
  for(let i=0; i < player.length ; i++){
    Arr.push(player.at(i).Touchdowns)
  };
  return Arr.reduce((x,y)=>x+y, 0)
}

console.log('Question 4');
//Prints out result per player
console.log(df.at(0).Player, 'TouchDowns', getTouchDowns(df.at(0).Games));
console.log(df.at(1).Player, 'TouchDowns', getTouchDowns(df.at(1).Games));
console.log(df.at(2).Player, 'TouchDowns', getTouchDowns(df.at(2).Games));
console.log(df.at(3).Player, 'TouchDowns', getTouchDowns(df.at(3).Games));
console.log(df.at(4).Player, 'TouchDowns', getTouchDowns(df.at(4).Games), '\n');
console.log('Conclusion player with the most TouchDpwns is', df.at(1).Player, '\n')
/**
QB1 TouchDowns 20
QB2 TouchDowns 29
QB3 TouchDowns 14
QB4 TouchDowns 15
QB5 TouchDowns 26

Conclusion player with the most TouchDpwns is QB2
 */

/**Question 5
 * List the player names by their Season Completion Percentage in descending order. List the names in order, separated by a comma with no spaces like this: QB1,QB2,QB3,QB4,QB5 
 */

function getPercentageCompletions(player){
  let arrCompletion = [];
  let arrAttempts=[];
  for(let i=0; i < player.length ; i++){
    arrCompletion.push(player.at(i).Completions)
    arrAttempts.push(player.at(i).Attempts)
  };
  return (arrCompletion.reduce((x,y)=>x+y, 0)/arrAttempts.reduce((a,b)=>a+b, 0))*100
}

console.log('Question 5 \n List the player names by their Season Completion Percentage in descending order. List the names in order, separated by a comma with no spaces like this: QB1,QB2,QB3,QB4,QB5 ');
//Prints out result per player
console.log(df.at(0).Player, 'Completion Percentage', getPercentageCompletions(df.at(0).Games), '%');
console.log(df.at(1).Player, 'Completion Percentage', getPercentageCompletions(df.at(1).Games), '%');
console.log(df.at(2).Player, 'Completion Percentage', getPercentageCompletions(df.at(2).Games), '%');
console.log(df.at(3).Player, 'Completion Percentage', getPercentageCompletions(df.at(3).Games), '%');
console.log(df.at(4).Player, 'Completion Percentage', getPercentageCompletions(df.at(4).Games), '%', '\n');
console.log('Conclusion Season Completion Percentage in descending order: QB5, QB2, QB3, QB1, QB4', '\n')

/**Output
 * QB1 Completion Percentage 57.00712589073634 %
 * QB2 Completion Percentage 68.0921052631579 %
 * QB3 Completion Percentage 64.10891089108911 %
 * QB4 Completion Percentage 52.108433734939766 %
 * QB5 Completion Percentage 71.17437722419929 %
 
Conclusion  QB5, QB2, QB3, QB1, QB4
 */

/**Quest6
 * Which player had the highest single game Passer Rating? You can find the NFL Passer Rating formula here: https://en.wikipedia.org/wiki/Passer_rating#NFL_and_CFL_formula
 */

function getMaxPassingRate(player){
  let arrPassingRate=[];
  for(let i=0; i < player.length ; i++){
    comp=player.at(i).Completions
    att=player.at(i).Attempts
    yards=player.at(i).Yards
    touchDowns=player.at(i).Touchdowns
    interceptions=player.at(i).Interceptions
    arrPassingRate.push((((((comp/att)-0.3)*5)+(((yards/att)-3)*0.25)+((touchDowns/att)*20)+(2.375-((interceptions/att)*25)))/6)*100)
  };
  return Math.max(...arrPassingRate)
}

console.log('Question 6');
//Prints out result per player
console.log(df.at(0).Player, ' single game Passer Rating', getMaxPassingRate(df.at(0).Games));
console.log(df.at(1).Player, ' single game Passer Rating', getMaxPassingRate(df.at(1).Games));
console.log(df.at(2).Player, ' single game Passer Rating', getMaxPassingRate(df.at(2).Games));
console.log(df.at(3).Player, ' single game Passer Rating', getMaxPassingRate(df.at(3).Games));
console.log(df.at(4).Player, ' single game Passer Rating', getMaxPassingRate(df.at(4).Games), '\n');
console.log('Conclusion: player with single game Passer Rating', df.at(0).Player, '\n')

 /*Output
 QB1 single game Passer Rating 216.96428571428572 
 QB2 single game Passer Rating 213.02083333333334 
 QB3 single game Passer Rating 155.17857142857144 
 QB4 single game Passer Rating 105.11363636363636 
 QB5 single game Passer Rating 209.28030303030303 

 conclusion: player with single game Passer Rating QB1
  */

 /**Question 7
  * What was the value of the highest single game Passer Rating? (Limit to 1 decimal point i.e. 108.3)
  * 
  * Answer 216.9 or more precisely 217.0
  */
 console.log('Question 7');
 console.log(df.at(0).Player, getMaxPassingRate(df.at(0).Games).toFixed(1), '\n');

 /**
  * Questions 8
  * Which player had the lowest single game Passer Rating? 
  */

 function getLeastPassingRate(player){
  let arrPassingRate=[];
  for(let i=0; i < player.length ; i++){
    comp=player.at(i).Completions
    att=player.at(i).Attempts
    yards=player.at(i).Yards
    touchDowns=player.at(i).Touchdowns
    interceptions=player.at(i).Interceptions
    arrPassingRate.push((((((comp/att)-0.3)*5)+(((yards/att)-3)*0.25)+((touchDowns/att)*20)+(2.375-((interceptions/att)*25)))/6)*100)
  };
  return Math.min(...arrPassingRate)
};

console.log('Question 8');
//Prints out result per player
console.log(df.at(0).Player, 'least Passing Rate', getLeastPassingRate(df.at(0).Games));
console.log(df.at(1).Player, 'least Passing Rate', getLeastPassingRate(df.at(1).Games));
console.log(df.at(2).Player, 'least Passing Rate', getLeastPassingRate(df.at(2).Games));
console.log(df.at(3).Player, 'least Passing Rate', getLeastPassingRate(df.at(3).Games));
console.log(df.at(4).Player, 'least Passing Rate', getLeastPassingRate(df.at(4).Games), '\n');

console.log('Conclusion: player with the least paasing rate', df.at(2).Player, '\n')

/**
 * Output
 * QB1 least Passing Rate 35.763888888888886
 * QB2 least Passing Rate 87.5595238095238
 * QB3 least Passing Rate 24.066091954022987
 * QB4 least Passing Rate 39.58333333333333
 * QB5 least Passing Rate 68.40277777777777
 * 
 * Conclusion: player with the least paasing rate QB3
 */

/**
 * Question 9
 * What was the value of the lowest single game Passer Rating? (Limit to 1 decimal point i.e. 108.3)
 * 
 * Answer 24.1
 */
console.log('Question 9');
console.log("Answer", df.at(2).Player, getLeastPassingRate(df.at(2).Games).toFixed(1), '\n');

/**
 * Question 10
 * Which player had the highest season Passer Rating? 
 */

function getMostSeasonPassingRate(player){
  let arrAttempts=[];
  let arrCompletion=[];
  let arrTouchDowns=[];
  let arrInterceptions=[];
  let arrYards=[];
  let arrMaxPassingRate=[];
  for(let i=0; i < player.length ; i++){
    arrCompletion.push(player.at(i).Completions)
    arrAttempts.push(player.at(i).Attempts)
    arrYards.push(player.at(i).Yards)
    arrTouchDowns.push(player.at(i).Touchdowns)
    arrInterceptions.push(player.at(i).Interceptions)
  };
  let sumComp=arrCompletion.reduce((x,y)=>x+y, 0)
  let sumAtt=arrAttempts.reduce((a,b)=>a+b, 0)
  let sumYards=arrYards.reduce((c,d)=>c+d, 0)
  let sumTouchDowns=arrTouchDowns.reduce((e,f)=>e+f, 0)
  let sumInterception=arrInterceptions.reduce((g,h)=>g+h, 0)
  arrMaxPassingRate.push((((((sumComp/sumAtt)-0.3)*5)+(((sumYards/sumAtt)-3)*0.25)+((sumTouchDowns/sumAtt)*20)+(2.375-((sumInterception/sumAtt)*25)))/6)*100)
  return Math.max(...arrMaxPassingRate)
}

console.log('Question 10');

//Print out results per player
console.log(df.at(0).Player, 'most season passing rate', getMostSeasonPassingRate(df.at(0).Games));
console.log(df.at(1).Player, 'most season passing rate', getMostSeasonPassingRate(df.at(1).Games));
console.log(df.at(2).Player, 'most season passing rate', getMostSeasonPassingRate(df.at(2).Games));
console.log(df.at(3).Player, 'most season passing rate', getMostSeasonPassingRate(df.at(3).Games));
console.log(df.at(4).Player, 'most season passing rate', getMostSeasonPassingRate(df.at(4).Games), '\n');
console.log('Conclusion: player with the most season passing rate', df.at(4).Player, '\n')

/**
 * Output
 * QB1 most season passing rate 86.56472684085512
 * QB2 most season passing rate 123.91721491228071
 * QB3 most season passing rate 92.2854785478548
 * QB4 most season passing rate 73.40612449799198
 * QB5 most season passing rate 124.29567022538552
 * 
 * Conclusion: player with the most season passing rate QB5
 */

/**
 * Question 11
 *  Which player had the highest season Passer Rating for the first 3 games? 
 */
function getFirstThreeGamesMostSeasonPassingRate(player){
  let arrAttempts=[];
  let arrCompletion=[];
  let arrTouchDowns=[];
  let arrInterceptions=[];
  let arrYards=[];
  let arrMaxPassingRate=[];
  for(let i=0; i < 3 ; i++){
    arrCompletion.push(player.at(i).Completions)
    arrAttempts.push(player.at(i).Attempts)
    arrYards.push(player.at(i).Yards)
    arrTouchDowns.push(player.at(i).Touchdowns)
    arrInterceptions.push(player.at(i).Interceptions)
  };
  let sumComp=arrCompletion.reduce((x,y)=>x+y, 0)
  let sumAtt=arrAttempts.reduce((a,b)=>a+b, 0)
  let sumYards=arrYards.reduce((c,d)=>c+d, 0)
  let sumTouchDowns=arrTouchDowns.reduce((e,f)=>e+f, 0)
  let sumInterception=arrInterceptions.reduce((g,h)=>g+h, 0)
  arrMaxPassingRate.push((((((sumComp/sumAtt)-0.3)*5)+(((sumYards/sumAtt)-3)*0.25)+((sumTouchDowns/sumAtt)*20)+(2.375-((sumInterception/sumAtt)*25)))/6)*100)
  return Math.max(...arrMaxPassingRate)
}

console.log('Question 11');

//Print out results per player
console.log(df.at(0).Player, 'First 3  of season passing rate', getFirstThreeGamesMostSeasonPassingRate(df.at(0).Games));
console.log(df.at(1).Player, 'First 3  of season passing rate', getFirstThreeGamesMostSeasonPassingRate(df.at(1).Games));
console.log(df.at(2).Player, 'First 3  of season passing rate', getFirstThreeGamesMostSeasonPassingRate(df.at(2).Games));
console.log(df.at(3).Player, 'First 3  of season passing rate', getFirstThreeGamesMostSeasonPassingRate(df.at(3).Games));
console.log(df.at(4).Player, 'First 3  of season passing rate', getFirstThreeGamesMostSeasonPassingRate(df.at(4).Games), '\n');
console.log('Conclusion: ', df.at(1).Player, '\n')

/**
 * Output
 * QB1 First 3  of season passing rate 95.13888888888889
 * QB2 First 3  of season passing rate 130.52083333333334
 * QB3 First 3  of season passing rate 80.05319148936171
 * QB4 First 3  of season passing rate 76.69573643410853
 * QB5 First 3  of season passing rate 87.85256410256412
 * 
 * Conclusion: QB2
 */

/**
 * Question 12
 * Excluding each player’s highest and lowest single game Passer Rating, which player had the highest Passer Rating for the season? 
 */

function getMostSeasonPassingRateExcludedGames(player){
  let arrAttempts=[];
  let arrCompletion=[];
  let arrTouchDowns=[];
  let arrInterceptions=[];
  let arrYards=[];
  let arrMaxPassingRate=[];
  for(let i=0; i < player.length ; i++){
    arrCompletion.push(player.at(i).Completions)
    arrAttempts.push(player.at(i).Attempts)
    arrYards.push(player.at(i).Yards)
    arrTouchDowns.push(player.at(i).Touchdowns)
    arrInterceptions.push(player.at(i).Interceptions)
  };
  let sumComp=arrCompletion.reduce((x,y)=>x+y, 0) -(Math.max(...arrCompletion))-(Math.min(...arrCompletion))
  let sumAtt=arrAttempts.reduce((a,b)=>a+b, 0) -(Math.max(...arrAttempts))-(Math.min(...arrAttempts))
  let sumYards=arrYards.reduce((c,d)=>c+d, 0) -(Math.max(...arrYards))-(Math.min(...arrYards))
  let sumTouchDowns=arrTouchDowns.reduce((e,f)=>e+f, 0) -(Math.max(...arrTouchDowns))-(Math.min(...arrTouchDowns))
  let sumInterception=arrInterceptions.reduce((g,h)=>g+h, 0) -(Math.max(...arrInterceptions))-(Math.min(...arrInterceptions))
  arrMaxPassingRate.push((((((sumComp/sumAtt)-0.3)*5)+(((sumYards/sumAtt)-3)*0.25)+((sumTouchDowns/sumAtt)*20)+(2.375-((sumInterception/sumAtt)*25)))/6)*100)
  return Math.max(...arrMaxPassingRate)
}

console.log('Question 12');

//Prints out results per player
console.log(df.at(0).Player, 'most passing rate excluding min and max passing rate', getMostSeasonPassingRateExcludedGames(df.at(0).Games));
console.log(df.at(1).Player, 'most passing rate excluding min and max passing rate', getMostSeasonPassingRateExcludedGames(df.at(1).Games));
console.log(df.at(2).Player, 'most passing rate excluding min and max passing rate', getMostSeasonPassingRateExcludedGames(df.at(2).Games));
console.log(df.at(3).Player, 'most passing rate excluding min and max passing rate', getMostSeasonPassingRateExcludedGames(df.at(3).Games));
console.log(df.at(4).Player, 'most passing rate excluding min and max passing rate', getMostSeasonPassingRateExcludedGames(df.at(4).Games), '\n');
console.log('Concluded: player with most passing rate excluding min and max passing rate', df.at(1).Player, '\n')

/**
 * Output
 * QB1 most passing rate excluding min and max passing rate 86.52620396600567
 * QB2 most passing rate excluding min and max passing rate 125.31167979002625
 * QB3 most passing rate excluding min and max passing rate 91.34990253411304
 * QB4 most passing rate excluding min and max passing rate 72.721119133574
 * QB5 most passing rate excluding min and max passing rate 122.30865522174534
 * 
 * Conclusion player with most passing rate excluding min and max passing rate QB2
 */