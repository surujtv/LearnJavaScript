# Working of for loop -
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

```JavaScript
for (initialization; condition; afterthought)
  statement;
```

### When a for loop executes, the following occurs:

- The initializing expression `initialization`, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
- The `condition` expression is evaluated. If the value of `condition` is true, the loop statements execute. Otherwise, the `for` loop terminates. (If the `condition` expression is omitted entirely, the condition is assumed to be true.)
- The `statement` executes. To execute multiple statements, use a block statement ({ }) to group those statements.
- If present, the update expression `afterthought` is executed.
- Control returns to Step 2.

Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) for more details.