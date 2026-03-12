# 2)მომხმარებელს შემოატანინე მისი გვარი და გაარკვიე შეიცავს თუ არა მისი გვარი სტრინგ "shvili", ამის
#  შესაბამისად დაპრინტე True ან False

surname = input("Enter your surname: ")
a = False
# r a i m e S V I L I
# 0 1 2 3 4 5 6 7 8 9

for i in range(len(surname) -5 ):
    if surname[i: i + 6]=="shvili":
        a=True
print(a)