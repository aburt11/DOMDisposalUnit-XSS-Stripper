# DOMDisposalUnit.js

# Quickly sanitize any XSS vectors from your HTML payload/page

as the gut wrenching trait of storing and serving pre-rendered HTML lives on after PHP has taken the background, this little snippet should help you quickly and easily sanitize and strip your HTML payloads from those nasties that might be lurking deep in your DOM ;)

# How does it work?

this function uses regular expressions to strip any attack vectors that could be used for XSS, and its super performant (5ms parsing time in our tests :D)

## Installation

Just copy and paste, then invoke the function in index.js
good luck, have fun!
