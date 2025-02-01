# Is Ephemeral Drop Ready

Check if an ephemeral drop is ready.

## Parameters

- `args`: The account to check (`ICRC1.Account`)
- `mark`: The unique identifier for the drop (`Text`)

## Return Value

- `async Bool`: Whether the ephemeral drop is ready or not.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```
import ICRC1
import OroTypes "OroTypes";

let args = ICRC1.Account.from("owner");
let mark = "unique_identifier";

async Bool result = await OroTypes.isEphemeralDropReady(args, mark);

print(result);
```

Note that this example assumes you have already imported the `ICRC1` module and created an instance of the `Account` struct. You can modify it to fit your specific use case.