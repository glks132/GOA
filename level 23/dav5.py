# 5)მომხმარებელს შემოატანინე მისი საყვარელი კინო და რაიმე ასო, დაპრინტე True
#  თუ ეს ასო ამ კინოს სახელშია, თუ არადა დაპრინტე False

Movie = input("Enter your favourite movie: ")
letter = input("Enter any letter: ")
a=False

for i in Movie:
    if i==letter:
        a=True

print(a)
