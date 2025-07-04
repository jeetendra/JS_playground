class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    return this;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const list = new LinkedList();
list.add(7);
list.add(8);
list.add(9);
console.log(list.toArray());

const list2 = new LinkedList();
list2.add(4);
list2.add(5);
list2.add(6);
console.log(list2.toArray());

function mergeLists(list1, list2) {
  let sum = 0;
  const mergedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 || current2) {
    if (current1) {
      sum += current1.value;
      current1 = current1.next;
    }
    if (current2) {
      sum += current2.value;
      current2 = current2.next;
    }

    mergedList.add(sum % 10);
    sum = Math.floor(sum / 10);
  }

  if (sum > 0) {
    mergedList.add(sum);
  }

  return mergedList;
}

console.log(mergeLists(list, list2).toArray()); // Output: [5, 7, 9]
