function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
};

const BlockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId(): Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) =>{ 
            if (id < 1 || id > 800) {
                return console.log("El ID del pokemon debe estar entre 1 y 800");
            } else {
                return originalMethod(id);
            }
        }
    }
}


function readOnly( isWritable: boolean= true): Function{
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get() {
                return "Fernando";
            },
            set(this, value: any) {
                Object.defineProperty(this, propertyKey,{
                    value: value,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }

        return descriptor;
    }
}

@BlockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    @readOnly(false)
    public apiUrl: string = "https://pokeapi.co";
    constructor(private name: string) {}
    
    @CheckValidPokemonId()
    savePokemonToDatabase(id: number) {
        console.log(`Pokemon saved to database ${id}`);
    }
}
