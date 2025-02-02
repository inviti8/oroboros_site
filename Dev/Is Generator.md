# Is Generator

Check if account is a generator.

## Parameters

- `args`: The account to check. (`ICRC1.Account`)

## Return Value

- `Bool`: True if the account is authorized as a generator, false otherwise.

&nbsp;

## Example Call

Here's how you can construct a call for this method using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";


public shared func isOroGenerator(args : ICRC1.Account) : bool {
    switch(OroTypes.isGenerator(args, "My_Moniker")){
        case(null) {
              return false;
            };
            case(?num){
              return true;;
            };
      };
};
```