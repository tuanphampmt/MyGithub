interface LabelValue {
    label?: string; // co hoac khong deu duoc
    size: number;
}

function printLabel1(labelObj: LabelValue) {
        console.log("Label: " + labelObj.label + " - Size: " + labelObj.size); 
}

let _object = {size: 10};
printLabel1(_object);