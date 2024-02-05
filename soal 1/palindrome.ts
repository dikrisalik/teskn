function isPalindrome(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Uji Palindrome Checker
const testString = "525"; //ubah isian variable dengan kata (berupa string) yang ingin diperiksa apakah palindrome atau tidak
const result = isPalindrome(testString);

console.log(`Teks "${testString}" ${result ? 'Adalah palindrome' : 'Bukan palindrome'}`);