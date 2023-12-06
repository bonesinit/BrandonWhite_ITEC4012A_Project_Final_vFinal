# BrandonWhite_ITEC4012A_Project_Final_vFinal

<a href="https://github.com/bonesinit/BrandonWhite_ITEC4012A_Project_Final_vFinal">https://github.com/bonesinit/BrandonWhite_ITEC4012A_Project_Final_vFinal</a>

## Refresher
<hr>
For my project, I decided to make a tool that players could use while playing a Fallout Tabletop RPG. The tool acts as basically a digital character sheet. 

## Notes and issues
<hr>
<p>So I got COVID on the weekend I was supposed to do a lot of this and even with the extension my energy and brainpower is just too fried to really add anything on. So there is a lot of stuff that is missing that I intended to do but I just can't now.</p>

### What's done and not done
<p>By default, if something says "not completed" and I don't explain why, its bacause I had COVID for the time I was supposed to do it.</p>

<ol>
  <li><strong>Implementing Backend Feedback - 10 points -</strong> Not complete
  <ul>
    <li>Got the feedback Saturday and COVID Friday night, so the timing just didn't pan out</li>
  </ul>
  </li>
  <li><strong>Frontend to Backend Communication - 35 points -</strong> Partially complete
  <ul>
    <li>I have the backend configured to run as an API, and the Frontend ready to link to the backend, but none of the linking done (don't save linking weekend for plague weekend).</li>
  </ul>
  </li>
  <li><strong>Aesthetics - 15 points -</strong> Complete</li>
  <li><strong>Usability - 25 points -</strong> Partially complete
  <ul>
    <li>Missing: Client side validation</li>
    <li>Misc usability features: Breadcrumbs, tooltip explanations</li>
  </ul>
  </li>
  <li><strong>Code Quality  - 10 points -</strong> Complete</li>
  <li><strong>Version Control - 5 points -</strong> See note:
  <ul>
    <li>I didn't realize command line git was a requirement until I got my backend feedback (Saturday), and by then I was already sick so I couldn't go back to do any of my git commits that way. I thought GitHub desktop was fine to use, so that was my method.</li>
    <li>I THOUGHT I had more commits, but I messed up the GitHub repo so a bunch of them disappeared. Hence why this repo is final_vFinal, because I have 5 other private repos where I was trying to get things fixed.</li>
  </ul>
  </li>
  <li><strong>Bonus Points -</strong> Even though its non-functional, I do think my app is very pretty and would qualify for some of the beautiful design points</li>
</ol>

### Copyrighted material
<p>All of the images and tooltip text come from <a href="https://fallout.wiki/wiki/Fallout_Wiki">this wiki</a>, which in turn got them from the Fallout games (mainly 1, 2, and New Vegas).</p>


## Setup
<hr>

<p>Backend:</p>

<ol>
  <li>Download the repository.</li>
  <li>Unzip, and place in "users/yourname/pycharmProjects" folder.</li>
  <li>Open project in PyCharm.</li>
  <li>When the popup saying the database is not connected (bottom right hand corner) click the link on it.
  <ol type="a">
    <li>Download drivers if prompted.</li>
    <li>Test connection.</li>
    <li>Rejoice.</li>
  </ol>
  </li>
  <li>Back in the main window, in the top right, click the button lablled "Current file" to open the drop down menu, then click "Edit configurations".
  <ol type="a">
    <li>Add Configuration > Django Server</li>
    <li>Add Python Interpreter > Python 3.X.X </li>
  </ol>
  </li>
  <li>Run the server. Use the test accounts listed below.</li>
</ol>

<p>Frontend:</p>

<ol>
  <li>Open in WebStorm</li>
  <li>Type "npm install" into terminal</li>
  <li>Type "npm start" into terminal</li>
</ol>

## Test Accounts
<hr>
<p>I have created a test account for you to use to try out the application. I have pre-created a character associated to this test account, but you can also make more.</p>

<p><strong>Username:</strong> test_user<br>
<strong>Password:</strong> ITEC4012A</p>

<p>If you want to go into admin view, try out the admin account.</p>

<p><strong>Username:</strong> admin<br>
<strong>Password:</strong> admin_lord23</p>
