/*
You're looking to move into a new apartment on specific street, and you're given a list of continguous 
blocks on that street where each block contains an apartment that you could move into.

You also have a list of requirements: a list of buildings that are important to you. for instance, you
might value having a school and a gym near your apartment. the list of blocks that you have contains information 
at every block about all of the buildings that are present and absent at the block in question. for instance, for
every block, you might know whether a school, a pool, an office and a gym are present.

In order to optimize your life, you want to pick an apartment block such that you minimize the farthest distance you'd 
have to walk from your apartment to reach any of your required buildings.

Write a function that takes in a list of continguous blocks on a specific street and a list of your required 
buildings and that returns the location (the index) of the block that's most optimal for you.

If there are multiple most optimal blocks, your function can return the index of any one of them*/
/*
function apartmentHunting(blocks) {
  bestApartment = undefined;
  principalScore = Infinity;
  for (street = 0; street < blocks.length; street++) {
    searchList = [];
    currentScore = 0;
    if (!blocks[street].gym) {
      searchList.push("gym");
    }
    if (!blocks[street].school) {
      searchList.push("school");
    }
    if (!blocks[street].store) {
      searchList.push("store");
    }
    if (searchList === []) {
      bestApartment = street;
      break;
    }
    searchList = Object.assign({}, searchList);
    let searchListTwo = searchList;
    let left = street - 1;
    let right = street + 1;
    let rightCounter = 1;
    let leftCounter = 1;
    while (left >= 0) {
      for ([key, items] of Object.entries(searchListTwo)) {
        if (blocks[left].items) {
          delete searchList.items;
          break;
        } else if (!blocks[left].items) {
          leftCounter++;
        }
        left--;
      }
    }
    while (right < blocks.length) {
      for ([key, items] of Object.entries(searchListTwo)) {
        if (blocks[right].items) {
          delete searchListTwo.items;
          break;
        } else if (!blocks[right].items) {
          rightCounter++;
        }
        right++;
      }
    }
    currentscore = Math.min(rightCounter, leftCounter);
    principalScore = Math.min(principalScore, currentScore);
    if (principalScore <= currentScore) {
      bestApartment = street;
    }
  }
  console.log(bestApartment);
}

function apartmentHunting(blocks, reqs) {
  bestApartment = undefined;
  principalScore = Infinity;
  for (street = 0; street < blocks.length; street++) {
    for (items of reqs) {
      if (!blocks[street].items) {
        goingUpStreet(items, blocks, street);
        goingDownStreet(items, blocks, street);
      }
    }
  }
  let currentscore = Math.min(pRightCounter, pLeftCounter);
  principalScore = Math.min(principalScore, currentScore);
  if (principalScore <= currentScore) {
    bestApartment = street;
  }
  console.log(bestApartment);
}

function goingUpStreet(items, blocks, street) {
  let left = street - 1;
  let leftCounter = 1;
  let pLeftCounter = undefined;
  while (left >= 0) {
    if (blocks[left].items) {
      pLeftCounter = Math.max(pLeftCounter, leftCounter);
      break;
    }
    if (!blocks[left].items) {
      leftCounter++;
      left--;
    }
  }
  return { pLeftCounter };
}

function goingDownStreet(items, blocks, street) {
  let pRightCounter = undefined;
  let right = street + 1;
  let rightCounter = 1;
  while (right < blocks.length) {
    if (items in blocks[right]) {
      pRightCounter = Math.max(pRightCounter, rightCounter);
      break;
    }
    if (!items in blocks[right]) {
      rightCounter++;
      right++;
    }
  }
  return { pRightCounter };
}

function apartmentHunting(blocks, requirements){
  bestApartment = undefined;
  principalScore = Infinity;
  for (street = 0; street < blocks.length; street++){
    for (buildings of requirements){
      if (blocks)
    }
  }
}*/
/*
function apartmentHunting(blocks, buildings) {
  let buildingsIn = [];
  let lackOfBuildings = [];
  let bestApartment = Infinity;
  findingBuildings(buildingsIn, blocks, buildings, lackOfBuildings);
  findingBestApartment(buildingsIn, lackOfBuildings, blocks, bestApartment);
}

function findingBuildings(buildingsIn, blocks, buildings, lackOfBuildings) {
  let found = {};
  let lack = {};
  let lackit = {};
  let foundit = {};
  for (street = 0; street < blocks.length; street++) {
    let i = 1;
    for (items of buildings) {
      if (!blocks[street].items) {
        lackit = { i: true };
        foundit = { 0: true };
      }
      if (blocks[street].items) {
        lackit = { 0: true };
        foundit = { i: true };
      }
      Object.assign(lack, lackit);
      Object.assign(found, foundit);
      i++;
    }
    buildingsIn.push(found);
    lackOfBuildings.push(lack);
  }
  return buildingsIn, lackOfBuildings;
}

function apartmentHunting(blocks, buildings) {
  let buildingsIn = [];
  for (street = 0; street < blocks.length; street++) {
    let buildingsInBlock = {};
    let keys = Object.keys(blocks[street]);
    let value = Object.values(blocks[street]);
    for (let i = 0; i < value.length; i++) {
      if (value[i] === true) {
        let currentBuild = keys[i];
        buildingsInBlock = Object.assign({}, { currentBuild });
      }
    }
    buildingsIn.push(buildingsInBlock);
  }
  console.log(buildingsIn);
}*/
/*
function apartmentHunting(blocks, reqs) {
  const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          );
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      );
    }
  }
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  console.log(idxAtMinValue);
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}*/
/*
function apartmentHunting(blocks, requirements) {
  const farestDistance = new Array(blocks.length).fill(-Infinity);
  for (block = 0; block < blocks.length; block++) {
    for (const items of requirements) {
      let closestReqDistance = Infinity;
      for (let currentBlock = 0; currentBlock < blocks.length; currentBlock++) {
        if (blocks[currentBlock][items]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetweenBlock(block, currentBlock)
          );
        }
      }
      farestDistance[block] = Math.max(
        farestDistance[block],
        closestReqDistance
      );
    }
  }
  getBestApartment(farestDistance);
}
/*
function getBestApartment(array) {
  let idxBestApartment = 0;
  let bestApartment = Infinity;
  for (i = 0; i < array.length; i++) {
    let currentApartment = array[i];
    if (currentApartment < bestApartment) {
      bestApartment = currentApartment;
      idxBestApartment = i;
    }
  }
  console.log(idxBestApartment);
  return idxBestApartment;
}

function distanceBetweenBlock(a, b) {
  return Math.abs(a - b);
}*/
/*
function apartmentHunting(blocks, requirements) {
  let maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (reqs of requirements) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][reqs]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            currentDistance(i, j)
          );
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      );
    }
  }
  console.log(bestApartment(maxDistancesAtBlocks));
}

function bestApartment(array) {
  let idxOfApartment = 0;
  let theChoosen = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (theChoosen > array[i]) {
      idxOfApartment = i;
      theChoosen = array[i];
    }
  }
  return idxOfApartment;
}

function currentDistance(a, b) {
  return Math.abs(a - b);
}
*/
/*
function apartmentHunting(blocks, reqs) {
	const minDistancesFromBlocks = reqs.map(req=> getMinDistances(blocks,req));
	const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks,minDistancesFromBlocks);
	return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getMinDistances(blocks,req){
	const minDistances = new Array(blocks.length);
	let closestReqIdx = Infinity;
	for (let i=0; i<blocks.length;i++){
		if (blocks[i][req]) closestReqIdx =i;
		minDistances[i]=distanceBetween(i,closestReqIdx);
	}
	for (let i=blocks.length -1; i>=0; i--){
		if (blocks[i][req]) closestReqIdx=i;
		minDistances[i]=Math.min(minDistances[i],distanceBetween(i,closestReqIdx));
	}
	return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks){
	const maxDistancesAtBlocks = new Array(blocks.length);
	for (let i=0; i<blocks.length; i++){
		const minDistancesAtBlock = minDistancesFromBlocks.map(distances=>distances[i]);
		maxDistancesAtBlocks[i]=Math.max(...minDistancesAtBlock);
	}
	return maxDistancesAtBlocks;
}
function getIdxAtMinValue(array){
	let idxAtMinValue =0;
	let minValue= Infinity;
	for (let i=0;i<array.length;i++){
		const currentValue=array[i];
		if (currentValue<minValue){
			minValue=currentValue;
			idxAtMinValue=i;
		}
	}
	return idxAtMinValue;
}
function distanceBetween(a,b){
	return Math.abs(a-b);
}
*/
/*
function apartmentHunting(blocks, reqs) {
  const minDistancesFromBlocks = reqs.map((req) =>
    getMinDistances(blocks, req)
  );
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks
  );
  console.log(getIdxAtMinValue(maxDistancesAtBlocks));
}

function getMinDistances(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closestReqIdx = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = distanceBetween(i, closestReqIdx);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(
      minDistances[i],
      distanceBetween(i, closestReqIdx)
    );
  }
  return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  const maxDistancesAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const minDistancesAtBlock = minDistancesFromBlocks.map(
      (distances) => distances[i]
    );
    maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
  }
  return maxDistancesAtBlocks;
}
function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}
function distanceBetween(a, b) {
  return Math.abs(a - b);
}
*/
/*
function apartmentHunting(blocks, reqs) {
  const minDistancesFromBlocks = reqs.map((req) => getMinDistance(blocks, req));
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(
    minDistancesFromBlocks,
    blocks
  );
  console.log(getMinIdx(maxDistancesAtBlocks));
}

function getMinDistance(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closestReqDistance = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closestReqDistance = i;
    }
    minDistances[i] = absoluteDifference(i, closestReqDistance);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReqDistance = i;
    }
    minDistances[i] = Math.min(
      absoluteDifference(i, closestReqDistance),
      minDistances[i]
    );
  }
  return minDistances;
}

function absoluteDifference(a, b) {
  return Math.abs(a - b);
}

function getMaxDistancesAtBlocks(minDistancesFromBlocks, blocks) {
  const maxDistancesAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const minDistancesAtBlocks = minDistancesFromBlocks.map(
      (distance) => distance[i]
    );
    maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlocks);
  }
  return maxDistancesAtBlocks;
}

function getMinIdx(maxDistancesAtBlocks) {
  let indxAtMinValue = 0;
  let bestApartment = Infinity;
  for (let i = 0; i < maxDistancesAtBlocks.length; i++) {
    let currentApartment = maxDistancesAtBlocks[i];
    if (currentApartment < bestApartment) {
      indxAtMinValue = i;
      bestApartment = maxDistancesAtBlocks[i];
    }
  }
  return indxAtMinValue;
}
*/
//encontrar cada requisitos mas cercanos hacia cada bloque
//de esos requisistos, se eligira la mayor de cada uno de ellos; es decir si un bloque tiene gym:1, store: 2; school:3
//la clasificacion de ese bloque sera 3 (esas clasificaciones estaran en un array)
// elegir el menor numero de ese array y devolver su indice
/*
function apartmentHunting(blocks, reqs) {
  const distanceOfRequirments = reqs.map((req) =>
    getDistanceOfRequirments(blocks, req)
  );
  const distanceOfBlocks = getDistanceOfBlocks(distanceOfRequirments, blocks);
  console.log(getBestApartment(distanceOfBlocks));
}

function getDistanceOfRequirments(blocks, req) {
  //para definirla necesitamos recorrer cada rquqerimiento en cada bloque hacia adelante
  //en este array pondremos los resultados de cada uno de los requerimientos
  const distanceBetweenReq = new Array(blocks.length);
  //esta variable define el requerimiento actual mas cercano
  let closestReq = Infinity;
  //se comenzara con el loop hacia adelante
  for (let i = 0; i < blocks.length; i++) {
    //si es verdadero, el indice mas cercano de todos los requerimientos ser = i
    if (blocks[i][req]) {
      closestReq = i;
    }
    // y la distancia mas cercana de cada bloque = a la diferencia absoluta del inidice con el requerimiento mas cercano
    distanceBetweenReq[i] = absoluteDifference(i, closestReq);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    // esta vez la distancia entre cada requisisto sera la diferencia absoluta pasada, pero se eligira al menor entre esa nueva distancia y la actual
    distanceBetweenReq[i] = Math.min(
      distanceBetweenReq[i],
      absoluteDifference(i, closestReq)
    );
  }
  return distanceBetweenReq;
}

function getDistanceOfBlocks(distanceOfRequirments, blocks) {
  // a este nuevo array se empujaran los resultados de cada uno de los bloques
  let distanceOfBlocks = new Array(blocks.length);
  for (i = 0; i < blocks.length; i++) {
    //esta variable se hace para poder separar cada una de las distancias de los primeros indidces en otro array
    const colDistancesOfReq = distanceOfRequirments.map(
      (distances) => distances[i]
    );
    //elige al mayor de cada uno de los indidces separandolo del resto de ellos
    distanceOfBlocks[i] = Math.max(...colDistancesOfReq);
  }
  return distanceOfBlocks;
}

function getBestApartment(distanceOfBlocks) {
  bestApartment = Infinity;
  minIdx = 0;
  for (let i = 0; i < distanceOfBlocks; i++) {
    if (distanceOfBlocks[i] < bestApartment) {
      minIdx = i;
    }
  }
  return minIdx;
}

function absoluteDifference(a, b) {
  return Math.abs(a - b);
}*/

