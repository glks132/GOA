# 3)მომხმარებელს შემოატანინეთ მისი ასაკი და ასევე მისი სახელი, თუ მომხმარებლის სახელი ემთხვევა თქვენს
# სახელს და ასევე მისი ასაკი ემთხვევა თქვენს სახელს, დაბეჭდეთ "Twins" სხვა შემთხვევაში "Not Twins".

MyName="ალექსანდრე"
MyAge=14

Name= input("Enter your name: ")
Age=int(input("Enter your Age"))

if Name==MyName and Age==MyAge:
    print("Twins")
else:
    print("Not Twins")


