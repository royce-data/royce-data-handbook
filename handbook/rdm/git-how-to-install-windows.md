# Git Bash on Windows for workshop attendees

:::{important}
This installation guide targets specifically those following one of the workshops we deliver. For a more throrough guide, please see [here] (resource pending)
:::

## How to install the Git Bash terminal on Windows

Here we will be going through installing the Git Terminal on Windows. We will mostly be following the Carpentries installation guide found [here](https://carpentries.github.io/workshop-template/#shell), with some added support and further instructions

1. Download the Git Bash for Windows installer [here](https://git-scm.com/download/win) (choose the standalone installer, 64-bit should work for most modern PCs)
    ```{image} /images/install-git/git-scm-download.jpg
    ```
    :::{important}
    What follows in steps is largely copied from the Carpentries [installation instructions](https://carpentries.github.io/workshop-template/#shell) with some minor tweaks to maintain consistency with current best practices {cite}`wilson_swcarpentry/shell-novice:_2019`
    :::
2. Run the installer and follow the steps below (for clarity I have included an animated GIF of the process below, *your installation will take longer than what is reflected in the GIF*):
   1. Click on "__Next__" four (***this might be a different number depending on what version of Git for Windows his is***) times (two times if you've previously installed Git). You don't need to change anything in the Information, location, components, and start menu screens.
   2. From the dropdown menu, "__Choosing the default editor used by Git__", select "__Use the Nano editor by default__" (NOTE: you will need to scroll up to find it) and click on "__Next__".
   3. On the page that says "__Adjusting the name of the initial branch in new repositories__", ensure that "__Override the default branch name for new repositories__" is selected. This will ensure the highest level of compatibility for our lessons.
        :::{note}
        The initial and top-copy branch name `master` is now being phased out in favour of `main`. If you are following best practices, and one of the workshops we deliver, it is important that you choose **Override the default branch name for new repositories**
        :::
   4. Ensure that "**Git from the command line and also from 3rd-party software**" is selected and click on "**Next**". (If you don't do this Git Bash will not work properly, requiring you to remove the Git Bash installation, re-run the installer and to select the "Git from the command line and also from 3rd-party software" option.)
   5. Select "**Use bundled OpenSSH**".
   6. Ensure that "**Use the native Windows Secure Channel Library**" is selected and click on "**Next**".
   7. Ensure that "**Checkout Windows-style, commit Unix-style line endings**" is selected and click on "**Next**"
   8. Ensure that "**Use Windows' default console window**" is selected and click on "**Next**".
   9.  Ensure that "**Default (fast-forward or merge)**" is selected and click "**Next**"
   10. Ensure that "**Git Credential Manager**" is selected and click on "**Next**".
   11. Ensure that "**Enable file system caching**" is selected and click on "**Next**".
   12. Click on "**Install**".
   13. Click on "**Finish**" or "**Next**".
        ```{image} /images/install-git/git-installation.gif
        :class: centre
        ```

## Check your install
3. Check that everything was installed correctly:
   1. Open up Git Bash by clicking on Start (<i class="fa-brands fa-windows"></i>) or search (<img src="https://img.icons8.com/windows/16/null/search--v1.png"/>) and type "**Git Bash**"
   2. Once Git Bash starts up type in the following commands to check that things are running smoothly:
        :::{admonition} Home directory
        :class: tip

        ```
        echo $HOME
        ``` 
        
        you should get 
        
        ```
        /c/Users/<your-username>
        ``` 
        
        in response
        :::

        :::{admonition} Shell type
        :class: tip

        ```
        echo $SHELL
        ``` 
        
        you should get 
        
        ```
        /usr/bin/bash
        ``` 
        
        in response
        :::
    3. Now, let's check your Git commit editor is set up properly:
        :::{admonition} Git commit editor
        :class: tip

        ```
        git config --global --get core.editor
        ``` 
        
        **if you get anything other than no response** the type in the following:

        ```
        git config --global core.editor nano -w
        ```
        :::
    4. Let's open up the config file in the default editor (`nano`) to check things are running smoothly:
        ::::{admonition} Open config file in default editor
        :class: tip
        Type in the following:
        
        ```
        git config --global -e
        ```
        you should get a prompt to wait, after a few seconds the nano editor will then open up with your global configuration file. We've not set anything up yet so your configuration file might be blank. Press ctrl-X to exit.
        :::{note}
        We will be setting our preferred editor in-lesson, so you will be able to choose your favourite!
        :::
        ::::
    5. Just this one final step and you'll be all set to follow along:
        :::{admonition} Check SSH Key Generator is installed in Git Bash
        :class: tip
        Type 

        ```
        ssh-keygen --help
        ```
        
        If the response is the help menu then you're all set!
        :::
    6. (Optional) Check if you have SSH Keys already set up
        :::{admonition} Check for any pre-existing SSH Keys
        :class: tip
        Type

        ```
        ls -la | grep '\.ssh\/'
        ```
        
        in Git Bash

        if the response is something like this then you do have pre-existing SSH Keys (don't worry we will be setting keys for GitHub authentication in lesson!)

        ```{image} /images/install-git/check-ssh.jpg
        ```

        :::

<a target="_blank" href="https://icons8.com/icon/14079/search">Search icon by Icons8</a>