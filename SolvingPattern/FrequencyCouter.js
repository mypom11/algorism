// 두개의 배열을 허용하는 same이라는 함수를 작성하십시오.
// 배열의 모든 값이 두 번째 배열에 해당하는 값을 가지면 참을 반환해야 합니다.
// 따라서 첫번째 배열에는 여러 값이 있는데 두번째 배열의 값이 정확히 동일하지만 제곱이 되어 있는지 알고자 합니다.

//첫번째 배열에 있는 값의 제곱이 두번째 배열에 모두 있으면 true 아니면 false 인 문제
/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))

// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)
/*
function vaildAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1
  }
  console.log(frequencyCounter1, frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(vaildAnagram('cinnema', 'icemann'))
*/
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

validAnagram('anagrams', 'nagaramm')
