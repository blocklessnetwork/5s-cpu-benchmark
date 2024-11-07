import { Console, Date } from "as-wasi/assembly";

export function fibonacci(n: i32): i32 {
	if (n <= 1) {
		return n;
	}
	// Additional CPU-intensive computations
	let temp: i32 = 0;
	for (let i: i32 = 0; i < 1000; i++) {
		temp += i;
	}
	return fibonacci(n - 1) + fibonacci(n - 2) + temp;
}

function benchmark(): void {
	const startTime: i64 = Date.now() as i64;
	const duration: i64 = 5000; // 5 seconds
	let iterations: i32 = 0;

	while ((Date.now() as i64) - startTime < duration) {
		fibonacci(20); // Adjust the input value as needed
		iterations++;
	}

	Console.log(`${iterations.toString()} iterations`);
}

benchmark();
