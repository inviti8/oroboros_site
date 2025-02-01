# Get Btc Exchange Rate

**Retrieve the current ICP exchange rate.**

This method retrieves and returns the current CkBtc exchange rate, expressed as a float.

## Parameters

- None

## Return Value

- A `Float`: representing the current CkBtc exchange rate.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```
import OroTypes "OroTypes";

//Get the CkBtc to oro exchange rate as a float
let icpExchangeRate = OroTypes.getBtcExchangeRate();
```