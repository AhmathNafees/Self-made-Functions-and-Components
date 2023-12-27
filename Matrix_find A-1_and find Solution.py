import numpy as np;

A = np.array([[2, 1, -1], [1, 0, 1], [1, 1, 1]]);
b = np.array([0, 4, 0]);

A_inv = np.linalg.inv(A); # find A Inverse.
X = np.dot(A_inv, b); # Multible 2 matrixes.
print("A inverse is:",A_inv);

print("Solution using matrix multiplication:",X);

solution = np.linalg.solve(A, b);
# using function np.linalg.solve
print("Solution using np.linalg.solve:",solution);
