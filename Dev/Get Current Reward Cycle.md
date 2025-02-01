# Get Current Reward Cycle

### `getCurrentRewardCycle`

**Retrieve the current reward cycle.**

## Parameters

- None

## Return Value

- `Nat` : A natural number representing the current reward cycle.

&nbsp;

## Example Call

```mo
import OroTypes "OroTypes";

let rewardCycle: Nat = await OroTypes.getCurrentRewardCycle();
println!("Current reward cycle: ${rewardCycle}");

```

&nbsp;