//obtener los indices que cada bloque necesitas para alcanzar a cada requerimiento
//para cada bloque elegir el requerimiento mas lejano como su calificacion
//elegir el bloque que tenga la calificacion mas baja
/*
function apartmentHunting(blocks, reqs) {
  const maxDistanceBetweenBlocks = reqs.map((req) =>
    getMaxDistanceBetweenBlocks(req, blocks)
  );
  const blocksCalification = getCalifications(maxDistanceBetweenBlocks, blocks);
  return getBestBlock(blocksCalification);
}

function getMaxDistanceBetweenBlocks(req, blocks) {
  const distanceForEachReq = new Array(blocks.length);
  let closestReq = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    distanceForEachReq[i] = absoluteDifference(closestReq, i);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    distanceForEachReq[i] = Math.min(
      distanceForEachReq[i],
      absoluteDifference(closestReq, i)
    );
  }
  console.log(distanceForEachReq);
  return distanceForEachReq;
}

function getCalifications(maxDistanceBetweenBlocks, blocks) {
  const calification = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const calificacionOfBlock = maxDistanceBetweenBlocks.map(
      (distance) => distance[i]
    );
    calification[i] = Math.max(...calificacionOfBlock);
  }
  console.log(calification);
  return calification;
}

function getBestBlock(blocksCalification) {
  minIdx = 0;
  bestBlock = Infinity;
  for (i = 0; i < blocksCalification.length; i++) {
    let currentBlock = blocksCalification[i];
    if (currentBlock < bestBlock) {
      bestBlock = currentBlock;
      minIdx = i;
    }
  }
  console.log(minIdx);
  return minIdx;
}

function absoluteDifference(a, b) {
  return Math.abs(a - b);
}
*/
/*
function apartmentHunting(blocks, reqs) {
  const blocksCalification = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (req of reqs) {
      let closestReq = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReq = Math.min(closestReq, absoluteDifference(j, i));
        }
      }
      blocksCalification[i] = Math.max(blocksCalification[i], closestReq);
    }
  }
  return getBestApartment(blocksCalification);
}

function getBestApartment(array) {
  let minIdx = 0;
  let bestApartment = Infinity;
  for (let i = 0; i < array.length; i++) {
    let currentApartment = array[i];
    if (currentApartment < bestApartment) {
      minIdx = i;
      bestApartment = currentApartment;
    }
  }
  console.log(minIdx);
  return minIdx;
}

function absoluteDifference(a, b) {
  return Math.abs(a - b);
}
*/

