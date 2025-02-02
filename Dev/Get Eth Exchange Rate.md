# Get Eth Exchange Rate

**Retrieve the current ICP exchange rate.**

This method retrieves and returns the current CkEth exchange rate, expressed as a float.

## Parameters

- None

## Return Value

- A `Float`: representing the current CkEth exchange rate.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

//Get the CkEth to oro exchange rate as a float
let icpExchangeRate = OroTypes.getEthExchangeRate();
```