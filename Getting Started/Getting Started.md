# Getting Started

The simplest Motoko project will look something like this:

└── My Motoko Project/  
├── Src/  
│ └── Main.mo  
├── dfx.json  
├── mops.toml  
└── readme.md

In order to interact with the ORO canister from your own Motoko code, you must create a local Interface file in your project.   
Create a new file in the 'src' folder of your project named "OroTypes.mo":

└── My Motoko Project/  
├── Src/  
│ ├── Main.mo  
│ **└── OroTypes.mo**

Copy the following code into the newly created file & save:

```
INTERFACE CODE GOES HERE
```

In your 'Main.mo' file, import the interface like this:

```
import OroTypes "OroTypes";

//canister id
let ORO_LEDGER = "ryjl3-tyaaa-aaaaa-aaaba-cai";

//Create the actor to interact with canister
let OROLedger : OroTypes.Service = actor(ORO_LEDGER);
```

&nbsp;

&nbsp;