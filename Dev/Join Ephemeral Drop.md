# **Join Ephemeral Drop**

Join an existing ephemeral drop.

## Parameters

- `args`: The mint account arguments.
- `mark`: The unique identifier for the drop.

### Return Value

- `? Types.EphemeralDrop`

## Example Call

Here's an example call using Dfinity Motoko language:

```
import OroTypes "OroTypes";


let args = { /* your DropAccount arguments */ };
let mark = "your_unique_mark"; // replace with your actual mark

let joined = OroTypes.joinEphemeralDrop(args, mark);
```

In this example code:

- `args` should be replaced with a valid `Types.DropAccount` object.
- `mark` should be replaced with the unique identifier for the drop you want to join.

Note that this is just an example and may not compile as-is. You'll need to replace the placeholders with your actual data and adjust the code according to your specific use case.