# Get Generator Epoch

### `getGeneratorEpoch`

This method retrieves the generator epoch from the provided account.

## Parameters

- `account`: The ICRC1.Account for which you want to retrieve the generator epoch.

## Return Value

- `?Nat`: The method returns an optional natural number  representing the generator epoch.

&nbsp;

## Example Call

Here's how you can construct a call using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

public shared func isInEpoch(args : ICRC1.Account) : bool {
    switch(OroTypes.getGeneratorEpoch(args)){
        case(null) {
              return false;
            };
            case(?num){
              return true;;
            };
      };
};


```

&nbsp;