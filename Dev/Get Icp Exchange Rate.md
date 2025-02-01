# Get Icp Exchange Rate

**Retrieve the current ICP exchange rate.**

This method retrieves and returns the current ICP exchange rate, expressed as a floating-point number.

## Parameters

- None

## Return Value

- A `Float` representing the current ICP exchange rate.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```Motoko
import OroTypes "OroTypes";

//Get the icp to oro exchange rate as a float
let icpExchangeRate = OroTypes.getIcpExchangeRate();
```