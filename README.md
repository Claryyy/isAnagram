# isAnagram

The brief is simply – write a utility that detects when two inputs are an anagram of one another.

Imagine that this is a ticket that’s landed in sprint. No further detail on the ticket, no acceptance criteria, just a one-line brief. One of the skills we develop in software engineering is identifying and removing ambiguity before we begin writing code.

Your first task here is to do that. Remember the lottery kata which came with several acceptance criteria that we translated to unit tests? It made life really easy for us, ensured we hadn’t missed any aspect of the expected behaviour. We need to get to a similar place here.

What exactly is an anagram? What are the rules? What behaviour would we expect based on the inputs? What do we do if an input has upper and lowercase characters? What about other non-text characters, how does the util handle those? Etc etc.

Remove the ambiguity
Create a detailed set of acceptance criteria  
Tackle in a pure TDD manner

The util itself isn’t a big one to write, and JavaScript gives you lots of ways to tackle it so it’s fun exploring different options, but it’s a good one to get you thinking about preparation before coding. Also, you may want to consider using TypeScript too for an extra layer of challenge.

## Acceptence criteria:

- Takes two string inputs
- Accepts a word or a sentence
- Does not care about casing
- Rearranging the letters of a different word or phrase
- Using all the original letters exactly once
- Non-text characters should be reused
- Returns true if the two inputs are an anagram of one another
- Returns false if the two inputs aren't an anagram of each other