//por cada requisito buscar que tan cerca esta ese requisito de cada bloque
//ponerle nota a cada bloque; la nota sera la distancia mas larga que tiene ese bloque para alcanzar a cualquier requisito
//de esas calificaciones elegir la mayor
/*
function apartmentHunting(blocks, reqs) {
  const closestReqDistance = reqs.map((req) => getClosestReq(blocks, req));
  const farestDistanceForBlocks = getFarestDistance(closestReqDistance, blocks);
  return getBestApartment(farestDistanceForBlocks);
}

function getClosestReq(blocks, req) {
  const closestBlockReq = new Array(blocks.length);
  let closestReq = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    closestBlockReq[i] = distance(i, closestReq);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    closestBlockReq[i] = Math.min(closestBlockReq[i], distance(i, closestReq));
  }
  return closestBlockReq;
}

function getFarestDistance(closestBlockReq, blocks) {
  const califications = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    distanceOfEachBlock = closestBlockReq.map((blockReq) => blockReq[i]);
    califications[i] = Math.max(...distanceOfEachBlock);
  }
  return califications;
}

function getBestApartment(array) {
  let minIdx = 0;
  let bestApartment = Infinity;
  for (let i = 0; i < array.length; i++) {
    let currentApartment = array[i];
    if (currentApartment < bestApartment) {
      bestApartment = currentApartment;
      minIdx = i;
    }
  }
  return minIdx;
}

function distance(a, b) {
  return Math.abs(a - b);
}*/
/*
function apartmentHunting(blocks, reqs) {
  const distanceBetweenBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (req of reqs) {
      let closestReq = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReq = Math.min(closestReq, difference(j, i));
        }
      }
      distanceBetweenBlocks[i] = Math.max(distanceBetweenBlocks[i], closestReq);
    }
  }
  return getBestApartment(distanceBetweenBlocks);
}

function getBestApartment(array) {
  let minIdx = 0;
  let bestApartment = Infinity;
  for (i = 0; i < array.length; i++) {
    let currentApartment = array[i];
    if (currentApartment < bestApartment) {
      bestApartment = currentApartment;
      minIdx = i;
    }
  }
  return minIdx;
}

function difference(a, b) {
  return Math.abs(a - b);
}
*/

