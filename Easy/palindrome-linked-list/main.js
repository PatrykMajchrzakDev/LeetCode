// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

var isPalindrome = function (head) {
  // Convert the linked list to an array
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  if (arr.length % 2 === 1 || arr.length < 4) {
    return false;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
