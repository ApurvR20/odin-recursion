const merge = (leftHalf, rightHalf) => {
    let i = 0, j = 0, l1 = leftHalf.length , l2 = rightHalf.length;
    const arr = [];
    while(i < l1 || j < l2)
    {
        if((i < l1 && leftHalf[i] <= rightHalf[j]) || j == l2)
        {
            arr.push(leftHalf[i]);
            i++;
        }
        else if(j < l2 ){
            arr.push(rightHalf[j]);
            j++;
        }
    }

    return arr;
}

const mergesort = (arr) => {

    if(arr.length == 1)
    return arr;

    const leftHalf = mergesort(arr.slice(0,arr.length/2));
    const rightHalf = mergesort(arr.slice(arr.length/2));

    const sortedArr = merge(leftHalf, rightHalf);
    return sortedArr;

}

console.log(`mergesort : ${mergesort([5,10,3,5,1])}`);