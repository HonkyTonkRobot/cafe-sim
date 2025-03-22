//////////////////////////////
// -- utility functions -- //
////////////////////////////

// -- Random Order Size -- //
export function getRandomOrderSize(max: number, min: number) {
  Math.floor(Math.random() * (max - min + 1)) - min
}
