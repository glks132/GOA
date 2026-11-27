// 1) კონსოლში გამოიტანეთ სამი სხვადასხვა რიცხვის ჯამი, ნამრავლი და საშუალო არითმეტიკული.

// 2) კომენტარებით დაწერეთ, რა შედეგს დააბრუნებს თითოეული მაგალითი:
// - "Front" + "end"
// - "25" + 10
// - 100 - "30"
// - "Hello" * 2
// - "5" + 5 + 5
// - 5 + 5 + "5"

// 3) კომენტარებით ახსენით ნასწავლი მონაცემთა ტიპები. თითოეულ ტიპზე მოიყვანეთ ორი განსხვავებული მაგალითი.

// 4) კომენტარებით ახსენით შემდეგი მეთოდები და გამოიყენეთ თითოეული ორჯერ:
// - toUpperCase()
// - toLowerCase()
// - startsWith()
// - endsWith()
// - trim()
// - trimEnd()
// - trimStart()

// 5) დაწერეთ წინადადება, რომელსაც დასაწყისშიც და ბოლოშიც ექნება ზედმეტი გამოტოვებები. კონსოლში გამოიტანეთ:
// - თავდაპირველი წინადადება;
// - trim()-ის გამოყენებით მიღებული შედეგი;
// - trimStart()-ის გამოყენებით მიღებული შედეგი;
// - trimEnd()-ის გამოყენებით მიღებული შედეგი.

// 6) კომენტარებით ახსენით, რა განსხვავებაა შემდეგ მაგალითებს შორის და რა შედეგს დააბრუნებს თითოეული:
// - "javascript".startsWith("java")
// - "javascript".startsWith("Java")
// - "javascript".endsWith("script")
// - "javascript".endsWith("Script")




// 1)
console.log(2 + 3)
console.log(8 * 6)
console.log((10+9)/2)


// 2)


// "Front" + "end" FrontEnd
// "25" + 10 "2510"
// 100 - "30" 70
// "Hello" * 2 nan
// "5" + 5 + 5 555
// 5 + 5 + "5" 105



// 3)

//number - integer და float მოიცავ მაგალითად 8, 8.19 
// string - ბრჭყალებში მოქცეული ნებისმიერი სიმბოლო "Alex" "String"
// boolean - true ან false
// bigint - 2^52 - 1 ზე მეტი
// null - განძრახული არარსებული მონაცემი


// 4) კომენტარებით ახსენით შემდეგი მეთოდები და გამოიყენეთ თითოეული ორჯერ:
// - toUpperCase() ადიდებს ასოებს
// - toLowerCase() აპატარავებს ასოებს
// - startsWith() პრინტავს ბულინს სტრინგის დასაწყისის მიხედვით
// - endsWith() პრინტავს ბულინს სტრინგის დასასრულის მიხედვით
// - trim() ჭრის სფეისებს მარჯვნივ და მარცხნივ
// - trimEnd() ჭრის სფეისებს მარჯვნივ
// - trimStart() ჭრის სფეისებს მარცხნივ


toUpperCase("aaaa")
toUpperCase("alex")
toLowerCase("aaaa")
toLowerCase("alex")
"aaa".startsWith("a")
"alex".startsWith("a")
"aaa".endsWith("a")
"alex".endsWith("a")
trim(" aaa ")
trim(" alex ")
trimEnd("aaa  ")
trimEnd("alex  ")
trimStart(" alex")
trimStart(" aaaaa")



// 5)

trim("   Hello i'm alex   ")
trimStart("   Hello i'm alex   ")
trimEnd("   Hello i'm alex   ")

// 6)
// "javascript".startsWith("java") false
// - "javascript".startsWith("Java") true
// - "javascript".endsWith("script") true
// - "javascript".endsWith("Script") false
// განსხხვავებაა დიდი ასოები
