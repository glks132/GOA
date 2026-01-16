# ცვლადში შეინახეთ თქვენი საყვარელი რიცხვი და მომხმარებელს შემოატანინეთ ასევე მისი საყვარელი რიცხვი,
# თუ თქვენი რიცხვები ემთხვევა მაშინ დაბეჭდეთ 
# "Perfect" თუ მისი რიცხვი მეტია, დაბეჭდეთ "More", სხვა შემთხვევაში "Less".

FavNumber = 1
YourFavNumber = int(input("Enter Your Favourite Number: "))

if YourFavNumber==FavNumber:
    print("perfect")
if YourFavNumber < FavNumber:
    print("More")
if YourFavNumber > FavNumber:
    print("Less")