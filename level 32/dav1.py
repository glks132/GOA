# 1)შექმენით .join()-ის კლონი.
def join_clone(element):
    result = ""
    k = input("Enter any symbol: ")
    for i in element:
        result += i + k

    return result[:-len(k)]



ka = ['adad', "dadad", "dada"]
print(join_clone(ka))
