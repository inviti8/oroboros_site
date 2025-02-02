# Is In Generation

Check if Account is in Generation.

## Parameters

- `args`: The account to check. (`ICRC1.Account`)
- `moniker`: The unique identifier for the generation. (`Text`)

## Return Value

- `?Text`: Returns the generation mark if the account is participating, or an error message otherwise.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

public shared func inMyGeneration(args : ICRC1.Account) : bool {
    switch(OroTypes.isInGeneration(args, "My_Moniker")){
        case(null) {
              return false;
            };
            case(?num){
              return true;;
            };
      };
};
```