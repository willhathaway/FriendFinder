# FriendFinder

This Friend Finder app allows users to find a guaranteed best friend, based on how similar their answers are to completely normal prompts. It is 100% effective as of the time I write this README.

# Instructions:

First, click the start button to get started.

![](/images/home.png)

Next, enter your name and a link to a photo of you.

![](/images/name.png)

Then, provide an honest response to each normal prompt. If your answers aren't honest, things can go _very_ badly.

Finally, you are shown the name and photo of your match!

Here is the functionality behind the comparison:

![](/images/function.png)

As you can see, the scores are put into an array variable, and an empty array of differences in created. Then, for each item in the friendsData file, the difference between that friend's scores and the user's submitted scores are compared, with the result being added to the differences array. Finally, we loop through the differences array to find the closest match.