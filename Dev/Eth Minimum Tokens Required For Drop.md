# Eth Minimum Tokens Required For Drop

Retrieve the minimum CkEth tokens required for a drop.

## Parameters

- None

## Return Value

- `Float`: The minimum CkEth tokens required for a drop, expressed as a float.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

//Get the minimum CkEth required to create an ephemeral drop.
let min = OroTypes.ethMinimumTokensRequiredForDrop();
```