function apartmentHunting(blocks, reqs) {
  closestBlockPerReq = reqs.map((req) => getClosestReq(req, blocks));
  maxDistanceOfEachReq = getMaxDistance(closestBlockPerReq, blocks);
  return getBestApartment(maxDistanceOfEachReq);
}

function getClosestReq(req, blocks) {
  const closestReqDistance = new Array(blocks.length);
  let closestReq = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    closestReqDistance[i] = distanceBetween(i, closestReq);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) {
      closestReq = i;
    }
    closestReqDistance[i] = Math.min(
      closestReqDistance[i],
      distanceBetween(i, closestReq)
    );
  }
  return closestReqDistance;
}

function getMaxDistance(closestDistance, blocks) {
  const distanceBetweenBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const distanceOfEachBlock = closestDistance.map((distance) => distance[i]);
    distanceBetweenBlocks[i] = Math.max(...distanceOfEachBlock);
  }
  return distanceBetweenBlocks;
}

function getBestApartment(array) {
  let bestApartment = Infinity;
  let minIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let currentApartment = array[i];
    if (currentApartment < bestApartment) {
      bestApartment = currentApartment;
      minIdx = i;
    }
  }
  console.log(minIdx);
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

apartmentHunting(
  [
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: true,
      school: false,
      store: false,
    },
    {
      gym: true,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: true,
    },
  ],
  ["gym", "school", "store"]
);
