function sort(A, points) {
    const copy = [...A];
    return mergeSort(copy, A, 0, A.length, points);
}

function mergeSort(A, result, start, end, points) {
    if(points){
        if (end - start < 2){
            return;
        }
        else if(end - start == 2) {
            if(result[start].points > result[start + 1].points) {
                let larger = result[start];
                result[start] = result[start + 1];
                result[start + 1] = larger;
                return result;
            }
        }
        const mid = Math.floor((end + start) / 2);
        mergeSort(result,A, start, mid, points);
        mergeSort(result,A, mid, end, points);
        let i = start;
        let j = mid;
        let idx = start;
        while(idx < end) {
            if(j >= end || (i < mid && A[i].points < A[j].points)){
                result[idx] = A[i]
                i += 1;
            }
            else {
                result[idx] = A[j]
                j += 1;
            }
            idx += 1;
        }
    }
    else {
        if (end - start < 2){
            return;
        }
        else if(end - start == 2) {
            if(result[start].last_name > result[start + 1].last_name) {
                let larger = result[start];
                result[start] = result[start + 1];
                result[start + 1] = larger;
                return result;
            }
        }
        const mid = Math.floor((end + start) / 2);
        mergeSort(result,A, start, mid, points);
        mergeSort(result,A, mid, end, points);
        let i = start;
        let j = mid;
        let idx = start;
        while(idx < end) {
            if(j >= end || (i < mid && A[i].last_name < A[j].last_name)){
                result[idx] = A[i]
                i += 1;
            }
            else {
                result[idx] = A[j]
                j += 1;
            }
            idx += 1;
        }
    }
    return result;
}

function search(A, lname) {
    const sorted = sort(A);
    let low = 0
	let high = sorted.length - 1;
	while(low <= high){ 
		let mid = Math.floor((low + high) / 2);
		if (lname < sorted[mid].last_name) {
		    high = mid - 1
        }
        else if(lname > sorted[mid].last_name) {
            low = mid + 1
        }
        else if(lname === sorted[mid].last_name) {
            return sorted[mid]
        }
    }
}

function getMaximum(A) {
    const sorted = sort(A, true);
    return sorted[sorted.length - 1];
}

function avg(A) {
    let sum = 0;
    let N = A.length;
    A.forEach((customer, index) => { 
        sum += customer.points;
    })
    console.log(sum / N);
    return (sum / N);
}

export { sort, search, avg, getMaximum };