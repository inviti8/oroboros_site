# Btc Minimum Tokens Required For Drop

Retrieve the minimum CkBtctokens required for a drop.

## Parameters

- None

## Return Value

- `Float`: The minimum CkBtc tokens required for a drop, expressed as a float.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```
import OroTypes "OroTypes";

//Get the minimum CkBtc required to create an ephemeral drop.
let min = OroTypes.btcMinimumTokensRequiredForDrop();
```