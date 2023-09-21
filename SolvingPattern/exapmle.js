function carCount(str) {
  // 리턴 할 오브젝트 만들기
  let result = {}
  // 문자열을 소문자로 바꾸고 띄어쓰기를 제거한다.
  const newStr = str.toLowerCase().replaceAll(' ', '')

  // 각 문자열을 loop하며....
  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i]
    //만약 문자열이 오브젝트에 키값에 존재하면 count + 1 한다
    if (result[char] > 0) {
      result[char]++
    }
    //만약 문자열이 오브젝트의 키값으로 추가하고 값을 1로 설정.
    else {
      result[char] = 1
    }
  }
  //만들어진 오브젝트를 리턴한다.
  return result
}

console.log(carCount('hi hello Hi'))
