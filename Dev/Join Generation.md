# <span style="color: #ffffff;">Join Generation</span>

Creates a unique sub-namespace (moniker) that exists under the specified mark.

## Parameters

- `args`: The account to check (`ICRC1.Account`)
- `mark`: The unique identifier for the mint generator (`Text`)
- `moniker`: The unique identifier for the generation (`Text`)

## Return Value

- `ICRC2.TransferFromResponse`

## Example Call

Here's an example call using Dfinity Motoko language:

```motoko
import OroTypes "OroTypes";


let args = { /* your DropAccount arguments */ };
let mark = "your_unique_mark"; // replace with your actual mark
let moniker = "your_unique_moniker"; // replace with your actual moniker

let response = OroTypes.joinGeneration(args, mark, moniker);


```