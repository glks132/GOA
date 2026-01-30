# 6) შექმენით ინტეჯერების ლისტი, და ორი ცვლადი positive, negative. გამოიტანეთ სიაში არსებული
# დადებითი რიცხცების ჯამი, უარყოფითები რიცხვების რაოდენობა და დაპრინტე "zero" რამდენჯერაც შეგხვდება 0

integer_list = [1, 2, 100, 80, -1, -7, 14, 0]


positive=0
negative=0

for i in integer_list:
    if i>0:
        positive +=i
    elif i>0:
        negative +=1
    else:
        print("0")

print("დადებითი რიცხვების ჯამი", positive)


print("უარყოფითი რიცხვების რაოდენობა", negative)