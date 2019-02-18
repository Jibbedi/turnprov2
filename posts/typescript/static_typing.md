---
title: Static typing is your safety net
date: 2018-10-03
category: TypeScript
tags: ["static typing", "typescript", "javascript"]
---

Many JavaScript developers are used to dynamic types and find TypeScript’s static typing approach rather annoying. Here are my two cents about why I’m a big fan of type safety in general and why TypeScript 2.0’s non-nullable types brings a huge improvement to that.

## Static typing

Static typing is great. Declaring what type a variable should be and what goes in and out of a function reduces the amount of guess work you have to do when looking at code. And if you can easily tell what is going on - so can your tools. Your IDE can support you with great autocompletion, because it knows which methods and properties belongs to a certain variable. It also can greatly improve your refactoring. Think about a method of a class you want to rename. Since the IDE knows which type you’re refactoring and which of your variables are of this type it can easily rename every method call in place.

Check out the code below. You can easily tell that _getLogger()_ will return an instance of type _Logger_. And since the type is clear - you and your IDE know that the only method you can call on it is _log(test : string)_ which itself takes an argument of type string.

```typescript
//Logger.ts
export class Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

export function getLogger(): Logger {
  return new Logger();
}

//main.ts
import { getLogger } from "./Logger";

let logger: Logger = getLogger();
logger.log("hello world");
```

## Runtime Safety

Have you ever seen an error in your console that said something like **Uncaught TypeError: foo.bar is not a function(…)**?
Chances are you have like any other JavaScript Developer out there has too.

What happened? Since JavaScript is a dynamically typed language it does not know that our class _Logger_ only has a method called _log_.
In fact it doesn’t even know that our variable is of type _Logger_. You could try to call any method on it and you won’t notice any problem until runtime.

It’s quite easy to misspell a method name or even assume that we’re getting a different Object back and therefore make our code fail. Imagine one of our co-workers adjusted the _getLogger()_ function to his needs and now it returns an instance of _AnotherLogger_ which has a method _logIt_ instead of _log_.
Since nothing complaint and we didn’t write any tests (we know what we are doing, right?) he forgot to adjust our code where we call _log_ which will now fail at runtime.

Consider JavaScript as your naive buddy. It believes everything you tell him - only to find out you betrayed him (I’m sure it was by mistake) when it’s time to actually run your code.

Remember how I told that when using static typing you and your tools understand your code much better? If our co-worker had changed the return typed to _AnotherLogger_ the compiler would yell at him, because our code now calls the wrong method. He would have to fix it before it could even run it.

The compiler is that suspicious guy who always wants to be sure everything you tell him is correct.

When your codebase reach a certain size or you work with multiple people on it, static typing gets critical in order to keep up your productivity.

## Pointers to…nothing

What we’ve learned so far is that by using static typing your code is not only easier to understand and refactor but it also prevents us from mistakes that occur on runtime. Everything’s great, right?

Well….look at those lines again:

```typescript
//Logger.ts
export class Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

export function getLogger(): Logger {
  return new Logger();
}

//main.ts
import { getLogger } from "./Logger";

let logger: Logger = getLogger();
logger.log("hello world");
```

From what I’ve told you thus far this should always work without any problems. The truth is something like that might happen:
\_\_ Uncaught TypeError: Cannot read property 'log' of null\_\_

In most statically typed languages a variable can either be of the declared type OR null. So in our case _getLogger_ might return an instance of _Logger_ that we can use OR it might be null. To make it clear. It MIGHT work. It MIGHT break.

Isn’t this the guess work we tried to get rid of by introducing static typing in the first place? It is, but fortunately the clever guys and girls working on TypeScript found an awesome solution for it.

## Non-nullable types to the rescue

TypeScript 2.0 introduces a feature called **Non-nullable types**.
In other languages like Swift and Java this concept is known as _Optionals_.

What this basically means is that our type checking is even stricter. When I declare a variable of type _Logger_ it can not be anything, but a _Logger_. It can’t be null. Can’t be undefined. Just a _Logger_.
How great is that? No more worrying about running into a NullPointerException at runtime. No more ambiguity.

What if our _getLogger()_ function doesn’t always return a Logger?
That’s were the optional part comes into play.

Notice the return type in the code below. It returns a _Logger_ or _null_.

```typescript
export function getLogger(): Logger | null {
  return new Logger(); //could also be null
}
```

So..back where we started? Not quite. Try to call the log method of the value you received. What’s the result?

**Object is possibly 'null‘.**

TypeScript let’s us know that it is not save to call the method since the return value might be null. In order to fix that we need to make use of another great feature of TypeScript 2.0 which is _Control Flow Analysis_.

## Control Flow Analysis

Sounds scary right? Don’t worry, what this basically means is that the compiler is now smart enough to perform analysis of your code and understand what type a variable should have at any given point of your program.

How do we check if a value is safe to call? We wrap it in an if-statement.

```typescript
import { getLogger } from "./Logger";

let logger = getLogger(); //might be null
if (logger) {
  //typescript is now smart enough to understand
  //we just check for a value and therefore let's us call log

  logger.log("hello world");
}
```

Notice how the compiler forces us to write defensive code and therefore making it impossible to run into one of the most common runtime exceptions.

<div class="highlight">
<h2>Wrap up</h2>

So why is static typing important?

- Code is easier to understand
- Collaboration gets easier
- Refactoring gets easier
- Prevents us from runtime exceptions
  </div>
