// Given values
const k = 0.5; // spring constant in N/m
const m = 0.05; // mass in kg
const R = 10; // resistance in ohms
const B = 0.1; // magnetic field in T
const L = 0.1; // length in m

/*
# Recalculating the number of oscillations with the corrected formula
N_correct = (1 / (2 * sp.pi)) * (R / (m * (B * L)**2))
N_correct_val = N_correct.evalf()

N_correct_val
*/

const N_correct = (1 / (2 * Math.PI)) * (R / (m * (B * L) ** 2));
console.log(N_correct);

