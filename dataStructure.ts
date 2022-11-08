let arr: number[] = [];

function push(element: number): boolean {
  arr[arr.length] = element;
  return true;
}

function pop(): number {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr[newArr.length] = arr[i];
  }

  arr = newArr;
  return arr[arr.length - 1];
}

function enqueue(element: number): boolean {
    arr[arr.length] = element;
  return true;
}

function dequeue(): number | undefined {
    if(arr.length === 0) {
        return undefined
    }

    let newArr = [];

    for(let i = 1; i < arr.length; i++){
        newArr[newArr.length] = arr[i];
    }

    arr = newArr;
  return arr[0];
}

