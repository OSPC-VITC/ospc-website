import { useState } from "react";
import { motion } from "framer-motion";

// Animation variants for terminal content
const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Terminal: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  // Handle user input when they press enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setOutput((prevOutput) => [...prevOutput, `OSPC@VITC ${inputText}`]);

      // Normalize input for commands
      const normalizedInput = inputText.trim().toLowerCase();

      // Git commands
      const gitCommands: Record<string, string> = {
        "git help": `
Git Help:
git status - Show the working tree status
git log - Show the commit logs
git branch - List, create, or delete branches
git add - Add file contents to the index (staging area)
git commit - Record changes to the repository
git init - Create an empty Git repository or reinitialize an existing one
git clone <repo> - Clone a repository into a new directory
git pull - Fetch and integrate with another repository or a local branch
git push - Update remote refs along with associated objects
git fetch - Download objects and refs from another repository
git merge - Join two or more development histories together
`,
        "git --help": `
Git Help:
git status - Show the working tree status
git log - Show the commit logs
git branch - List, create, or delete branches
git add - Add file contents to the index (staging area)
git commit - Record changes to the repository
git init - Create an empty Git repository or reinitialize an existing one
git clone <repo> - Clone a repository into a new directory
git pull - Fetch and integrate with another repository or a local branch
git push - Update remote refs along with associated objects
git fetch - Download objects and refs from another repository
git merge - Join two or more development histories together
`,
        "git config": "To set the basic configurations on Git like your name and email.",
        "git config --global user.name": "Sets configuration values for your user name on git.",
        "git config --global user.email": "Sets configuration values for your user email on git.",
        "git config --global color.ui": "To see different colors on the command line for different outputs.",
        "mkdir": "Create a directory if not created initially.",
        "cd": "To go inside the directory and work on its contents.",
        "git init": "To create a local git repository for us in our store folder.",
        "git status": "To see what’s changed since the last commit.",
        "git add <file>": "To add a file to the staging area to track its changes.",
        "git commit -m <message>": "To commit changes and provide a message to remember.",
        "git log": "To check the history of commits for reference.",
        "git branch": "To see all the branches present and current branches that we are working on.",
        "git merge <branch>": "To merge a branch with the current branch.",
        "git push": "To push changes from the local repository to the remote repository.",
        "git clone <repo>": "To clone a repository into a new directory.",
        "git branch -d <branch>": "To delete a branch.",
        "git checkout <branch>": "To switch to a branch.",
        "git reset --hard HEAD^": "To undo the last commit and remove the file from the staging area.",
        "git tag -a <tag>": "To create a new tag for versioning.",
        "git fetch": "To fetch changes from the remote repository.",
        "git stash": "To move staged files to the stash area.",
        "git stash pop": "To retrieve files from the stash.",
        "git rebase": "Reapply commits on top of another base branch.",
        "git --version": "Used to show the current version of Git.",
        "git": ` usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.`
      };

      // Execute commands
      if (gitCommands[normalizedInput]) {
        setOutput((prevOutput) => [
          ...prevOutput,
          gitCommands[normalizedInput]
        ]);
      } else if (normalizedInput === "clear") {
        setOutput([]);
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          `command not found: ${inputText}`
        ]);
      }

      setInputText(""); // Clear input field after command
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="terminal-window relative max-w-[750px] mx-auto p-5 bg-gradient-to-t from-gray-900 to-gray-800 text-white rounded-lg shadow-5xl"
      style={{ height: '400px', width: '700px' }} // Set fixed height for the window
    >
      {/* Terminal Header */}
      <div className="window-header flex justify-between items-center p-2 bg-gray-700 rounded-t-lg text-xs text-gray-300">
        <div className="window-controls flex space-x-2">
          <span className="bg-red-500 w-3 h-3 rounded-full"></span>
          <span className="bg-yellow-500 w-3 h-3 rounded-full"></span>
          <span className="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
        <span className="text-sm font-semibold">Git Bash</span>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content text-lg font-mono pt-4 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
        {/* Scrollable output */}
        <div className="output mb-4">
          {output.map((line, index) => (
            <div key={index}>
              {/* Highlight prompt in green */}
              <span className="text-green-500">OSPC@VITC</span> 
              {line.slice('OSPC@VITC'.length)}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div className="input-line flex items-center">
          <span className="prompt text-green-500">OSPC@VITC</span>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-transparent text-white border-none outline-none flex-1 pl-2"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
