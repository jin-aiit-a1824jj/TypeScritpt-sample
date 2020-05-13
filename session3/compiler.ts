let globalHello = 'Hello';
function echo(message: string): string | null {
  let hello = 'hello';
  return message;
}
let implicaitAny;
implicaitAny = 'implicaitAny';

let nullableMessage = echo('hi');
let undefinedableMessage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;
if (nullableMessage){
  nullableMessage.toUpperCase();
}
echo.call(null, 'hi');