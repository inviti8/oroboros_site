# Get Ephemeral Drop Event Id

Get Ephemeral Drop Event ID: Retrieve the event ID associated with a given ephemeral drop mark.

## Parameters

- `mark`: The unique identifier for the drop.
    - Type: Text

## Return Value

- `Text` : Returns an asynchronous value containing the event ID.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```
import OroTypes "OroTypes";

//Get the drop ID
let ephemeralDropEventId = OroTypes.getEphemeralDropEventId("unique_drop_mark");
```

In this example, replace `"unique_drop_mark"` with the actual value you want to pass as the `mark` parameter.