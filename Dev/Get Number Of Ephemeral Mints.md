# Get Number Of Ephemeral Mints

### `getNumberOfEphemeralMints`

Retrieve the total number of ephemeral mints performed.

## Parameters

None. This method does not take any parameters.

## Return Value

- `Nat`: The total number of ephemeral mints performed.

&nbsp;

## Example Call

In Dfinity Motoko, you can construct a call to this method as follows:

```motoko
import OroTypes "OroTypes";

let ephemeralMints Nat = await OroTypes.getNumberOfEphemeralMints();
println!("Current number of ephemeral mints: ${ephemeralMints}");


```

&nbsp;