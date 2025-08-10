#!/bin/bash

# Propagate MCP configuration to other repositories
# This script updates the .copilot/.vscode/mcp.json file in specified repositories

set -e

# Source MCP configuration file
SOURCE_CONFIG="/home/andrew/Software/astronautical-apogee/.copilot/.vscode/mcp.json"

# Target repositories (excluding current one)
REPOS=(
    ".copilot"
    "genaisrc"
    "playwright-mcp"
    "sequential-thinking"
    "user-memory"
    "project-memory"
)

# Base directory for repositories
BASE_DIR="/home/andrew/Software"

echo "Propagating MCP configuration from $SOURCE_CONFIG..."

for repo in "${REPOS[@]}"; do
    echo "Processing repository: $repo"
    
    REPO_PATH="$BASE_DIR/$repo"
    TARGET_CONFIG="$REPO_PATH/.copilot/.vscode/mcp.json"
    
    if [ -d "$REPO_PATH" ]; then
        # Create .copilot/.vscode directory if it doesn't exist
        mkdir -p "$REPO_PATH/.copilot/.vscode"
        
        # Copy the configuration
        cp "$SOURCE_CONFIG" "$TARGET_CONFIG"
        echo "  ✓ Updated $TARGET_CONFIG"
        
        # Commit the changes if in a git repository
        if [ -d "$REPO_PATH/.git" ]; then
            cd "$REPO_PATH"
            git add .copilot/.vscode/mcp.json
            git commit -m "Restrict GitHub MCP server to PR tools only

- Updated MCP configuration to use Docker-based GitHub server
- Restricted toolset to pull_requests only
- Added input configuration for GitHub token
- Propagated from astronautical-apogee repository" || echo "  ⚠ No changes to commit in $repo"
            cd - > /dev/null
        fi
    else
        echo "  ⚠ Repository not found: $REPO_PATH"
    fi
done

echo "MCP configuration propagation complete!"
