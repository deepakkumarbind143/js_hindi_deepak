# Maps
# weakMap
# set
# weak set

```
const sayings = new Map()  // to create map (map is object that why used new)
saying.set("dog", "woof") // used to set key and value

saying.get("dog") //used to get value i.e "woof"

saying.has("bird") //it is used to check exist or not output will be true/false

```

#### These three tips can help you to decide whether to use a Map or an Object:

- Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
- Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
- Use objects when there is logic that operates on individual elements.
  </n>

# WeakMap Object

**_Allowed_**

#### to set value

```
const privates = new WeakMap();
 weakMap.set({}, "value")


```

- You want to attach extra data to an object
BUT you don’t want to prevent that object from being garbage collected.

### WeakMap:
- No iteration
- No size
- Keys must be objects


# set

**Set objects are collections of unique values.**

```
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

```

***You can create an Array from a Set using Array.from or the spread syntax. Also, the Set constructor accepts an Array to convert in the other direction.***

```
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

```