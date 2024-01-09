from sympy import symbols, simplify
def midpoint_rule(func,a,b,n):

    # Define the variable x
    x = symbols('x')
    sim_x=simplify(str_x)
    h = (b - a) / n
    integral = 0
    for i in range(n):
        mid = a + (i + 0.5) * h
        func=sim_x.subs(x,mid) #Result
        integral += func * h
    return(integral)
print("Mid-point Rule Example:")
print("Follwing the Instructions")
a=float(input("param a: The lower limit of integration: "))
b=float(input("param b: The upper limit of integration: "))
n=int(input("param n: The number of subintervals: "))
str_x=input("Enter a mathematical expression in terms of x: ")
approx_integral = midpoint_rule(str_x, a, b, n)
print(f"Approximate integral from {a} to {b}: {approx_integral}")