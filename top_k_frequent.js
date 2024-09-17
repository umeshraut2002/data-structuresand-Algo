function frequent(nums, k){
  let map = {};

  for(let num of nums){
    console.log(map.hasOwnProperty(num) ? map[num]++: map[num] = 1);
    
  }

  let order = Object.keys(map).sort((a, b) => map[b] - map[a]);
  console.log(order);
  
  return order.slice(0,k)
}

const nums = [3, 0, 8, 0];

const k = 1;

console.log(frequent(nums, k))


