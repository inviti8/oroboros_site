# Icp Minimum Tokens Required For Drop

**Retrieve the minimum ICP tokens required for a drop.**

## Parameters

- None

## Return Value

- `Float`: The minimum ICP tokens required for a drop, expressed as a float.

&nbsp;

## Example Call

To construct a call to this method using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

//Get the minimum icp required to create an ephemeral drop.
let min = OroTypes.icpMinimumTokensRequiredForDrop();
```