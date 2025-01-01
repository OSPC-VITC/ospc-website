import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Terminal: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to OSPC Git Terminal! Type 'git help' to see available commands.",
  ]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = `$ ${inputText}`;
      setOutput((prev) => [...prev, command]);

      const normalizedInput = inputText.trim().toLowerCase();
      
      const gitCommands: Record<string, string> = {
        "git help": `Common Git Commands:
      - git init: Create new repository
      - git clone <url>: Clone repository
      - git add <file>: Stage changes
      - git commit -m "<msg>": Record changes
      - git push: Upload to remote
      - git pull: Update from remote
      - git status: Check state
      - git branch: List branches
      - git checkout <branch>: Switch branches
      - git merge <branch>: Combine branches`,
      
        "git init": "Initializes a new Git repository in current directory",
        "git status": "Shows working tree status and staged changes",
        "git add": "Stages file changes for commit",
        "git commit": "Records staged changes to repository",
        "git push": "Uploads local commits to remote repository",
        "git pull": "Downloads and integrates remote changes",
        "git clone": "Creates local copy of remote repository",
        "git branch": "Lists, creates or deletes branches",
        "git checkout": "Switches between branches or restores files",
        "git merge": "Combines changes from different branches",
        "git log": "Shows commit history",
        "git reset": "Undoes changes or moves branch pointer",
        "git stash": "Temporarily saves uncommitted changes",
        "git tag": "Creates version tags for releases",
        "git fetch": "Downloads objects/refs from remote",
        "git rebase": "Reapplies commits on different base",
        "git config": "Sets configuration values",
        "git --version": "Shows installed Git version",
      
        "git": `Common Git Operations:
      1. Setup
         - git init: New repository
         - git clone: Copy repository
         - git config: Configure settings
      
      2. Basic Actions
         - git add: Stage changes 
         - git commit: Save changes
         - git status: Check state
         - git log: View history
      
      3. Branching
         - git branch: Manage branches
         - git checkout: Switch branches
         - git merge: Combine branches
      
      4. Remote Operations
         - git push: Upload changes
         - git pull: Download changes
         - git fetch: Get updates
         - git remote: Manage remotes`,
      };

      if (gitCommands[normalizedInput]) {
        setOutput((prev) => [...prev, gitCommands[normalizedInput]]);
      } else if (normalizedInput === "clear") {
        setOutput([]);
      } else if (inputText.trim() !== "") {
        setOutput((prev) => [...prev, `Command not found: ${inputText}`]);
      }

      setInputText("");
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mx-auto my-16 max-w-4xl px-4"
    >
      <div className="rounded-lg overflow-hidden border border-gray-700 shadow-2xl bg-[#1E1E1E]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-75 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-75 transition-opacity"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-75 transition-opacity"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">git bash</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm h-[400px] overflow-y-auto bg-[#1E1E1E]">
          <div className="space-y-2">
            {output.map((line, index) => (
              <div key={index} className="leading-relaxed">
                {line.startsWith("$") ? (
                  <div className="flex items-start space-x-2">
                    <span className="text-[#27C93F]">➜</span>
                    <span className="text-[#61AFEF]">ospc</span>
                    <span className="text-gray-500">git:</span>
                    <span className="text-white flex-1">{line}</span>
                  </div>
                ) : (
                  <div className="text-[#ABB2BF] whitespace-pre-wrap pl-6">{line}</div>
                )}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-[#27C93F]">➜</span>
            <span className="text-[#61AFEF]">ospc</span>
            <span className="text-gray-500">git:</span>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent text-white outline-none"
              placeholder="Type a command..."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
