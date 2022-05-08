// list of each part number and qty for check-off in the "detailsList" element

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkLiftNeeded"
// element that they will need to reserve a forklift, else remove the element

// sum up the total number of parts and append that number to the text already in "totalItems" element

const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

];


let partsList = ''
parts.map(function(orderDetails){
    partsList += `<input type = checkbox>${orderDetails.qty} (${orderDetails.partNbr}) ${orderDetails.partDescr}</input><br>`
});
partsList += ''
document.querySelector('#detailsList').innerHTML = partsList;



var specialPack = parts.filter(function(special){
    return special.aisle == 'B3'
});
let specParts = '<ul>'
specialPack.map(function(special){
    specParts += `<li>Item: ${special.partNbr}/Qty: ${special.qty}</li>`
});
specParts += '</ul>'
document.querySelector("#specialPackaging").innerHTML = 'Special Packaging Required' + specParts;


var hazardousMat = parts.filter(function(hazardous){
    return hazardous.aisle == 'J4'
});
let hazMat = '<ul>'
hazardousMat.map(function(hazardous){
    hazMat += `<li>Item: (${hazardous.partNbr}) ${hazardous.partDescr}</li>`
});
hazMat += '</ul>'
document.querySelector('#hazardousMaterials').innerHTML = 'Hazardous Materials' + hazMat + 'Get gloves';


var smallParts = parts.filter(function(small){
    return small.aisle == 'H1'
});
let smallPart = '<ul>'
    smallParts.map(function(small){
        smallPart += `<li>Item: (${small.partNbr}) ${small.partDescr}</li>`
    });
smallPart += '</ul>'
document.querySelector('#smallItemsOnly').innerHTML = 'Small Items (bring basket)' + smallPart + 'Take directly to Aisle H1';


var largeItems = parts.filter(function(large){
    return large.aisle === 'S' + 'T' + 'U'
});
let largeItem = '<ul>'
    largeItems.map(function(large){
        largeItem += `Item: (${large.partNbr}) ${large.partDescr}</li>`
    });
    largeItem += '</ul>'
    document.querySelector('#forkLiftNeeded').innerHTML = 'Forklift Needed' + largeItem;

var totalQty = parts.reduce(function(currentTotal, total){
    return total.qty + currentTotal
},
    0);
document.querySelector('#totalItems').innerHTML = `Total Number of Parts in Order: ${totalQty.toLocaleString()}`
