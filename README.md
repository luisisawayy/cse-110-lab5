# Lab 5 - Starter
Group Members: **Luis**, **Preity**

**Question 1: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

Answer: I would not use simply unit tests for the "message" feature of a messaging application, because this feature takes into account multiple aspects, such as typing a message, sending a message, receiving a message, database operations, and UI updates. It would be better to test this feature using end-to-end tests.

**Question 2: Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

Answer: Yes, I would use a unit test for the max message length feature of a messaging application because it revolves around testing basic logic and constraints with regards to a message. We could easily test both valid or invalid messages with unit tests, in this case, any message being less than 80 characters is valid, and any message longer than 80 characters is invalid.

https://luisisawayy.github.io/cse-110-lab5/expose.html
https://luisisawayy.github.io/cse-110-lab5/explore.html