def splitClone(text):
    bolo = []
    word = ""

    for i in text:
        if i == " ":
            bolo.append(word)
            word = ""
        else:
            word += i

    bolo.append(word)

    return bolo


print(splitClone("hello world"))